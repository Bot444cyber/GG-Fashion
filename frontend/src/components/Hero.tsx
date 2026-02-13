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
        <section className="position-relative w-100 overflow-hidden bg-dark group" style={{ height: '80vh', minHeight: '600px' }}>

            {/* Background Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image with overlay gradient */}
                    <div className="position-relative w-100 h-100 overflow-hidden">
                        <img
                            src={slide.image}
                            alt={slide.titleLine1}
                            className={`w-100 h-100 object-fit-cover transition-transform duration-[8000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                            style={{ transitionDuration: '8000ms' }}
                        />
                        {/* Gradient Overlay to ensure text readability */}
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)' }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 z-20 d-flex align-items-center">
                        <div className="container px-4 px-md-5">
                            <div className="col-12 col-md-9 col-lg-7">

                                {/* Subtitle */}
                                <div className={`d-flex align-items-center gap-3 mb-4 transition-all duration-700 ease-out delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}>
                                    <span className="text-brand-pink fw-bold small text-uppercase tracking-widest">
                                        {slide.subtitle}
                                    </span>
                                    <div className={`bg-light opacity-50 transition-all duration-1000 delay-500 ${index === currentSlide ? 'w-25' : 'w-0'}`} style={{ height: '1px', width: index === currentSlide ? '50px' : '0' }}></div>
                                </div>

                                {/* Main Title */}
                                <h2 className="font-serif display-3 fw-bold lh-1 mb-4 text-white">
                                    <div className="overflow-hidden">
                                        <span className={`d-block transform transition-transform duration-700 ease-out delay-500 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>
                                            {slide.titleLine1}
                                        </span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className={`d-block text-brand-pink transform transition-transform duration-700 ease-out delay-700 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>
                                            {slide.titleLine2}
                                        </span>
                                    </div>
                                </h2>

                                {/* Description */}
                                <p className={`lead text-light fw-light mb-5 transition-all duration-700 ease-out delay-900 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                    {slide.description}
                                </p>

                                {/* CTA Button */}
                                <div className={`transition-all duration-700 ease-out delay-1000 ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-4 opacity-0 scale-95'
                                    }`}>
                                    <Link href="/products">
                                        <button className="btn btn-lg rounded-0 text-white fw-bold text-uppercase tracking-widest px-5 py-3 position-relative overflow-hidden group-btn"
                                            style={{
                                                background: 'linear-gradient(45deg, var(--brand-pink), #d81b60)',
                                                boxShadow: '0 10px 20px rgba(233,30,99,0.3)'
                                            }}
                                        >
                                            <span className="d-flex align-items-center gap-2 relative z-10">
                                                {slide.ctaText}
                                                <ArrowRight size={20} />
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
            <div className="position-absolute top-50 start-0 translate-middle-y z-30 ps-3 ps-md-5 d-none d-md-block opacity-0 group-hover-opacity-100 transition-opacity duration-300">
                <button
                    onClick={prevSlide}
                    className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center bg-black-20 backdrop-blur-sm border-opacity-25 hover-bg-brand-pink hover-border-brand-pink transition-all"
                    style={{ width: '48px', height: '48px' }}
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="position-absolute top-50 end-0 translate-middle-y z-30 pe-3 pe-md-5 d-none d-md-block opacity-0 group-hover-opacity-100 transition-opacity duration-300">
                <button
                    onClick={nextSlide}
                    className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center bg-black-20 backdrop-blur-sm border-opacity-25 hover-bg-brand-pink hover-border-brand-pink transition-all"
                    style={{ width: '48px', height: '48px' }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="position-absolute bottom-0 start-0 w-100 pb-4 z-30 d-flex justify-content-center gap-2">
                {SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`border-0 transition-all duration-500 ${idx === currentSlide ? 'bg-brand-pink' : 'bg-white opacity-50 hover-opacity-100'}`}
                        style={{ height: '4px', width: idx === currentSlide ? '40px' : '20px' }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
