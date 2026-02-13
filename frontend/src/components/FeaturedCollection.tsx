'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { FEATURED_COLLECTION } from '../constants';
import Link from 'next/link';

const FeaturedCollection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth / 2; // Scroll half the screen width
            const newScrollLeft = current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

            current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <h3 className="font-sans text-3xl md:text-4xl text-gray-800">
                        Our Featured <span className="text-brand-pink font-bold">Collection</span>
                    </h3>
                    <Link
                        href="/products"
                        className="text-gray-500 text-xs font-bold underline decoration-1 underline-offset-4 hover:text-brand-pink transition-colors uppercase tracking-widest mb-1"
                    >
                        View All Products
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Left Navigation Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-12 h-12 bg-gray-100/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 disabled:opacity-0"
                        aria-label="Previous products"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Product Cards Row */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {FEATURED_COLLECTION.map((product) => (
                            <div
                                key={product.id}
                                className="flex-none w-[260px] md:w-[280px] lg:w-[300px] snap-start group/card cursor-pointer"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/card:scale-110"
                                    />

                                    {/* Wishlist Button */}
                                    <button className="absolute top-4 right-4 text-white/80 hover:text-brand-pink transition-colors duration-200 drop-shadow-md z-10">
                                        <Heart className="w-6 h-6 stroke-2" />
                                    </button>

                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                                </div>

                                {/* Product Details */}
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        {product.brand}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-serif leading-tight group-hover/card:text-brand-pink transition-colors">
                                        {product.title}
                                    </h4>
                                    <div className="text-lg font-bold text-gray-900">
                                        {product.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Next products"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
