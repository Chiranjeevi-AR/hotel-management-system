import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarCheck2, FilePlus2, Stethoscope } from 'lucide-react';

export default function DoctorDashboard() {
  const [user] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));

  useEffect(() => {
    document.title = 'MedCare | Doctor Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-secondary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Good day, {user?.username || 'Doctor'}</h1>
            <p className="text-muted-foreground">Here’s your schedule and quick tools</p>
          </div>
          <div className="space-x-2">
            <Button className="bg-gradient-primary">Start Consultation</Button>
            <Button variant="outline">My Profile</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-medical">
            <CardHeader>
              <CardTitle>Today’s Appointments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[{time:'09:00 AM', patient:'John Doe', reason:'Follow-up'}, {time:'10:30 AM', patient:'Priya Sharma', reason:'New consultation'}, {time:'02:00 PM', patient:'Alex Kim', reason:'Prescription review'}].map((a, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-card/50">
                  <div>
                    <p className="font-medium">{a.patient}</p>
                    <p className="text-sm text-muted-foreground">{a.reason}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{a.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline"><CalendarCheck2 className="h-4 w-4 mr-2"/> View Schedule</Button>
              <Button className="w-full" variant="outline"><FilePlus2 className="h-4 w-4 mr-2"/> Issue Prescription</Button>
              <Button className="w-full" variant="outline"><Stethoscope className="h-4 w-4 mr-2"/> Update Records</Button>
              <Separator />
              <p className="text-sm text-muted-foreground">Tips: Keep notes concise; check allergies before prescribing.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {['John Doe','Priya Sharma','Alex Kim','Sara Lee'].map((p, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{p}</span>
                  <Button size="sm" variant="outline">Open</Button>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="lg:col-span-2 shadow-medical">
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 rounded-md bg-card/50 flex items-center justify-center text-muted-foreground">Notes placeholder</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
