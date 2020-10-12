import React from 'react'

export default function ImageCard({image, showImage}) {
    return (
        <img src={image} 
        className="image-card"
        onClick={() => showImage(image)}
        ></img>
    )
}