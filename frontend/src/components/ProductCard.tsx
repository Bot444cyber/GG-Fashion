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
        <div className="position-relative group">
            <Link href="/products/detail" className="d-block">
                <div className="position-relative ratio ratio-3x4 overflow-hidden rounded mb-3 bg-light">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-105"
                    />
                </div>
            </Link>

            <button className="btn btn-light bg-white-80 backdrop-blur-sm rounded-circle position-absolute top-0 end-0 m-2 p-0 d-flex align-items-center justify-content-center text-secondary hover-text-brand-pink hover-bg-white shadow-sm z-1"
                style={{ width: '32px', height: '32px' }}
            >
                <Heart size={16} />
            </button>

            <Link href="/products/detail" className="d-block text-decoration-none vstack gap-1">
                {product.fabric && (
                    <p className="text-muted fw-bold text-uppercase tracking-widest mb-1" style={{ fontSize: '10px' }}>
                        FABRIC: {product.fabric}
                    </p>
                )}
                {/* Brand hidden as per original */}
                <h5 className="text-muted fw-bold text-uppercase tracking-widest d-none" style={{ fontSize: '10px' }}>{product.brand}</h5>

                <h3 className="h6 fw-bold text-dark lh-sm line-clamp-2 group-hover-text-brand-pink transition-colors" style={{ minHeight: '2.5rem' }}>
                    {product.title}
                </h3>

                <div className="d-flex align-items-center gap-2 mt-1">
                    <span className="fw-bold text-dark fs-6">{product.price}</span>
                    {product.originalPrice && <span className="small text-muted text-decoration-line-through decoration-muted" style={{ fontSize: '0.75rem' }}>{product.originalPrice}</span>}
                    {product.discount && <span className="small fw-bold text-brand-pink" style={{ fontSize: '0.75rem' }}>{product.discount}</span>}
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
