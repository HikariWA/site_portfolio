import React, { useEffect, useState } from 'react';
import '../../Expertise/Expertise.css'
import gsap from 'gsap';

const Expertise = () => {
    const [services, setServices] = useState([])
    const [images, setImages] = useState([])

//   useEffect(() => {
//     fetch('/services.json')
//       .then(response => response.json())
//       .then(data => setServices(data))
//       .catch(error => console.error("Error :" + error));
//   }, []);

  useEffect(() => {
    const services = fetch('/services.json').then(response => response.json());
    const servicesImages = fetch('/images.json').then(response => response.json());

    Promise.all([services, servicesImages])
      .then(([servicesData, servicesImagesData]) => {
        handleServicesWithImages(servicesData, servicesImagesData);
      })
      .catch(error => console.error("Error:", error));
  }, []);

  // fonction pour associer les services aux images
  const handleServicesWithImages = (servicesData, servicesImagesData) => {
    const servicesWithImages = servicesData.map(service => {
      const serviceImage = servicesImagesData.find(image => image.id === service.image_id);
      return {
        ...service,
        image: serviceImage ? serviceImage.image : ''
      };
    });
    setServices(servicesWithImages)
  }
  

  // animation GSAP
  useEffect(() => {
    gsap.fromTo('.service-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.3, duration: 1 });
  }, [services]);


  return (
    <div className="expertise-container">
        <h2>Our Expertise</h2>
        <div className="service-container">
            {services.map(service => (
            <div key={service.id} className="service-card">
                {service.image && <img src={`/assets/${service.image}`} alt={service.title} />}
                {/* <img src={`/assets/${service.image_id}`} alt={service.title} /> */}
                <h3>{service.title}</h3>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Expertise



