import React, { useCallback, useEffect, useRef, useState } from 'react';


const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center"

}

const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    fontSize: "2rem",
    fontWeight: "bolder",
    color: "white",
    zIndex: "1",
    cursor: "pointer",
}

const leftArrowStyles = {
    left: "32px"
}
const rightArrowStyles = {
    right: "32px"
}

const sliderStyles = {
    position: "relative",
    height: "100%"
}

const dotsContainerStles = {
    display: "flex",
    justifyContent: "center"
}

const dotStyles = {
    margin: "0 .2rem",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "rgba(0, 0, 0, 0.3)"
}
const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    // transition: "transform ease-out 0.3s"
}

const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%"

}

const ImageSlider = ({ slides, parentWidth }) => {

    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const getSlideStylesWithBackground = slideIndex => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}vw`

    })

    const getSlidesContainerStyleWithWidth = () => ({

        ...slidesContainerStyles,
        width: `${parentWidth * slides.length}vw`,
        transform: `translateX(${-(currentIndex * parentWidth)}vw)`,
    })
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    // const goToNext = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 3000);
        return () => clearTimeout(timerRef.current);
    }, [goToNext, currentIndex, slides]);

    return (
        <div style={sliderStyles}>
            <div style={{ ...arrowStyles, ...leftArrowStyles }} onClick={goToPrev}> ❮ </div>
            <div style={{ ...arrowStyles, ...rightArrowStyles }} onClick={goToNext}> ❯ </div>
            {/* <div style={getSlideStylesWithBackground(currentIndex)}></div> */}
            <div style={slidesContainerOverflowStyles}>
                <div style={getSlidesContainerStyleWithWidth()}>
                    {
                        slides.map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                style={getSlideStylesWithBackground(slideIndex)}>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div style={dotsContainerStles}>
                {
                    slides.map((_, slideIndex) => (
                        <div key={slideIndex}
                            style={dotStyles}
                            onClick={() => goToSlide(slideIndex)}>
                            ●
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageSlider
