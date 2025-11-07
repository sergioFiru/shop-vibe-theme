import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false,
  });

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const exampleAssets = [
    { id: 1, color: "hsl(30 35% 85%)", label: "Product Shot" },
    { id: 2, color: "hsl(210 50% 60%)", label: "Model Shoot" },
    { id: 3, color: "hsl(160 40% 65%)", label: "Hero Banner" },
    { id: 4, color: "hsl(350 60% 70%)", label: "Social Ad" },
    { id: 5, color: "hsl(30 30% 75%)", label: "360° View" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center mb-12 z-10">
        <p className="text-sm text-muted-foreground mb-4">Over 10,000+ assets generated</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          The Fastest Way to
          <br />
          <span className="text-accent">Generate Assets</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create stunning AI-powered product images and video mockups in seconds. Upload your product, choose a template, and generate high-resolution assets instantly.
        </p>
        <Button size="lg" className="text-lg px-8">
          Create Asset Now
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Sign up today to receive 2 free credits and instantly create stunning assets
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-7xl mx-auto px-4" style={{ perspective: "1000px" }}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 py-8">
            {exampleAssets.map((asset) => (
              <div
                key={asset.id}
                className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0"
                style={{
                  transform: "rotateY(-5deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl hover-scale border-4 border-border/50">
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: asset.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
