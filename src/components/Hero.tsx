import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import productShot from "@/assets/example-product-shot.jpg";
import modelShoot from "@/assets/example-model-shoot.jpg";
import heroBanner from "@/assets/example-hero-banner.jpg";
import socialAd from "@/assets/example-social-ad.jpg";
import view360 from "@/assets/example-360-view.jpg";
const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false
  });

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoScroll);
  }, [emblaApi]);
  const exampleAssets = [{
    id: 1,
    image: productShot,
    label: "Product Shot"
  }, {
    id: 2,
    image: modelShoot,
    label: "Model Shoot"
  }, {
    id: 3,
    image: heroBanner,
    label: "Hero Banner"
  }, {
    id: 4,
    image: socialAd,
    label: "Social Ad"
  }, {
    id: 5,
    image: view360,
    label: "360° View"
  }];
  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center mb-12 z-10">
        <p className="text-sm text-muted-foreground mb-4">Over 10,000+ assets generated</p>
        <h1 className="text-5xl text-foreground mb-6 font-bold md:text-8xl">Fastest way to create
our Ecomm Assets<br />
          <span className="text-accent">our Ecomm Assets</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Choose a template, upload your product and generate high-resolution visual assets for your Brand.</p>
        <Button size="lg" className="text-lg px-8">
          Create Asset Now
        </Button>
        
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-7xl mx-auto px-4" style={{
      perspective: "1000px"
    }}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 py-8">
            {exampleAssets.map(asset => <div key={asset.id} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0" style={{
            transform: "rotateY(-5deg) rotateX(2deg)",
            transformStyle: "preserve-3d"
          }}>
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover-scale border-4 border-border/50">
                  <img src={asset.image} alt={asset.label} className="h-full w-full object-cover" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;