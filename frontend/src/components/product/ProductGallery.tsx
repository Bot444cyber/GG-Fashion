'use client';

import React, { useState } from 'react';
import { ChevronDown, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (Vertical on desktop, possibly horizontal on mobile if needed, but keeping vertical for match) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-20 h-24 flex-shrink-0 border rounded-sm overflow-hidden transition-all ${selectedImage === idx ? 'border-brand-pink ring-1 ring-brand-pink' : 'border-gray-200 hover:border-gray-400'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
                {/* Scroll down indicator if many images */}
                <button className="hidden md:flex items-center justify-center w-20 h-8 text-brand-pink bg-pink-50 rounded-full mx-auto mt-2">
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-[3/4] md:aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden group">
                <img
                    src={images[selectedImage]}
                    alt="Product View"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-600 hover:text-brand-pink transition-colors">
                    <ZoomIn className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default ProductGallery;
