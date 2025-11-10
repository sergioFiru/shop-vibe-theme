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
  const logoPositions = [
    // Dense random mix across the entire background
    { top: '3%', left: '5%', type: 'shopify' },
    { top: '5%', left: '12%', type: 'woo' },
    { top: '4%', left: '20%', type: 'shopify' },
    { top: '6%', left: '28%', type: 'woo' },
    { top: '3%', left: '36%', type: 'shopify' },
    { top: '5%', left: '44%', type: 'woo' },
    { top: '4%', left: '52%', type: 'shopify' },
    { top: '6%', left: '60%', type: 'woo' },
    { top: '3%', left: '68%', type: 'shopify' },
    { top: '5%', left: '76%', type: 'woo' },
    { top: '4%', left: '84%', type: 'shopify' },
    { top: '6%', left: '92%', type: 'woo' },
    { top: '12%', left: '3%', type: 'woo' },
    { top: '14%', left: '11%', type: 'shopify' },
    { top: '13%', left: '19%', type: 'woo' },
    { top: '15%', left: '27%', type: 'shopify' },
    { top: '12%', left: '35%', type: 'woo' },
    { top: '14%', left: '43%', type: 'shopify' },
    { top: '13%', left: '51%', type: 'woo' },
    { top: '15%', left: '59%', type: 'shopify' },
    { top: '12%', left: '67%', type: 'woo' },
    { top: '14%', left: '75%', type: 'shopify' },
    { top: '13%', left: '83%', type: 'woo' },
    { top: '15%', left: '91%', type: 'shopify' },
    { top: '21%', left: '6%', type: 'shopify' },
    { top: '23%', left: '14%', type: 'woo' },
    { top: '22%', left: '22%', type: 'shopify' },
    { top: '24%', left: '30%', type: 'woo' },
    { top: '21%', left: '38%', type: 'shopify' },
    { top: '23%', left: '46%', type: 'woo' },
    { top: '22%', left: '54%', type: 'shopify' },
    { top: '24%', left: '62%', type: 'woo' },
    { top: '21%', left: '70%', type: 'shopify' },
    { top: '23%', left: '78%', type: 'woo' },
    { top: '22%', left: '86%', type: 'shopify' },
    { top: '24%', left: '94%', type: 'woo' },
    { top: '30%', left: '4%', type: 'woo' },
    { top: '32%', left: '12%', type: 'shopify' },
    { top: '31%', left: '20%', type: 'woo' },
    { top: '33%', left: '28%', type: 'shopify' },
    { top: '30%', left: '36%', type: 'woo' },
    { top: '32%', left: '44%', type: 'shopify' },
    { top: '31%', left: '52%', type: 'woo' },
    { top: '33%', left: '60%', type: 'shopify' },
    { top: '30%', left: '68%', type: 'woo' },
    { top: '32%', left: '76%', type: 'shopify' },
    { top: '31%', left: '84%', type: 'woo' },
    { top: '33%', left: '92%', type: 'shopify' },
    { top: '39%', left: '7%', type: 'shopify' },
    { top: '41%', left: '15%', type: 'woo' },
    { top: '40%', left: '23%', type: 'shopify' },
    { top: '42%', left: '31%', type: 'woo' },
    { top: '39%', left: '39%', type: 'shopify' },
    { top: '41%', left: '47%', type: 'woo' },
    { top: '40%', left: '55%', type: 'shopify' },
    { top: '42%', left: '63%', type: 'woo' },
    { top: '39%', left: '71%', type: 'shopify' },
    { top: '41%', left: '79%', type: 'woo' },
    { top: '40%', left: '87%', type: 'shopify' },
    { top: '42%', left: '95%', type: 'woo' },
    { top: '48%', left: '5%', type: 'woo' },
    { top: '50%', left: '13%', type: 'shopify' },
    { top: '49%', left: '21%', type: 'woo' },
    { top: '51%', left: '29%', type: 'shopify' },
    { top: '48%', left: '37%', type: 'woo' },
    { top: '50%', left: '45%', type: 'shopify' },
    { top: '49%', left: '53%', type: 'woo' },
    { top: '51%', left: '61%', type: 'shopify' },
    { top: '48%', left: '69%', type: 'woo' },
    { top: '50%', left: '77%', type: 'shopify' },
    { top: '49%', left: '85%', type: 'woo' },
    { top: '51%', left: '93%', type: 'shopify' },
    { top: '57%', left: '8%', type: 'shopify' },
    { top: '59%', left: '16%', type: 'woo' },
    { top: '58%', left: '24%', type: 'shopify' },
    { top: '60%', left: '32%', type: 'woo' },
    { top: '57%', left: '40%', type: 'shopify' },
    { top: '59%', left: '48%', type: 'woo' },
    { top: '58%', left: '56%', type: 'shopify' },
    { top: '60%', left: '64%', type: 'woo' },
    { top: '57%', left: '72%', type: 'shopify' },
    { top: '59%', left: '80%', type: 'woo' },
    { top: '58%', left: '88%', type: 'shopify' },
    { top: '60%', left: '96%', type: 'woo' },
    { top: '66%', left: '6%', type: 'woo' },
    { top: '68%', left: '14%', type: 'shopify' },
    { top: '67%', left: '22%', type: 'woo' },
    { top: '69%', left: '30%', type: 'shopify' },
    { top: '66%', left: '38%', type: 'woo' },
    { top: '68%', left: '46%', type: 'shopify' },
    { top: '67%', left: '54%', type: 'woo' },
    { top: '69%', left: '62%', type: 'shopify' },
    { top: '66%', left: '70%', type: 'woo' },
    { top: '68%', left: '78%', type: 'shopify' },
    { top: '67%', left: '86%', type: 'woo' },
    { top: '69%', left: '94%', type: 'shopify' },
    { top: '75%', left: '9%', type: 'shopify' },
    { top: '77%', left: '17%', type: 'woo' },
    { top: '76%', left: '25%', type: 'shopify' },
    { top: '78%', left: '33%', type: 'woo' },
    { top: '75%', left: '41%', type: 'shopify' },
    { top: '77%', left: '49%', type: 'woo' },
    { top: '76%', left: '57%', type: 'shopify' },
    { top: '78%', left: '65%', type: 'woo' },
    { top: '75%', left: '73%', type: 'shopify' },
    { top: '77%', left: '81%', type: 'woo' },
    { top: '76%', left: '89%', type: 'shopify' },
    { top: '84%', left: '7%', type: 'woo' },
    { top: '86%', left: '15%', type: 'shopify' },
    { top: '85%', left: '23%', type: 'woo' },
    { top: '87%', left: '31%', type: 'shopify' },
    { top: '84%', left: '39%', type: 'woo' },
    { top: '86%', left: '47%', type: 'shopify' },
    { top: '85%', left: '55%', type: 'woo' },
    { top: '87%', left: '63%', type: 'shopify' },
    { top: '84%', left: '71%', type: 'woo' },
    { top: '86%', left: '79%', type: 'shopify' },
    { top: '85%', left: '87%', type: 'woo' },
    { top: '87%', left: '95%', type: 'shopify' },
    { top: '93%', left: '10%', type: 'shopify' },
    { top: '95%', left: '18%', type: 'woo' },
    { top: '94%', left: '26%', type: 'shopify' },
    { top: '96%', left: '34%', type: 'woo' },
    { top: '93%', left: '42%', type: 'shopify' },
    { top: '95%', left: '50%', type: 'woo' },
    { top: '94%', left: '58%', type: 'shopify' },
    { top: '96%', left: '66%', type: 'woo' },
    { top: '93%', left: '74%', type: 'shopify' },
    { top: '95%', left: '82%', type: 'woo' },
    { top: '94%', left: '90%', type: 'shopify' },
  ];

  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden pt-8 pb-20">
      {/* Background Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {logoPositions.map((pos, i) => (
          pos.type === 'shopify' ? (
            <img 
              key={`logo-${i}`}
              src={shopifyLogo} 
              alt="" 
              className="absolute w-12 h-12 opacity-15"
              style={{
                top: pos.top,
                left: pos.left,
                filter: 'grayscale(100%) brightness(0.3)'
              }}
            />
          ) : (
            <svg 
              key={`logo-${i}`}
              className="absolute w-12 h-12 opacity-15"
              style={{
                top: pos.top,
                left: pos.left
              }}
              viewBox="0 0 200 200" 
              fill="#444444"
            >
              <path d="M100 20c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"/>
              <circle cx="100" cy="100" r="30"/>
            </svg>
          )
        ))}
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