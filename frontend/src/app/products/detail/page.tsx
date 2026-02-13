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
        <div className="container mx-auto px-4 py-6 bg-white min-h-screen">

            {/* Top Notification Banner */}
            <div className="bg-pink-50 text-center py-2 px-4 mb-6 rounded-sm border border-pink-100">
                <p className="text-[10px] md:text-xs font-medium text-gray-700">
                    For styling assistance & customizations, WhatsApp us at: <span className="font-bold text-brand-pink underline">+91-9372999910</span>
                </p>
            </div>

            {/* Breadcrumb */}
            <div className="text-[10px] md:text-xs text-gray-500 mb-8 font-medium tracking-wide">
                <Link href="/" className="cursor-pointer hover:text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="cursor-pointer hover:text-brand-pink transition-colors">Sarees</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Party Wear</span>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
                {/* Gallery - 7 cols */}
                <div className="lg:col-span-7">
                    <ProductGallery images={images} />
                </div>

                {/* Info - 5 cols */}
                <div className="lg:col-span-5">
                    <ProductInfo />
                </div>
            </div>

            {/* Similar Collection */}
            <div className="mb-20">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-sans text-2xl md:text-3xl text-gray-800">
                        Similar <span className="text-brand-pink font-bold">Collection</span>
                    </h3>
                    <Link href="/products" className="text-xs font-bold underline decoration-1 underline-offset-4 cursor-pointer text-gray-500 hover:text-brand-pink uppercase tracking-widest">
                        VIEW ALL PRODUCTS
                    </Link>
                </div>

                <div className="relative group">
                    {/* Nav Buttons */}
                    <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-pink hover:text-white transition-colors z-10 opacity-0 group-hover:opacity-100">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-pink text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg shadow-pink-200 opacity-0 group-hover:opacity-100">
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {FEATURED_COLLECTION.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <ReviewsSection />

        </div>
    );
}
