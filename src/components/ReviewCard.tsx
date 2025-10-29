import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard = ({ reviewer, rating, comment, date }: ReviewCardProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {reviewer.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{reviewer}</h4>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">{comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
