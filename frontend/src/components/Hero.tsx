'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SLIDES } from '../constants';
import Link from 'next/link';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, [isAnimating]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Match transition duration
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gray-900 group">

            {/* Background Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image with overlay gradient */}
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src={slide.image}
                            alt={slide.titleLine1}
                            className={`w-full h-full object-cover object-top transition-transform duration-[8000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                                }`}
                        />
                        {/* Gradient Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="container mx-auto px-4 md:px-12 lg:px-20">
                            <div className="max-w-3xl">

                                {/* Subtitle */}
                                <div className={`flex items-center gap-3 mb-4 md:mb-6 transform transition-all duration-700 ease-out delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}>
                                    <span className="text-brand-pink font-bold tracking-[0.2em] text-xs md:text-sm uppercase">
                                        {slide.subtitle}
                                    </span>
                                    <div className={`h-[1px] bg-gray-400/50 transition-all duration-1000 delay-500 ${index === currentSlide ? 'w-12' : 'w-0'
                                        }`}></div>
                                </div>

                                {/* Main Title */}
                                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
                                    <div className="overflow-hidden">
                                        <span className={`block text-white transform transition-transform duration-700 ease-out delay-500 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                                            }`}>
                                            {slide.titleLine1}
                                        </span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className={`block text-brand-pink transform transition-transform duration-700 ease-out delay-700 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                                            }`}>
                                            {slide.titleLine2}
                                        </span>
                                    </div>
                                </h2>

                                {/* Description */}
                                <p className={`text-gray-200 text-base md:text-lg lg:text-xl font-light max-w-lg mb-8 md:mb-12 leading-relaxed transform transition-all duration-700 ease-out delay-[900ms] ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}>
                                    {slide.description}
                                </p>

                                {/* CTA Button */}
                                <div className={`transform transition-all duration-700 ease-out delay-[1100ms] ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-4 opacity-0 scale-95'
                                    }`}>
                                    <Link href="/products">
                                        <button className="
                      relative overflow-hidden 
                      bg-gradient-to-r from-brand-pink via-pink-600 to-brand-pink
                      bg-[length:200%_auto] bg-left
                      text-white 
                      px-12 py-4 rounded-sm 
                      font-bold tracking-[0.25em] text-sm uppercase
                      shadow-[0_10px_30px_-10px_rgba(233,30,99,0.4)]
                      transform transition-all duration-500 ease-out 
                      hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(233,30,99,0.6)]
                      hover:bg-right
                      group/btn
                    ">
                                            {/* Shimmer Overlay */}
                                            <div className="absolute inset-0 -translate-x-[120%] group-hover/btn:translate-x-[120%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0 pointer-events-none" />

                                            <span className="relative z-10 flex items-center gap-3">
                                                {slide.ctaText}
                                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                            </span>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-2 md:pl-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={prevSlide}
                    className="bg-black/20 hover:bg-brand-pink text-white border border-white/20 hover:border-brand-pink p-3 rounded-full backdrop-blur-sm transition-all duration-300 group/nav"
                >
                    <ChevronLeft className="w-6 h-6 md:w-6 md:h-6 group-hover/nav:-translate-x-0.5 transition-transform" />
                </button>
            </div>

            <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-2 md:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={nextSlide}
                    className="bg-black/20 hover:bg-brand-pink text-white border border-white/20 hover:border-brand-pink p-3 rounded-full backdrop-blur-sm transition-all duration-300 group/nav"
                >
                    <ChevronRight className="w-6 h-6 md:w-6 md:h-6 group-hover/nav:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
                {SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1 transition-all duration-500 ${idx === currentSlide ? 'bg-brand-pink w-12' : 'bg-white/40 hover:bg-white w-6'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
