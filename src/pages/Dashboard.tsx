import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Settings,
  History,
  MessageSquare,
  LayoutTemplate,
  Search,
  Sparkles,
  FolderOpen,
  Eye,
  TrendingUp,
  Star,
  Menu,
  Send,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TemplateCard from "@/components/TemplateCard";
import ReviewCard from "@/components/ReviewCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [aiMessage, setAiMessage] = useState("");
  const [aiChat, setAiChat] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hello! I'm your AI assistant. How can I help you build your portfolio today?" }
  ]);
  const navigate = useNavigate();

  const templates = [
    {
      title: "Mechanical Engineer Pro",
      department: "Mechanical Engineering",
      description: "Perfect for mechanical engineers with project showcases and technical skills",
      rating: 4.8,
      views: 1250
    },
    {
      title: "EEE Specialist",
      department: "Electrical Engineering (EEE)",
      description: "Showcase your electrical projects and circuit designs",
      rating: 4.9,
      views: 980
    },
    {
      title: "ECE Professional",
      department: "Electronics & Communication (ECE)",
      description: "Highlight your communication systems and embedded projects",
      rating: 4.7,
      views: 1100
    },
    {
      title: "Advanced Mechanical",
      department: "Mechanical Engineering",
      description: "Advanced template with CAD integration and simulation results",
      rating: 4.9,
      views: 890
    },
    {
      title: "Power Systems EEE",
      department: "Electrical Engineering (EEE)",
      description: "Specialized for power systems and renewable energy projects",
      rating: 4.6,
      views: 750
    },
    {
      title: "Signal Processing ECE",
      department: "Electronics & Communication (ECE)",
      description: "Perfect for DSP and signal processing portfolios",
      rating: 4.8,
      views: 820
    }
  ];

  const recentActivity = [
    { action: "Updated profile picture", time: "2 hours ago" },
    { action: "Added new project: Smart Home System", time: "1 day ago" },
    { action: "Received review from John Doe", time: "2 days ago" },
    { action: "Completed AI portfolio optimization", time: "3 days ago" },
    { action: "Published new template customization", time: "5 days ago" }
  ];

  const filteredTemplates = templates.filter(template => 
    selectedDepartment === "all" || template.department === selectedDepartment
  );

  const handleAiSend = () => {
    if (!aiMessage.trim()) return;
    
    setAiChat([...aiChat, 
      { role: "user", content: aiMessage },
      { role: "assistant", content: "That's a great question! I can help you with that. Let me suggest some improvements for your portfolio..." }
    ]);
    setAiMessage("");
  };

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "history", label: "History", icon: History },
    { id: "ai", label: "AI Assistance", icon: MessageSquare },
    { id: "templates", label: "Templates", icon: LayoutTemplate },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold gradient-text">PortfolioX</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/")}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border bg-card">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon" className="glass-card">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 lg:p-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search profiles, projects, templates..."
                className="pl-10 py-6 glass-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Profile Dashboard */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
                <p className="text-muted-foreground">Here's your portfolio overview</p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-green-500">+2</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Portfolio Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2,847</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-green-500">+18.2%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Profile Visitors</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">523</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-green-500">+12.5%</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: "Smart Home Automation", rating: 4.8, reviews: 12, updated: "2 days ago" },
                    { name: "IoT Weather Station", rating: 4.9, reviews: 18, updated: "5 days ago" },
                    { name: "Robotic Arm Controller", rating: 4.7, reviews: 9, updated: "1 week ago" },
                    { name: "Solar Panel Optimizer", rating: 4.6, reviews: 15, updated: "2 weeks ago" }
                  ].map((project, i) => (
                    <Card key={i} className="glass-card hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>Updated {project.updated}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm">{project.rating} ({project.reviews} reviews)</span>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  <ReviewCard
                    reviewer="Sarah Johnson"
                    rating={5}
                    comment="Excellent portfolio! The projects are well-documented and impressive."
                    date="2 days ago"
                  />
                  <ReviewCard
                    reviewer="Michael Chen"
                    rating={4}
                    comment="Great work on the robotic arm project. Would love to see more details on the control system."
                    date="5 days ago"
                  />
                  <ReviewCard
                    reviewer="Emily Davis"
                    rating={5}
                    comment="Very professional presentation. The IoT project is particularly innovative!"
                    date="1 week ago"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Templates */}
          {activeTab === "templates" && (
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-2">Templates</h1>
                <p className="text-muted-foreground">Choose from our professional templates</p>
              </div>

              {/* Department Filter */}
              <Tabs value={selectedDepartment} onValueChange={setSelectedDepartment} className="w-full">
                <TabsList className="grid w-full grid-cols-4 glass-card">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="Mechanical Engineering">Mechanical</TabsTrigger>
                  <TabsTrigger value="Electrical Engineering (EEE)">EEE</TabsTrigger>
                  <TabsTrigger value="Electronics & Communication (ECE)">ECE</TabsTrigger>
                </TabsList>

                <TabsContent value={selectedDepartment} className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTemplates.map((template, index) => (
                      <TemplateCard key={index} {...template} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* AI Assistance */}
          {activeTab === "ai" && (
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-2">AI Assistance</h1>
                <p className="text-muted-foreground">Get help building your portfolio</p>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Chat with AI Assistant</CardTitle>
                  <CardDescription>Ask me anything about building your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                    {aiChat.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input 
                      placeholder="Ask me anything..." 
                      className="flex-1"
                      value={aiMessage}
                      onChange={(e) => setAiMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAiSend()}
                    />
                    <Button 
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      onClick={handleAiSend}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-2">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences</p>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Update your profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-2">History</h1>
                <p className="text-muted-foreground">Your recent activity</p>
              </div>

              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                          <p className="font-medium">{activity.action}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
