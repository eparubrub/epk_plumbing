// Based on: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/

import React from 'react';
// const images = ["/images/Plumbing3.jpg", "/images/Bathroom1.jpg", "/images/Plumbing1.jpg"]
const delay = 4000;

const Slideshow = (props) =>{
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === 2 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h3 className="slideshowTitle">{props.currentServices}</h3>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.currentSlideshowImages.map((imageSource, index) => (
          <img
            className="slide"
            key={index}
            src = {imageSource}
            alt = "Services"
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {props.currentSlideshowImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
