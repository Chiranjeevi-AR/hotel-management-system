import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Users, CalendarDays, ClipboardList, Shield } from 'lucide-react';

export default function AdminDashboard() {
  const [user] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));

  useEffect(() => {
    document.title = 'MedCare | Admin Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-secondary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.username || 'Admin'}</h1>
            <p className="text-muted-foreground">System overview and quick actions</p>
          </div>
          <div className="space-x-2">
            <Button className="bg-gradient-primary">New Doctor</Button>
            <Button variant="outline">Settings</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-medical">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,284</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Appointments</CardTitle>
              <CalendarDays className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+5% from last week</p>
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
              <ClipboardList className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">98</div>
              <p className="text-xs text-muted-foreground">-3% from yesterday</p>
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Shield className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">99.9%</div>
              <p className="text-xs text-muted-foreground">Uptime</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-medical">
            <CardHeader>
              <CardTitle>Appointments Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full bg-card/50 rounded-md flex items-center justify-center text-muted-foreground">
                Chart placeholder
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p><span className="font-medium">Dr. Smith</span> approved 3 appointments</p>
                <p className="text-muted-foreground">2 hours ago</p>
              </div>
              <Separator />
              <div className="text-sm">
                <p><span className="font-medium">Priya</span> registered as patient</p>
                <p className="text-muted-foreground">5 hours ago</p>
              </div>
              <Separator />
              <div className="text-sm">
                <p><span className="font-medium">System</span> nightly backup completed</p>
                <p className="text-muted-foreground">Today 02:00 AM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
