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
        <div className="vstack gap-4">
            {/* Header */}
            <div>
                <h2 className="small fw-bold text-muted text-uppercase tracking-widest mb-2">GG FASHION</h2>
                <h1 className="h3 font-serif text-dark mb-2">
                    Chinon Silk Party Wear Designer Saree - Embroidered Border
                </h1>

                {/* Rating */}
                <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex text-warning">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <span className="small text-secondary text-decoration-underline offset-4">Read 14 Reviews</span>
                </div>

                {/* Price */}
                <div className="d-flex align-items-baseline gap-3 pb-3 border-bottom">
                    <span className="h2 fw-bold text-brand-pink mb-0">₹1,914</span>
                    <span className="h5 text-muted text-decoration-line-through mb-0">₹2,500</span>
                    <span className="badge bg-pink-subtle text-brand-pink fw-bold px-2 py-1">23% OFF</span>
                    <div className="ms-auto d-flex gap-2">
                        <button className="btn btn-light rounded-circle p-2 text-secondary hover-text-brand-pink hover-bg-pink-50 transition-all">
                            <Heart size={20} />
                        </button>
                        <button className="btn btn-light rounded-circle p-2 text-secondary hover-text-brand-pink hover-bg-pink-50 transition-all">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                <p className="text-success small fw-bold mt-2">Inclusive of all taxes</p>
            </div>

            {/* Description Short */}
            <p className="text-secondary small lh-base">
                Embrace Elegance With This Stunning Chinon Silk Saree, Perfect For Wedding Receptions And Festive Gatherings. The Intricate Embroidery And Stone Work Adds A Touch Of Royal Charm To Your Wardrobe.
            </p>

            {/* Details Accordion */}
            <div className="border-top border-bottom">
                {/* Product Details */}
                <div className="py-3 border-bottom">
                    <button
                        onClick={() => toggleTab('product')}
                        className="w-100 d-flex justify-content-between align-items-center btn btn-link text-decoration-none p-0 text-dark small fw-bold text-uppercase tracking-widest"
                    >
                        PRODUCT DETAILS
                        {activeTab === 'product' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {activeTab === 'product' && (
                        <div className="mt-3 small text-secondary">
                            <p className="mb-1"><span className="fw-bold text-dark">Fabric:</span> Premium Chinon Silk</p>
                            <p className="mb-1"><span className="fw-bold text-dark">Pattern:</span> Zari Embroidery with Stone Work</p>
                            <p className="mb-0"><span className="fw-bold text-dark">Length:</span> 5.5 Meters</p>
                        </div>
                    )}
                </div>

                {/* Blouse Details */}
                <div className="py-3 border-bottom">
                    <button
                        onClick={() => toggleTab('blouse')}
                        className="w-100 d-flex justify-content-between align-items-center btn btn-link text-decoration-none p-0 text-dark small fw-bold text-uppercase tracking-widest"
                    >
                        BLOUSE DETAILS
                        {activeTab === 'blouse' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {activeTab === 'blouse' && (
                        <div className="mt-3 small text-secondary">
                            <p className="mb-1"><span className="fw-bold text-dark">Fabric:</span> Raw Silk</p>
                            <p className="mb-1"><span className="fw-bold text-dark">Pattern:</span> Embroidered Sleeves</p>
                            <p className="mb-0"><span className="fw-bold text-dark">Length:</span> 0.8 Meters (Unstitched)</p>
                        </div>
                    )}
                </div>

                {/* Shipping & Returns */}
                <div className="py-3">
                    <button
                        onClick={() => toggleTab('shipping')}
                        className="w-100 d-flex justify-content-between align-items-center btn btn-link text-decoration-none p-0 text-dark small fw-bold text-uppercase tracking-widest"
                    >
                        SHIPPING & RETURNS
                        {activeTab === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {activeTab === 'shipping' && (
                        <div className="mt-3 small text-secondary">
                            <p className="mb-1"><span className="fw-bold text-dark">Free Shipping:</span> On all orders above ₹2000.</p>
                            <p className="mb-1"><span className="fw-bold text-dark">Delivery:</span> Estimated delivery within 5-7 business days.</p>
                            <p className="mb-0"><span className="fw-bold text-dark">Returns:</span> 7-day hassle-free return policy. <span className="text-decoration-underline cursor-pointer">Read More</span></p>
                        </div>
                    )}
                </div>
            </div>

            {/* Selection Area */}
            <div className="vstack gap-4">
                {/* Size */}
                <div>
                    <span className="small fw-bold text-uppercase tracking-widest text-dark d-block mb-2">SELECT SIZE:</span>
                    <div className="d-flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`btn btn-sm rounded-0 d-flex align-items-center justify-content-center fw-medium transition-all ${selectedSize === size
                                    ? 'btn-brand-pink text-white border-brand-pink shadow-sm'
                                    : 'btn-outline-secondary text-secondary border-secondary-subtle hover-border-dark'
                                    }`}
                                style={{ width: '40px', height: '40px' }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color */}
                <div>
                    <span className="small fw-bold text-uppercase tracking-widest text-dark d-block mb-2">SELECT COLOR:</span>
                    <div className="d-flex gap-3">
                        <div className="d-flex flex-column align-items-center gap-1 cursor-pointer">
                            <div className="rounded-circle bg-danger border border-2 border-white ring-2 ring-brand-pink shadow-sm" style={{ width: '32px', height: '32px', outline: '2px solid var(--brand-pink)' }}></div>
                            <span className="tiny fw-bold text-dark text-uppercase mt-1" style={{ fontSize: '10px' }}>Rama</span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1 cursor-pointer opacity-50 hover-opacity-100 transition-opacity">
                            <div className="rounded-circle bg-dark" style={{ width: '32px', height: '32px' }}></div>
                            <span className="tiny fw-bold text-muted text-uppercase mt-1" style={{ fontSize: '10px' }}>Maroon</span>
                        </div>
                    </div>
                </div>

                {/* Quantity */}
                <div>
                    <span className="small fw-bold text-uppercase tracking-widest text-dark d-block mb-2">QTY:</span>
                    <div className="input-group" style={{ width: '120px' }}>
                        <button
                            className="btn btn-outline-secondary border-end-0"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </button>
                        <div className="form-control text-center border-start-0 border-end-0 fw-bold">{quantity}</div>
                        <button
                            className="btn btn-outline-secondary border-start-0"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="d-none d-md-flex gap-3 pt-2">
                <button className="btn btn-primary bg-brand-pink border-0 flex-grow-1 py-3 fw-bold text-uppercase tracking-widest shadow hover-bg-pink-dark">
                    Buy Now
                </button>
                <button className="btn btn-outline-dark flex-grow-1 py-3 fw-bold text-uppercase tracking-widest hover-bg-light d-flex align-items-center justify-content-center gap-2">
                    <ShoppingBag size={20} />
                    Add to Cart
                </button>
            </div>

            {/* Mobile Fixed Bottom Action Bar */}
            <div className="fixed-bottom d-md-none bg-white border-top p-2 shadow-lg" style={{ zIndex: 1030 }}>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-dark flex-grow-1 py-2 fw-bold text-uppercase tracking-widest d-flex align-items-center justify-content-center gap-2 small">
                        <ShoppingBag size={18} />
                        Add to Cart
                    </button>
                    <button className="btn btn-primary bg-brand-pink border-0 flex-grow-1 py-2 fw-bold text-uppercase tracking-widest shadow-sm small">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Delivery Check */}
            <div>
                <span className="small fw-bold text-uppercase tracking-widest text-dark d-block mb-2">CHECK DELIVERY AVAILABILITY</span>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="form-control border-secondary-subtle focus-ring-brand-pink"
                    />
                    <button className="btn btn-dark fw-bold text-uppercase tracking-widest px-4">
                        Check
                    </button>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="row row-cols-3 g-3 pt-3 text-center">
                <div className="col d-flex flex-column align-items-center gap-2">
                    <ShieldCheck size={32} className="text-brand-pink" />
                    <span className="text-muted small" style={{ fontSize: '10px' }}>100% Secure Payment</span>
                </div>
                <div className="col d-flex flex-column align-items-center gap-2">
                    <Truck size={32} className="text-brand-pink" />
                    <span className="text-muted small" style={{ fontSize: '10px' }}>Fast Delivery</span>
                </div>
                <div className="col d-flex flex-column align-items-center gap-2">
                    <CreditCard size={32} className="text-brand-pink" />
                    <span className="text-muted small" style={{ fontSize: '10px' }}>Genuine Product</span>
                </div>
            </div>

        </div>
    );
};

export default ProductInfo;
