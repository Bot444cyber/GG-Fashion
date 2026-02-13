'use client';

import React, { useState } from 'react';
import { ChevronDown, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="d-flex flex-column-reverse flex-md-row gap-3">
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
    );
};

export default ProductGallery;
