import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-secondary">
        <div 
          className="h-full w-full bg-muted group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: image }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">${price}</span>
          <Button size="sm" variant="outline">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
