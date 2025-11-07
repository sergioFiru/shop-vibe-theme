import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TemplateCardProps {
  name: string;
  description: string;
  exampleImage: string;
  onClick: () => void;
}

const TemplateCard = ({ name, description, exampleImage, onClick }: TemplateCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="aspect-square overflow-hidden bg-secondary">
        <div 
          className="h-full w-full bg-muted group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: exampleImage }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <Button size="sm" variant="outline" className="w-full">
          Generate Asset
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
