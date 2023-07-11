import React, { useEffect, useState } from 'react';

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://24.4.146.140:8080/api/images')
            .then(res => res.json())
            .then(setImages);
    }, []);

    return (
        <div>
            {images.map(image => (
                <img src={`http://24.4.146.140/images/${image}`} alt={image} key={image} />
            ))}
        </div>
    );
}

export default Gallery;
