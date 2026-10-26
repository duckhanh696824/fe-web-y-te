import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Calendar,
    Phone,
    ShoppingBag,
    Pill,
    Stethoscope,
    HeartPulse,
    Shield,
    Clock,
    Star
} from 'lucide-react';

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Chăm sóc sức khỏe toàn diện',
            subtitle: 'Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại',
            description: 'Cam kết mang đến dịch vụ y tế chất lượng cao với sự tận tâm và chuyên nghiệp',
            cta: 'Đặt lịch khám ngay',
            ctaLink: '/dat-lich',
            image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60'
        },
        {
            title: 'Nhà thuốc online tiện lợi',
            subtitle: 'Đặt thuốc nhanh chóng, giao hàng tận nơi',
            description: '100% thuốc chính hãng, tư vấn dược sĩ chuyên nghiệp 24/7',
            cta: 'Mua thuốc ngay',
            ctaLink: '/thuoc',
            image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=60'
        },
        {
            title: 'Khám sức khỏe định kỳ',
            subtitle: 'Phát hiện sớm, điều trị kịp thời',
            description: 'Các gói khám sức khỏe toàn diện với mức giá hợp lý nhất',
            cta: 'Xem gói khám',
            ctaLink: '/goi-kham',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const features = [
        { icon: <Stethoscope className="w-6 h-6" />, text: 'Bác sĩ chuyên khoa' },
        { icon: <Clock className="w-6 h-6" />, text: 'Khám 24/7' },
        { icon: <Shield className="w-6 h-6" />, text: 'Bảo mật thông tin' },
        { icon: <Star className="w-6 h-6" />, text: 'Đánh giá 4.9/5' },
    ];

    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient opacity-90"></div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Icons */}
                <div className="absolute top-40 left-10 float-slow opacity-20">
                    <HeartPulse className="w-20 h-20 text-white" />
                </div>
                <div className="absolute top-60 right-20 float-medium opacity-20">
                    <Pill className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-40 left-1/4 float-fast opacity-20">
                    <Stethoscope className="w-14 h-14 text-white" />
                </div>

                {/* Gradient Circles */}
                <div className="absolute top-20 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"></div>

                {/* Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                    {/* Left Content */}
                    <div className="text-white">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium">Bệnh viện đa khoa hàng đầu</span>
                        </div>

                        {/* Title with Animation */}
                        <div className="relative overflow-hidden mb-6">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${currentSlide === index
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8 absolute inset-0'
                                        }`}
                                >
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-primary-100 font-medium mb-4">
                                        {slide.subtitle}
                                    </p>
                                    <p className="text-lg text-white/80 max-w-xl">
                                        {slide.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                to={slides[currentSlide].ctaLink}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>{slides[currentSlide].cta}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="tel:1900xxxx"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all group"
                            >
                                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                                <span>Gọi ngay: 1900 xxxx</span>
                            </a>
                        </div>

                        {/* Features Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="p-2 bg-white/20 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image Carousel */}
                    <div className="relative hidden lg:block">
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl backdrop-blur-sm"></div>

                            {/* Images */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ${currentSlide === index
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-105'
                                            }`}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -left-8 top-1/4 glass p-4 rounded-2xl shadow-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-primary-100 rounded-xl">
                                        <Stethoscope className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary-700">50+</p>
                                        <p className="text-sm text-gray-600">Bác sĩ chuyên khoa</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -right-8 bottom-1/4 glass p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-accent-100 rounded-xl">
                                        <ShoppingBag className="w-6 h-6 text-accent-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary-700">1000+</p>
                                        <p className="text-sm text-gray-600">Sản phẩm thuốc</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pulse Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                                <div className="absolute inset-2 bg-white/50 rounded-full animate-pulse"></div>
                                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                                    <HeartPulse className="w-8 h-8 text-primary-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? 'w-8 bg-white'
                                    : 'w-3 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#f0fdf4"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroBanner;
