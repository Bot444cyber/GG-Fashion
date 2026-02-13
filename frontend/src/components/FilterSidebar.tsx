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
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-[280px] bg-white px-5 py-6 shadow-2xl overflow-y-auto
                transition-transform duration-300 ease-in-out
                lg:static lg:block lg:w-64 lg:p-0 lg:shadow-none lg:transform-none lg:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>

                {/* Mobile Header with Close Button */}
                <div className="flex items-center justify-between mb-6 lg:hidden">
                    <h2 className="text-lg font-serif font-bold text-gray-900">Filters</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="space-y-8 lg:pr-4">
                    {/* Category Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('category')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Category</h3>
                            {openSections.category ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.category && (
                            <ul className="space-y-3">
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
                                            <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${cat.checked ? 'bg-brand-pink border-brand-pink' : 'border-gray-300 group-hover:border-gray-400 bg-white'}`}>
                                                {cat.checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                            </div>
                                            <span className={`text-xs ${cat.checked ? 'font-bold text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat.label}</span>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-medium">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Price Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('price')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Price</h3>
                            {openSections.price ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.price && (
                            <ul className="space-y-3">
                                {[
                                    'Below ₹1,000',
                                    '₹1,000 - ₹2,500',
                                    '₹2,500 - ₹5,000',
                                    '₹5,000 - ₹10,000',
                                    'Above ₹10,000'
                                ].map((price, idx) => (
                                    <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-gray-400 bg-white" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900">{price}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Occasion Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('occasion')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Occasion</h3>
                            {openSections.occasion ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.occasion && (
                            <ul className="space-y-3">
                                {['Wedding', 'Party Wear', 'Festive', 'Casual / Daily', 'Work Wear', 'Haldi / Mehendi'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-gray-400 bg-white" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Fabric Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('fabric')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Fabric</h3>
                            {openSections.fabric ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.fabric && (
                            <ul className="space-y-3">
                                {['Banarasi Silk', 'Georgette', 'Chiffon', 'Cotton', 'Organza', 'Velvet', 'Net'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-gray-400 bg-white" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Work & Pattern */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('work')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Work & Pattern</h3>
                            {openSections.work ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.work && (
                            <ul className="space-y-3">
                                {['Embroidered', 'Zari Work', 'Printed', 'Stone Work', 'Mirror Work', 'Handwoven'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-gray-400 bg-white" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Size Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('size')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Size</h3>
                            {openSections.size ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.size && (
                            <div className="flex flex-wrap gap-2">
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'].map((size, idx) => (
                                    <button key={idx} className="border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Color Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('color')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Color</h3>
                            {openSections.color ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.color && (
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'bg-pink-500', 'bg-red-500', 'bg-yellow-400', 'bg-green-500',
                                    'bg-blue-500', 'bg-black', 'bg-white border border-gray-200',
                                    'bg-purple-600', 'bg-orange-500', 'bg-amber-800'
                                ].map((colorClass, idx) => (
                                    <div key={idx} className={`w-6 h-6 rounded-full cursor-pointer hover:scale-110 transition-transform ${colorClass}`}></div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Discount Filter */}
                    <div className="border-b border-gray-100 pb-6">
                        <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            onClick={() => toggleSection('discount')}
                        >
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Discount</h3>
                            {openSections.discount ? <Minus className="w-3 h-3 text-gray-400" /> : <Plus className="w-3 h-3 text-gray-400" />}
                        </div>
                        {openSections.discount && (
                            <ul className="space-y-3">
                                {['10% and above', '30% and above', '50% and above'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-gray-400 bg-white" />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-900">{item}</span>
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
