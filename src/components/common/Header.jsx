import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    Facebook,
    Youtube,
    Search,
    ShoppingCart,
    User,
    Menu,
    X,
    ChevronDown,
    Heart,
    Stethoscope,
    Pill,
    Newspaper,
    Users,
    Building2,
    TestTube,
    Syringe,
    Baby,
    Brain,
    Bone,
    Eye,
    HeartPulse,
    Activity,
    Ambulance,
    CalendarCheck,
    FileText,
    MessageCircle,
    HelpCircle
} from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            title: 'Dịch vụ y tế',
            icon: <Stethoscope className="w-5 h-5" />,
            submenu: [
                {
                    category: 'Khám & Điều trị',
                    items: [
                        { name: 'Khám tổng quát', icon: <Activity className="w-4 h-4" />, href: '/dich-vu/kham-tong-quat' },
                        { name: 'Khám chuyên khoa', icon: <Stethoscope className="w-4 h-4" />, href: '/dich-vu/kham-chuyen-khoa' },
                        { name: 'Cấp cứu 24/7', icon: <Ambulance className="w-4 h-4" />, href: '/dich-vu/cap-cuu' },
                        { name: 'Đặt lịch khám', icon: <CalendarCheck className="w-4 h-4" />, href: '/dat-lich' },
                    ]
                },
                {
                    category: 'Xét nghiệm & Chẩn đoán',
                    items: [
                        { name: 'Xét nghiệm máu', icon: <TestTube className="w-4 h-4" />, href: '/dich-vu/xet-nghiem-mau' },
                        { name: 'Siêu âm', icon: <HeartPulse className="w-4 h-4" />, href: '/dich-vu/sieu-am' },
                        { name: 'Chụp X-quang', icon: <FileText className="w-4 h-4" />, href: '/dich-vu/x-quang' },
                        { name: 'Nội soi', icon: <Eye className="w-4 h-4" />, href: '/dich-vu/noi-soi' },
                    ]
                },
                {
                    category: 'Chuyên khoa',
                    items: [
                        { name: 'Tim mạch', icon: <HeartPulse className="w-4 h-4" />, href: '/chuyen-khoa/tim-mach' },
                        { name: 'Thần kinh', icon: <Brain className="w-4 h-4" />, href: '/chuyen-khoa/than-kinh' },
                        { name: 'Xương khớp', icon: <Bone className="w-4 h-4" />, href: '/chuyen-khoa/xuong-khop' },
                        { name: 'Nhi khoa', icon: <Baby className="w-4 h-4" />, href: '/chuyen-khoa/nhi-khoa' },
                    ]
                }
            ]
        },
        {
            title: 'Thuốc & Dược phẩm',
            icon: <Pill className="w-5 h-5" />,
            submenu: [
                {
                    category: 'Theo nhóm thuốc',
                    items: [
                        { name: 'Thuốc kê đơn', icon: <Pill className="w-4 h-4" />, href: '/thuoc/ke-don' },
                        { name: 'Thuốc không kê đơn', icon: <Pill className="w-4 h-4" />, href: '/thuoc/khong-ke-don' },
                        { name: 'Thực phẩm chức năng', icon: <Heart className="w-4 h-4" />, href: '/thuoc/thuc-pham-chuc-nang' },
                        { name: 'Vitamin & Khoáng chất', icon: <Syringe className="w-4 h-4" />, href: '/thuoc/vitamin' },
                    ]
                },
                {
                    category: 'Theo công dụng',
                    items: [
                        { name: 'Giảm đau, hạ sốt', icon: <Activity className="w-4 h-4" />, href: '/thuoc/giam-dau' },
                        { name: 'Tiêu hóa', icon: <Activity className="w-4 h-4" />, href: '/thuoc/tieu-hoa' },
                        { name: 'Hô hấp', icon: <Activity className="w-4 h-4" />, href: '/thuoc/ho-hap' },
                        { name: 'Tim mạch', icon: <HeartPulse className="w-4 h-4" />, href: '/thuoc/tim-mach' },
                    ]
                },
                {
                    category: 'Thiết bị y tế',
                    items: [
                        { name: 'Máy đo huyết áp', icon: <Activity className="w-4 h-4" />, href: '/thiet-bi/huyet-ap' },
                        { name: 'Máy đo đường huyết', icon: <TestTube className="w-4 h-4" />, href: '/thiet-bi/duong-huyet' },
                        { name: 'Nhiệt kế', icon: <Activity className="w-4 h-4" />, href: '/thiet-bi/nhiet-ke' },
                        { name: 'Dụng cụ y tế', icon: <Stethoscope className="w-4 h-4" />, href: '/thiet-bi/dung-cu' },
                    ]
                }
            ]
        },
        {
            title: 'Tin tức',
            icon: <Newspaper className="w-5 h-5" />,
            submenu: [
                {
                    category: 'Sức khỏe',
                    items: [
                        { name: 'Tin y tế mới nhất', icon: <Newspaper className="w-4 h-4" />, href: '/tin-tuc/y-te' },
                        { name: 'Sống khỏe', icon: <Heart className="w-4 h-4" />, href: '/tin-tuc/song-khoe' },
                        { name: 'Dinh dưỡng', icon: <Activity className="w-4 h-4" />, href: '/tin-tuc/dinh-duong' },
                        { name: 'Làm đẹp', icon: <Heart className="w-4 h-4" />, href: '/tin-tuc/lam-dep' },
                    ]
                },
                {
                    category: 'Bệnh viện',
                    items: [
                        { name: 'Hoạt động bệnh viện', icon: <Building2 className="w-4 h-4" />, href: '/tin-tuc/hoat-dong' },
                        { name: 'Thành tựu y khoa', icon: <Stethoscope className="w-4 h-4" />, href: '/tin-tuc/thanh-tuu' },
                        { name: 'Sự kiện', icon: <CalendarCheck className="w-4 h-4" />, href: '/tin-tuc/su-kien' },
                    ]
                }
            ]
        },
        {
            title: 'Đội ngũ bác sĩ',
            icon: <Users className="w-5 h-5" />,
            href: '/doi-ngu-bac-si'
        },
        {
            title: 'Giới thiệu',
            icon: <Building2 className="w-5 h-5" />,
            submenu: [
                {
                    category: 'Về chúng tôi',
                    items: [
                        { name: 'Lịch sử phát triển', icon: <Building2 className="w-4 h-4" />, href: '/gioi-thieu/lich-su' },
                        { name: 'Tầm nhìn & Sứ mệnh', icon: <Eye className="w-4 h-4" />, href: '/gioi-thieu/tam-nhin' },
                        { name: 'Cơ sở vật chất', icon: <Building2 className="w-4 h-4" />, href: '/gioi-thieu/co-so' },
                        { name: 'Chứng nhận & Giải thưởng', icon: <FileText className="w-4 h-4" />, href: '/gioi-thieu/chung-nhan' },
                    ]
                }
            ]
        },
        {
            title: 'Liên hệ',
            icon: <MessageCircle className="w-5 h-5" />,
            href: '/lien-he'
        }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
            {/* Top Bar */}
            <div className={`bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 text-white transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-1.5'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between text-sm">
                        {/* Left - Contact Info */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="tel:1900xxxx" className="flex items-center gap-2 hover:text-primary-200 transition-colors group">
                                <span className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                    <Phone className="w-3 h-3" />
                                </span>
                                <span className="font-medium">Hotline: 1900 xxxx</span>
                            </a>
                            <a href="mailto:info@hospital.vn" className="flex items-center gap-2 hover:text-primary-200 transition-colors group">
                                <span className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                    <Mail className="w-3 h-3" />
                                </span>
                                <span>info@hospital.vn</span>
                            </a>
                        </div>

                        {/* Center - Working Hours */}
                        <div className="hidden lg:flex items-center gap-2 text-primary-100">
                            <Clock className="w-4 h-4" />
                            <span>Thứ 2 - Chủ nhật: 7:00 - 20:00</span>
                        </div>

                        {/* Right - Social & Location */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center gap-2 text-primary-100">
                                <MapPin className="w-4 h-4" />
                                <span className="text-xs">123 Đường ABC, Quận XYZ</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="#" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`glass transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo - More Compact */}
                        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                            <div className="relative">
                                <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <HeartPulse className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full flex items-center justify-center">
                                    <span className="text-[8px] font-bold text-white">+</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-heading font-bold gradient-text">MediCare</h1>
                                <p className="text-[10px] text-gray-500 tracking-wider uppercase">Bệnh viện & Nhà thuốc</p>
                            </div>
                        </Link>

                        {/* Desktop Menu - Compact */}
                        <div className="hidden xl:flex items-center">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="menu-trigger relative"
                                    onMouseEnter={() => setActiveMenu(index)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            className="menu-item flex items-center gap-1.5 px-3 py-1.5 text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors whitespace-nowrap"
                                        >
                                            {/* {item.icon} */}
                                            <span>{item.title}</span>
                                        </Link>
                                    ) : (
                                        <button className="menu-item flex items-center gap-1.5 px-3 py-1.5 text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors whitespace-nowrap">
                                            {/* {item.icon} */}
                                            <span>{item.title}</span>
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === index ? 'rotate-180' : ''}`} />
                                        </button>
                                    )}

                                    {/* Mega Menu Dropdown */}
                                    {item.submenu && (
                                        <div className={`mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3 ${activeMenu === index ? 'opacity-100 visible translate-y-0' : ''}`}>
                                            <div className="glass-card rounded-xl p-5 min-w-[550px] shadow-2xl">
                                                <div className="grid grid-cols-3 gap-5">
                                                    {item.submenu.map((category, catIndex) => (
                                                        <div key={catIndex}>
                                                            <h3 className="text-sm font-bold text-primary-700 mb-3 pb-2 border-b border-primary-100">
                                                                {category.category}
                                                            </h3>
                                                            <ul className="space-y-1">
                                                                {category.items.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            to={subItem.href}
                                                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all group"
                                                                        >
                                                                            <span className="p-1.5 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-200 transition-colors">
                                                                                {subItem.icon}
                                                                            </span>
                                                                            <span className="text-sm">{subItem.name}</span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Actions - Compact */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <button className="p-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-all">
                                <Search className="w-4 h-4" />
                            </button>

                            {/* Cart */}
                            <button className="relative p-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-all">
                                <ShoppingCart className="w-4 h-4" />
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                                    3
                                </span>
                            </button>

                            {/* User - Desktop only */}
                            <button className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all text-sm font-medium shadow-md">
                                <User className="w-4 h-4" />
                                <span>Đăng nhập</span>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="xl:hidden p-2 rounded-lg hover:bg-primary-50 text-gray-600 transition-all"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`xl:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 visible translate-y-0 max-h-[80vh]'
                    : 'opacity-0 invisible -translate-y-4 max-h-0'
                    }`}>
                    <div className="p-4 max-h-[70vh] overflow-y-auto">
                        {menuItems.map((item, index) => (
                            <div key={index} className="mb-2">
                                {item.href ? (
                                    <Link
                                        to={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="p-2 bg-primary-100 rounded-lg text-primary-600">
                                            {item.icon}
                                        </span>
                                        <span className="font-medium">{item.title}</span>
                                    </Link>
                                ) : (
                                    <details className="group">
                                        <summary className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 cursor-pointer list-none">
                                            <span className="p-2 bg-primary-100 rounded-lg text-primary-600">
                                                {item.icon}
                                            </span>
                                            <span className="font-medium flex-1">{item.title}</span>
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="pl-14 pr-4 pb-2 space-y-2">
                                            {item.submenu?.map((category, catIndex) => (
                                                <div key={catIndex} className="pt-2">
                                                    <p className="text-xs font-bold text-primary-600 mb-2">{category.category}</p>
                                                    {category.items.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.href}
                                                            className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subItem.icon}
                                                            <span>{subItem.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                )}
                            </div>
                        ))}

                        {/* Mobile Login Button */}
                        <div className="pt-4 border-t border-gray-100">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium shadow-md">
                                <User className="w-5 h-5" />
                                <span>Đăng nhập</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
