'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative">
            <Link href="/products/detail">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                </div>
            </Link>

            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-brand-pink hover:bg-white transition-all shadow-sm z-10">
                <Heart className="w-4 h-4 stroke-2" />
            </button>

            <Link href="/products/detail" className="block space-y-1">
                {product.fabric && (
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                        FABRIC: {product.fabric}
                    </p>
                )}
                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden">{product.brand}</h5>
                <h3 className="text-sm font-medium text-gray-900 leading-snug group-hover:text-brand-pink transition-colors line-clamp-2 min-h-[1.2em]">
                    {product.title}
                </h3>
                <div className="flex items-center gap-2 pt-1">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && <span className="text-xs text-gray-400 line-through decoration-gray-400/60">{product.originalPrice}</span>}
                    {product.discount && <span className="text-xs font-bold text-brand-pink">{product.discount}</span>}
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
