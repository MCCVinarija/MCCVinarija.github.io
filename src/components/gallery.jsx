import React, { useState } from "react";
import "../css/gallery.css";

export const Gallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/Galerija/0.jpg",
    "/img/Galerija/0a.jpg",
    "/img/Galerija/0b.jpg",
    "/img/Galerija/0c.jpg",
    "/img/Galerija/0d.jpg",
    "/img/Galerija/12.jpg",
    "/img/Galerija/13.jpg",
    "/img/Galerija/14.jpg",
    "/img/Galerija/15.jpg",
    "/img/Galerija/16.jpg",
    "/img/Galerija/0l.jpg",
    "/img/Galerija/18.jpg",
    "/img/Galerija/30.jpg",
    "/img/Galerija/31.jpg",
    "/img/Galerija/32.jpg",
    "/img/Galerija/33.jpg",
    "/img/Galerija/34.jpg",
    "/img/Galerija/35.jpg",
    "/img/Galerija/36.jpg",
    "/img/Galerija/37.jpg",
    "/img/Galerija/1.jpg",
    "/img/Galerija/3.jpg",
    "/img/Galerija/5.jpg",
    "/img/Galerija/6.jpg",
    "/img/Galerija/7.jpg",
    "/img/Galerija/8.jpg",
    "/img/Galerija/9.jpg",
    "/img/Galerija/10.jpg",
    "/img/Galerija/11.jpg",
    "/img/Galerija/0e.jpg",
    "/img/Galerija/0f.jpg",
    "/img/Galerija/0g.jpg",
    "/img/Galerija/0h.jpg",
    "/img/Galerija/0i.jpg",
    "/img/Galerija/0j.jpg",
    "/img/Galerija/0k.jpg",
    "/img/Galerija/19.jpg",
    "/img/Galerija/20.jpg",
    "/img/Galerija/21.jpg",
    "/img/Galerija/22.jpg",
    "/img/Galerija/23.jpg",
    "/img/Galerija/24.jpg",
    "/img/Galerija/25.jpg",
    "/img/Galerija/26.jpg",
    "/img/Galerija/27.jpg",
    "/img/Galerija/28.jpg",
    "/img/Galerija/29.jpg",
    "/img/Galerija/0m.jpg",
    "/img/Galerija/0n.jpg",
    "/img/Galerija/0o.jpg",
    "/img/Galerija/0p.jpg",
    "/img/Galerija/0r.jpg",
    "/img/Galerija/0s.jpg",
    "/img/Galerija/38.jpg",
    "/img/Galerija/39.jpg",
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="bodyGallery">
      <div className="gallery-container">
        <div className="grid-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="grid-item-wrapper"
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`Gallery ${index + 1}`} className="grid-item" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={closeLightbox}>
              ×
            </span>
            <span className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
              ‹
            </span>
            <img src={selectedImage} alt="Full size" className="lightbox-image" />
            <span className="lightbox-nav lightbox-next" onClick={goToNext}>
              ›
            </span>
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
         