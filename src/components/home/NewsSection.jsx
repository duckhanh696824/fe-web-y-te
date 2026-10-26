import { Link } from 'react-router-dom';
import {
    Clock,
    ArrowRight,
    Newspaper,
    Eye,
    Heart,
    Share2,
    ChevronRight,
    Sparkles
} from 'lucide-react';

const NewsSection = () => {
    const featuredNews = {
        id: 1,
        title: 'Phương pháp phòng ngừa bệnh tim mạch hiệu quả trong mùa đông',
        excerpt: 'Mùa đông là thời điểm các bệnh tim mạch có nguy cơ gia tăng. Bài viết chia sẻ những phương pháp phòng ngừa hiệu quả giúp bảo vệ trái tim của bạn.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60',
        category: 'Sức khỏe tim mạch',
        date: '04/02/2026',
        readTime: '5 phút đọc',
        views: 1245,
        author: 'BS. Nguyễn Văn A'
    };

    const news = [
        {
            id: 2,
            title: 'Dinh dưỡng hợp lý cho người cao tuổi',
            excerpt: 'Chế độ dinh dưỡng đóng vai trò quan trọng trong việc duy trì sức khỏe ở người cao tuổi...',
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&auto=format&fit=crop&q=60',
            category: 'Dinh dưỡng',
            date: '03/02/2026',
            readTime: '4 phút đọc',
            views: 856
        },
        {
            id: 3,
            title: 'Cách phòng tránh cảm cúm mùa lạnh',
            excerpt: 'Những biện pháp đơn giản nhưng hiệu quả giúp bạn và gia đình tránh xa bệnh cảm cúm...',
            image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&auto=format&fit=crop&q=60',
            category: 'Phòng bệnh',
            date: '02/02/2026',
            readTime: '3 phút đọc',
            views: 1023
        },
        {
            id: 4,
            title: 'Tầm quan trọng của giấc ngủ đối với sức khỏe',
            excerpt: 'Giấc ngủ ảnh hưởng trực tiếp đến sức khỏe thể chất và tinh thần của mỗi người...',
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=60',
            category: 'Sống khỏe',
            date: '01/02/2026',
            readTime: '6 phút đọc',
            views: 678
        },
        {
            id: 5,
            title: 'Lợi ích của việc tập thể dục mỗi ngày',
            excerpt: 'Chỉ 30 phút vận động mỗi ngày có thể mang lại nhiều lợi ích bất ngờ cho sức khỏe...',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=60',
            category: 'Thể dục',
            date: '31/01/2026',
            readTime: '4 phút đọc',
            views: 945
        }
    ];

    const categories = [
        { name: 'Tất cả', count: 156 },
        { name: 'Sức khỏe', count: 45 },
        { name: 'Dinh dưỡng', count: 32 },
        { name: 'Phòng bệnh', count: 28 },
        { name: 'Làm đẹp', count: 21 },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-60 h-60 bg-secondary-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium text-sm mb-4">
                            <Newspaper className="w-4 h-4" />
                            <span>Tin tức mới nhất</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-4">
                            Kiến thức <span className="gradient-text">Sức khỏe</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl">
                            Cập nhật thông tin y tế, bí quyết chăm sóc sức khỏe và lối sống lành mạnh
                        </p>
                    </div>

                    {/* Categories Filter */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                        ? 'bg-primary-500 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                                    }`}
                            >
                                {cat.name}
                                <span className="ml-1 text-xs opacity-70">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Featured News - Large Card */}
                    <div className="lg:col-span-7">
                        <Link
                            to={`/tin-tuc/${featuredNews.id}`}
                            className="group block relative bg-white rounded-3xl overflow-hidden shadow-card hover-lift h-full"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-primary-500 text-white text-sm font-medium rounded-full shadow-lg">
                                        {featuredNews.category}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex items-center gap-4 text-sm text-white/80 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredNews.date}
                                        </span>
                                        <span>{featuredNews.readTime}</span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {featuredNews.views.toLocaleString()}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-primary-300 transition-colors">
                                        {featuredNews.title}
                                    </h3>

                                    <p className="text-white/80 mb-4 line-clamp-2">
                                        {featuredNews.excerpt}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                                            {featuredNews.author.charAt(0)}
                                        </div>
                                        <span className="font-medium">{featuredNews.author}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* News List - Right Side */}
                    <div className="lg:col-span-5 space-y-4">
                        {news.map((item, index) => (
                            <Link
                                key={item.id}
                                to={`/tin-tuc/${item.id}`}
                                className="group flex gap-4 bg-white rounded-2xl p-4 shadow-card hover-lift"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Thumbnail */}
                                <div className="relative w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-2">
                                        {item.category}
                                    </span>

                                    <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                        {item.title}
                                    </h4>

                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {item.date}
                                        </span>
                                        <span>{item.readTime}</span>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight className="w-5 h-5 text-primary-500" />
                                </div>
                            </Link>
                        ))}

                        {/* View All Link */}
                        <Link
                            to="/tin-tuc"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-600 font-bold rounded-2xl hover:from-primary-100 hover:to-secondary-100 transition-all group"
                        >
                            <span>Xem tất cả tin tức</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Health Tips Quick Section */}
                <div className="mt-16 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-3">
                                <Sparkles className="w-4 h-4" />
                                <span>Mẹo sức khỏe hàng ngày</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                Đăng ký nhận bài viết sức khỏe mới nhất
                            </h3>
                            <p className="text-white/80">
                                Cập nhật kiến thức chăm sóc sức khỏe mỗi tuần qua email của bạn
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn..."
                                className="px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all min-w-[280px]"
                            />
                            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all group">
                                <span>Đăng ký</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
