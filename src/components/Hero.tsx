import { Button } from "@/components/ui/button";
import productShot from "@/assets/example-product-shot.jpg";
import modelShoot from "@/assets/example-model-shoot.jpg";
import heroBanner from "@/assets/example-hero-banner.jpg";
import socialAd from "@/assets/example-social-ad.jpg";
import view360 from "@/assets/example-360-view.jpg";
import shopifyLogo from "@/assets/shopify-logo.svg";
const Hero = () => {
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
  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden pt-8 pb-20">
      {/* Background Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={shopifyLogo} 
          alt="" 
          className="absolute top-20 right-10 w-64 h-64 opacity-[0.03] dark:opacity-[0.05]"
        />
        <img 
          src={shopifyLogo} 
          alt="" 
          className="absolute bottom-32 left-10 w-72 h-72 opacity-[0.03] dark:opacity-[0.05]"
        />
        <svg 
          className="absolute top-1/3 left-1/4 w-56 h-56 opacity-[0.03] dark:opacity-[0.05]"
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100 20c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"/>
          <circle cx="100" cy="100" r="30"/>
        </svg>
        <svg 
          className="absolute bottom-20 right-1/4 w-64 h-64 opacity-[0.03] dark:opacity-[0.05]"
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100 20c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"/>
          <circle cx="100" cy="100" r="30"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center mb-12 z-10">
        <p className="text-sm text-muted-foreground mb-2">Over 10,000+ assets generated</p>
        <h1 className="text-5xl text-foreground mb-6 font-bold md:text-8xl">Fastest way to create<br />
          <span className="text-accent text-8xl">AI Ecomm Assets</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Choose a template, upload your product and generate high-resolution visual assets for your Brand.</p>
        <Button size="lg" className="text-lg px-8">
          Create Asset Now
        </Button>
        
      </div>

      {/* Carousel Section */}
      <div className="w-full overflow-hidden" style={{ perspective: "1000px" }}>
        <div className="flex gap-6 py-8 animate-scroll">
          {/* Render items twice for seamless loop */}
          {[...exampleAssets, ...exampleAssets].map((asset, index) => (
            <div
              key={`${asset.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
              style={{
                transform: "rotateY(-5deg) rotateX(2deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover-scale border-4 border-border/50">
                <img src={asset.image} alt={asset.label} className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Hero;