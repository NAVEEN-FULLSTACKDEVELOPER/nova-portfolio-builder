import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

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
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="glass-card hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle>Project {i}</CardTitle>
                        <CardDescription>Updated 2 days ago</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm">4.8 (12 reviews)</span>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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

              {/* Department Categories */}
              <div className="grid gap-6 md:grid-cols-3">
                {["Electrical Engineering (EEE)", "Electronics & Communication (ECE)", "Mechanical Engineering"].map((dept) => (
                  <Card key={dept} className="glass-card hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{dept}</CardTitle>
                      <CardDescription>12 templates available</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Browse Templates
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <div className="flex items-center gap-2">
                    <Input placeholder="Ask me anything..." className="flex-1" />
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <MessageSquare className="h-4 w-4" />
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
                  <p className="text-center text-muted-foreground">No recent activity</p>
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
