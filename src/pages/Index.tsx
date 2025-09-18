import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import NewsPreview from "@/components/NewsPreview";
import ChampionshipSection from "@/components/ChampionshipSection";
import CoachesPreview from "@/components/CoachesPreview";
import EventsPreview from "@/components/EventsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChampionshipSection />
      <CoachesPreview />
      <EventsPreview />
      <NewsPreview />
      <Footer />
    </div>
  );
};

export default Index;
