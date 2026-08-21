import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export const ImageCarousel = ({ images = [], propertyName = 'Property' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailContainerRef = useRef(null);

  if (!images || images.length === 0) {
    images = [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    ];
  }

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Banner Container */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-950 shadow-xl group">
        <img
          src={images[currentIndex]}
          alt={`${propertyName} - Image ${currentIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-300"
        />

        {/* Previous & Next Control Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-all opacity-90 group-hover:opacity-100 focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-all opacity-90 group-hover:opacity-100 focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Counter Badge & Fullscreen Trigger */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold shadow-md">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all"
            title="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery Strip */}
      {images.length > 1 && (
        <div
          ref={thumbnailContainerRef}
          className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none"
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden transition-all duration-200 ${
                currentIndex === idx
                  ? 'ring-4 ring-indigo-600 dark:ring-indigo-500 scale-105 opacity-100 shadow-md'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal Lightbox */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={images[currentIndex]}
            alt={propertyName}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
