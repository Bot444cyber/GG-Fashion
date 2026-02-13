'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Trash2, Truck, Tag, ShieldCheck, RotateCcw, CheckCircle } from 'lucide-react';

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
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Page Title */}
                <h1 className="text-2xl font-sans font-medium text-gray-900 mb-6">
                    Shopping <span className="font-bold">Bag</span> <span className="text-gray-500 text-lg font-normal">({CART_ITEMS.length} Items)</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN - CART ITEMS */}
                    <div className="lg:col-span-8 space-y-4">

                        {/* Savings Message */}
                        <div className="bg-green-100 border border-green-200 rounded-sm p-3 flex items-center justify-center lg:justify-start gap-2 text-green-800 text-sm font-medium">
                            <Tag className="w-4 h-4" />
                            <span>Congratulations! You've saved ₹{totalDiscount.toLocaleString()} on this order.</span>
                        </div>

                        {/* Cart Items List */}
                        <div className="space-y-4">
                            {CART_ITEMS.map((item) => (
                                <div key={item.id} className="bg-white border border-gray-100 rounded-sm p-4 flex flex-col sm:flex-row gap-4 relative hover:shadow-sm transition-shadow">

                                    {/* Image */}
                                    <div className="w-full sm:w-32 aspect-[3/4] flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.brand}</h3>
                                                    <h2 className="text-base font-medium text-gray-800 mb-2 leading-tight">{item.title}</h2>
                                                </div>
                                                {/* Delivery Info (Desktop) */}
                                                <div className="hidden sm:flex items-center gap-1.5 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                                                    <Truck className="w-3.5 h-3.5" />
                                                    <span>Delivers by {item.deliveryDate}</span>
                                                </div>
                                            </div>

                                            {/* Size & Qty Selectors */}
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-600 border border-gray-200 cursor-pointer hover:border-gray-300">
                                                    Size: <span className="font-medium text-gray-900">{item.size}</span>
                                                </div>
                                                <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-600 border border-gray-200 cursor-pointer hover:border-gray-300">
                                                    Qty: <span className="font-medium text-gray-900">{item.qty}</span>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-baseline gap-2 mb-4">
                                                <span className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                                                <span className="text-sm text-gray-400 line-through">₹{item.originalPrice.toLocaleString()}</span>
                                                <span className="text-xs font-bold text-brand-pink">{item.discount}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-4 md:gap-6 border-t border-dashed border-gray-100 pt-3 mt-auto">
                                            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-red-500 transition-colors uppercase tracking-wide">
                                                <Trash2 className="w-3.5 h-3.5" />
                                                Remove
                                            </button>
                                            <div className="h-3 w-px bg-gray-200"></div>
                                            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-pink transition-colors uppercase tracking-wide">
                                                <Heart className="w-3.5 h-3.5" />
                                                Move to Wishlist
                                            </button>
                                        </div>
                                    </div>

                                    {/* Mobile Delivery Info */}
                                    <div className="sm:hidden absolute top-4 right-4 items-center gap-1 text-green-600 text-xs font-medium">
                                        <span>By {item.deliveryDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SUMMARY */}
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-gray-100 rounded-sm p-5 sticky top-24">

                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Coupons</h3>

                            {/* Coupon Input */}
                            <div className="flex gap-2 mb-8">
                                <input
                                    type="text"
                                    placeholder="Enter Coupon Code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    className="flex-1 border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink"
                                />
                                <button className="text-brand-pink font-bold text-sm px-3 hover:bg-pink-50 rounded-sm transition-colors">
                                    APPLY
                                </button>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-6">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Price Details</h3>

                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Bag Total ({CART_ITEMS.length} items)</span>
                                        <span>₹{totalMRP.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-green-600">
                                        <span>Bag Discount</span>
                                        <span>- ₹{totalDiscount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-medium">FREE</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 my-4"></div>

                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-base font-bold text-gray-900">Total Payable</span>
                                    <span className="text-xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</span>
                                </div>

                                <button className="w-full bg-[#9d174d] text-white font-bold py-3.5 rounded-sm shadow-md shadow-pink-200 hover:bg-[#83113f] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-widest uppercase">
                                    Proceed to Checkout
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex justify-center gap-6 pt-2">
                                <div className="flex flex-col items-center gap-1 text-gray-400">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col items-center gap-1 text-gray-400">
                                    <RotateCcw className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col items-center gap-1 text-gray-400">
                                    <Tag className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
