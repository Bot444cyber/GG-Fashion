import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light pt-5 pb-4 border-top font-sans text-secondary">
            <div className="container">

                {/* Main Footer Content */}
                <div className="row g-4 g-lg-5 mb-5">

                    {/* Column 1: About */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="text-dark fw-bold small text-uppercase tracking-widest mb-3">About GG Fashion</h4>
                        <p className="small text-secondary text-justify lh-base">
                            Your destination for premium ethnic wear. We blend traditional craftsmanship with modern silhouettes to bring you the finest Sarees, Lehengas, and Suits.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="btn btn-white border rounded-circle d-flex align-items-center justify-content-center p-0 shadow-sm text-secondary hover-bg-brand-pink hover-text-white transition-all"
                                    style={{ width: '36px', height: '36px' }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>

                        {/* Payment Methods */}
                        <div className="pt-4">
                            <h4 className="text-dark fw-bold small text-uppercase tracking-widest mb-3">We Accept</h4>
                            <div className="d-flex gap-3 align-items-center opacity-75">
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" style={{ height: '24px', objectFit: 'contain' }} />
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" style={{ height: '24px', objectFit: 'contain' }} />
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="PayPal" style={{ height: '24px', objectFit: 'contain' }} />
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Amex" style={{ height: '24px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Shop Online */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="text-dark fw-bold small text-uppercase tracking-widest mb-4">Shop Online</h4>
                        <ul className="list-unstyled small space-y-2">
                            {['New Arrivals', 'Banarasi Sarees', 'Designer Lehengas', 'Party Wear Suits', 'Festive Collection', 'Sale'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="text-decoration-none text-secondary hover-text-brand-pink transition-all">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Care */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="text-dark fw-bold small text-uppercase tracking-widest mb-4">Customer Care</h4>
                        <ul className="list-unstyled small">
                            {['Track Order', 'Return & Exchange', 'Shipping Policy', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="text-decoration-none text-secondary hover-text-brand-pink transition-all">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Stay Connected */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="text-dark fw-bold small text-uppercase tracking-widest mb-4">Stay Connected</h4>
                        <p className="small mb-4 text-secondary">
                            Subscribe to get exclusive offers and new launch updates.
                        </p>

                        {/* Newsletter Form */}
                        <div className="input-group mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control border-secondary-subtle font-small"
                                style={{ fontSize: '0.875rem' }}
                            />
                            <button className="btn bg-brand-pink text-white small fw-bold text-uppercase px-3 hover-bg-pink-dark">
                                Join
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="small text-secondary space-y-3">
                            <div className="d-flex align-items-start gap-3 mb-2">
                                <MapPin size={18} className="text-brand-pink flex-shrink-0 mt-1" />
                                <span>D-200, Omicron-2, Greater Noida, Uttar Pradesh - 201310</span>
                            </div>
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <Phone size={16} className="text-brand-pink flex-shrink-0" />
                                <a href="tel:+919211388816" className="text-decoration-none text-secondary hover-text-brand-pink">+91 9211388816</a>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Mail size={16} className="text-brand-pink flex-shrink-0" />
                                <a href="mailto:gg.enterprises200@gmail.com" className="text-decoration-none text-secondary hover-text-brand-pink">gg.enterprises200@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <hr className="my-4 text-secondary opacity-25" />

                {/* Popular Searches (SEO) */}
                <div className="text-center mb-4">
                    <h5 className="small fw-bold text-dark text-uppercase tracking-wider mb-2" style={{ fontSize: '10px' }}>Popular Searches:</h5>
                    <p className="text-muted lh-lg" style={{ fontSize: '10px' }}>
                        Banarasi Silk Sarees | Georgette Party Wear | Wedding Lehengas | Indian Ethnic Wear Online | Buy Sarees in Noida | Designer Suits for Women | Festive Kurtis | Bridal Trousseau | Handloom Silk Sarees | GG Fashion Greater Noida | Bollywood Replica Sarees | Sangeet Outfits | Haldi Ceremony Dress
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center small text-muted" style={{ fontSize: '0.75rem' }}>
                    © 2026 GG Fashion. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
