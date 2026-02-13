'use client';

import React, { useState } from 'react';
import { ChevronDown, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (

        <>
            {/* Mobile View: Swipeable Carousel */}
            <div className="d-md-none position-relative w-100 mb-3 ml-n3 mr-n3" style={{ marginLeft: '-0.75rem', marginRight: '-0.75rem', width: 'calc(100% + 1.5rem)' }}>
                <div
                    className="d-flex overflow-auto no-scrollbar scroll-smooth"
                    style={{ scrollSnapType: 'x mandatory' }}
                    onScroll={(e) => {
                        const scrollLeft = e.currentTarget.scrollLeft;
                        const width = e.currentTarget.clientWidth;
                        const index = Math.round(scrollLeft / width);
                        setSelectedImage(index);
                    }}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-100"
                            style={{ scrollSnapAlign: 'center' }}
                        >
                            <div className="ratio ratio-3x4">
                                <img
                                    src={img}
                                    alt={`Product View ${idx + 1}`}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`rounded-circle transition-all ${selectedImage === idx ? 'bg-white' : 'bg-white-50'}`}
                            style={{ width: '8px', height: '8px' }}
                        />
                    ))}
                </div>

                {/* Image Counter Badge */}
                <div className="position-absolute bottom-0 end-0 mb-3 me-3 badge bg-black-50 rounded-pill fw-normal">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>

            {/* Desktop View: Thumbnails + Main Image */}
            <div className="d-none d-md-flex flex-column-reverse flex-md-row gap-3">
                {/* Thumbnails */}
                <div className="d-flex flex-md-column gap-2 overflow-auto no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`position-relative flex-shrink-0 border rounded overflow-hidden p-0 bg-transparent transition-all ${selectedImage === idx ? 'border-brand-pink border-2' : 'border-secondary-subtle border-1 hover-border-dark'
                                }`}
                            style={{ width: '80px', height: '96px' }}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-100 h-100 object-fit-cover"
                            />
                        </button>
                    ))}
                    {/* Scroll down indicator if many images - Hidden for now as overflow is auto */}
                    <button className="d-none d-md-flex btn btn-light rounded-circle align-items-center justify-content-center mx-auto mt-2 text-brand-pink" style={{ width: '32px', height: '32px' }}>
                        <ChevronDown size={16} />
                    </button>
                </div>

                {/* Main Image */}
                <div className="position-relative flex-grow-1 bg-light rounded overflow-hidden group">
                    <div className="ratio ratio-3x4" style={{ maxHeight: '800px' }}>
                        <img
                            src={images[selectedImage]}
                            alt="Product View"
                            className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-110"
                        />
                    </div>
                    <button className="position-absolute bottom-0 end-0 m-3 btn btn-white rounded-circle shadow d-flex align-items-center justify-content-center text-secondary hover-text-brand-pink pointer-events-none-none" style={{ width: '40px', height: '40px', zIndex: 10 }}>
                        <ZoomIn size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductGallery;
