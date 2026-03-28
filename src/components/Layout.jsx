import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (wine ID), scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    }
  }, [pathname, hash]);

  return children;
};
