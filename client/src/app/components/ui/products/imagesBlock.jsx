import React from 'react';
import ImageContainer from './imageContainer';

const ImagesBlock = ({ gallery, onSelectImage }) => {
    return (
        <div className="images-block">
            <div className="images-block__container">
                {gallery.map((img, index) => (
                    <div
                        className="images-block__item"
                        key={img}
                        onClick={() => onSelectImage(index)}
                    >
                        <ImageContainer
                            height="80px"
                            width="80px"
                            src={img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ImagesBlock;