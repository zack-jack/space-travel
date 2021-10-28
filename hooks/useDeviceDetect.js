import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: width > 0 && width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

export default useDeviceDetect;
