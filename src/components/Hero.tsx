import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import productShot from "@/assets/example-product-shot.jpg";
import modelShoot from "@/assets/example-model-shoot.jpg";
import heroBanner from "@/assets/example-hero-banner.jpg";
import socialAd from "@/assets/example-social-ad.jpg";
import view360 from "@/assets/example-360-view.jpg";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoScroll);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  const exampleAssets = [
    { id: 1, image: productShot, label: "Product Shot" },
    { id: 2, image: modelShoot, label: "Model Shoot" },
    { id: 3, image: heroBanner, label: "Hero Banner" },
    { id: 4, image: socialAd, label: "Social Ad" },
    { id: 5, image: view360, label: "360° View" },
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
      <div className="w-full max-w-7xl mx-auto px-4" style={{ perspective: "2000px" }}>
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-6 py-12" style={{ transformStyle: "preserve-3d" }}>
            {exampleAssets.map((asset, index) => {
              const totalSlides = exampleAssets.length;
              const slideProgress = (index / totalSlides) - scrollProgress;
              const distanceFromCenter = Math.abs(slideProgress % 1);
              
              // Center slides (distanceFromCenter close to 0) should be further away
              const scale = distanceFromCenter < 0.3 
                ? 0.75 + (distanceFromCenter * 0.83) // Smaller when centered
                : 1;
              
              const translateZ = distanceFromCenter < 0.3
                ? -200 + (distanceFromCenter * 666) // Push back when centered
                : 0;
              
              const opacity = distanceFromCenter < 0.4
                ? 0.5 + (distanceFromCenter * 1.25)
                : 1;

              return (
                <div
                  key={asset.id}
                  className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_28%] min-w-0 transition-all duration-300"
                  style={{
                    transform: `translateZ(${translateZ}px) scale(${scale})`,
                    opacity: opacity,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-border/50">
                    <img
                      src={asset.image}
                      alt={asset.label}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
