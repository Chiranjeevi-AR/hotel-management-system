import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  UserCheck, 
  CalendarCheck, 
  FileText, 
  Shield, 
  BarChart3, 
  MessageSquare,
  Clock,
  HeartPulse,
  Pill
} from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Patient Management',
    description: 'Complete patient registration, profile management, and medical history tracking.',
    color: 'text-primary'
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Scheduling',
    description: 'Smart scheduling system with automated reminders and conflict resolution.',
    color: 'text-success'
  },
  {
    icon: HeartPulse,
    title: 'Doctor Dashboard',
    description: 'Comprehensive tools for doctors to manage patients and view schedules.',
    color: 'text-destructive'
  },
  {
    icon: Pill,
    title: 'Prescription Management',
    description: 'Digital prescription system with online viewing and management.',
    color: 'text-warning'
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Role-based access control with enterprise-grade security measures.',
    color: 'text-primary'
  },
  {
    icon: FileText,
    title: 'Medical Records',
    description: 'Centralized digital records with instant access and backup systems.',
    color: 'text-success'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and reporting for hospital administration.',
    color: 'text-destructive'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Secure messaging between patients, doctors, and administrative staff.',
    color: 'text-warning'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Always-on system ensuring continuous healthcare service delivery.',
    color: 'text-primary'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Hospital Management System provides all the tools you need to deliver exceptional patient care 
            while streamlining administrative processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}