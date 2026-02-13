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
        <div className="container py-4 bg-white min-vh-100">
            {/* Breadcrumb */}
            <div className="small text-muted mb-4 fw-medium tracking-wide" style={{ fontSize: '0.75rem' }}>
                <Link href="/" className="text-decoration-none text-muted hover-text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-dark">Search Results</span>
            </div>

            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-center mb-4 pb-3 border-bottom">
                {/* Mobile Filter & Sort Buttons */}
                <div className="mt-3 mt-md-0 d-flex gap-2 w-100 w-md-auto">
                    {/* Mobile Filter Trigger */}
                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="btn btn-white border d-flex align-items-center justify-content-center gap-2 w-50 d-md-none"
                    >
                        <SlidersHorizontal size={14} className="text-secondary" />
                        <span className="fw-bold text-dark small">Filter</span>
                    </button>

                    {/* Sort Button */}
                    <div className="position-relative group w-50 w-md-auto">
                        <button className="btn btn-white border d-flex align-items-center justify-content-between gap-3 w-100 w-md-auto" style={{ minWidth: '140px' }}>
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-secondary small">Sort By</span>
                                <span className="fw-bold text-dark small">Newer</span>
                            </div>
                            <ChevronDown size={14} className="text-secondary" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5">
                {/* Sidebar Filters */}
                <FilterSidebar isOpen={isMobileFilterOpen} onClose={() => setIsMobileFilterOpen(false)} />

                {/* Product Grid */}
                <div className="flex-grow-1">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 g-lg-4">
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <div key={product.id} className="col">
                                <ProductCard product={product} />
                            </div>
                        ))}
                        {/* Repeating data to fill the grid for demo purposes similar to image */}
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <div key={`${product.id}-dup`} className="col">
                                <ProductCard product={{ ...product, id: product.id + 1000 }} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Load More */}
                    <div className="mt-5 text-center">
                        <button className="btn btn-white border border-secondary-subtle text-dark px-4 py-3 small fw-bold text-uppercase tracking-widest hover-bg-light hover-border-dark transition-all rounded-1"
                            style={{ fontSize: '0.75rem' }}
                        >
                            Load More Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
