import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Services from '../components/home/Services';
import NewsSection from '../components/home/NewsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <FeaturedProducts />
            <Services />
            <NewsSection />
            <WhyChooseUs />
        </>
    );
};

export default HomePage;
