import React from 'react';

const VideoViewer = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'transparent' // Fondo transparente
    }}>
      <video 
        controls 
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'cover',
          backgroundColor: 'transparent' // Asegura que el fondo del video también sea transparente
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoViewer;
