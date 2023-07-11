import React, { useEffect, useState } from 'react';

function ImageComponent() {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/images')  // replace with your server address
      .then(response => response.json())
      .then(data => setImageFiles(data));
  }, []);

  return (
    <div>
      {imageFiles.map((file, index) => (
        <img key={index} src={`http://localhost:8080/images/${file}`} alt={file} />
      ))}
    </div>
  );
}

export default ImageComponent;
