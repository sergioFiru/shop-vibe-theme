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

// Site Assets - Image Generation
const photoShootTemplates = [
  { 
    name: "Studio Lighting", 
    description: "Professional studio product shots",
    image: templateStudio,
    featured: true
  },
  { 
    name: "Lifestyle Photography", 
    description: "Natural product in daily life",
    image: templateLifestyle
  },
  { 
    name: "Model Fashion Shoot", 
    description: "Professional model photography",
    image: templateModel
  },
  { 
    name: "Moon Scene", 
    description: "Dramatic moonlit product shots",
    image: "hsl(220 30% 25%)"
  },
  { 
    name: "Safari Adventure", 
    description: "Wild outdoor product scenes",
    image: "hsl(35 40% 55%)"
  },
  { 
    name: "Black Friday Sale", 
    description: "Promotional sale imagery",
    image: "hsl(0 0% 10%)"
  },
];

// Video Assets
const videoTemplates = [
  { 
    name: "Fashion Hero Video", 
    description: "Cinematic fashion showcase",
    image: videoModel,
    isVideo: true,
    featured: true
  },
  { 
    name: "360° Product Rotation", 
    description: "Spinning product showcase video",
    image: video360,
    isVideo: true
  },
  { 
    name: "Product Animation", 
    description: "Dynamic product movement",
    image: videoDemo,
    isVideo: true
  },
  { 
    name: "Product 360°", 
    description: "Complete rotation view",
    image: video360,
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
];

// 3D & Interactive
const threeDTemplates = [
  { 
    name: "3D Product Render", 
    description: "Photorealistic 3D visualization",
    image: templateScene,
    featured: true
  },
  { 
    name: "360° View", 
    description: "Interactive product rotation",
    image: template360
  },
  { 
    name: "Product Close-up", 
    description: "Detailed texture showcase",
    image: templateCloseup
  },
];

// Promotional Templates
const promotionalTemplates = [
  { 
    name: "Hero Banner Slideshow", 
    description: "Large homepage hero banners",
    image: templateHero,
    featured: true
  },
  { 
    name: "Social Media Ad", 
    description: "Engaging social content",
    image: templateSocial
  },
  { 
    name: "Email Header", 
    description: "Newsletter banner images",
    image: "hsl(30 31% 81%)"
  },
  { 
    name: "Website Banner", 
    description: "Wide web banners",
    image: "hsl(29 33% 86%)"
  },
  { 
    name: "Instagram Story", 
    description: "Vertical story format",
    image: "hsl(27 32% 84%)"
  },
  { 
    name: "Seasonal Campaign", 
    description: "Holiday and seasonal imagery",
    image: "hsl(27 34% 86%)"
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
        
        {/* Site Assets - Image Generation */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Site Assets - Image Generation</h3>
          <div className="space-y-8">
            {/* Featured large card */}
            {photoShootTemplates.filter(t => t.featured).map((template) => (
              <TemplateCard 
                key={template.name} 
                name={template.name}
                description={template.description}
                exampleImage={template.image}
                onClick={() => setSelectedTemplate(template)}
                className="[&>div:first-child]:aspect-[2/1]"
              />
            ))}
            {/* Two medium cards side by side */}
            <div className="grid grid-cols-2 gap-8">
              {photoShootTemplates.slice(1, 3).map((template) => (
                <TemplateCard 
                  key={template.name} 
                  name={template.name}
                  description={template.description}
                  exampleImage={template.image}
                  onClick={() => setSelectedTemplate(template)}
                />
              ))}
            </div>
            {/* Three smaller cards */}
            <div className="grid grid-cols-3 gap-8">
              {photoShootTemplates.slice(3).map((template) => (
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
        </div>

        {/* Video Assets */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Video Assets</h3>
          <div className="flex gap-8">
            {/* Left side - 2x2 grid of regular cards */}
            <div className="flex-1 grid grid-cols-2 gap-8">
              {videoTemplates.filter(t => !t.featured).map((template) => (
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
            {/* Right side - Featured tall card */}
            <div className="w-1/3">
              {videoTemplates.filter(t => t.featured).map((template) => (
                <TemplateCard 
                  key={template.name} 
                  name={template.name}
                  description={template.description}
                  exampleImage={template.image}
                  isVideo={template.isVideo}
                  onClick={() => setSelectedTemplate(template)}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3D & Interactive */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">3D & Interactive</h3>
          <div className="flex gap-8">
            {/* Left side - Large featured card */}
            <div className="w-2/3">
              {threeDTemplates.filter(t => t.featured).map((template) => (
                <TemplateCard 
                  key={template.name} 
                  name={template.name}
                  description={template.description}
                  exampleImage={template.image}
                  onClick={() => setSelectedTemplate(template)}
                  className="h-full"
                />
              ))}
            </div>
            {/* Right side - Two stacked cards */}
            <div className="w-1/3 flex flex-col gap-8">
              {threeDTemplates.filter(t => !t.featured).map((template) => (
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
        </div>

        {/* Promotional Templates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Promotional Templates</h3>
          <div className="space-y-8">
            {/* Wide banner style card */}
            {promotionalTemplates.filter(t => t.featured).map((template) => (
              <TemplateCard 
                key={template.name} 
                name={template.name}
                description={template.description}
                exampleImage={template.image}
                onClick={() => setSelectedTemplate(template)}
                className="[&>div:first-child]:aspect-[3/1]"
              />
            ))}
            {/* Grid of 5 cards */}
            <div className="grid grid-cols-5 gap-8">
              {promotionalTemplates.filter(t => !t.featured).map((template) => (
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
