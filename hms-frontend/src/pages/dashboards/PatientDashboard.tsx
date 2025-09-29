import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarPlus, Pill, User } from 'lucide-react';

export default function PatientDashboard() {
  const [user] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));

  useEffect(() => {
    document.title = 'MedCare | Patient Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-secondary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hello, {user?.username || 'Patient'}</h1>
            <p className="text-muted-foreground">Manage your care from one place</p>
          </div>
          <div className="space-x-2">
            <Button className="bg-gradient-primary">Book Appointment</Button>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-medical">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[{date:'Oct 01, 09:00 AM', doctor:'Dr. Smith', dept:'Cardiology'}, {date:'Oct 12, 11:30 AM', doctor:'Dr. Rao', dept:'General'}].map((a, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-card/50">
                  <div>
                    <p className="font-medium">{a.doctor}</p>
                    <p className="text-sm text-muted-foreground">{a.dept}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{a.date}</div>
                </div>
              ))}
              <div className="flex justify-end">
                <Button variant="outline" size="sm"><CalendarPlus className="h-4 w-4 mr-2"/> New Appointment</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle>Prescriptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[{drug:'Atorvastatin 10mg', issued:'Sep 20'}, {drug:'Metformin 500mg', issued:'Sep 08'}].map((p, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center"><Pill className="h-4 w-4 mr-2"/> {p.drug}</div>
                  <span className="text-muted-foreground">{p.issued}</span>
                </div>
              ))}
              <Separator />
              <Button variant="outline" className="w-full"><User className="h-4 w-4 mr-2"/> View Full Records</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
