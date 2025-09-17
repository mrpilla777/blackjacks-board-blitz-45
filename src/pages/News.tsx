import { Calendar, User, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import sectionBg from "@/assets/section-bg.jpg";

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

  const toggleArticle = (id: number) => {
    setExpandedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
        : [...prev, id]
    );
  };

  const newsArticles = [
    {
      id: 1,
      title: "Blackjacks Wins Cape Town Chess Federation Club League 2024",
      excerpt: "Historic victory as Blackjacks Chess Club claims the prestigious Cape Town Chess Federation Club League championship title.",
      content: "In a stunning display of chess mastery, Blackjacks Chess Club has claimed the Cape Town Chess Federation Club League 2024 championship. After months of intense competition against the province's top clubs, our team emerged victorious with consistent performances across all divisions. The championship was secured with standout performances from our key players, including crucial wins in the final rounds. This historic victory marks Blackjacks as the premier chess club in Cape Town, showcasing our commitment to excellence and strategic preparation. The team's success is a testament to our rigorous training program and the dedication of both players and coaches.",
      author: "Club President",
      date: "2024-12-15",
      category: "Club News",
      featured: true
    },
    {
      id: 2,
      title: "Blackjacks Dominates Cape Town Chess League Round 8",
      excerpt: "Our A-team secured decisive victories against Western Province Chess Club with standout performances from JM Charlton Mnysta and JNM Jiraan Braaf.",
      content: "In a commanding display of tactical prowess, Blackjacks Chess Club's A-team demolished Western Province Chess Club 4-0 in Round 8 of the Cape Town Chess League. Junior Master Charlton Mnysta delivered a brilliant King's Indian Attack, while Junior National Master Jiraan Braaf showcased exceptional endgame technique in his victory. The B-team also secured a solid 2.5-1.5 victory, with notable wins from Raynier Claasen and Sean Kudzai.",
      author: "Tournament Director",
      date: "2024-12-10",
      category: "General News",
      featured: true
    },
    {
      id: 3,
      title: "New Training Schedule Announced for 2025",
      excerpt: "Enhanced training program every Friday at Parow Library, featuring specialized sessions for different skill levels.",
      content: "We're excited to announce our comprehensive 2025 training schedule. Every Friday from 2pm-4pm at Parow Library, we'll be hosting structured training sessions. The program includes tactical training, endgame studies, opening theory, and analysis of recent club games. Special focus will be given to junior development under the guidance of our experienced masters.",
      author: "Training Coordinator",
      date: "2024-12-08",
      category: "Club News",
      featured: false
    },
    {
      id: 4,
      title: "Preparing for African Chess Junior Championship 2025",
      excerpt: "NM Charlton Mnyasta and JNM Jiraan Braaf qualify to represent Western Cape at the upcoming continental championship.",
      content: "We're proud to announce that two of our talented junior members, National Master Charlton Mnyasta and Junior National Master Jiraan Braaf, have qualified for the African Chess Junior Championship 2025. Both players have shown exceptional skill and dedication in their preparation for this prestigious tournament. The intensive preparation includes specialized coaching, theoretical study, and practice games against strong opposition. This represents a significant milestone for our club's youth development program and showcases the quality of our junior training initiatives.",
      author: "Youth Development Team",
      date: "2024-09-17", 
      category: "Individual News",
      featured: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Individual News":
        return "bg-accent text-accent-foreground border-accent";
      case "Club News":
        return "bg-gold text-gold-foreground border-gold";
      case "General News":
        return "bg-gold-muted text-foreground border-gold-muted";
      case "Past News":
        return "bg-muted text-muted-foreground border-muted";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  const filteredArticles = selectedFilter === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedFilter);

  const getPreviewText = (content: string) => {
    const sentences = content.split('. ').slice(0, 3);
    return sentences.join('. ') + (sentences.length === 3 ? '...' : '');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative" 
               style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="absolute inset-0 bg-chess-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-chess-white">
            Club <span className="text-accent">News</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay updated with the latest from Blackjacks Chess Club
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", "Club News", "General News", "Individual News", "Past News"].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "btn-hero-gold" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredArticles.map((article) => (
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
                  </div>

                  <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed">
                      {expandedArticles.includes(article.id) 
                        ? article.content 
                        : getPreviewText(article.content)
                      }
                    </p>
                    {!expandedArticles.includes(article.id) && (
                      <Button 
                        variant="link" 
                        onClick={() => toggleArticle(article.id)}
                        className="p-0 h-auto text-accent hover:text-accent/80"
                      >
                        Read More →
                      </Button>
                    )}
                    {expandedArticles.includes(article.id) && (
                      <Button 
                        variant="link" 
                        onClick={() => toggleArticle(article.id)}
                        className="p-0 h-auto text-accent hover:text-accent/80"
                      >
                        ← Show Less
                      </Button>
                    )}
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

          {/* More Stories Section */}
          <div className="mt-16 text-center championship-card bg-muted/50">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              More Stories Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay tuned for more updates, match reports, and club announcements. 
              Follow our social media for real-time updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;