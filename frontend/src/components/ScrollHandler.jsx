import { useRef } from 'react';

const ScrollHandler = ({ children, sectionId }) => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {children({ scrollToSection })}
      <div ref={sectionRef} id={sectionId}></div>
    </>
  );
};

export default ScrollHandler;