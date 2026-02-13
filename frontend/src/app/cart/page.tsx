'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Trash2, Truck, Tag, ShieldCheck, RotateCcw } from 'lucide-react';

// Mock Data matching the image
const CART_ITEMS = [
    {
        id: 1,
        brand: 'GG FASHION',
        title: 'Chinon Silk Party Wear Designer Saree',
        price: 1914,
        originalPrice: 2500,
        discount: '23% OFF',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        size: 'Free',
        qty: 1,
        deliveryDate: '16 Feb',
        inStock: true
    },
    {
        id: 2,
        brand: 'WEAVERS OF INDIA',
        title: 'Banarasi Soft Silk Saree - White',
        price: 1860,
        originalPrice: 2200,
        discount: '',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
        size: 'Onesize',
        qty: 1,
        deliveryDate: '18 Feb',
        inStock: true
    }
];

export default function CartPage() {
    const [couponCode, setCouponCode] = useState('');

    // Calculations
    const totalMRP = CART_ITEMS.reduce((acc, item) => acc + item.originalPrice, 0);
    const totalSellingPrice = CART_ITEMS.reduce((acc, item) => acc + item.price, 0);
    const totalDiscount = totalMRP - totalSellingPrice;
    const shippingFee = 0; // Free
    const totalAmount = totalSellingPrice + shippingFee;

    return (
        <div className="min-vh-100 bg-light py-5">
            <div className="container" style={{ maxWidth: '1140px' }}>

                {/* Page Title */}
                <h1 className="h4 font-sans fw-medium text-dark mb-4">
                    Shopping <span className="fw-bold">Bag</span> <span className="text-secondary fs-6 fw-normal">({CART_ITEMS.length} Items)</span>
                </h1>

                <div className="row g-4">

                    {/* LEFT COLUMN - CART ITEMS */}
                    <div className="col-12 col-lg-8">
                        <div className="vstack gap-3">

                            {/* Savings Message */}
                            <div className="alert alert-success d-flex align-items-center gap-2 small border-success-subtle mb-0 py-2">
                                <Tag size={16} />
                                <span>Congratulations! You've saved ₹{totalDiscount.toLocaleString()} on this order.</span>
                            </div>

                            {/* Cart Items List */}
                            <div className="vstack gap-3">
                                {CART_ITEMS.map((item) => (
                                    <div key={item.id} className="card border-0 shadow-sm p-3 d-flex flex-column flex-sm-row gap-3">

                                        {/* Image */}
                                        <div className="flex-shrink-0 bg-light rounded overflow-hidden position-relative" style={{ width: '120px', aspectRatio: '3/4' }}>
                                            <img src={item.image} alt={item.title} className="w-100 h-100 object-fit-cover" />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-grow-1 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div>
                                                        <h3 className="small fw-bold text-muted text-uppercase tracking-widest mb-1" style={{ fontSize: '0.75rem' }}>{item.brand}</h3>
                                                        <h2 className="h6 fw-bold text-dark mb-2">{item.title}</h2>
                                                    </div>
                                                    {/* Delivery Info (Desktop) */}
                                                    <div className="d-none d-sm-flex align-items-center gap-1 small text-success bg-success-subtle px-2 py-1 rounded-pill" style={{ fontSize: '0.75rem' }}>
                                                        <Truck size={14} />
                                                        <span>Delivers by {item.deliveryDate}</span>
                                                    </div>
                                                </div>

                                                {/* Size & Qty Selectors */}
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="badge bg-light text-secondary border fw-normal p-2 cursor-pointer hover-border-dark">
                                                        Size: <span className="fw-bold text-dark">{item.size}</span>
                                                    </div>
                                                    <div className="badge bg-light text-secondary border fw-normal p-2 cursor-pointer hover-border-dark">
                                                        Qty: <span className="fw-bold text-dark">{item.qty}</span>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div className="d-flex align-items-baseline gap-2 mb-3">
                                                    <span className="fs-5 fw-bold text-dark">₹{item.price.toLocaleString()}</span>
                                                    <span className="small text-muted text-decoration-line-through">₹{item.originalPrice.toLocaleString()}</span>
                                                    <span className="small fw-bold text-brand-pink">{item.discount}</span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="d-flex align-items-center gap-4 border-top border-dashed pt-3 mt-auto">
                                                <button className="btn btn-link p-0 text-secondary text-decoration-none small fw-bold text-uppercase d-flex align-items-center gap-1 hover-text-danger">
                                                    <Trash2 size={14} />
                                                    Remove
                                                </button>
                                                <div className="vr text-secondary opacity-25"></div>
                                                <button className="btn btn-link p-0 text-secondary text-decoration-none small fw-bold text-uppercase d-flex align-items-center gap-1 hover-text-brand-pink">
                                                    <Heart size={14} />
                                                    Move to Wishlist
                                                </button>
                                            </div>
                                        </div>

                                        {/* Mobile Delivery Info */}
                                        <div className="d-sm-none position-absolute top-0 end-0 m-3 small text-success fw-medium" style={{ fontSize: '0.75rem' }}>
                                            By {item.deliveryDate}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SUMMARY */}
                    <div className="col-12 col-lg-4">
                        <div className="card border-0 shadow-sm p-4 sticky-top" style={{ top: '100px', zIndex: 1020 }}>

                            <h3 className="small fw-bold text-muted text-uppercase tracking-widest mb-3" style={{ fontSize: '0.75rem' }}>Coupons</h3>

                            {/* Coupon Input */}
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter Coupon Code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    className="form-control border-secondary-subtle focus-ring-brand-pink"
                                    style={{ fontSize: '0.875rem' }}
                                />
                                <button className="btn btn-outline-secondary text-brand-pink fw-bold small hover-bg-pink-50 border-start-0" type="button">
                                    APPLY
                                </button>
                            </div>

                            <div className="border-top pt-4 mb-4">
                                <h3 className="small fw-bold text-muted text-uppercase tracking-widest mb-3" style={{ fontSize: '0.75rem' }}>Price Details</h3>

                                <div className="vstack gap-2 small text-secondary">
                                    <div className="d-flex justify-content-between">
                                        <span>Bag Total ({CART_ITEMS.length} items)</span>
                                        <span>₹{totalMRP.toLocaleString()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between text-success">
                                        <span>Bag Discount</span>
                                        <span>- ₹{totalDiscount.toLocaleString()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Shipping</span>
                                        <span className="text-success fw-bold">FREE</span>
                                    </div>
                                </div>

                                <hr className="my-3 text-secondary opacity-25" />

                                <div className="d-flex justify-content-between align-items-end mb-4">
                                    <span className="fw-bold text-dark">Total Payable</span>
                                    <span className="h5 fw-bold text-dark mb-0">₹{totalAmount.toLocaleString()}</span>
                                </div>

                                <button className="btn btn-primary bg-brand-pink border-0 w-100 py-3 fw-bold text-uppercase tracking-widest shadow hover-scale-105 active-scale-100 transition-transform">
                                    Proceed to Checkout
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="d-flex justify-content-center gap-4 pt-2 text-muted opacity-75">
                                <div className="d-flex flex-column align-items-center gap-1">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="d-flex flex-column align-items-center gap-1">
                                    <RotateCcw size={20} />
                                </div>
                                <div className="d-flex flex-column align-items-center gap-1">
                                    <Tag size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
