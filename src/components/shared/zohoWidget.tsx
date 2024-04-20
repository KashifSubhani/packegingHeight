import { useEffect } from 'react';

const ZohoChatWidget = () => {
  useEffect(() => {
    const tawk = document.createElement('script');
    tawk.async = true;
    tawk.src = 'https://embed.tawk.to/6623edcda0c6737bd12e8de5/1hru5hr2l';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tawk, s);
    return () => {
      document.getElementById('tawkToScript')?.remove();
    };
  }, []);

  return null;
};

export default ZohoChatWidget;
