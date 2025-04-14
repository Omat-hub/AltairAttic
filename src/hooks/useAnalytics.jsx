// src/hooks/useAnalytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-8DYENKKNYB', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useAnalytics;
