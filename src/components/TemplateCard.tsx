import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Star } from "lucide-react";

interface TemplateCardProps {
  title: string;
  department: string;
  description: string;
  rating: number;
  views: number;
  previewImage?: string;
}

const TemplateCard = ({ 
  title, 
  department, 
  description, 
  rating, 
  views,
  previewImage 
}: TemplateCardProps) => {
  return (
    <Card className="glass-card hover:shadow-xl transition-all hover:-translate-y-2 group">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {previewImage ? (
          <img src={previewImage} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">{department}</span>
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
            <CardDescription>{department}</CardDescription>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span>{views} views</span>
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Use Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
