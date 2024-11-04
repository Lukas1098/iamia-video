import React, { useEffect, useState } from 'react';

const VideoViewer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa la visibilidad después de 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      transition: 'opacity 2s ease', // Transición de 2 segundos
      opacity: isVisible ? 1 : 0 // Control de opacidad
    }}>
      <video 
        controls 
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoViewer;
