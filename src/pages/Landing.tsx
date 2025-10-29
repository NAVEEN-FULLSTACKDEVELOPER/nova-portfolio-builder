import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Sparkles, FileText, MessageSquare, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aiFeature from "@/assets/ai-feature.jpg";
import portfolioFeature from "@/assets/portfolio-feature.jpg";
import reviewFeature from "@/assets/review-feature.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">PortfolioX</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Get in Touch</a>
            </div>

            <Link to="/auth">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center particle-bg pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero background" className="w-full h-full object-cover opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Build Your <span className="gradient-text">Dream Portfolio</span> in Minutes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The most stunning portfolio builder with AI assistance, professional templates, and a community that celebrates your work
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-primary">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Features That <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create a portfolio that impresses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={portfolioFeature} alt="Portfolio vs Resume" className="w-full h-48 object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Digital Portfolio vs Resume</h3>
              </div>
              <p className="text-muted-foreground">
                Transform your traditional resume into a stunning, interactive digital portfolio that showcases your skills, projects, and achievements in a modern, engaging way.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={aiFeature} alt="AI Assistant" className="w-full h-48 object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">AI Assistant Chatbot</h3>
              </div>
              <p className="text-muted-foreground">
                Get intelligent suggestions, content improvements, and real-time help from our AI-powered assistant. Build your portfolio faster with smart recommendations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={reviewFeature} alt="Review System" className="w-full h-48 object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Community Reviews</h3>
              </div>
              <p className="text-muted-foreground">
                Build credibility with peer reviews. Let others review your work, provide feedback, and help you grow. Give back by reviewing others' portfolios too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">PortfolioX</span>
              </h2>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-6">
                PortfolioX is revolutionizing the way professionals showcase their work. We believe that your portfolio should be as unique as you are, and that's why we've created a platform that combines stunning design, AI-powered assistance, and a supportive community.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform goes beyond traditional portfolio builders by offering department-specific templates for various fields including Electrical Engineering, Electronics & Communication, Mechanical Engineering, and more. Whether you're a student, professional, or freelancer, we have the perfect template to showcase your expertise.
              </p>
              <p className="text-lg text-muted-foreground">
                With our innovative review system, you can receive valuable feedback from peers and build credibility in your field. Plus, our AI assistant is always ready to help you create compelling content and optimize your portfolio for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-gradient-to-b from-background to-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@portfoliox.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">123 Innovation St, Tech City, TC 12345</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold">PortfolioX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 PortfolioX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
