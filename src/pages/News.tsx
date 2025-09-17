import { Calendar, User, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Blackjacks Dominates Cape Town Chess League Round 8",
      excerpt: "Our A-team secured decisive victories against Western Province Chess Club with standout performances from JM Charlton Mnysta and JNM Jiraan Braaf.",
      content: "In a commanding display of tactical prowess, Blackjacks Chess Club's A-team demolished Western Province Chess Club 4-0 in Round 8 of the Cape Town Chess League. Junior Master Charlton Mnysta delivered a brilliant King's Indian Attack, while Junior National Master Jiraan Braaf showcased exceptional endgame technique in his victory. The B-team also secured a solid 2.5-1.5 victory, with notable wins from Raynier Claasen and Sean Kudzai.",
      author: "Tournament Director",
      date: "2024-12-10",
      category: "Match Report",
      featured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "New Training Schedule Announced for 2025",
      excerpt: "Enhanced training program every Friday at Parow Library, featuring specialized sessions for different skill levels.",
      content: "We're excited to announce our comprehensive 2025 training schedule. Every Friday from 2pm-4pm at Parow Library, we'll be hosting structured training sessions. The program includes tactical training, endgame studies, opening theory, and analysis of recent club games. Special focus will be given to junior development under the guidance of our experienced masters.",
      author: "Training Coordinator",
      date: "2024-12-08",
      category: "Club News",
      featured: false,
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Junior Championship Success: Braaf Wins Western Cape U18",
      excerpt: "JNM Jiraan Braaf claims the Western Cape Under-18 Championship with an undefeated performance.",
      content: "Junior National Master Jiraan Braaf has brought glory to Blackjacks Chess Club by winning the prestigious Western Cape Under-18 Championship. Scoring 8.5/9 points and remaining undefeated throughout the tournament, Jiraan's victory secures him a spot in the national junior championships. His tactical brilliance and solid positional understanding were on full display.",
      author: "Youth Coordinator",
      date: "2024-12-05",
      category: "Achievement",
      featured: true,
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Club Equipment Upgrade Complete",
      excerpt: "New tournament-grade chess sets and digital clocks now available for all training sessions and club matches.",
      content: "Thanks to recent fundraising efforts and club membership growth, we've successfully upgraded all our chess equipment. New wooden tournament sets, digital DGT clocks, and demonstration boards are now available. This investment in quality equipment ensures our members train with professional-grade materials.",
      author: "Equipment Manager",
      date: "2024-12-01",
      category: "Club News",
      featured: false,
      readTime: "2 min read"
    },
    {
      id: 5,
      title: "Preparing for African Chess Junior Championship 2025",
      excerpt: "Three of our junior players have qualified to represent Western Cape at the upcoming continental championship.",
      content: "We're proud to announce that three of our talented junior members have qualified for the African Chess Junior Championship 2025. The intensive preparation includes specialized coaching, theoretical study, and practice games against strong opposition. This represents a significant milestone for our club's youth development program.",
      author: "Youth Development Team",
      date: "2024-11-28",
      category: "Tournament",
      featured: false,
      readTime: "3 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Achievement":
        return "bg-accent text-accent-foreground border-accent";
      case "Match Report":
        return "bg-gold text-gold-foreground border-gold";
      case "Tournament":
        return "bg-gold-muted text-foreground border-gold-muted";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Club <span className="text-accent">News</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with the latest from Blackjacks Chess Club
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsArticles.map((article) => (
              <article 
                key={article.id}
                className={`championship-card ${article.featured ? 'border-accent bg-accent/5' : ''} p-6`}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </div>
                    {article.featured && (
                      <div className="gold-accent text-xs font-semibold uppercase tracking-wider">
                        ⭐ Featured
                      </div>
                    )}
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed">
                      {article.content}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 text-center championship-card bg-muted/50">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              More Stories Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay tuned for more updates, match reports, and club announcements. 
              Follow our social media for real-time updates.
            </p>
            <Button className="btn-hero-gold">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;