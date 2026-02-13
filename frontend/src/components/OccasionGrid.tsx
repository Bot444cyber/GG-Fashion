'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OCCASIONS } from '../constants';
import Link from 'next/link';

const OccasionGrid: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
                    <h3 className="font-serif text-3xl md:text-4xl text-gray-800 tracking-wide">
                        Shop By <span className="text-brand-pink font-semibold">Occasion</span>
                    </h3>
                    <Link
                        href="/products"
                        className="text-gray-500 text-xs md:text-sm font-bold underline decoration-1 underline-offset-4 hover:text-brand-pink transition-colors uppercase tracking-widest mb-1"
                    >
                        View All Events
                    </Link>
                </div>

                {/* Grid Layout - 4 Columns on Desktop to match the mosaic layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[320px]">
                    {OCCASIONS.map((item) => (
                        <Link
                            key={item.id}
                            href="/products"
                            className={`relative group overflow-hidden rounded-sm cursor-pointer ${item.className}`}
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                            </div>

                            {/* Gradient Overlay - Darker at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                <h4 className="text-white font-serif text-2xl md:text-3xl mb-3 tracking-wide drop-shadow-sm">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-2 text-white/90 group-hover:text-brand-pink transition-colors duration-300">
                                    <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
                                        {item.subtitle}
                                    </span>
                                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OccasionGrid;
