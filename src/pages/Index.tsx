import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemplateCard from "@/components/TemplateCard";
import GenerationModal from "@/components/GenerationModal";
import { useState } from "react";

const templates = [
  { 
    name: "360° Product View", 
    description: "Generate rotating product showcase",
    image: "hsl(30 35% 85%)" 
  },
  { 
    name: "Model Photoshoot", 
    description: "Create professional model imagery",
    image: "hsl(30 25% 70%)" 
  },
  { 
    name: "Hero Banner", 
    description: "Design stunning hero sections",
    image: "hsl(25 40% 90%)" 
  },
  { 
    name: "Product in Scene", 
    description: "Place products in lifestyle settings",
    image: "hsl(30 30% 80%)" 
  },
  { 
    name: "Studio Lighting", 
    description: "Professional studio product shots",
    image: "hsl(30 30% 75%)" 
  },
  { 
    name: "Social Media Ad", 
    description: "Create engaging social content",
    image: "hsl(25 35% 87%)" 
  },
  { 
    name: "Lifestyle Photography", 
    description: "Natural product in daily life",
    image: "hsl(28 32% 82%)" 
  },
  { 
    name: "Close-up Detail", 
    description: "Highlight product features",
    image: "hsl(32 28% 78%)" 
  },
  { 
    name: "Flat Lay", 
    description: "Top-down product arrangement",
    image: "hsl(26 36% 84%)" 
  },
  { 
    name: "Product Packaging", 
    description: "Showcase product with packaging",
    image: "hsl(29 31% 81%)" 
  },
  { 
    name: "Seasonal Theme", 
    description: "Holiday and seasonal imagery",
    image: "hsl(27 34% 86%)" 
  },
  { 
    name: "Product Bundle", 
    description: "Multiple products together",
    image: "hsl(31 29% 79%)" 
  },
  { 
    name: "Minimalist White", 
    description: "Clean white background",
    image: "hsl(30 20% 92%)" 
  },
  { 
    name: "Dark & Moody", 
    description: "Dramatic dark background",
    image: "hsl(30 25% 65%)" 
  },
  { 
    name: "Outdoor Scene", 
    description: "Natural outdoor setting",
    image: "hsl(28 33% 83%)" 
  },
  { 
    name: "Food Styling", 
    description: "Appetizing food photography",
    image: "hsl(25 38% 88%)" 
  },
  { 
    name: "Tech Product", 
    description: "Modern tech showcase",
    image: "hsl(30 27% 76%)" 
  },
  { 
    name: "Fashion Editorial", 
    description: "High-fashion imagery",
    image: "hsl(26 35% 85%)" 
  },
  { 
    name: "Before & After", 
    description: "Transformation comparison",
    image: "hsl(29 30% 80%)" 
  },
  { 
    name: "Video Thumbnail", 
    description: "Eye-catching video covers",
    image: "hsl(28 34% 87%)" 
  },
  { 
    name: "Product Comparison", 
    description: "Side-by-side comparison",
    image: "hsl(31 28% 77%)" 
  },
  { 
    name: "Instagram Story", 
    description: "Vertical story format",
    image: "hsl(27 32% 84%)" 
  },
  { 
    name: "Email Header", 
    description: "Newsletter banner images",
    image: "hsl(30 31% 81%)" 
  },
  { 
    name: "Mobile App Screen", 
    description: "App interface mockups",
    image: "hsl(26 29% 78%)" 
  },
  { 
    name: "Website Banner", 
    description: "Wide web banners",
    image: "hsl(29 33% 86%)" 
  },
  { 
    name: "Product Infographic", 
    description: "Visual product information",
    image: "hsl(28 30% 82%)" 
  },
  { 
    name: "Size Guide", 
    description: "Dimensional reference images",
    image: "hsl(31 27% 79%)" 
  },
  { 
    name: "Testimonial Visual", 
    description: "Customer review imagery",
    image: "hsl(27 35% 85%)" 
  },
  { 
    name: "Brand Story", 
    description: "Behind-the-scenes content",
    image: "hsl(30 29% 83%)" 
  },
  { 
    name: "Collection Preview", 
    description: "Product line showcase",
    image: "hsl(28 31% 80%)" 
  },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<{
    name: string;
    description: string;
    image: string;
  } | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Generate AI Assets for Your E-commerce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a template below and create professional product imagery in seconds
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {templates.map((template) => (
            <TemplateCard 
              key={template.name} 
              name={template.name}
              description={template.description}
              exampleImage={template.image}
              onClick={() => setSelectedTemplate(template)}
            />
          ))}
        </div>
      </section>

      <GenerationModal
        open={!!selectedTemplate}
        onOpenChange={(open) => !open && setSelectedTemplate(null)}
        templateName={selectedTemplate?.name || ""}
        templateDescription={selectedTemplate?.description || ""}
        exampleImage={selectedTemplate?.image || ""}
      />

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">STORE</h3>
              <p className="text-sm text-muted-foreground">
                Quality products for everyday life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
