import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Youtube,
    Instagram,
    Send,
    HeartPulse,
    ArrowRight,
    ChevronRight
} from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Dịch vụ y tế', href: '/dich-vu' },
        { name: 'Mua thuốc online', href: '/thuoc' },
        { name: 'Đặt lịch khám', href: '/dat-lich' },
        { name: 'Tin tức sức khỏe', href: '/tin-tuc' },
        { name: 'Liên hệ', href: '/lien-he' },
    ];

    const services = [
        { name: 'Khám tổng quát', href: '/dich-vu/kham-tong-quat' },
        { name: 'Xét nghiệm', href: '/dich-vu/xet-nghiem' },
        { name: 'Chẩn đoán hình ảnh', href: '/dich-vu/chan-doan' },
        { name: 'Nội soi', href: '/dich-vu/noi-soi' },
        { name: 'Tiêm chủng', href: '/dich-vu/tiem-chung' },
        { name: 'Tư vấn trực tuyến', href: '/tu-van' },
    ];

    const support = [
        { name: 'Hướng dẫn đặt lịch', href: '/huong-dan/dat-lich' },
        { name: 'Chính sách bảo mật', href: '/chinh-sach/bao-mat' },
        { name: 'Điều khoản sử dụng', href: '/dieu-khoan' },
        { name: 'Câu hỏi thường gặp', href: '/faq' },
        { name: 'Khiếu nại & Góp ý', href: '/gop-y' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
            </div>

            {/* Newsletter Section */}
            <div className="relative border-b border-white/10">
                <div className="container mx-auto px-4 py-12">
                    <div className="glass-dark rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                Đăng ký nhận tin tức sức khỏe
                            </h3>
                            <p className="text-primary-200 text-lg">
                                Nhận thông tin ưu đãi và kiến thức chăm sóc sức khỏe mới nhất
                            </p>
                        </div>
                        <div className="w-full lg:w-auto">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1 min-w-[280px]">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Nhập email của bạn..."
                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white font-semibold rounded-xl hover:from-accent-500 hover:to-accent-600 transition-all shadow-lg hover:shadow-accent-500/30 group"
                                >
                                    <span>Đăng ký</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                        {/* Company Info */}
                        <div className="lg:col-span-4">
                            <Link to="/" className="flex items-center gap-3 mb-6 group">
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                        <HeartPulse className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-400 rounded-full flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-white">+</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-white">MediCare</h2>
                                    <p className="text-sm text-primary-300 tracking-wider uppercase">Bệnh viện & Nhà thuốc</p>
                                </div>
                            </Link>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                MediCare tự hào là đơn vị y tế hàng đầu với đội ngũ bác sĩ giỏi, trang thiết bị hiện đại,
                                cam kết mang đến dịch vụ chăm sóc sức khỏe tốt nhất cho cộng đồng.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <a href="tel:1900xxxx" className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-700/50 rounded-xl group-hover:bg-primary-600/50 transition-colors">
                                        <Phone className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Hotline 24/7</p>
                                        <p className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">1900 xxxx</p>
                                    </div>
                                </a>

                                <a href="mailto:info@medicare.vn" className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-700/50 rounded-xl group-hover:bg-primary-600/50 transition-colors">
                                        <Mail className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">info@medicare.vn</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-700/50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Địa chỉ</p>
                                        <p className="text-white">123 Đường ABC, Phường XYZ,<br />Quận 1, TP. Hồ Chí Minh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-700/50 rounded-xl">
                                        <Clock className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Giờ làm việc</p>
                                        <p className="text-white">Thứ 2 - Chủ nhật: 7:00 - 20:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-heading font-bold text-white mb-6 relative">
                                Liên kết nhanh
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></span>
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-heading font-bold text-white mb-6 relative">
                                Dịch vụ
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></span>
                            </h3>
                            <ul className="space-y-3">
                                {services.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-heading font-bold text-white mb-6 relative">
                                Hỗ trợ
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></span>
                            </h3>
                            <ul className="space-y-3">
                                {support.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Google Map */}
                        <div className="lg:col-span-2 md:col-span-2">
                            <h3 className="text-lg font-heading font-bold text-white mb-6 relative">
                                Bản đồ
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></span>
                            </h3>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394736057374!2d106.68186841531968!3d10.781099492319162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1625629245789!5m2!1svi!2s"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6">
                                <p className="text-sm text-gray-400 mb-3">Theo dõi chúng tôi</p>
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        className="p-3 bg-primary-700/50 rounded-xl hover:bg-blue-600 transition-all group"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-primary-700/50 rounded-xl hover:bg-red-600 transition-all group"
                                        aria-label="Youtube"
                                    >
                                        <Youtube className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-primary-700/50 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2026 <span className="text-white font-medium">MediCare</span>. All rights reserved.
                            Designed with <span className="text-red-400">♥</span> for better healthcare.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <Link to="/chinh-sach/bao-mat" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <Link to="/dieu-khoan" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
