import { Slide, NavItem, Product, Review, ServiceFeature } from './types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Big Luxury Sale', href: '#', isHighlight: true },
    { label: 'New Arrivals', href: '/products' },
    { label: 'Eid Store', href: '/products' },
    { label: 'Wedding Collection', href: '/products' },
    { label: 'Sarees', href: '/products' },
    { label: 'Lehengas', href: '/products' },
    { label: 'Suit Sets', href: '/products' },
    { label: 'Gowns', href: '/products' },
    { label: 'Ready To Ship', href: '/products' },
];

const SAFE_IMAGES = [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
];

export const SLIDES: Slide[] = [
    {
        id: 1,
        image: SAFE_IMAGES[0],
        subtitle: 'THE 2024 WEDDING EDIT',
        titleLine1: 'Elegance',
        titleLine2: 'Redefined.',
        description: 'Discover a curated collection of artisanal sarees and designer lehengas, where heritage craftsmanship meets modern silhouettes.',
        ctaText: 'SHOP COLLECTION',
        alignment: 'left'
    },
    {
        id: 2,
        image: SAFE_IMAGES[2],
        subtitle: 'ROYAL HERITAGE',
        titleLine1: 'Timeless',
        titleLine2: 'Beauty.',
        description: 'Explore our exclusive range of handwoven silk sarees inspired by royal traditions.',
        ctaText: 'EXPLORE NOW',
        alignment: 'left'
    },
    {
        id: 3,
        image: SAFE_IMAGES[3],
        subtitle: 'MODERN CLASSICS',
        titleLine1: 'Festive',
        titleLine2: 'Glamour.',
        description: 'Contemporary styles for the modern woman who loves to celebrate in style.',
        ctaText: 'VIEW LOOKBOOK',
        alignment: 'left'
    }
];

export const CATEGORIES = [
    {
        id: 1,
        label: 'Sarees',
        image: SAFE_IMAGES[2]
    },
    {
        id: 2,
        label: 'Silk Sarees',
        image: SAFE_IMAGES[0]
    },
    {
        id: 3,
        label: 'Suits & Dresses',
        image: SAFE_IMAGES[4]
    },
    {
        id: 4,
        label: 'Gowns',
        image: SAFE_IMAGES[1]
    },
    {
        id: 5,
        label: 'Kurti',
        image: SAFE_IMAGES[3]
    },
    {
        id: 6,
        label: 'Wedding Collections',
        image: SAFE_IMAGES[0]
    },
    {
        id: 7,
        label: 'Lehengas',
        image: SAFE_IMAGES[2]
    },
    {
        id: 8,
        label: 'Jewellery',
        image: SAFE_IMAGES[4]
    }
];

export const OCCASIONS = [
    {
        id: 1,
        title: 'The Wedding Edit',
        subtitle: 'EXPLORE',
        image: SAFE_IMAGES[0],
        className: 'grid-tall'
    },
    {
        id: 2,
        title: 'Haldi & Mehendi',
        subtitle: 'SHOP YELLOWS & GREENS',
        image: SAFE_IMAGES[4], // Used white/bright for contrast
        className: 'grid-wide'
    },
    {
        id: 3,
        title: 'Cocktail Night',
        subtitle: 'SHOP GOWNS',
        image: SAFE_IMAGES[1],
        className: 'grid-standard'
    },
    {
        id: 4,
        title: 'Festive Ready',
        subtitle: 'SHOP SILKS',
        image: SAFE_IMAGES[2],
        className: 'grid-standard'
    },
    {
        id: 5,
        title: 'Casual Ethnic',
        subtitle: 'SHOP KURTIS & SUITS',
        image: SAFE_IMAGES[3],
        className: 'grid-wide'
    }
];

export const NEW_ARRIVALS: Product[] = [
    {
        id: 1,
        image: SAFE_IMAGES[0],
        brand: 'GG FASHION',
        title: 'Chinon Silk Party Wear - Embroidered',
        price: '₹1,914',
        originalPrice: '₹2,500',
        discount: '(23% OFF)'
    },
    {
        id: 2,
        image: SAFE_IMAGES[4],
        brand: 'WEAVERS OF INDIA',
        title: 'Banarasi Soft Silk Saree - White',
        price: '₹1,860',
        originalPrice: '₹2,200',
        discount: ''
    },
    {
        id: 3,
        image: SAFE_IMAGES[3],
        brand: 'GG FASHION',
        title: 'Festive Collection Georgette - Red',
        price: '₹1,531',
        originalPrice: '',
        discount: ''
    },
    {
        id: 4,
        image: SAFE_IMAGES[1],
        brand: 'DESIGNER EDIT',
        title: 'Vichitra Silk - Full Border Work',
        price: '₹4,368',
        originalPrice: '₹5,000',
        discount: '(12% OFF)'
    },
    {
        id: 5,
        image: SAFE_IMAGES[2],
        brand: 'ROYAL WEAVES',
        title: 'Kanjivaram Pure Silk - Gold',
        price: '₹8,999',
        originalPrice: '₹12,000',
        discount: '(25% OFF)'
    }
];

export const FEATURED_COLLECTION: Product[] = [
    {
        id: 1,
        image: SAFE_IMAGES[1],
        brand: 'EVENING WEAR',
        title: 'Embellished Gown',
        price: '₹5,500',
        originalPrice: '',
        discount: ''
    },
    {
        id: 2,
        image: SAFE_IMAGES[4],
        brand: 'SUMMER EDIT',
        title: 'Printed Anarkali Suit',
        price: '₹2,450',
        originalPrice: '',
        discount: ''
    },
    {
        id: 3,
        image: SAFE_IMAGES[0],
        brand: 'WEDDING COLLECTION',
        title: 'Bridal Red Lehenga',
        price: '₹15,999',
        originalPrice: '',
        discount: ''
    },
    {
        id: 4,
        image: SAFE_IMAGES[2],
        brand: 'HERITAGE SILK',
        title: 'Kanjivaram Silk',
        price: '₹8,500',
        originalPrice: '',
        discount: ''
    },
    {
        id: 5,
        image: SAFE_IMAGES[3],
        brand: 'PARTY EDIT',
        title: 'Sequin Saree - Gold',
        price: '₹6,200',
        originalPrice: '',
        discount: ''
    }
];

export const REVIEWS: Review[] = [
    {
        id: 1,
        rating: 5.0,
        text: "\"Beautiful dress perfect size. I ordered for my sister's wedding and it arrived on time. The fabric quality is exceptional.\"",
        author: "Hetal Shah",
        location: "India"
    },
    {
        id: 2,
        rating: 5.0,
        text: "\"This is my second jewelry order from GG Fashion. I loved them both. They arrived well packed and exactly as shown in pictures.\"",
        author: "Indu Valavala",
        location: "India"
    },
    {
        id: 3,
        rating: 5.0,
        text: "\"Beautiful necklace. Good experience shopping here. The customer support was very helpful with size customization.\"",
        author: "Rayrr",
        location: "Delhi, India"
    },
    {
        id: 4,
        rating: 5.0,
        text: "\"Absolutely stunning lehenga! The embroidery details are intricate and the fit was spot on. Highly recommended.\"",
        author: "Priya Sharma",
        location: "Mumbai, India"
    },
    {
        id: 5,
        rating: 4.8,
        text: "\"Great collection of sarees. Shipping to the US was faster than expected. Will definitely shop again.\"",
        author: "Sarah Jenkins",
        location: "USA"
    }
];

export const SERVICE_FEATURES: ServiceFeature[] = [
    {
        id: 1,
        icon: 'award',
        title: 'AUTHENTIC QUALITY',
        description: 'Handpicked premium fabrics and trusted craftsmanship you can rely on.'
    },
    {
        id: 2,
        icon: 'sparkles',
        title: 'MODERN TRADITION',
        description: 'Designs that blend timeless Indian heritage with contemporary elegance.'
    },
    {
        id: 3,
        icon: 'truck',
        title: 'EXPRESS DELIVERY',
        description: 'Fast shipping across India with secure packaging and tracking.'
    },
    {
        id: 4,
        icon: 'repeat',
        title: 'EASY RETURNS',
        description: '7-day hassle-free returns and exchange policy for your peace of mind.'
    },
    {
        id: 5,
        icon: 'lock',
        title: '100% SECURE PAYMENT',
        description: 'Safe payment gateways ensuring your data privacy.'
    }
];

export const SEARCH_RESULTS_DATA: Product[] = [
    {
        id: 101,
        image: SAFE_IMAGES[0],
        brand: 'GG FASHION',
        title: 'Chinon Silk Party Wear - Embroidered',
        price: '₹1,914',
        originalPrice: '',
        discount: '',
        fabric: 'GEORGETTE'
    },
    {
        id: 102,
        image: SAFE_IMAGES[4],
        brand: 'WEAVERS OF INDIA',
        title: 'Banarasi Soft Silk Saree - White',
        price: '₹1,860',
        originalPrice: '₹2,200',
        discount: '',
        fabric: 'SILK BLEND'
    },
    {
        id: 103,
        image: SAFE_IMAGES[3],
        brand: 'GG FASHION',
        title: 'Festive Collection Georgette - Red',
        price: '₹1,531',
        originalPrice: '',
        discount: '',
        fabric: 'GEORGETTE'
    },
    {
        id: 104,
        image: SAFE_IMAGES[1],
        brand: 'VARANASI SILKS',
        title: 'Pure Katan Silk Banarasi - Royal Blue',
        price: '₹12,450',
        originalPrice: '',
        discount: '',
        fabric: 'KATAN SILK'
    },
    {
        id: 105,
        image: SAFE_IMAGES[2],
        brand: 'ETHNIC EDIT',
        title: 'Organza Floral Print Saree',
        price: '₹2,999',
        originalPrice: '₹4,500',
        discount: '(33% OFF)',
        fabric: 'ORGANZA'
    },
    {
        id: 106,
        image: SAFE_IMAGES[0],
        brand: 'GG FASHION',
        title: 'Designer Net Saree with Stone Work',
        price: '₹3,250',
        originalPrice: '',
        discount: '',
        fabric: 'NET'
    },
    {
        id: 107,
        image: SAFE_IMAGES[3],
        brand: 'RANGOLI SILK',
        title: 'Rangoli Silk - Embroidered Saree',
        price: '₹1,530',
        originalPrice: '',
        discount: '',
        fabric: 'RANGOLI SILK'
    },
    {
        id: 108,
        image: SAFE_IMAGES[4],
        brand: 'SILK BLEND',
        title: 'Designer Party Wear Saree',
        price: '₹1,860',
        originalPrice: '₹2,200',
        discount: '',
        fabric: 'SILK BLEND'
    },
    {
        id: 109,
        image: SAFE_IMAGES[0],
        brand: 'GG FASHION',
        title: 'Festive Collection Georgette - Red',
        price: '₹1,531',
        originalPrice: '',
        discount: '',
        fabric: 'GEORGETTE'
    }
];
