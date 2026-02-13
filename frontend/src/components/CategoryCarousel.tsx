'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const CategoryCarousel: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust scroll distance
            const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-5 bg-white border-bottom">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h3 className="font-serif h2 text-dark mb-2 tracking-wide text-uppercase">
                        Celebrate Every Occasion In Style
                    </h3>
                    <p className="lead text-muted fw-light">
                        Shop By <span className="text-brand-pink fw-semibold">Category</span>
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="position-relative group" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="btn btn-light rounded-circle shadow position-absolute start-0 top-50 translate-middle-y z-10 d-flex align-items-center justify-content-center text-muted hover-text-dark hover-bg-light transition-all duration-300 ms-n3"
                        style={{ width: '48px', height: '48px' }}
                        aria-label="Previous categories"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="d-flex gap-4 overflow-auto pb-4 pt-2 px-1 scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {CATEGORIES.map((category) => (
                            <div
                                key={category.id}
                                className="flex-shrink-0 d-flex flex-column align-items-center group-item cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="rounded-circle overflow-hidden border border-4 border-transparent hover-border-brand-pink-20 position-relative shadow-sm transition-all duration-300"
                                    style={{ width: '160px', height: '160px' }}
                                >
                                    <div className="w-100 h-100 bg-light position-relative overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.label}
                                            className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-110"
                                        />
                                        {/* Optional subtle overlay on hover */}
                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-0 group-item-hover-opacity-10 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Label */}
                                <span className="mt-3 small fw-bold tracking-widest text-uppercase text-dark group-item-hover-text-brand-pink transition-colors duration-300" style={{ fontSize: '0.85rem' }}>
                                    {category.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="btn btn-primary bg-brand-pink border-0 rounded-circle shadow position-absolute end-0 top-50 translate-middle-y z-10 d-flex align-items-center justify-content-center text-white hover-bg-pink-dark transition-all duration-300 hover-scale-110 me-n3"
                        style={{ width: '48px', height: '48px' }}
                        aria-label="Next categories"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CategoryCarousel;
