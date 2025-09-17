import { Calendar, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NewsPreview = () => {
  const navigate = useNavigate();
  
  const latestNews = [
    {
      id: 1,
      title: "Blackjacks Dominates Cape Town Chess League Round 8",
      excerpt: "Our A-team secured decisive victories against Western Province Chess Club with standout performances from JM Charlton Mnysta and JNM Jiraan Braaf.",
      date: "2024-12-10",
      category: "Match Report",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Junior Championship Success: Braaf Wins Western Cape U18",
      excerpt: "JNM Jiraan Braaf claims the Western Cape Under-18 Championship with an undefeated performance.",
      date: "2024-12-05",
      category: "Achievement",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "New Training Schedule Announced for 2025",
      excerpt: "Enhanced training program every Friday at Parow Library, featuring specialized sessions for different skill levels.",
      date: "2024-12-08",
      category: "Club News",
      readTime: "2 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Achievement":
        return "bg-accent text-accent-foreground border-accent";
      case "Match Report":
        return "bg-gold text-gold-foreground border-gold";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-accent">News</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our recent victories, achievements, and club developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {latestNews.map((article) => (
            <div key={article.id} className="championship-card group hover:scale-105 transition-transform">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-playfair text-lg font-semibold mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => navigate('/news')}
                    className="text-accent hover:text-accent-foreground p-0 h-auto"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="btn-hero-gold"
            onClick={() => navigate('/news')}
          >
            View All News
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;