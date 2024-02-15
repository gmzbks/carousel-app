"use client"
import React,{ useState } from 'react';
import Card from './Card';
import img1 from "../../public/images/background.jpg";
import img2 from "../../public/images/hamburger.jpg";
import img3 from "../../public/images/hotdog.jpg";
import img4 from "../../public/images/hotdogs.jpg";
import img5 from "../../public/images/preview.png";
import img6 from "../../public/images/sandwich.jpg";

const App = () => {
    const [ImageIndex, setImageIndex] = useState(0);

    const images = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 }
    ];

    const backImage = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    };
    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    };

    return (
        <div>
            <Card images={images} ImageIndex={ImageIndex} nextImage={nextImage} backImage={backImage}/>
        </div>
    );
}

export default App;

