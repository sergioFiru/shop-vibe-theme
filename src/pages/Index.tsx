import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionNav from "@/components/SectionNav";
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
    name: "Model Runway Walk", 
    description: "Dynamic fashion model videos",
    image: videoModel,
    isVideo: true,
    featured: true
  },
];

const imageGenerationTemplates = [
  { 
    name: "Hero Product Showcase", 
    description: "Create stunning large-scale product imagery",
    image: "hsl(0 0% 25%)",
    featured: true
  },
  { 
    name: "Product in Scene", 
    description: "Place products in lifestyle settings",
    image: "hsl(0 0% 35%)"
  },
  { 
    name: "Studio Lighting", 
    description: "Professional studio product shots",
    image: "hsl(0 0% 40%)"
  },
  { 
    name: "Social Media Ad", 
    description: "Create engaging social content",
    image: "hsl(0 0% 30%)"
  },
  { 
    name: "Lifestyle Photography", 
    description: "Natural product in daily life",
    image: "hsl(0 0% 45%)"
  },
];

const threeDTemplates = [
  { 
    name: "360° Product View", 
    description: "Interactive rotating product display",
    image: "hsl(0 0% 28%)",
    featured: true
  },
  { 
    name: "AR Try-On", 
    description: "Augmented reality preview",
    image: "hsl(0 0% 38%)" 
  },
  { 
    name: "3D Model Viewer", 
    description: "Interactive 3D product model",
    image: "hsl(0 0% 33%)" 
  },
];

const promotionalTemplates = [
  { 
    name: "Hero Slideshow", 
    description: "Dynamic banner carousel",
    image: "hsl(0 0% 32%)",
    featured: true
  },
  { 
    name: "Flash Sale Banner", 
    description: "Limited time offer display",
    image: "hsl(0 0% 42%)" 
  },
  { 
    name: "Discount Announcement", 
    description: "Promotional offer card",
    image: "hsl(0 0% 27%)" 
  },
  { 
    name: "Seasonal Campaign", 
    description: "Holiday promotional banner",
    image: "hsl(0 0% 37%)" 
  },
  { 
    name: "New Arrival Banner", 
    description: "Product launch announcement",
    image: "hsl(0 0% 44%)" 
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
  { 
    name: "Macro Details", 
    description: "Extreme close-up product shots",
    image: "hsl(27 37% 89%)" 
  },
  { 
    name: "Hand Model", 
    description: "Product held in natural poses",
    image: "hsl(29 28% 82%)" 
  },
  { 
    name: "Desktop Setup", 
    description: "Workspace arrangement shots",
    image: "hsl(26 33% 84%)" 
  },
  { 
    name: "Texture Focus", 
    description: "Material and fabric detail",
    image: "hsl(30 26% 78%)" 
  },
  { 
    name: "Color Variants", 
    description: "Multiple color options display",
    image: "hsl(28 35% 86%)" 
  },
  { 
    name: "Gift Wrapping", 
    description: "Festive packaging presentation",
    image: "hsl(31 30% 81%)" 
  },
  { 
    name: "Reflection Shot", 
    description: "Mirror surface reflections",
    image: "hsl(27 29% 77%)" 
  },
  { 
    name: "Bokeh Background", 
    description: "Artistic blurred backdrop",
    image: "hsl(29 34% 88%)" 
  },
  { 
    name: "Product Grid", 
    description: "Multiple item arrangement",
    image: "hsl(26 31% 83%)" 
  },
  { 
    name: "Splash & Water", 
    description: "Dynamic liquid effects",
    image: "hsl(30 28% 79%)" 
  },
  { 
    name: "Neon Glow", 
    description: "Vibrant neon lighting",
    image: "hsl(28 36% 87%)" 
  },
  { 
    name: "Vintage Filter", 
    description: "Retro film aesthetics",
    image: "hsl(31 27% 75%)" 
  },
  { 
    name: "Levitation Effect", 
    description: "Floating product imagery",
    image: "hsl(27 32% 85%)" 
  },
  { 
    name: "Exploded View", 
    description: "Deconstructed product parts",
    image: "hsl(29 30% 80%)" 
  },
  { 
    name: "Size Comparison", 
    description: "Scale reference visuals",
    image: "hsl(26 34% 86%)" 
  },
  { 
    name: "Product Line-up", 
    description: "Sequential product display",
    image: "hsl(30 29% 82%)" 
  },
  { 
    name: "Smoke Effects", 
    description: "Atmospheric smoke styling",
    image: "hsl(28 31% 78%)" 
  },
  { 
    name: "Geometric Props", 
    description: "Modern shape compositions",
    image: "hsl(31 33% 84%)" 
  },
  { 
    name: "Aerial View", 
    description: "Bird's eye perspective",
    image: "hsl(27 28% 81%)" 
  },
  { 
    name: "Product Detail", 
    description: "Feature highlight close-ups",
    image: "hsl(29 35% 88%)" 
  },
  { 
    name: "Natural Light", 
    description: "Sunlit window photography",
    image: "hsl(26 30% 85%)" 
  },
  { 
    name: "Shadow Play", 
    description: "Dramatic shadow effects",
    image: "hsl(30 27% 76%)" 
  },
  { 
    name: "Product Labels", 
    description: "Tag and label focus shots",
    image: "hsl(28 32% 83%)" 
  },
  { 
    name: "Suspended", 
    description: "Hanging product display",
    image: "hsl(31 29% 79%)" 
  },
  { 
    name: "Marble Surface", 
    description: "Luxury marble backdrop",
    image: "hsl(27 34% 87%)" 
  },
  { 
    name: "Wood Texture", 
    description: "Rustic wooden background",
    image: "hsl(29 31% 80%)" 
  },
  { 
    name: "Abstract Shapes", 
    description: "Creative geometric layout",
    image: "hsl(26 28% 82%)" 
  },
  { 
    name: "Product Assembly", 
    description: "Step-by-step build visuals",
    image: "hsl(30 33% 86%)" 
  },
  { 
    name: "Lifestyle Flat Lay", 
    description: "Curated lifestyle arrangement",
    image: "hsl(28 30% 84%)" 
  },
  { 
    name: "Pattern Background", 
    description: "Decorative pattern layouts",
    image: "hsl(31 32% 81%)" 
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
      <SectionNav />
      
      <section className="container mx-auto px-4 py-24">
        {/* Video Generation Templates */}
        <div id="video-generation" className="mb-32">
          <h3 className="text-4xl font-bold text-foreground mb-10 text-center">AI Video Generation</h3>
          <div className="flex gap-8">
            {/* Left side - 3x2 grid of regular cards */}
            <div className="flex-1 grid grid-cols-3 gap-8">
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
            {/* Right side - Featured card */}
            <div className="w-1/4">
              {videoGenerationTemplates.filter(t => t.featured).map((template) => (
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

        {/* Image Generation Templates */}
        <div id="image-generation" className="mb-32 border-t border-border pt-16">
          <h3 className="text-4xl font-bold text-foreground mb-10 text-center">AI Image Generation</h3>
          <div className="space-y-8">
            {/* First row - Featured card */}
            {imageGenerationTemplates.filter(t => t.featured).map((template) => (
              <TemplateCard 
                key={template.name} 
                name={template.name}
                description={template.description}
                exampleImage={template.image}
                onClick={() => setSelectedTemplate(template)}
                className="[&>div:first-child]:aspect-[2/1]"
              />
            ))}
            {/* Second row - Grid of 4 cards */}
            <div className="grid grid-cols-4 gap-8">
              {imageGenerationTemplates.filter(t => !t.featured).map((template) => (
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

        {/* 3D & Interactive */}
        <div id="3d-interactive" className="mb-32 border-t border-border pt-16">
          <h3 className="text-4xl font-bold text-foreground mb-10 text-center">3D & Interactive</h3>
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
            {/* Right side - 2 smaller cards stacked */}
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
        <div id="promotional" className="mb-32 border-t border-border pt-16">
          <h3 className="text-4xl font-bold text-foreground mb-10 text-center">Promotional Templates</h3>
          <div className="space-y-8">
            {/* Wide banner-style card */}
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
            {/* Grid of smaller promotional cards */}
            <div className="grid grid-cols-4 gap-8">
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

        {/* Other Templates */}
        <div id="other-templates" className="border-t border-border pt-16">
          <h3 className="text-4xl font-bold text-foreground mb-10 text-center">Other Templates</h3>
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
