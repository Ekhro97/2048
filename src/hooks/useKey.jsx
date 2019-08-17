import { useEffect } from 'react';

export default (key, callback) =>
  useEffect(() => {
    const handler = (event) => event.key === key && callback();

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
