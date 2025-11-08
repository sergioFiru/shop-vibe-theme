import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemplateCard from "@/components/TemplateCard";
import GenerationModal from "@/components/GenerationModal";
import { useState } from "react";

import video360 from "@/assets/video-360-rotation.jpg";
import videoModel from "@/assets/video-model-walk.jpg";
import videoUnboxing from "@/assets/video-unboxing.jpg";
import videoDemo from "@/assets/video-demo.jpg";
import videoSocial from "@/assets/video-social-reel.jpg";
import videoLifestyle from "@/assets/video-lifestyle.jpg";
import videoBeforeAfter from "@/assets/video-before-after.jpg";
import videoFeatures from "@/assets/video-features.jpg";

import template360 from "@/assets/template-360-view.jpg";
import templateModel from "@/assets/template-model-shoot.jpg";
import templateHero from "@/assets/template-hero-banner.jpg";
import templateScene from "@/assets/template-product-scene.jpg";
import templateStudio from "@/assets/template-studio-lighting.jpg";
import templateSocial from "@/assets/template-social-ad.jpg";
import templateLifestyle from "@/assets/template-lifestyle.jpg";
import templateCloseup from "@/assets/template-closeup.jpg";

const videoGenerationTemplates = [
  { 
    name: "360° Product Rotation", 
    description: "Spinning product showcase video",
    image: video360,
    isVideo: true
  },
  { 
    name: "Model Runway Walk", 
    description: "Dynamic fashion model videos",
    image: videoModel,
    isVideo: true,
    featured: true
  },
  { 
    name: "Product Unboxing", 
    description: "Engaging unboxing experience",
    image: videoUnboxing,
    isVideo: true
  },
  { 
    name: "Product Demo", 
    description: "Show product in action",
    image: videoDemo,
    isVideo: true
  },
  { 
    name: "Social Media Reel", 
    description: "Short-form viral content",
    image: videoSocial,
    isVideo: true
  },
  { 
    name: "Lifestyle Scene", 
    description: "Product in daily life video",
    image: videoLifestyle,
    isVideo: true
  },
  { 
    name: "Before & After", 
    description: "Transformation reveal video",
    image: videoBeforeAfter,
    isVideo: true
  },
  { 
    name: "Product Features", 
    description: "Highlight key features video",
    image: videoFeatures,
    isVideo: true
  },
];

const imageGenerationTemplates = [
  { 
    name: "360° Product View", 
    description: "Generate rotating product showcase",
    image: template360
  },
  { 
    name: "Model Photoshoot", 
    description: "Create professional model imagery",
    image: templateModel
  },
  { 
    name: "Hero Banner", 
    description: "Design stunning hero sections",
    image: templateHero
  },
  { 
    name: "Product in Scene", 
    description: "Place products in lifestyle settings",
    image: templateScene
  },
  { 
    name: "Studio Lighting", 
    description: "Professional studio product shots",
    image: templateStudio
  },
  { 
    name: "Social Media Ad", 
    description: "Create engaging social content",
    image: templateSocial
  },
  { 
    name: "Lifestyle Photography", 
    description: "Natural product in daily life",
    image: templateLifestyle
  },
  { 
    name: "Close-up Detail", 
    description: "Highlight product features",
    image: templateCloseup
  },
];

const otherTemplates = [
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
        
        {/* Video Generation Templates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">AI Video Generation</h3>
          <div className="grid grid-cols-4 gap-8">
            {/* Left side - Featured card spanning 2 rows */}
            <div className="col-span-1 row-span-2">
              {videoGenerationTemplates.filter(t => t.featured).map((template) => (
                <TemplateCard 
                  key={template.name} 
                  name={template.name}
                  description={template.description}
                  exampleImage={template.image}
                  isVideo={template.isVideo}
                  onClick={() => setSelectedTemplate(template)}
                  className="h-full aspect-[1/2]"
                />
              ))}
            </div>
            {/* Right side - 3x2 grid of regular cards */}
            <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-8">
              {videoGenerationTemplates.filter(t => !t.featured).map((template) => (
                <TemplateCard 
                  key={template.name} 
                  name={template.name}
                  description={template.description}
                  exampleImage={template.image}
                  isVideo={template.isVideo}
                  onClick={() => setSelectedTemplate(template)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Generation Templates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">AI Image Generation</h3>
          <div className="grid grid-cols-4 gap-8">
            {imageGenerationTemplates.map((template) => (
              <TemplateCard 
                key={template.name} 
                name={template.name}
                description={template.description}
                exampleImage={template.image}
                onClick={() => setSelectedTemplate(template)}
              />
            ))}
          </div>
        </div>

        {/* Other Templates */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Other Templates</h3>
          <div className="grid grid-cols-4 gap-8">
            {otherTemplates.map((template) => (
              <TemplateCard 
                key={template.name} 
                name={template.name}
                description={template.description}
                exampleImage={template.image}
                onClick={() => setSelectedTemplate(template)}
              />
            ))}
          </div>
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
