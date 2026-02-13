'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { SEARCH_RESULTS_DATA } from '../../constants';
import FilterSidebar from '../../components/FilterSidebar';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

    return (
        <div className="container mx-auto px-4 py-6 bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="text-[10px] md:text-xs text-gray-500 mb-6 font-medium tracking-wide">
                <Link href="/" className="cursor-pointer hover:text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Search Results</span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 pb-4 border-b border-gray-100">
                <div>
                    <h1 className="text-xl md:text-2xl font-serif text-gray-900 mb-1">
                        Results for <span className="font-bold">"Sarees"</span>
                    </h1>
                    <span className="text-xs text-gray-500 font-sans tracking-wide">(142 items)</span>
                </div>

                {/* Mobile Filter & Sort Buttons */}
                <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
                    {/* Mobile Filter Trigger */}
                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="flex items-center justify-center gap-2 border border-gray-200 rounded-sm px-4 py-2 text-xs bg-white hover:border-gray-900 transition-colors w-1/2 md:hidden"
                    >
                        <SlidersHorizontal className="w-3 h-3 text-gray-400" />
                        <span className="font-bold text-gray-800">Filter</span>
                    </button>

                    {/* Sort Button */}
                    <div className="relative group w-1/2 md:w-auto">
                        <button className="flex items-center gap-3 border border-gray-200 rounded-sm px-4 py-2 text-xs bg-white hover:border-gray-900 transition-colors w-full md:w-auto justify-between min-w-[140px]">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">Sort By</span>
                                <span className="font-bold text-gray-800">Newer</span>
                            </div>
                            <ChevronDown className="w-3 h-3 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Sidebar Filters */}
                <FilterSidebar isOpen={isMobileFilterOpen} onClose={() => setIsMobileFilterOpen(false)} />

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        {/* Repeating data to fill the grid for demo purposes similar to image */}
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <ProductCard key={`${product.id}-dup`} product={{ ...product, id: product.id + 1000 }} />
                        ))}
                    </div>

                    {/* Pagination Load More */}
                    <div className="mt-16 text-center">
                        <button className="border border-gray-300 bg-white text-gray-900 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:border-gray-900 hover:bg-gray-50 transition-all rounded-sm">
                            Load More Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
