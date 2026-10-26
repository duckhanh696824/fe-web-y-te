import { Link } from 'react-router-dom';
import {
    Stethoscope,
    TestTube,
    Syringe,
    HeartPulse,
    Brain,
    Bone,
    Baby,
    Eye,
    Activity,
    Ambulance,
    CalendarCheck,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Stethoscope className="w-8 h-8" />,
            title: 'Khám tổng quát',
            description: 'Khám sức khỏe toàn diện với đội ngũ bác sĩ giàu kinh nghiệm',
            href: '/dich-vu/kham-tong-quat',
            color: 'from-primary-500 to-primary-600',
            bgColor: 'bg-primary-50',
            iconColor: 'text-primary-600'
        },
        {
            icon: <TestTube className="w-8 h-8" />,
            title: 'Xét nghiệm',
            description: 'Xét nghiệm máu, nước tiểu, sinh hóa với công nghệ hiện đại',
            href: '/dich-vu/xet-nghiem',
            color: 'from-secondary-500 to-secondary-600',
            bgColor: 'bg-secondary-50',
            iconColor: 'text-secondary-600'
        },
        {
            icon: <HeartPulse className="w-8 h-8" />,
            title: 'Siêu âm tim',
            description: 'Chẩn đoán hình ảnh tim mạch với thiết bị tiên tiến',
            href: '/dich-vu/sieu-am-tim',
            color: 'from-rose-500 to-rose-600',
            bgColor: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: 'Thần kinh',
            description: 'Khám và điều trị các bệnh lý về não và hệ thần kinh',
            href: '/chuyen-khoa/than-kinh',
            color: 'from-violet-500 to-violet-600',
            bgColor: 'bg-violet-50',
            iconColor: 'text-violet-600'
        },
        {
            icon: <Bone className="w-8 h-8" />,
            title: 'Cơ xương khớp',
            description: 'Điều trị các bệnh về xương khớp, vật lý trị liệu',
            href: '/chuyen-khoa/co-xuong-khop',
            color: 'from-amber-500 to-amber-600',
            bgColor: 'bg-amber-50',
            iconColor: 'text-amber-600'
        },
        {
            icon: <Baby className="w-8 h-8" />,
            title: 'Nhi khoa',
            description: 'Chăm sóc sức khỏe toàn diện cho trẻ em từ 0-16 tuổi',
            href: '/chuyen-khoa/nhi-khoa',
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600'
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: 'Mắt',
            description: 'Khám và điều trị các bệnh về mắt, phẫu thuật laser',
            href: '/chuyen-khoa/mat',
            color: 'from-sky-500 to-sky-600',
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: 'Nội tiết',
            description: 'Điều trị tiểu đường, tuyến giáp và rối loạn nội tiết',
            href: '/chuyen-khoa/noi-tiet',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600'
        },
        {
            icon: <Syringe className="w-8 h-8" />,
            title: 'Tiêm chủng',
            description: 'Dịch vụ tiêm vắc xin đầy đủ cho trẻ em và người lớn',
            href: '/dich-vu/tiem-chung',
            color: 'from-cyan-500 to-cyan-600',
            bgColor: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        },
        {
            icon: <CalendarCheck className="w-8 h-8" />,
            title: 'Khám gói',
            description: 'Các gói khám sức khỏe định kỳ với mức giá ưu đãi',
            href: '/goi-kham',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            icon: <Ambulance className="w-8 h-8" />,
            title: 'Cấp cứu 24/7',
            description: 'Dịch vụ cấp cứu nhanh chóng, chuyên nghiệp suốt ngày đêm',
            href: '/dich-vu/cap-cuu',
            color: 'from-red-500 to-red-600',
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        },
        {
            icon: <Stethoscope className="w-8 h-8" />,
            title: 'Tư vấn online',
            description: 'Tư vấn sức khỏe trực tuyến với bác sĩ chuyên khoa',
            href: '/tu-van-online',
            color: 'from-indigo-500 to-indigo-600',
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V20H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full text-secondary-600 font-medium text-sm mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Dịch vụ chuyên nghiệp</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Dịch vụ <span className="gradient-text">Y tế toàn diện</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Chúng tôi cung cấp đầy đủ các dịch vụ y tế từ khám chữa bệnh, xét nghiệm đến chăm sóc sức khỏe định kỳ
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.href}
                            className="group relative bg-white rounded-2xl p-6 shadow-card hover-lift border border-gray-100 overflow-hidden"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Background Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors`}>
                                    <span className={`${service.iconColor} group-hover:text-white transition-colors`}>
                                        {service.icon}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors line-clamp-2">
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-white transition-colors">
                                    <span className="text-sm">Xem chi tiết</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Decorative Circle */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
                        <div className="text-left">
                            <p className="text-gray-600 mb-1">Bạn cần tư vấn?</p>
                            <p className="text-xl font-bold text-gray-800">Gọi ngay hotline: <span className="text-primary-600">1900 xxxx</span></p>
                        </div>
                        <Link
                            to="/dat-lich"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            <span>Đặt lịch khám</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
