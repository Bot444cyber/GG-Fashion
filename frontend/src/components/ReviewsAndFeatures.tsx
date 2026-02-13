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
            case 'award': return <Award className="text-brand-pink" size={32} strokeWidth={1} />;
            case 'sparkles': return <Sparkles className="text-brand-pink" size={32} strokeWidth={1} />;
            case 'truck': return <Truck className="text-brand-pink" size={32} strokeWidth={1} />;
            case 'repeat': return <RefreshCw className="text-brand-pink" size={32} strokeWidth={1} />;
            case 'lock': return <Lock className="text-brand-pink" size={32} strokeWidth={1} />;
            default: return null;
        }
    };

    return (
        <section className="bg-white">
            {/* Reviews Section */}
            <div className="py-5 border-bottom">
                <div className="container">

                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="h3 font-sans text-dark mb-0">
                            Reviews & <span className="text-brand-pink fw-bold">Ratings</span>
                        </h3>
                        <Link
                            href="/products"
                            className="btn btn-light border rounded-pill px-4 py-2 small fw-bold text-uppercase text-nowrap text-dark hover-bg-brand-pink hover-text-white transition-all"
                            style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                        >
                            View All
                        </Link>
                    </div>

                    {/* Mobile Swipe Indicator */}
                    <div className="d-md-none d-flex align-items-center justify-content-end mb-2 text-muted small animate-swipe-hint">
                        <span className="me-1" style={{ fontSize: '0.75rem' }}>Slide to see more</span>
                        <ChevronRight size={16} />
                    </div>

                    {/* Carousel Container */}
                    <div className="position-relative group">

                        {/* Left Navigation Button */}
                        <button
                            onClick={() => scroll('left')}
                            className="btn btn-light rounded-circle shadow position-absolute start-0 top-50 translate-middle-y z-10 d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity duration-300 ms-n3"
                            style={{ width: '48px', height: '48px' }}
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Review Cards Row */}
                        <div
                            ref={scrollRef}
                            className="d-flex gap-4 overflow-auto pb-4 pt-2 px-1 scroll-smooth no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {REVIEWS.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 bg-white border rounded p-4 shadow-sm hover-shadow transition-all duration-300"
                                    style={{ width: '320px' }}
                                >
                                    <div className="d-flex align-items-center gap-1 mb-3">
                                        <span className="fs-5 fw-bold text-dark me-2">{review.rating.toFixed(1)}</span>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="text-warning fill-warning" />
                                        ))}
                                    </div>

                                    <p className="text-muted small mb-4 fst-italic overflow-hidden" style={{ height: '80px', lineHeight: '1.6' }}>
                                        {review.text}
                                    </p>

                                    <div className="d-flex align-items-center gap-3">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center text-secondary fw-bold text-uppercase"
                                            style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}
                                        >
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="h6 fw-bold text-dark mb-0">{review.author}</h4>
                                            <p className="small text-muted mb-0" style={{ fontSize: '0.75rem' }}>{review.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Navigation Button */}
                        <button
                            onClick={() => scroll('right')}
                            className="btn btn-primary bg-brand-pink border-0 rounded-circle shadow position-absolute end-0 top-50 translate-middle-y z-10 d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity duration-300 me-n3 hover-scale-110"
                            style={{ width: '48px', height: '48px' }}
                            aria-label="Next reviews"
                        >
                            <ChevronRight size={24} />
                        </button>

                    </div>
                </div>
            </div>

            {/* Service Features Section */}
            <div className="py-5 bg-white">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 py-4">
                        {SERVICE_FEATURES.map((feature) => (
                            <div key={feature.id} className="col d-flex flex-column align-items-center text-center group">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 transition-transform duration-300 group-hover-scale-110"
                                    style={{ width: '64px', height: '64px', backgroundColor: '#fce4ec' }} // Light pink bg
                                >
                                    {getIcon(feature.icon)}
                                </div>
                                <h4 className="small fw-bold text-dark text-uppercase tracking-widest mb-2" style={{ fontSize: '0.75rem' }}>
                                    {feature.title}
                                </h4>
                                <p className="text-muted small mb-0" style={{ maxWidth: '200px', fontSize: '0.75rem' }}>
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
