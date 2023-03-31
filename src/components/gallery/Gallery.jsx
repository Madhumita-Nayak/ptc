import { useState } from "react";
import "./Gallery.css";


const GalleryModal = ({closeModal, findNext, findPrev, hasPrev, hasNext, src}) => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 27)
          closeModal();
        if (e.keyCode === 37 && hasPrev)
          findPrev();
        if (e.keyCode === 39 && hasNext)
          findNext();
      }
      if (!src) {
        // console.log('whut');
        return null;
      }
  return (
    <div>
        <div className="gallery-modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="gallery-modal">
          <div className='gallery-modal-body'>
            <a href="/#" className='modal-close' onClick={closeModal} onKeyDown={handleKeyDown}>&times;</a>
            {hasPrev && <a href="/#" className='modal-prev' onClick={findPrev} onKeyDown={handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="/#" className='modal-next' onClick={findNext} onKeyDown={handleKeyDown}>&rsaquo;</a>}
            <img src={src} alt=""/>
          </div>
        </div>
      </div>
  )
}

const Gallery = ({imgUrls}) => {

    const [currentIndex, setCurrentIndex] = useState(null);

    const renderImageContent = (src, index) => {
        return (
          <div onClick={(e) => openModal(e, index)}>
            <img src={src} key={src} alt ="img"/>
          </div>
        ) 
    }

    const openModal = (e, index) => {
        setCurrentIndex(index);
      }
     const closeModal = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        setCurrentIndex(null);
      }
      const findPrev = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        setCurrentIndex(prevState => prevState - 1);
      }
      const findNext = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        setCurrentIndex(prevState => prevState + 1);
      }
  return (
    <div className="gallery-container">
        <div className="gallery-grid">
          {imgUrls.map(renderImageContent)}
        </div>
        <GalleryModal
          closeModal={closeModal} 
          findPrev={findPrev} 
          findNext={findNext} 
          hasPrev={currentIndex > 0} 
          hasNext={currentIndex + 1 < imgUrls.length} 
          src={imgUrls[currentIndex]} 
        />
      </div>
  )
}

export default Gallery


