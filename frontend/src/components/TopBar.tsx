import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-pink-100 text-xs md:text-sm text-center py-2 px-4 border-b border-pink-200">
            <span className="font-semibold text-gray-800">
                For styling assistance & customizations, WhatsApp us at
                <a href="tel:+919211388816" className="font-bold underline ml-1 hover:text-brand-pink transition-colors">
                    +91-9211388816
                </a>
            </span>
        </div>
    );
};

export default TopBar;
