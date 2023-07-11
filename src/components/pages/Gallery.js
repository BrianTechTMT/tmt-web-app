import React, { useEffect, useState } from 'react';

function ImageComponent() {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetch('http://24.4.146.140:8080/images')  // replace with your server address
      .then(response => response.json())
      .then(data => setImageFiles(data));
  }, []);

  return (
    <div>
      {imageFiles.map((file, index) => (
        <img key={index} src={`http://24.4.146.140:8080/images/${file}`} alt={file} />
      ))}
    </div>
  );
}

export default ImageComponent;
