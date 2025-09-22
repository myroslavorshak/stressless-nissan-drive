import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold">Nissan Dealership Hub</h1>
        <p className="text-xl text-muted-foreground mb-8">Choose your experience</p>
        
        <div className="space-y-4">
          <Button variant="cta" size="xl" asChild>
            <a href="/zero-stress-nissan" className="flex items-center space-x-2">
              <span>Zero-Stress Nissan Bundle</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            0% APR + 60-Minute Sign-and-Drive + 25 bundles only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
