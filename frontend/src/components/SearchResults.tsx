'use client';

import React from 'react';
import { ChevronDown, Heart, Minus, Plus, SlidersHorizontal, Check } from 'lucide-react';
import { SEARCH_RESULTS_DATA } from '../constants';
import Link from 'next/link';

const SearchResults: React.FC = () => {
    return (
        <div className="container py-4 min-vh-100 bg-white">
            {/* Breadcrumb */}
            <div className="small text-secondary mb-4 fw-medium">
                <Link href="/" className="text-decoration-none text-secondary hover-text-brand-pink transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-dark">Search Results</span>
            </div>

            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-center mb-4 pb-3 border-bottom">
                <div>
                    <h1 className="h3 font-sans text-dark mb-1">
                        Results for <span className="fw-bold">&quot;Sarees&quot;</span>
                    </h1>
                    <span className="small text-secondary font-sans">(142 items)</span>
                </div>

                {/* Sort Button */}
                <div className="mt-3 mt-md-0 position-relative group w-100 w-md-auto">
                    <button className="btn btn-white border d-flex align-items-center justify-content-between gap-3 w-100 w-md-auto py-2 px-3 hover-border-brand-pink transition-all">
                        <div className="d-flex align-items-center gap-2">
                            <SlidersHorizontal size={16} className="text-secondary d-md-none" />
                            <span className="d-none d-md-inline text-secondary small">Sort By</span>
                            <span className="fw-bold text-dark small">Newer</span>
                        </div>
                        <ChevronDown size={16} className="text-secondary" />
                    </button>
                </div>
            </div>

            <div className="row g-4 g-lg-5">
                {/* Sidebar Filters */}
                <aside className="col-lg-3 d-none d-lg-block">
                    <div className="vstack gap-4">

                        {/* Categories Filter */}
                        <div className="border-bottom pb-4">
                            <div className="d-flex align-items-center justify-content-between mb-3 cursor-pointer">
                                <h3 className="h6 fw-bold text-uppercase tracking-widest text-dark mb-0">Category</h3>
                                <Minus size={16} className="text-secondary" />
                            </div>
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {[
                                    { label: 'Sarees', count: 120, checked: true },
                                    { label: 'Lehengas', count: 45, checked: false },
                                    { label: 'Salwar Suits', count: 32, checked: false },
                                    { label: 'Kurtis', count: 50, checked: false },
                                    { label: 'Gowns', count: 18, checked: false },
                                    { label: 'Dupattas', count: 25, checked: false },
                                ].map((cat, idx) => (
                                    <li key={idx} className="d-flex align-items-center justify-content-between group cursor-pointer hover-text-dark">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className={`rounded d-flex align-items-center justify-content-center transition-all ${cat.checked ? 'bg-brand-pink border-brand-pink' : 'border bg-white'}`} style={{ width: '18px', height: '18px' }}>
                                                {cat.checked && <Check size={12} className="text-white" strokeWidth={3} />}
                                            </div>
                                            <span className={`small ${cat.checked ? 'fw-bold text-dark' : 'text-secondary'}`}>{cat.label}</span>
                                        </div>
                                        <span className="tiny text-muted fw-medium font-monospace" style={{ fontSize: '0.75rem' }}>({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="border-bottom pb-4">
                            <div className="d-flex align-items-center justify-content-between mb-3 cursor-pointer">
                                <h3 className="h6 fw-bold text-uppercase tracking-widest text-dark mb-0">Price</h3>
                                <Plus size={16} className="text-secondary" />
                            </div>
                        </div>

                        {/* Occasion Filter */}
                        <div className="border-bottom pb-4">
                            <div className="d-flex align-items-center justify-content-between mb-3 cursor-pointer">
                                <h3 className="h6 fw-bold text-uppercase tracking-widest text-dark mb-0">Occasion</h3>
                                <Plus size={16} className="text-secondary" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="col-12 col-lg-9">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {SEARCH_RESULTS_DATA.map((product) => (
                            <div key={product.id} className="col">
                                <div className="group cursor-pointer h-100">
                                    <div className="position-relative ratio ratio-3x4 overflow-hidden rounded bg-light mb-3">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-105"
                                        />
                                        <button className="position-absolute top-0 end-0 m-2 btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center shadow-sm text-secondary hover-text-brand-pink hover-bg-white z-1" style={{ width: '32px', height: '32px' }}>
                                            <Heart size={16} />
                                        </button>

                                        {/* Quick Add overlay */}
                                        <div className="position-absolute bottom-0 start-0 w-100 p-3 opacity-0 group-hover-opacity-100 transition-opacity">
                                            <button className="btn btn-white w-100 fw-bold small text-uppercase tracking-wider shadow-sm hover-bg-brand-pink hover-text-white transition-colors">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    <div className="vstack gap-1">
                                        <h5 className="tiny fw-bold text-muted text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>{product.brand}</h5>
                                        <h3 className="small fw-medium text-dark text-truncate mb-0 hover-text-brand-pink transition-colors">
                                            {product.title}
                                        </h3>
                                        <div className="d-flex align-items-baseline gap-2 mt-1">
                                            <span className="fw-bold text-dark">{product.price}</span>
                                            {product.originalPrice && <span className="tiny text-muted text-decoration-line-through">{product.originalPrice}</span>}
                                            {product.discount && <span className="tiny fw-bold text-brand-pink">{product.discount}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Load More */}
                    <div className="mt-5 text-center">
                        <button className="btn btn-outline-dark px-4 py-2 fw-bold small text-uppercase tracking-widest hover-bg-light transition-all">
                            Load More Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
