import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100 font-sans text-gray-600">
            <div className="container mx-auto px-4">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase">About GG Fashion</h4>
                        <p className="text-sm leading-relaxed text-gray-500 text-justify">
                            Your destination for premium ethnic wear. We blend traditional craftsmanship with modern silhouettes to bring you the finest Sarees, Lehengas, and Suits.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300 shadow-sm">
                                <Facebook className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300 shadow-sm">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300 shadow-sm">
                                <Twitter className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300 shadow-sm">
                                <Youtube className="w-4 h-4 fill-current" />
                            </a>
                        </div>

                        {/* Payment Methods */}
                        <div className="pt-4">
                            <h4 className="text-gray-900 font-bold text-xs tracking-widest uppercase mb-4">We Accept</h4>
                            <div className="flex gap-3 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6 object-contain" />
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-6 object-contain" />
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="PayPal" className="h-6 object-contain" />
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Amex" className="h-6 object-contain" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Shop Online */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-6">Shop Online</h4>
                        <ul className="space-y-3 text-sm">
                            {['New Arrivals', 'Banarasi Sarees', 'Designer Lehengas', 'Party Wear Suits', 'Festive Collection', 'Sale'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-brand-pink transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Care */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-6">Customer Care</h4>
                        <ul className="space-y-3 text-sm">
                            {['Track Order', 'Return & Exchange', 'Shipping Policy', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-brand-pink transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Stay Connected */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-6">Stay Connected</h4>
                        <p className="text-sm mb-4">
                            Subscribe to get exclusive offers and new launch updates.
                        </p>

                        {/* Newsletter Form */}
                        <div className="flex mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white border border-gray-300 border-r-0 px-4 py-2 w-full text-sm outline-none focus:border-brand-pink transition-colors"
                            />
                            <button className="bg-brand-pink text-white px-6 py-2 text-xs font-bold tracking-wider hover:bg-pink-700 transition-colors uppercase">
                                Join
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                                <span>D-200, Omicron-2, Greater Noida, Uttar Pradesh - 201310</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-brand-pink shrink-0" />
                                <a href="tel:+919211388816" className="hover:text-brand-pink transition-colors">+91 9211388816</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-brand-pink shrink-0" />
                                <a href="mailto:gg.enterprises200@gmail.com" className="hover:text-brand-pink transition-colors">gg.enterprises200@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Popular Searches (SEO) */}
                <div className="text-center mb-8">
                    <h5 className="text-[10px] font-bold text-gray-800 uppercase tracking-wider mb-2">Popular Searches:</h5>
                    <p className="text-[10px] text-gray-500 leading-loose">
                        Banarasi Silk Sarees | Georgette Party Wear | Wedding Lehengas | Indian Ethnic Wear Online | Buy Sarees in Noida | Designer Suits for Women | Festive Kurtis | Bridal Trousseau | Handloom Silk Sarees | GG Fashion Greater Noida | Bollywood Replica Sarees | Sangeet Outfits | Haldi Ceremony Dress
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-400">
                    © 2026 GG Fashion. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
