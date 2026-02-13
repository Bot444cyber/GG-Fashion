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
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-3 tracking-wide uppercase">
                        Celebrate Every Occasion In Style
                    </h3>
                    <p className="text-gray-600 text-lg font-light">
                        Shop By <span className="text-brand-pink font-semibold">Category</span>
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group max-w-7xl mx-auto">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-200 transition-all duration-300 shadow-sm"
                        aria-label="Previous categories"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto pb-8 pt-2 px-4 scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {CATEGORIES.map((category) => (
                            <div
                                key={category.id}
                                className="flex-shrink-0 flex flex-col items-center group/item cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-transparent group-hover/item:border-brand-pink/20 relative shadow-md transition-all duration-300">
                                    <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.label}
                                            className="w-full h-full object-cover transform group-hover/item:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        {/* Optional subtle overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors duration-300"></div>
                                    </div>
                                </div>

                                {/* Label */}
                                <span className="mt-5 text-sm font-bold tracking-widest uppercase text-gray-800 group-hover/item:text-brand-pink transition-colors duration-300">
                                    {category.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all duration-300 hover:scale-110"
                        aria-label="Next categories"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CategoryCarousel;
