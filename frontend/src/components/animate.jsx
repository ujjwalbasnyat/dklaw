import { useState, useEffect } from 'react';
import './AnimatedText.css';

function AnimatedText({ texts, interval = 3000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return <p className="animated-text ">{texts[currentTextIndex]}</p>;
}

export default AnimatedText;