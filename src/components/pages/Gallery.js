import React, { useEffect, useState } from 'react';

function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://24.4.146.140:8080/images')
            .then(res => res.json())
            .then(setImages);
    }, []);

    return (
        <div>
            {images.map(file => (
                <img src={`http://24.4.146.140:8080/images/${file}`} alt={file} key={file} />
            ))}
        </div>
    );
}

export default App;
