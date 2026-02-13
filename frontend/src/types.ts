export interface Slide {
    id: number;
    image: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaText: string;
    alignment: 'left' | 'center' | 'right';
}

export interface NavItem {
    label: string;
    href: string;
    isHighlight?: boolean;
}

export interface Product {
    id: number;
    image: string;
    brand: string;
    title: string;
    price: string;
    originalPrice: string;
    discount: string;
    fabric?: string;
}

export interface Review {
    id: number;
    rating: number;
    text: string;
    author: string;
    location: string;
}

export interface ServiceFeature {
    id: number;
    icon: 'award' | 'sparkles' | 'truck' | 'repeat' | 'lock';
    title: string;
    description: string;
}
