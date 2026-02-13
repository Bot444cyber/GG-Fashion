import Hero from '../../components/Hero';
import CategoryCarousel from '../../components/CategoryCarousel';
import OccasionGrid from '../../components/OccasionGrid';
import NewArrivals from '../../components/NewArrivals';
import FeaturedCollection from '../../components/FeaturedCollection';
import ReviewsAndFeatures from '../../components/ReviewsAndFeatures';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryCarousel />
      <OccasionGrid />
      <NewArrivals />
      <FeaturedCollection />
      <ReviewsAndFeatures />
    </main>
  );
}
