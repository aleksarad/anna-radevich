import React, {useState} from 'react'
import ImageCard from './ImageCard'



export default function ImageContainer({images}) {
    const [imageToShow, setImageToShow] = useState('')
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)

    const showImage = (image) => {
        setImageToShow(image)
        setLightBoxDisplay(true)
        console.log(images)
    }

    const showNext = () => {
        let currentIndex = images.indexOf(imageToShow)
        if(currentIndex >= images.length - 1) {
            setLightBoxDisplay(false)
        }
        else {
            let nextImage = images[currentIndex + 1]
            setImageToShow(nextImage)
        }
    }

    const showPrev = () => {
        let currentIndex = images.indexOf(imageToShow)
        if(currentIndex <= 0) {
            setLightBoxDisplay(false)
        }
        else {
            let nextImage = images[currentIndex - 1]
            setImageToShow(nextImage)
        }
    }

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    const imageCards = images.map(image => <ImageCard showImage={showImage} image={image}/>)

    return (
        <>
            <div id="image-container">{imageCards}</div>
            {
                lightboxDisplay ?
                <div id="lightbox">
                    <button onClick={showPrev}>previous</button>
                        <img id="lightbox-img" src={imageToShow}></img>
                    <button onClick={showNext}>next</button>
                </div> : ''
            }
        </>
    )
}