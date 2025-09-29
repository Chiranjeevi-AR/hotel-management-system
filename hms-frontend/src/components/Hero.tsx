import { Button } from '@/components/ui/button';
import { Calendar, Shield, Users, Clock } from 'lucide-react';
import hospitalHero from '@/assets/hospital-hero.jpg';
import { DemoTour } from './DemoTour';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
        <div className="absolute inset-0">
        <img 
          src={hospitalHero} 
          alt="Modern hospital facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Modern Hospital
            <span className="block text-blue-200">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Streamline healthcare operations with our comprehensive management system. 
            Efficient patient care, simplified scheduling, and secure medical records.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medical" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <DemoTour 
              trigger={
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Watch Demo
                </Button>
              }
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Smart Scheduling</h3>
              <p className="text-primary-foreground/80 text-sm">Automated appointment booking with conflict detection</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Patient Portal</h3>
              <p className="text-primary-foreground/80 text-sm">Secure access to medical records and prescriptions</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">HIPAA Secure</h3>
              <p className="text-primary-foreground/80 text-sm">Enterprise-grade security for sensitive data</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-center">
              <Clock className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">24/7 Access</h3>
              <p className="text-primary-foreground/80 text-sm">Round-the-clock availability for critical operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl"></div>
    </section>
  );
}