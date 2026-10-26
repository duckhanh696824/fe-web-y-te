import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    Heart,
    Eye,
    Star,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Truck,
    Shield,
    Percent
} from 'lucide-react';

const FeaturedProducts = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Vitamin C 1000mg',
            brand: 'DHC Japan',
            price: 285000,
            originalPrice: 350000,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=60',
            rating: 4.8,
            reviews: 245,
            badge: 'Bán chạy',
            badgeColor: 'from-orange-400 to-red-500',
            inStock: true,
            discount: 19
        },
        {
            id: 2,
            name: 'Omega 3 Fish Oil',
            brand: 'Nature Made',
            price: 520000,
            originalPrice: 620000,
            image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&auto=format&fit=crop&q=60',
            rating: 4.9,
            reviews: 189,
            badge: 'Hot',
            badgeColor: 'from-pink-500 to-rose-500',
            inStock: true,
            discount: 16
        },
        {
            id: 3,
            name: 'Multivitamin Daily',
            brand: 'Centrum',
            price: 445000,
            originalPrice: 500000,
            image: 'https://images.unsplash.com/photo-1550572017-edd951aa8ca4?w=400&auto=format&fit=crop&q=60',
            rating: 4.7,
            reviews: 312,
            badge: '-11%',
            badgeColor: 'from-primary-500 to-secondary-500',
            inStock: true,
            discount: 11
        },
        {
            id: 4,
            name: 'Probiotics 50 Billion',
            brand: 'Garden of Life',
            price: 890000,
            originalPrice: 1050000,
            image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop&q=60',
            rating: 4.9,
            reviews: 156,
            badge: 'Mới',
            badgeColor: 'from-secondary-500 to-cyan-500',
            inStock: true,
            discount: 15
        },
        {
            id: 5,
            name: 'Collagen Peptides',
            brand: 'Vital Proteins',
            price: 750000,
            originalPrice: 850000,
            image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&auto=format&fit=crop&q=60',
            rating: 4.8,
            reviews: 278,
            badge: 'Giảm giá',
            badgeColor: 'from-accent-500 to-green-500',
            inStock: true,
            discount: 12
        },
        {
            id: 6,
            name: 'Vitamin D3 5000 IU',
            brand: 'NOW Foods',
            price: 320000,
            originalPrice: 380000,
            image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop&q=60',
            rating: 4.6,
            reviews: 198,
            badge: '',
            badgeColor: '',
            inStock: true,
            discount: 16
        }
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    return (
        <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium text-sm mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Sản phẩm nổi bật</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Thuốc & <span className="gradient-text">Thực phẩm chức năng</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Sản phẩm chính hãng, chất lượng cao với giá ưu đãi tốt nhất. Giao hàng nhanh chóng, tư vấn chuyên nghiệp.
                    </p>
                </div>

                {/* Benefits Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { icon: <Truck className="w-5 h-5" />, text: 'Giao hàng miễn phí từ 500K' },
                        { icon: <Shield className="w-5 h-5" />, text: '100% chính hãng' },
                        { icon: <Percent className="w-5 h-5" />, text: 'Giá tốt nhất' },
                        { icon: <Star className="w-5 h-5" />, text: '98% khách hài lòng' },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-primary-100"
                        >
                            <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                                {benefit.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                        </div>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-2xl shadow-card overflow-hidden hover-lift"
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className={`absolute top-3 left-3 z-10 px-3 py-1 bg-gradient-to-r ${product.badgeColor} text-white text-xs font-bold rounded-full shadow-lg`}>
                                    {product.badge}
                                </div>
                            )}

                            {/* Wishlist Button */}
                            <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-primary-50 hover:scale-110">
                                <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
                            </button>

                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Quick Actions Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent flex items-end justify-center p-4 transition-all duration-300 ${hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-white text-primary-600 rounded-lg font-medium text-sm hover:bg-primary-50 transition-colors">
                                            <Eye className="w-4 h-4" />
                                            <span>Xem nhanh</span>
                                        </button>
                                        <button className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                            <ShoppingCart className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Discount Badge */}
                                {product.discount > 0 && (
                                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                                        -{product.discount}%
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Brand */}
                                <p className="text-xs text-primary-600 font-medium mb-1">{product.brand}</p>

                                {/* Name */}
                                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                    {product.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-3">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating)
                                                        ? 'text-amber-400 fill-amber-400'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">({product.reviews})</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-primary-600">{formatPrice(product.price)}</span>
                                    {product.originalPrice > product.price && (
                                        <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                                    )}
                                </div>

                                {/* Stock Status */}
                                <div className="mt-3 flex items-center gap-1">
                                    <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/thuoc"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                    >
                        <span>Xem tất cả sản phẩm</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
