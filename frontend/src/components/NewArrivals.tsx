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
        <section className="py-5 bg-white border-bottom">
            <div className="container">

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="h3 font-sans text-dark mb-0">
                        New <span className="text-brand-pink fw-bold">Arrivals</span>
                    </h3>
                    <Link
                        href="/products"
                        className="btn btn-light border rounded-pill px-4 py-2 small fw-bold text-uppercase text-nowrap text-dark hover-bg-brand-pink hover-text-white transition-all"
                        style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                    >
                        View All
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="position-relative group">

                    {/* Left Navigation Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="btn btn-light rounded-circle shadow position-absolute start-0 top-50 translate-middle-y z-10 d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity duration-300 ms-n3"
                        style={{ width: '48px', height: '48px' }}
                        aria-label="Previous products"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Product Cards Row */}
                    <div
                        ref={scrollRef}
                        className="d-flex gap-4 overflow-auto pb-4 pt-2 px-1 scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {NEW_ARRIVALS.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 position-relative group-card"
                                style={{ width: '280px' }}
                            >
                                <Link href="/products/detail" className="d-block text-decoration-none">
                                    {/* Image Area */}
                                    <div className="position-relative ratio ratio-3x4 overflow-hidden rounded mb-3 bg-light">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-105"
                                        />

                                        {/* Quick View Overlay (Desktop only) */}
                                        <div className="d-none d-md-flex position-absolute bottom-0 start-0 w-100 p-3 opacity-0 group-card-hover-opacity-100 transition-opacity duration-300 justify-content-center bg-gradient-to-t-black-20">
                                            <span className="btn btn-white text-dark small fw-bold text-uppercase px-4 py-2 rounded shadow hover-bg-brand-pink hover-text-white transition-colors">
                                                Quick View
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="vstack gap-1">
                                        <div className="small fw-bold text-muted text-uppercase tracking-wider" style={{ fontSize: '10px' }}>
                                            {product.brand}
                                        </div>
                                        <h4 className="h6 fw-bold text-dark lh-sm line-clamp-2 mb-0 hover-text-brand-pink transition-colors">
                                            {product.title}
                                        </h4>

                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <span className="fw-bold text-dark">
                                                {product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="small text-muted text-decoration-line-through decoration-muted" style={{ fontSize: '0.75rem' }}>
                                                    {product.originalPrice}
                                                </span>
                                            )}
                                            {product.discount && (
                                                <span className="small fw-bold text-brand-pink" style={{ fontSize: '0.75rem' }}>
                                                    {product.discount}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>

                                {/* Wishlist Button */}
                                <button className="btn btn-light bg-white-80 backdrop-blur-sm rounded-circle position-absolute top-0 end-0 m-3 p-0 shadow-sm d-flex align-items-center justify-content-center text-secondary hover-text-brand-pink hover-bg-white transition-all z-10"
                                    style={{ width: '32px', height: '32px' }}
                                >
                                    <Heart size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="btn btn-primary bg-brand-pink border-0 rounded-circle shadow position-absolute end-0 top-50 translate-middle-y z-10 d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity duration-300 me-n3 hover-scale-110"
                        style={{ width: '48px', height: '48px' }}
                        aria-label="Next products"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
