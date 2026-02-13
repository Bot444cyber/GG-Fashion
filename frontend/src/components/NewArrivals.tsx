'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { NEW_ARRIVALS } from '../constants';
import Link from 'next/link';

const NewArrivals: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth / 2;
            const newScrollLeft = current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

            current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <h3 className="font-sans text-3xl text-gray-800">
                        New <span className="text-brand-pink font-bold">Arrivals</span>
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
                        className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-100/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 disabled:opacity-0"
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
                        {NEW_ARRIVALS.map((product) => (
                            <div
                                key={product.id}
                                className="flex-none w-[260px] md:w-[280px] snap-start group/card cursor-pointer"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/card:scale-105"
                                    />

                                    {/* Wishlist Button */}
                                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-brand-pink hover:bg-white transition-all duration-200 shadow-sm z-10">
                                        <Heart className="w-4 h-4" />
                                    </button>

                                    {/* Quick View Overlay (Optional, adds professional feel) */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex justify-center pb-6 bg-gradient-to-t from-black/20 to-transparent">
                                        <button className="bg-white text-gray-900 text-xs font-bold py-2 px-6 rounded shadow-lg uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-colors">
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                        {product.brand}
                                    </div>
                                    <h4 className="text-sm text-gray-800 font-medium leading-tight line-clamp-2 min-h-[2.5em] group-hover/card:text-brand-pink transition-colors">
                                        {product.title}
                                    </h4>

                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-lg font-bold text-gray-900">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-gray-400 line-through decoration-gray-400/60">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                        {product.discount && (
                                            <span className="text-xs font-bold text-brand-pink">
                                                {product.discount}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-10 h-10 md:w-12 md:h-12 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Next products"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
