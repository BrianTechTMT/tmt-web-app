import React, { useEffect, useState } from 'react';

function ImageComponent() {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetch('~/TMTSite/tmt-web-app/src/components/images/TNImages/')  // replace with your server address
      .then(response => response.json())
      .then(data => setImageFiles(data));
  }, []);

  return (
    <div>
      {imageFiles.map((file, index) => (
        <img key={index} src={`~/TMTSite/tmt-web-app/src/components/images/TNImages/${file}`} alt={file} />
      ))}
    </div>
  );
}

export default ImageComponent;
