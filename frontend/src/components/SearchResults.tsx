'use client';

import React from 'react';
import { ChevronDown, Heart, Minus, Plus, SlidersHorizontal, Check } from 'lucide-react';
import { SEARCH_RESULTS_DATA } from '../constants';
import Link from 'next/link';

const SearchResults: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="text-xs text-gray-500 mb-6 font-medium">
                <Link href="/" className="cursor-pointer hover:text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Search Results</span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 pb-4 border-b border-gray-100">
                <div>
                    <h1 className="text-2xl md:text-3xl font-sans text-gray-900 mb-1">
                        Results for <span className="font-bold">"Sarees"</span>
                    </h1>
                    <span className="text-sm text-gray-500 font-sans">(142 items)</span>
                </div>

                {/* Sort Button */}
                <div className="mt-4 md:mt-0 relative group">
                    <button className="flex items-center gap-3 border border-gray-200 rounded px-5 py-2.5 text-sm bg-white hover:border-brand-pink transition-colors w-full md:w-auto justify-between">
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal className="w-4 h-4 text-gray-400 md:hidden" />
                            <span className="hidden md:inline text-gray-500">Sort By</span>
                            <span className="font-bold text-gray-800">Newer</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Sidebar Filters */}
                <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">

                    {/* Categories Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div className="flex items-center justify-between mb-5 cursor-pointer">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-900">Category</h3>
                            <Minus className="w-4 h-4 text-gray-400" />
                        </div>
                        <ul className="space-y-4">
                            {[
                                { label: 'Sarees', count: 120, checked: true },
                                { label: 'Lehengas', count: 45, checked: false },
                                { label: 'Salwar Suits', count: 32, checked: false },
                                { label: 'Kurtis', count: 50, checked: false },
                                { label: 'Gowns', count: 18, checked: false },
                                { label: 'Dupattas', count: 25, checked: false },
                            ].map((cat, idx) => (
                                <li key={idx} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${cat.checked ? 'bg-brand-pink border-brand-pink' : 'border-gray-300 group-hover:border-gray-400 bg-white'}`}>
                                            {cat.checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                        </div>
                                        <span className={`text-sm ${cat.checked ? 'font-bold text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat.label}</span>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">({cat.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div className="flex items-center justify-between mb-5 cursor-pointer">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-900">Price</h3>
                            <Plus className="w-4 h-4 text-gray-400" />
                        </div>
                        <ul className="space-y-3 hidden">
                            {[
                                'Below ₹1,000',
                                '₹1,000 - ₹2,500',
                                '₹2,500 - ₹5,000',
                                '₹5,000 - ₹10,000',
                                'Above ₹10,000'
                            ].map((price, idx) => (
                                <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-5 h-5 border border-gray-300 rounded group-hover:border-gray-400 bg-white" />
                                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Occasion Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div className="flex items-center justify-between mb-5 cursor-pointer">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-900">Occasion</h3>
                            <Plus className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-brand-pink hover:bg-white transition-all shadow-sm z-10">
                                        <Heart className="w-5 h-5" />
                                    </button>

                                    {/* Quick Add overlay optional */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="w-full bg-white/95 text-gray-900 text-xs font-bold py-3 uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-colors shadow-lg">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.brand}</h5>
                                    <h3 className="text-sm font-medium text-gray-900 leading-snug group-hover:text-brand-pink transition-colors line-clamp-2 min-h-[2.5em]">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center gap-2 pt-1">
                                        <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                        {product.originalPrice && <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>}
                                        {product.discount && <span className="text-xs font-bold text-brand-pink">{product.discount}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Load More */}
                    <div className="mt-16 text-center">
                        <button className="border border-gray-300 bg-white text-gray-900 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:border-gray-900 hover:bg-gray-50 transition-all">
                            Load More Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
