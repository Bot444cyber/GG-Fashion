'use client';

import React from 'react';
import { Star, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const ReviewsSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-20 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-8">
                <h3 className="font-sans text-2xl md:text-3xl text-gray-800">
                    Ratings & <span className="text-brand-pink font-bold">Reviews</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Summary Card */}
                <div className="lg:col-span-4 h-full">
                    <div className="bg-white border boundary-gray-200 p-8 text-center sticky top-24 rounded-sm shadow-sm">
                        <div className="text-6xl font-bold text-gray-900 mb-2">4.5</div>
                        <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                            {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            <Star className="w-5 h-5 fill-current text-gray-300" />
                        </div>
                        <p className="text-sm text-gray-500 mb-8">Based on 14 Reviews</p>

                        <button className="w-full border border-gray-300 py-3 text-sm font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition-colors">
                            Write a Review
                        </button>
                    </div>
                </div>

                {/* Review List */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Review 1 */}
                    <div className="border-b border-gray-100 pb-8">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Hetal Shah</h4>
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle className="w-3 h-3" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Verified Buyer</span>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">Feb 14, 2026</span>
                        </div>
                        <div className="flex gap-1 text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            "Beautiful dress, perfect size. I ordered for my sister's wedding and it arrived on time. The fabric quality is exceptional."
                        </p>
                    </div>

                    {/* Review 2 */}
                    <div className="border-b border-gray-100 pb-8">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Indu Valavala</h4>
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle className="w-3 h-3" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Verified Buyer</span>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">Feb 02, 2026</span>
                        </div>
                        <div className="flex gap-1 text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            "This is my second jewelry order from GG Fashion. I loved them both. They arrived well packed and exactly as shown in pictures."
                        </p>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end gap-2 mt-8">
                        <button className="w-8 h-8 flex items-center justify-center bg-brand-pink text-white text-xs font-bold rounded-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-sm">3</button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-sm"><ChevronRight className="w-3 h-3" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
