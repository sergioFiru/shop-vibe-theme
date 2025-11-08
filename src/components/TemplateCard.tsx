import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TemplateCardProps {
  name: string;
  description: string;
  exampleImage: string;
  onClick: () => void;
  isVideo?: boolean;
  className?: string;
}

const TemplateCard = ({ name, description, exampleImage, onClick, isVideo = false, className }: TemplateCardProps) => {
  const isImageUrl = exampleImage.startsWith('http') || exampleImage.startsWith('/') || exampleImage.startsWith('data:');
  
  return (
    <Card className={`group overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer rounded-md flex flex-col ${className || ''}`} onClick={onClick}>
      <div className="aspect-square overflow-hidden bg-secondary relative flex-shrink-0">
        {isVideo && isImageUrl ? (
          <video 
            src={exampleImage} 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : isImageUrl ? (
          <img 
            src={exampleImage} 
            alt={name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div 
            className="h-full w-full bg-muted group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: exampleImage }}
          />
        )}
      </div>
      <CardContent className="p-4 mt-auto">
        <h3 className="font-medium text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
