import React,{useState,useEffect} from 'react'

const GradientCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', moveCursor);
  
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }, []);
  
    const cursorStyle = {
      left: position.x + -10 + 'px',
      top: position.y - 10 +'px',
      backgroundImage: `radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0))` // Change gradient colors here
    };
  
    return <div className="cursor" style={cursorStyle}></div>;
};

export default GradientCursor