'use client';

import React from 'react';
import Link from 'next/link';
import ProductGallery from '../../../components/product/ProductGallery';
import ProductInfo from '../../../components/product/ProductInfo';
import ReviewsSection from '../../../components/product/ReviewsSection';
import { FEATURED_COLLECTION } from '../../../constants';
import ProductCard from '../../../components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailPage() {
    const images = [
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    ];

    return (
        <div className="container py-4 min-vh-100 bg-white">

            {/* Top Notification Banner */}
            <div className="alert alert-danger bg-pink-50 text-center py-2 mb-4 rounded-0 border border-pink-subtle">
                <p className="small fw-medium text-secondary mb-0" style={{ fontSize: '0.75rem' }}>
                    For styling assistance & customizations, WhatsApp us at: <span className="fw-bold text-brand-pink text-decoration-underline">+91-9372999910</span>
                </p>
            </div>

            {/* Breadcrumb */}
            <div className="d-flex align-items-center small text-secondary mb-4 fw-medium tracking-wide" style={{ fontSize: '0.75rem' }}>
                <Link href="/" className="text-decoration-none text-secondary hover-text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="text-decoration-none text-secondary hover-text-brand-pink transition-colors">Sarees</Link>
                <span className="mx-2">/</span>
                <span className="text-dark">Party Wear</span>
            </div>

            {/* Main Content Layout */}
            <div className="row g-4 g-lg-5 mb-5 pb-5">
                {/* Gallery - 7 cols */}
                <div className="col-12 col-lg-7">
                    <ProductGallery images={images} />
                </div>

                {/* Info - 5 cols */}
                <div className="col-12 col-lg-5">
                    <ProductInfo />
                </div>
            </div>

            {/* Similar Collection */}
            <div className="mb-5 pb-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="h3 font-sans text-dark mb-0">
                        Similar <span className="text-brand-pink fw-bold">Collection</span>
                    </h3>
                    <Link href="/products" className="small fw-bold text-decoration-underline text-secondary hover-text-brand-pink text-uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>
                        VIEW ALL PRODUCTS
                    </Link>
                </div>

                <div className="position-relative group">
                    {/* Nav Buttons */}
                    <button className="position-absolute start-0 top-50 translate-middle-y ms-n3 btn btn-light rounded-circle shadow d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-all z-2" style={{ width: '40px', height: '40px', left: '-20px' }}>
                        <ChevronLeft size={20} />
                    </button>
                    <button className="position-absolute end-0 top-50 translate-middle-y me-n3 btn btn-primary bg-brand-pink border-0 rounded-circle shadow-lg shadow-pink-200 d-none d-md-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-all z-2" style={{ width: '40px', height: '40px', right: '-20px' }}>
                        <ChevronRight size={20} />
                    </button>

                    <div className="row row-cols-2 row-cols-md-4 g-3">
                        {FEATURED_COLLECTION.slice(0, 4).map((product) => (
                            <div key={product.id} className="col">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <ReviewsSection />

        </div>
    );
}
