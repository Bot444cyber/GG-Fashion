'use client';

import React, { useState } from 'react';
import { Star, Heart, Share2, Truck, ShieldCheck, ShoppingBag, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

const ProductInfo: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [pincode, setPincode] = useState('');
    const [activeTab, setActiveTab] = useState<string | null>('product');

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const toggleTab = (tab: string) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">GG FASHION</h2>
                <h1 className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">
                    Chinon Silk Party Wear Designer Saree - Embroidered Border
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4">Read 14 Reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 pb-4 border-b border-gray-100">
                    <span className="text-3xl font-bold text-brand-pink">₹1,914</span>
                    <span className="text-lg text-gray-400 line-through">₹2,500</span>
                    <span className="bg-pink-100 text-brand-pink text-xs font-bold px-2 py-1 rounded">23% OFF</span>
                    <div className="ml-auto flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-full transition-all">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-brand-pink hover:bg-pink-50 rounded-full transition-all">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <p className="text-green-600 text-xs font-bold mt-3">Inclusive of all taxes</p>
            </div>

            {/* Description Short */}
            <p className="text-sm text-gray-600 leading-relaxed">
                Embrace Elegance With This Stunning Chinon Silk Saree, Perfect For Wedding Receptions And Festive Gatherings. The Intricate Embroidery And Stone Work Adds A Touch Of Royal Charm To Your Wardrobe.
            </p>

            {/* Details Accordion */}
            <div className="border-t border-b border-gray-100 divide-y divide-gray-100">
                {/* Product Details */}
                <div className="py-3">
                    <button
                        onClick={() => toggleTab('product')}
                        className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-800"
                    >
                        PRODUCT DETAILS
                        {activeTab === 'product' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {activeTab === 'product' && (
                        <div className="mt-3 space-y-1 text-sm text-gray-600">
                            <p><span className="font-semibold text-gray-900">Fabric:</span> Premium Chinon Silk</p>
                            <p><span className="font-semibold text-gray-900">Pattern:</span> Zari Embroidery with Stone Work</p>
                            <p><span className="font-semibold text-gray-900">Length:</span> 5.5 Meters</p>
                        </div>
                    )}
                </div>

                {/* Blouse Details */}
                <div className="py-3">
                    <button
                        onClick={() => toggleTab('blouse')}
                        className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-800"
                    >
                        BLOUSE DETAILS
                        {activeTab === 'blouse' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {activeTab === 'blouse' && (
                        <div className="mt-3 space-y-1 text-sm text-gray-600">
                            <p><span className="font-semibold text-gray-900">Fabric:</span> Raw Silk</p>
                            <p><span className="font-semibold text-gray-900">Pattern:</span> Embroidered Sleeves</p>
                            <p><span className="font-semibold text-gray-900">Length:</span> 0.8 Meters (Unstitched)</p>
                        </div>
                    )}
                </div>

                {/* Shipping & Returns */}
                <div className="py-3">
                    <button
                        onClick={() => toggleTab('shipping')}
                        className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-800"
                    >
                        SHIPPING & RETURNS
                        {activeTab === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {activeTab === 'shipping' && (
                        <div className="mt-3 space-y-1 text-sm text-gray-600">
                            <p><span className="font-semibold text-gray-900">Free Shipping:</span> On all orders above ₹2000.</p>
                            <p><span className="font-semibold text-gray-900">Delivery:</span> Estimated delivery within 5-7 business days.</p>
                            <p><span className="font-semibold text-gray-900">Returns:</span> 7-day hassle-free return policy. <span className="underline cursor-pointer">Read More</span></p>
                        </div>
                    )}
                </div>
            </div>

            {/* Selection Area */}
            <div className="space-y-4">
                {/* Size */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900 block mb-2">SELECT SIZE:</span>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-10 h-10 border flex items-center justify-center text-sm font-medium transition-colors ${selectedSize === size
                                        ? 'border-brand-pink bg-brand-pink text-white'
                                        : 'border-gray-200 text-gray-600 hover:border-gray-800'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900 block mb-2">SELECT COLOR:</span>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-1 cursor-pointer group">
                            <div className="w-8 h-8 rounded-full bg-red-700 ring-2 ring-offset-2 ring-brand-pink"></div>
                            <span className="text-[10px] uppercase font-bold text-gray-800">Rama</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity">
                            <div className="w-8 h-8 rounded-full bg-amber-900"></div>
                            <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-gray-800">Maroon</span>
                        </div>
                    </div>
                </div>

                {/* Quantity */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900 block mb-2">QTY:</span>
                    <div className="flex items-center border border-gray-200 w-24 rounded-sm">
                        <button
                            className="w-8 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </button>
                        <div className="flex-1 text-center text-sm font-bold text-gray-900">{quantity}</div>
                        <button
                            className="w-8 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-brand-pink text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200">
                    Buy Now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-900 py-4 rounded-sm font-bold uppercase tracking-widest hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>

            {/* Delivery Check */}
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 block mb-2">CHECK DELIVERY AVAILABILITY</span>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-pink"
                    />
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                        Check
                    </button>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-center">
                <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="w-8 h-8 text-brand-pink stroke-1" />
                    <span className="text-[10px] text-gray-500">100% Secure Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Truck className="w-8 h-8 text-brand-pink stroke-1" />
                    <span className="text-[10px] text-gray-500">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <CreditCard className="w-8 h-8 text-brand-pink stroke-1" />
                    <span className="text-[10px] text-gray-500">Genuine Product</span>
                </div>
            </div>

        </div>
    );
};

export default ProductInfo;
