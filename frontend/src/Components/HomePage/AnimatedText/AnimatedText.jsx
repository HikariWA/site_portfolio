import React, { useState, useEffect } from 'react';
import './AnimatedText.css'

const AnimatedText = () => {
  const [hikariVisible, setHikariVisible] = useState(false)
  const [sloganVisible, setSloganVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [typedText, setTypedText] = useState('')
  const slogan = "Light up your vision";

  // pour animer "Hikari"
  useEffect(() => {
    if (hikariVisible) {
      let opacityInterval = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity < 1) return prevOpacity + 0.01;
          return prevOpacity;
        })
      }, 20)

      return () => clearInterval(opacityInterval)
    }
  }, [hikariVisible]);

  // pour animer "Light up your vision"
  useEffect(() => {
    if (sloganVisible) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setTypedText(() => {
          const nextText = slogan.slice(0, index);
          index += 1;
          if (index > slogan.length) {
            clearInterval(typingInterval)
          }
          return nextText
        })
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [sloganVisible])

  // setTimeout pour afficher/cacher les textes
  useEffect(() => {
    setTimeout(() => {
      setHikariVisible(true)
    }, 0)

    setTimeout(() => {
      setSloganVisible(true)
    }, 200)

    setTimeout(() => {
      setHikariVisible(false)
    }, 4500)

    setTimeout(() => {
      setSloganVisible(false)
      setOpacity(0)
      setTypedText('')
    }, 7000)
  }, [])

  return (
    <div className="homepage-text-container">
      <div
        className={`text hikari ${hikariVisible ? 'fade-in pulse' : ''}`} style={{ opacity: opacity}}
      >
        Hikari
      </div>
      <div className={`text slogan ${sloganVisible ? 'typewriter' : ''}`}>
        {typedText}
      </div>
    </div>
  )
}

export default AnimatedText

