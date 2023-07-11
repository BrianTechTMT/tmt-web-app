import React, { useEffect, useState } from 'react';

function ImageComponent() {
  const imageFiles = useState([]);

  return (
    <div>
      {imageFiles.map((file, index) => (
        <img key={index} src={`http://localhost:8080/images/${file}`} alt={file} />
      ))}
    </div>
  );
}

export default ImageComponent;
