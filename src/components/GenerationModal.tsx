import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from "react";

interface GenerationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateName: string;
  templateDescription: string;
  exampleImage: string;
}

const GenerationModal = ({ 
  open, 
  onOpenChange, 
  templateName, 
  templateDescription,
  exampleImage 
}: GenerationModalProps) => {
  const [prompt, setPrompt] = useState("");
  const [referenceImage, setReferenceImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReferenceImage(e.target.files[0]);
    }
  };

  const handleGenerate = () => {
    console.log("Generating with:", { prompt, referenceImage });
    // Generation logic will go here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{templateName}</DialogTitle>
          <DialogDescription>{templateDescription}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Left Side - Inputs */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div>
              <Label htmlFor="prompt" className="text-sm font-medium mb-2 block">
                Prompt
              </Label>
              <Textarea
                id="prompt"
                placeholder="Describe what you want to generate..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px]"
              />
            </div>

            {/* Reference Image Upload */}
            <div>
              <Label htmlFor="reference-image" className="text-sm font-medium mb-2 block">
                Reference Image
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-accent transition-colors">
                <input
                  id="reference-image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="reference-image"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    {referenceImage ? referenceImage.name : "Click to upload reference image"}
                  </span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              onClick={handleGenerate} 
              className="w-full"
              disabled={!referenceImage || !prompt.trim()}
            >
              Generate Asset
            </Button>
          </div>

          {/* Right Side - Example */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Example Output</Label>
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary sticky top-0">
              <div 
                className="h-full w-full bg-muted"
                style={{ backgroundColor: exampleImage }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerationModal;
