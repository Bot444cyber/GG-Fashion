'use client';

import React from 'react';
import { Star, CheckCircle, ChevronRight } from 'lucide-react';

const ReviewsSection: React.FC = () => {
    return (
        <section className="bg-white py-5 border-top">
            <div className="d-flex align-items-center gap-2 mb-4">
                <h3 className="h3 font-sans text-dark mb-0">
                    Ratings & <span className="fw-bold text-brand-pink">Reviews</span>
                </h3>
            </div>

            <div className="row g-5">
                {/* Summary Card */}
                <div className="col-12 col-lg-4">
                    <div className="card border p-4 text-center sticky-top shadow-sm" style={{ top: '100px' }}>
                        <div className="display-4 fw-bold text-dark mb-2">4.5</div>
                        <div className="d-flex justify-content-center gap-1 mb-3 text-warning">
                            {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            <Star size={20} fill="currentColor" className="text-secondary opacity-25" />
                        </div>
                        <p className="small text-secondary mb-4">Based on 14 Reviews</p>

                        <button className="btn btn-outline-dark w-100 py-2 fw-medium hover-bg-light transition-colors">
                            Write a Review
                        </button>
                    </div>
                </div>

                {/* Review List */}
                <div className="col-12 col-lg-8">
                    <div className="vstack gap-4">
                        {/* Review 1 */}
                        <div className="border-bottom pb-4">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h4 className="fw-bold text-dark small mb-1">Hetal Shah</h4>
                                    <div className="d-flex align-items-center gap-1 text-success">
                                        <CheckCircle size={12} />
                                        <span className="tiny fw-bold text-uppercase tracking-wider" style={{ fontSize: '10px' }}>Verified Buyer</span>
                                    </div>
                                </div>
                                <span className="small text-muted">Feb 14, 2026</span>
                            </div>
                            <div className="d-flex gap-1 text-warning mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="small text-secondary lh-base mb-0">
                                "Beautiful dress, perfect size. I ordered for my sister's wedding and it arrived on time. The fabric quality is exceptional."
                            </p>
                        </div>

                        {/* Review 2 */}
                        <div className="border-bottom pb-4">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h4 className="fw-bold text-dark small mb-1">Indu Valavala</h4>
                                    <div className="d-flex align-items-center gap-1 text-success">
                                        <CheckCircle size={12} />
                                        <span className="tiny fw-bold text-uppercase tracking-wider" style={{ fontSize: '10px' }}>Verified Buyer</span>
                                    </div>
                                </div>
                                <span className="small text-muted">Feb 02, 2026</span>
                            </div>
                            <div className="d-flex gap-1 text-warning mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="small text-secondary lh-base mb-0">
                                "This is my second jewelry order from GG Fashion. I loved them both. They arrived well packed and exactly as shown in pictures."
                            </p>
                        </div>

                        {/* Pagination */}
                        <div className="d-flex justify-content-end gap-2 mt-2">
                            <button className="btn btn-sm btn-brand-pink text-white fw-bold d-flex align-items-center justify-content-center p-0 rounded-sm" style={{ width: '32px', height: '32px' }}>1</button>
                            <button className="btn btn-sm btn-outline-secondary text-secondary fw-bold d-flex align-items-center justify-content-center p-0 rounded-sm hover-bg-light" style={{ width: '32px', height: '32px' }}>2</button>
                            <button className="btn btn-sm btn-outline-secondary text-secondary fw-bold d-flex align-items-center justify-content-center p-0 rounded-sm hover-bg-light" style={{ width: '32px', height: '32px' }}>3</button>
                            <button className="btn btn-sm btn-outline-secondary text-secondary fw-bold d-flex align-items-center justify-content-center p-0 rounded-sm hover-bg-light" style={{ width: '32px', height: '32px' }}><ChevronRight size={12} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
