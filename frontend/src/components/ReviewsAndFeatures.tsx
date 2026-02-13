'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Sparkles, Truck, RefreshCw, Lock } from 'lucide-react';
import { REVIEWS, SERVICE_FEATURES } from '../constants';
import Link from 'next/link';

const ReviewsAndFeatures: React.FC = () => {
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

    const getIcon = (name: string) => {
        switch (name) {
            case 'award': return <Award className="w-8 h-8 text-brand-pink stroke-1" />;
            case 'sparkles': return <Sparkles className="w-8 h-8 text-brand-pink stroke-1" />;
            case 'truck': return <Truck className="w-8 h-8 text-brand-pink stroke-1" />;
            case 'repeat': return <RefreshCw className="w-8 h-8 text-brand-pink stroke-1" />;
            case 'lock': return <Lock className="w-8 h-8 text-brand-pink stroke-1" />;
            default: return null;
        }
    };

    return (
        <section className="bg-white">
            {/* Reviews Section */}
            <div className="py-20 border-b border-gray-100">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="flex flex-row items-center justify-between mb-8 md:mb-12">
                        <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl text-gray-800">
                            Reviews & <span className="text-brand-pink font-bold">Ratings</span>
                        </h3>
                        <Link
                            href="/products"
                            className="border border-gray-200 bg-gray-50 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold text-gray-900 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all uppercase tracking-widest whitespace-nowrap"
                        >
                            View All
                        </Link>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative group">

                        {/* Left Navigation Button */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-20 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100"
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Review Cards Row */}
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {REVIEWS.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-none w-[300px] md:w-[350px] snap-start bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        <span className="text-lg font-bold text-gray-900 mr-2">{review.rating.toFixed(1)}</span>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 italic h-[80px] overflow-hidden">
                                        {review.text}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-lg font-bold uppercase">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                                            <p className="text-xs text-gray-500">{review.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Navigation Button */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-20 w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                            aria-label="Next reviews"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                    </div>
                </div>
            </div>

            {/* Service Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-gray-200">
                        {SERVICE_FEATURES.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0 group">
                                <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(feature.icon)}
                                </div>
                                <h4 className="font-bold text-xs md:text-sm text-gray-900 uppercase tracking-widest mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsAndFeatures;
