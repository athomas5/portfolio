import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { 
    windowWidth: windowSize.width,
    windowHeight: windowSize.height, 
    isSmall: windowSize.width < 768, 
    isMedium: windowSize.width >= 768 && windowSize.width < 1024, 
    isLarge: windowSize.width >= 1024,
    loading: windowSize.width === 0 && windowSize.height === 0,
  };
};

export default useWindowSize;
