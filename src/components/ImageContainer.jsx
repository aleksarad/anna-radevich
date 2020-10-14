import React, { useState, useKeyPress } from 'react'
import ImageCard from './ImageCard'

// if (e.keyCode == '38') {
//     // up arrow
// }
// else if (e.keyCode == '40') {
//     // down arrow
// }
// else if (e.keyCode == '37') {
//    // left arrow
// }
// else if (e.keyCode == '39') {
//    // right arrow
// }


export default function ImageContainer({images}) {
    const [imageToShow, setImageToShow] = useState('')
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)


    const showImage = (image) => {
        setImageToShow(image)
        setLightBoxDisplay(true)
        console.log(images)
    }

    const showNext = (e) => {
        e.stopPropagation()
        let currentIndex = images.indexOf(imageToShow)
        if(currentIndex >= images.length - 1) {
            setLightBoxDisplay(false)
        }
        else {
            let nextImage = images[currentIndex + 1]
            setImageToShow(nextImage)
        }
    }

    const showPrev = (e) => {
        e.stopPropagation()
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

    const handleKeyDown = (e) => {
        if(e.keyCode === '37') {
            alert('u pressed')
        }
        else if(e.keyCode === '39') {
            alert('u pressed')
        }
    }

    const imageCards = images.map(image => <ImageCard showImage={showImage} image={image}/>)

    return (
        <>
            <div id="image-container">{imageCards}</div>
            {
                lightboxDisplay ?
                <div id="lightbox" onClick={hideLightBox} onKeyDown={handleKeyDown} >
                    <button onClick={showPrev}>⭠</button>
                    <section>
                        <img id="lightbox-img" src={imageToShow}></img>
                    </section>
                    <button onClick={showNext}>⭢</button>
                </div> : ''
            }
        </>
    )
}