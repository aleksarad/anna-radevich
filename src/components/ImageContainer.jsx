import React from 'react'
import ImageCard from './ImageCard'

export default function ImageContainer({images}) {

    const imageCards = images.map(image => <ImageCard image={image}/>)
    return (
        <div id="image-container">{imageCards}</div>
    )
}