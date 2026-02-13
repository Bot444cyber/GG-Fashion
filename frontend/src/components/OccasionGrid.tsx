'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OCCASIONS } from '../constants';
import Link from 'next/link';

const OccasionGrid: React.FC = () => {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                    <h3 className="h2 font-serif text-dark tracking-wide mb-0">
                        Shop By <span className="text-brand-pink fw-semibold">Occasion</span>
                    </h3>
                    <Link
                        href="/products"
                        className="btn btn-light border rounded-pill px-4 py-2 small fw-bold text-uppercase text-nowrap text-dark hover-bg-brand-pink hover-text-white transition-all"
                        style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                    >
                        View All
                    </Link>
                </div>

                {/* Mosaic Grid Layout */}
                <div className="mosaic-grid">
                    {OCCASIONS.map((item) => (
                        <Link
                            key={item.id}
                            href="/products"
                            className={`position-relative group overflow-hidden rounded cursor-pointer text-decoration-none ${item.className}`}
                        >
                            {/* Image Container */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-light">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-scale-105"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t-black-overlay opacity-75 transition-opacity duration-300"></div>

                            {/* Content Overlay */}
                            <div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex flex-column justify-content-end">
                                <h4 className="text-white font-serif h3 mb-2 tracking-wide text-shadow-sm">
                                    {item.title}
                                </h4>
                                <div className="d-flex align-items-center gap-2 text-white opacity-75 hover-text-brand-pink transition-colors duration-300">
                                    <span className="small fw-bold tracking-widest text-uppercase" style={{ fontSize: '0.75rem' }}>
                                        {item.subtitle}
                                    </span>
                                    <ArrowRight size={16} className="transition-transform group-hover-translate-x-1" />
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
