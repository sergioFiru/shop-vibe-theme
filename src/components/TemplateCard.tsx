import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <Card className={cn("group overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer rounded-md", className)} onClick={onClick}>
      <div className="aspect-square overflow-hidden bg-secondary relative h-full">
        {isVideo && isImageUrl ? (
          <>
            <video 
              src={exampleImage} 
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
          </>
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
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
