import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Check, Clock, Shield, Home, Wrench, Sparkles, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vinData from "../../data/eligible-vins.json";
import heroImage from "@/assets/hero-delivery.jpg";

interface VehicleData {
  id: string;
  year: string;
  model: string;
  trim: string;
  stock: string;
  vin: string;
  color: string;
  highlights: string[];
  available: boolean;
}

const ZeroStressNissan = () => {
  const [availableVins, setAvailableVins] = useState<VehicleData[]>(vinData.filter(v => v.available));
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedVin, setSelectedVin] = useState<string>('');

  const totalBundles = 25;
  const bundlesLeft = availableVins.length;
  const progressPercentage = (bundlesLeft / totalBundles) * 100;

  const dealerPhone = '(555) 123-4567';
  const dealerSMS = '5551234567';

  const handleVinReserve = (stockNumber: string) => {
    setSelectedVin(stockNumber);
    setShowLeadForm(true);
    // Simulate VIN being reserved (client-side for demo)
    // In production, this would be an API call
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "60-Minute Sign-and-Drive Guarantee",
      description: "If we miss, you get a $250 service credit"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "1-Year Maintenance",
      description: "Oil changes, tire rotations, multi-point inspections"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Lifetime Car Washes",
      description: "Clean car, no hassle"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "VIP Service Access", 
      description: "Guaranteed loaner on >2-hour services (or rideshare credit if fleet full)"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Delivery + DMV Concierge",
      description: "We handle plates, title, temp tags; you relax"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "No-Regret 7-Day/300-Mile Exchange", 
      description: "Swap once for any in-stock Nissan of equal/greater value; pay any price difference"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Reserve your VIN",
      description: "We confirm by text/call"
    },
    {
      number: "02", 
      title: "60-Minute Sign-and-Drive",
      description: "We prep paperwork; you sign and go"
    },
    {
      number: "03",
      title: "Enjoy zero-stress ownership",
      description: "Maintenance, washes, VIP loaner, DMV handled"
    }
  ];

  const faqs = [
    {
      question: "Who qualifies for 0% APR?",
      answer: "0.0% APR for up to 60 months available on select new Nissan models to well-qualified buyers when financed through NMAC. Not all buyers will qualify. See dealer for details."
    },
    {
      question: "How is the 60 minutes measured?",
      answer: "Clock starts at scheduled appointment check-in once VIN is selected; stops at signed buyer's order. If we miss 60 minutes, a $250 service credit is issued at delivery."
    },
    {
      question: "Can I do home delivery?",
      answer: "Yes! Home delivery and DMV concierge services are included at no additional charge with the Zero-Stress Bundle."
    },
    {
      question: "What about trade-ins and negative equity?",
      answer: "We accept trade-ins and can work with negative equity situations. Our finance team will review your specific situation during the reservation process."
    },
    {
      question: "What are the doc fees and government fees?",
      answer: "Advertised price excludes tax, title, license, and the dealer documentary service fee (charged at the current Illinois maximum as permitted by law)."
    },
    {
      question: "Can out-of-state buyers participate?",
      answer: "Yes, but residency restrictions may apply for financing. We can arrange delivery and handle DMV requirements for most neighboring states."
    },
    {
      question: "Can I really exchange it?",
      answer: "Yes! One exchange within 7 days/300 miles for an in-stock new Nissan of equal/greater value. Vehicle must be in substantially the same condition. See Exchange Addendum for complete terms."
    },
    {
      question: "What happens if the bundle sells out?",
      answer: "When all 25 bundles are gone, you can join our waitlist for the next batch. We'll notify you first when new bundles become available."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-lg">Nissan Dealer</span>
            {bundlesLeft > 0 && (
              <Badge variant="secondary" className="ml-4">
                {bundlesLeft} bundles left
              </Badge>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a href={`tel:${dealerPhone}`} className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{dealerPhone}</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={`sms:${dealerSMS}`} className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Text Us</span>
              </a>
            </Button>
            <Button variant="cta" size="sm" onClick={() => setShowLeadForm(true)}>
              Reserve Your VIN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Skip the hassle. Drive in 60 minutes.{' '}
                <span className="text-primary">{totalBundles} bundles only.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                0% APR for up to 60 months on select new Nissan models + 1-Year Maintenance + No-Regret 7-Day/300-Mile Exchange.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" onClick={() => setShowLeadForm(true)}>
                  Reserve Your VIN
                </Button>
                <Button variant="dealershipOutline" size="xl" onClick={() => setShowLeadForm(true)}>
                  Book 60-Minute Sign-and-Drive
                </Button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">60-Minute Sign-and-Drive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">1-Year Maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">VIP Loaner Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">Home Delivery + DMV</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">Lifetime Car Washes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">7-Day/300-Mile Exchange</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Happy customers receiving keys to their new Nissan at the dealership"
                className="aspect-[4/3] w-full object-cover rounded-lg dealership-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Scarcity + Eligible VINs */}
      <section className="py-component bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-background p-4 rounded-lg dealership-shadow">
              <span className="text-2xl font-bold text-primary">{bundlesLeft}</span>
              <span className="text-muted-foreground">of {totalBundles} bundles left</span>
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full scarcity-bar transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableVins.map((vehicle) => (
              <Card key={vehicle.id} className="dealership-shadow hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">
                        {vehicle.year} {vehicle.model} {vehicle.trim}
                      </h3>
                      <p className="text-muted-foreground">Stock #{vehicle.stock}</p>
                      <p className="text-sm text-muted-foreground">VIN: {vehicle.vin}</p>
                    </div>
                    
                    <div>
                      <Badge variant="secondary" className="mb-2">{vehicle.color}</Badge>
                      <div className="space-y-1">
                        {vehicle.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-success" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="dealership" 
                      className="w-full"
                      onClick={() => handleVinReserve(vehicle.stock)}
                    >
                      Reserve This VIN
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            VIN list updates in real time. When they're gone, they're gone.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to your new Nissan</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index === 1 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Clock starts at check-in when VIN selected; stops at signed buyer's order
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-section bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">6 Benefits Included at No Additional Charge</h2>
            <p className="text-xl text-muted-foreground">Everything you need for zero-stress ownership</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-lg dealership-shadow">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dealership-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "True to their word - 58 minutes from walking in to driving out. The whole process was incredibly smooth."
                </p>
                <p className="font-semibold">Sarah M., Chicago</p>
              </CardContent>
            </Card>
            
            <Card className="dealership-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The home delivery was perfect. They handled all the DMV paperwork - I didn't have to do anything."
                </p>
                <p className="font-semibold">Mike T., Naperville</p>
              </CardContent>
            </Card>
            
            <Card className="dealership-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Used the 7-day exchange and it was hassle-free. Great peace of mind knowing I had that option."
                </p>
                <p className="font-semibold">Jennifer L., Schaumburg</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="dealership-shadow">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="transition-transform group-open:rotate-180">↓</span>
                    </summary>
                    <div className="mt-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-dealership-black text-white py-8 text-sm">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">APR/Finance:</h3>
              <p>0.0% APR for up to 60 months available on select new Nissan models to well-qualified buyers when financed through NMAC. Example: $16.67 per $1,000 financed for 60 months. Actual down payment may vary. Residency restrictions may apply. Not all buyers will qualify. Dealer sets actual price. See dealer for details.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price/Fees:</h3>
              <p>Advertised price excludes tax, title, license, and the dealer documentary service fee (charged at the current Illinois maximum as permitted by law). All vehicles available at advertised price unless marked sold; eligible VINs listed on this page.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Included Items:</h3>
              <p>Maintenance, car washes, VIP loaner access, and home delivery/DMV concierge are included at no additional charge with the Zero-Stress Nissan Bundle; conditions and limits apply (see details on this page).</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">60-Minute Guarantee:</h3>
              <p>Clock starts at scheduled appointment check-in once VIN is selected; stops at signed buyer's order. If we miss 60 minutes, a $250 service credit is issued at delivery; one per purchase.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Exchange Policy:</h3>
              <p>Exchange only, not a refund. One exchange within 7 days/300 miles for an in-stock new Nissan of equal/greater value; pay difference plus applicable taxes/fees; vehicle must be in substantially the same condition without accidents, modifications, or odors; exclusions apply including special-order, dealer-trade, CPO/used, and commercial/fleet units. See Exchange Addendum for complete terms.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 flex items-center justify-between lg:hidden z-40">
        <Button variant="ghost" size="sm" asChild>
          <a href={`tel:${dealerPhone}`}>
            <Phone className="w-4 h-4" />
          </a>
        </Button>
        <Button variant="cta" onClick={() => setShowLeadForm(true)}>
          Reserve Your VIN
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={`sms:${dealerSMS}`}>
            <MessageCircle className="w-4 h-4" />
          </a>
        </Button>
      </div>

      {/* Lead Form Modal - Placeholder */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Reserve Your VIN</h3>
              <p className="text-muted-foreground mb-4">
                {selectedVin ? `Stock #${selectedVin} selected` : 'Choose your preferred vehicle'}
              </p>
              <div className="flex justify-end space-x-2">
                <Button variant="ghost" onClick={() => setShowLeadForm(false)}>
                  Cancel
                </Button>
                <Button variant="dealership">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ZeroStressNissan;