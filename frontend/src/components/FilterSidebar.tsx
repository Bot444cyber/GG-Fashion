'use client';

import React, { useState } from 'react';
import { Minus, Plus, Check, X } from 'lucide-react';

interface FilterSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen = false, onClose }) => {
    // State for collapsible sections (all open by default as per design)
    const [openSections, setOpenSections] = useState({
        category: true,
        price: true,
        occasion: true,
        fabric: true,
        work: true,
        size: true,
        color: true,
        discount: true
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-black-50 z-3 d-lg-none"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                position-fixed top-0 start-0 bottom-0 z-3 bg-white px-4 py-4 shadow-lg overflow-auto
                transition-transform duration-300 ease-in-out
                d-lg-block shadow-lg-none transform-none
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg-translate-x-0'}
            `}
                style={{ width: '280px', zIndex: 1045 }} // High z-index for mobile, standard for desktop handled by layout
            >

                {/* Mobile Header with Close Button */}
                <div className="d-flex align-items-center justify-content-between mb-4 d-lg-none">
                    <h2 className="h5 font-serif fw-bold text-dark mb-0">Filters</h2>
                    <button
                        onClick={onClose}
                        className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                    >
                        <X size={20} className="text-secondary" />
                    </button>
                </div>

                <div className="vstack gap-4 pe-lg-3">
                    {/* Category Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('category')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Category</h3>
                            {openSections.category ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.category && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {[
                                    { label: 'Sarees', count: 120, checked: true },
                                    { label: 'Lehengas', count: 45, checked: false },
                                    { label: 'Salwar Suits', count: 32, checked: false },
                                    { label: 'Kurtis', count: 50, checked: false },
                                    { label: 'Gowns', count: 18, checked: false },
                                    { label: 'Dupattas', count: 25, checked: false },
                                ].map((cat, idx) => (
                                    <li key={idx} className="d-flex align-items-center justify-content-between group cursor-pointer">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className={`border rounded-1 d-flex align-items-center justify-content-center transition-colors ${cat.checked ? 'bg-brand-pink border-brand-pink' : 'border-secondary-subtle bg-white'}`}
                                                style={{ width: '16px', height: '16px' }}
                                            >
                                                {cat.checked && <Check size={10} className="text-white" strokeWidth={3} />}
                                            </div>
                                            <span className={`small ${cat.checked ? 'fw-bold text-dark' : 'text-secondary hover-text-dark'}`} style={{ fontSize: '0.8rem' }}>{cat.label}</span>
                                        </div>
                                        <span className="small text-muted fw-medium" style={{ fontSize: '0.7rem' }}>({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Price Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('price')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Price</h3>
                            {openSections.price ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.price && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {[
                                    'Below ₹1,000',
                                    '₹1,000 - ₹2,500',
                                    '₹2,500 - ₹5,000',
                                    '₹5,000 - ₹10,000',
                                    'Above ₹10,000'
                                ].map((price, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-2 cursor-pointer group">
                                        <div className="border border-secondary-subtle rounded-1 bg-white hover-border-dark" style={{ width: '16px', height: '16px' }} />
                                        <span className="small text-secondary hover-text-dark" style={{ fontSize: '0.8rem' }}>{price}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Occasion Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('occasion')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Occasion</h3>
                            {openSections.occasion ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.occasion && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {['Wedding', 'Party Wear', 'Festive', 'Casual / Daily', 'Work Wear', 'Haldi / Mehendi'].map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-2 cursor-pointer group">
                                        <div className="border border-secondary-subtle rounded-1 bg-white hover-border-dark" style={{ width: '16px', height: '16px' }} />
                                        <span className="small text-secondary hover-text-dark" style={{ fontSize: '0.8rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Fabric Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('fabric')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Fabric</h3>
                            {openSections.fabric ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.fabric && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {['Banarasi Silk', 'Georgette', 'Chiffon', 'Cotton', 'Organza', 'Velvet', 'Net'].map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-2 cursor-pointer group">
                                        <div className="border border-secondary-subtle rounded-1 bg-white hover-border-dark" style={{ width: '16px', height: '16px' }} />
                                        <span className="small text-secondary hover-text-dark" style={{ fontSize: '0.8rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Work & Pattern */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('work')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Work & Pattern</h3>
                            {openSections.work ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.work && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {['Embroidered', 'Zari Work', 'Printed', 'Stone Work', 'Mirror Work', 'Handwoven'].map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-2 cursor-pointer group">
                                        <div className="border border-secondary-subtle rounded-1 bg-white hover-border-dark" style={{ width: '16px', height: '16px' }} />
                                        <span className="small text-secondary hover-text-dark" style={{ fontSize: '0.8rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Size Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('size')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Size</h3>
                            {openSections.size ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.size && (
                            <div className="d-flex flex-wrap gap-2">
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'].map((size, idx) => (
                                    <button key={idx} className="btn btn-outline-light text-secondary border-secondary-subtle btn-sm hover-text-dark hover-border-dark">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Color Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('color')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Color</h3>
                            {openSections.color ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.color && (
                            <div className="d-flex flex-wrap gap-3">
                                {[
                                    '#ec4899', '#ef4444', '#facc15', '#22c55e',
                                    '#3b82f6', '#000000', '#ffffff',
                                    '#9333ea', '#f97316', '#92400e'
                                ].map((color, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-circle cursor-pointer hover-scale-110 transition-transform border border-secondary-subtle"
                                        style={{ width: '24px', height: '24px', backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Discount Filter */}
                    <div className="border-bottom pb-4">
                        <div
                            className="d-flex align-items-center justify-content-between cursor-pointer mb-3"
                            onClick={() => toggleSection('discount')}
                        >
                            <h3 className="small fw-bold text-uppercase tracking-widest text-dark mb-0" style={{ fontSize: '0.75rem' }}>Discount</h3>
                            {openSections.discount ? <Minus size={14} className="text-secondary" /> : <Plus size={14} className="text-secondary" />}
                        </div>
                        {openSections.discount && (
                            <ul className="list-unstyled vstack gap-2 mb-0">
                                {['10% and above', '30% and above', '50% and above'].map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-2 cursor-pointer group">
                                        <div className="border border-secondary-subtle rounded-1 bg-white hover-border-dark" style={{ width: '16px', height: '16px' }} />
                                        <span className="small text-secondary hover-text-dark" style={{ fontSize: '0.8rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default FilterSidebar;
