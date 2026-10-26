import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Award,
    Users,
    Building2,
    Clock,
    CheckCircle,
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    Shield,
    Heart,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const WhyChooseUs = () => {
    const [counters, setCounters] = useState([0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const sectionRef = useRef(null);

    const stats = [
        { value: 25, suffix: '+', label: 'Năm kinh nghiệm', icon: <Clock className="w-6 h-6" /> },
        { value: 50, suffix: '+', label: 'Bác sĩ chuyên khoa', icon: <Users className="w-6 h-6" /> },
        { value: 100000, suffix: '+', label: 'Bệnh nhân tin tưởng', icon: <Heart className="w-6 h-6" /> },
        { value: 98, suffix: '%', label: 'Khách hàng hài lòng', icon: <Star className="w-6 h-6" /> },
    ];

    const reasons = [
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Chất lượng hàng đầu',
            description: 'Cam kết dịch vụ y tế chất lượng cao với tiêu chuẩn quốc tế'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Đội ngũ chuyên gia',
            description: 'Bác sĩ giàu kinh nghiệm, được đào tạo bài bản trong và ngoài nước'
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: 'Trang thiết bị hiện đại',
            description: 'Đầu tư công nghệ tiên tiến nhất cho chẩn đoán và điều trị'
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'An toàn & Bảo mật',
            description: 'Bảo mật thông tin bệnh nhân tuyệt đối, tuân thủ quy định y tế'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Phục vụ 24/7',
            description: 'Luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Tận tâm & Chu đáo',
            description: 'Đặt sự hài lòng của khách hàng làm ưu tiên hàng đầu'
        },
    ];

    const testimonials = [
        {
            content: 'Tôi rất hài lòng với dịch vụ khám bệnh tại MediCare. Bác sĩ tận tình, nhân viên chuyên nghiệp. Sẽ giới thiệu cho người thân và bạn bè.',
            author: 'Nguyễn Thị Mai',
            role: 'Khách hàng',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
            rating: 5
        },
        {
            content: 'Dịch vụ đặt thuốc online rất tiện lợi. Thuốc chính hãng, giao hàng nhanh. Tư vấn dược sĩ nhiệt tình, giải đáp mọi thắc mắc.',
            author: 'Trần Văn Hùng',
            role: 'Khách hàng',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
            rating: 5
        },
        {
            content: 'Đưa con đi khám nhi khoa tại đây, bác sĩ rất nhẹ nhàng và kiên nhẫn. Phòng khám sạch sẽ, hiện đại. Rất yên tâm.',
            author: 'Lê Thị Hương',
            role: 'Phụ huynh',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60',
            rating: 5
        },
    ];

    // Counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 50;
            const interval = duration / steps;

            stats.forEach((stat, index) => {
                let current = 0;
                const increment = stat.value / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                        current = stat.value;
                        clearInterval(timer);
                    }
                    setCounters(prev => {
                        const newCounters = [...prev];
                        newCounters[index] = Math.floor(current);
                        return newCounters;
                    });
                }, interval);
            });
        }
    }, [isVisible]);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return num.toLocaleString();
        }
        return num;
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full text-accent-600 font-medium text-sm mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Tại sao chọn chúng tôi</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Đồng hành cùng <span className="gradient-text">sức khỏe bạn</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Với hơn 25 năm kinh nghiệm, chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao nhất
                    </p>
                </div>

                {/* Stats Counter */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all hover-lift"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>

                            {/* Counter */}
                            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                                {formatNumber(counters[index])}{stat.suffix}
                            </div>

                            {/* Label */}
                            <p className="text-white/80 font-medium">{stat.label}</p>

                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    ))}
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all flex-shrink-0">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 opacity-10">
                        <Quote className="w-24 h-24 text-primary-600" />
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-2">
                                Khách hàng nói gì về chúng tôi
                            </h3>
                            <p className="text-gray-600">Hàng nghìn khách hàng đã tin tưởng và hài lòng</p>
                        </div>

                        {/* Testimonial Carousel */}
                        <div className="relative max-w-3xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${currentTestimonial === index
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-8 absolute inset-0'
                                        }`}
                                >
                                    {/* Rating */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-6 h-6 ${i < testimonial.rating
                                                        ? 'text-amber-400 fill-amber-400'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                        <div className="text-left">
                                            <p className="font-bold text-gray-800">{testimonial.author}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <button
                                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                    className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 hover:text-primary-600 transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index
                                                    ? 'bg-primary-500 w-8'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                                    className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 hover:text-primary-600 transition-all"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Bạn đã sẵn sàng bắt đầu hành trình chăm sóc sức khỏe?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/dat-lich"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                        >
                            <span>Đặt lịch khám ngay</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/gioi-thieu"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all"
                        >
                            <span>Tìm hiểu thêm</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
