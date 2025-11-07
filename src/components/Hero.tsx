import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          New Collection
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our latest arrivals. Crafted with care, designed for you.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
