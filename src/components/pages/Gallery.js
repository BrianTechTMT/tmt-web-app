import React, { useEffect, useState } from 'react';

function ImageComponent() {
  const imageFiles = useState([]);

  useEffect(() => {
    fetch('/home/trior/TMTSite/tmt-web-app/src/components/images/TNImages/doan-tmt.org/doan-tmt.org/gallery/galleries/2022-2023/Binh_Minh_29/Set_A/images')  // replace with your server address
      .then(response => response.json())
      .then(data => setImageFiles(data));
  }, []);

  return (
    <div>
      {imageFiles.map((file, index) => (
        <img key={index} src={`/home/trior/TMTSite/tmt-web-app/src/components/images/TNImages/doan-tmt.org/doan-tmt.org/gallery/galleries/2022-2023/Binh_Minh_29/Set_A/${file}`} alt={file} />
      ))}
    </div>
  );
}

export default ImageComponent;
