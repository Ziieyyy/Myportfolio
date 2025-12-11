import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Car, 
  Building, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  CreditCard
} from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function Dashboard() {
  // Mock data for dashboard
  const stats = [
    {
      title: "Total Vehicles",
      value: "142",
      icon: Car,
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Registered Banks",
      value: "24",
      icon: Building,
      change: "+3%",
      changeType: "positive"
    },
    {
      title: "Active Users",
      value: "1,248",
      icon: Users,
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Total Revenue",
      value: "RM 245,680",
      icon: DollarSign,
      change: "+5.2%",
      changeType: "positive"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Ahmad Razali",
      action: "calculated loan for Proton X70",
      time: "2 minutes ago",
      amount: "RM 120,000"
    },
    {
      id: 2,
      user: "Siti Nurhaliza",
      action: "compared rates for Honda Civic",
      time: "1 hour ago",
      amount: "RM 110,000"
    },
    {
      id: 3,
      user: "Muhammad Ali",
      action: "added new vehicle: Toyota Hilux",
      time: "3 hours ago",
      amount: ""
    },
    {
      id: 4,
      user: "Admin",
      action: "updated Maybank interest rate",
      time: "1 day ago",
      amount: "3.2%"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.action} {activity.amount && <span className="font-medium">{activity.amount}</span>}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col gap-2">
                    <Car className="w-6 h-6" />
                    <span>Add Vehicle</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2" variant="secondary">
                    <Building className="w-6 h-6" />
                    <span>Add Bank</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2" variant="secondary">
                    <Users className="w-6 h-6" />
                    <span>Manage Users</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2" variant="secondary">
                    <DollarSign className="w-6 h-6" />
                    <span>View Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}