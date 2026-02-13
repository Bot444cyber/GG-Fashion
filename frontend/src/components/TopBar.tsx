import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-light text-center py-2 px-3 border-bottom small">
            <span className="fw-semibold text-secondary">
                For styling assistance & customizations, WhatsApp us at
                <a href="tel:+919211388816" className="fw-bold text-decoration-underline ms-1 text-dark hover-text-brand-pink transition-colors">
                    +91-9211388816
                </a>
            </span>
        </div>
    );
};

export default TopBar;
