import React from 'react';
import Image from 'next/image';
const Card = ({ images, ImageIndex, backImage, nextImage }) => {
    return (
        <div className="col-span-3 flex justify-around mt-[20rem]  items-center">
            <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " >
                <button onClick={backImage}>Back</button>
                </div>
            <div >
                {images.map((image, index) => (
                    <div key={index} style={{ display: ImageIndex === index ? 'block' : 'none' }}>
                        <Image
                            src={image.img}
                            alt={`image ${index + 1}`}
                            width={500}
                            height={200}
                            className="cursor-pointer rounded-xl"
                        />
                    </div>
                ))}
            </div>
            <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >
                
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
}

export default Card;

