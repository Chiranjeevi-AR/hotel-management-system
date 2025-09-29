import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X, Play, User, UserCheck, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const demoSteps = [
  {
    title: "Welcome to MedCare HMS",
    description: "Your comprehensive Hospital Management System that streamlines healthcare operations across all departments.",
    icon: Play,
    content: "This interactive demo will guide you through the three main user roles and their capabilities within our system."
  },
  {
    title: "Patient Portal Experience",
    description: "Explore how patients can manage their healthcare journey with ease and security.",
    icon: User,
    content: "Patients can book appointments, view medical records, access prescriptions, communicate with healthcare providers, and track their treatment progress - all from a secure, user-friendly interface."
  },
  {
    title: "Doctor Dashboard",
    description: "Discover the comprehensive tools available to medical professionals for efficient patient care.",
    icon: UserCheck,
    content: "Doctors have access to patient management systems, appointment scheduling, digital prescription tools, clinical notes, medical history tracking, and real-time communication with patients and colleagues."
  },
  {
    title: "Admin Control Center",
    description: "See how administrators can oversee hospital operations with powerful management tools.",
    icon: Shield,
    content: "Administrators can manage user accounts, configure system settings, access comprehensive analytics, oversee resource allocation, monitor hospital performance, and ensure compliance with healthcare regulations."
  }
];

interface DemoTourProps {
  trigger: React.ReactNode;
}

export function DemoTour({ trigger }: DemoTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Tour completed
      toast({
        title: "Demo Tour Completed!",
        description: "Ready to get started? Create your account or schedule a live demo.",
      });
      setIsOpen(false);
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const current = demoSteps[currentStep];
  const IconComponent = current.icon;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="text-xl">{current.title}</DialogTitle>
                <DialogDescription>{current.description}</DialogDescription>
              </div>
            </div>
            <Badge variant="secondary">
              {currentStep + 1} of {demoSteps.length}
            </Badge>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {current.content}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center space-x-2 mt-6">
          {demoSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep 
                  ? 'bg-primary' 
                  : index < currentStep 
                    ? 'bg-primary/60' 
                    : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <div className="flex space-x-2">
            <Button
              variant="ghost"
              onClick={() => {
                setIsOpen(false);
                setCurrentStep(0);
              }}
            >
              Skip Tour
            </Button>
            <Button
              onClick={nextStep}
              className="bg-gradient-primary shadow-medical flex items-center space-x-2"
            >
              <span>{currentStep === demoSteps.length - 1 ? 'Finish' : 'Next'}</span>
              {currentStep < demoSteps.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Quick Actions at the end */}
        {currentStep === demoSteps.length - 1 && (
          <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
            <h4 className="font-semibold mb-3">Ready to get started?</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-primary shadow-medical flex-1">
                Start Free Trial
              </Button>
              <Button variant="outline" className="flex-1">
                Schedule Live Demo
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}