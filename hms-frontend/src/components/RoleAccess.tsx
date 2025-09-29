import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, UserCheck, Shield, Calendar, FileText, BarChart } from 'lucide-react';
import { DemoTour } from './DemoTour';

const roles = [
  {
    title: 'Patient Portal',
    icon: User,
    description: 'Access your medical records, book appointments, and manage your healthcare journey.',
    features: [
      'View medical history and prescriptions',
      'Book and reschedule appointments',
      'Secure messaging with healthcare providers',
      'Download medical reports and documents'
    ],
    color: 'bg-primary text-primary-foreground',
    buttonVariant: 'default' as const
  },
  {
    title: 'Doctor Dashboard',
    icon: UserCheck,
    description: 'Comprehensive tools for medical professionals to manage patient care efficiently.',
    features: [
      'Patient management and medical records',
      'Appointment scheduling and calendar',
      'Digital prescription management',
      'Clinical notes and documentation'
    ],
    color: 'bg-success text-success-foreground',
    buttonVariant: 'default' as const
  },
  {
    title: 'Admin Control',
    icon: Shield,
    description: 'Complete system oversight with advanced management and analytics capabilities.',
    features: [
      'User management and role assignment',
      'System configuration and settings',
      'Analytics and reporting dashboard',
      'Hospital resource management'
    ],
    color: 'bg-warning text-warning-foreground',
    buttonVariant: 'default' as const
  }
];

export function RoleAccess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Role-Based Access Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored experiences for every user type with secure, role-specific dashboards 
            and functionalities designed for optimal workflow efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 overflow-hidden">
              <CardHeader className={`${role.color} text-center py-8`}>
                <div className="mx-auto mb-4 p-4 bg-white/20 rounded-full w-fit">
                  <role.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                <CardDescription className="text-current/80 text-base">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-primary shadow-medical"
                  variant={role.buttonVariant}
                >
                  Access {role.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Access Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-secondary border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Try Our Demo System
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the full functionality of our Hospital Management System with our interactive demo. 
                Test all three role types and see how the system adapts to different user needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DemoTour 
                  trigger={
                    <Button size="lg" className="bg-gradient-primary shadow-medical">
                      Start Demo Tour
                    </Button>
                  }
                />
                <Button size="lg" variant="outline">
                  Schedule Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}