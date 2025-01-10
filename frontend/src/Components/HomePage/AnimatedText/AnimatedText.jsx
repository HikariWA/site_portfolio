import React, { useState, useEffect } from 'react';
import './AnimatedText.css'

const AnimatedText = () => {
  const [hikariVisible, setHikariVisible] = useState(false);
  const [sloganVisible, setSloganVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [slideOut, setSlideOut] = useState(false); 
  const slogan = "Light up your vision"

  // pour animer "Hikari"
  useEffect(() => {
    if (hikariVisible) {
      let opacityInterval = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity < 1) return prevOpacity + 0.01;
          return prevOpacity;
        })
      }, 20);

      return () => clearInterval(opacityInterval);
    }
  }, [hikariVisible]);

  // [our animer "Light up your vision"
  useEffect(() => {
    if (sloganVisible) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setTypedText(() => {
          const nextText = slogan.slice(0, index);
          index += 1;
          if (index > slogan.length) {
            clearInterval(typingInterval);
          }
          return nextText;
        });
      }, 75); 

      return () => clearInterval(typingInterval);
    }
  }, [sloganVisible]);

  // setTimeout pour afficher/cacher les textes
  useEffect(() => {
    setTimeout(() => {
      setHikariVisible(true);
    }, 0);

    setTimeout(() => {
      setSloganVisible(true);
    }, 200);

    setTimeout(() => {
      setHikariVisible(false);
      setSlideOut(true); 
    }, 4500);

    setTimeout(() => {
      setSloganVisible(false);
      setSlideOut(true); 
      setOpacity(0);
      setTypedText('');
    }, 7000);
  }, []);

  return (
    <div className="homepage-text-container">
      <div
        className={`text hikari ${hikariVisible ? 'fade-in pulse' : ''} ${slideOut ? 'slide-out-right' : ''}`}
        style={{ opacity: opacity }}
      >
        <h1>Hikari</h1>
      </div>
      <div className={`text slogan ${sloganVisible ? 'typewriter' : ''} ${slideOut ? 'slide-out-right' : ''}`}>
        {typedText}
      </div>
    </div>
  );
}

export default AnimatedText;
