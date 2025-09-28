import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard,
  Target,
  Calendar
} from "lucide-react";

export default function Analytics() {
  const monthlyData = [
    { month: "Jan", income: 8500, expenses: 6200 },
    { month: "Feb", income: 9200, expenses: 5800 },
    { month: "Mar", income: 8800, expenses: 6500 },
    { month: "Apr", income: 9500, expenses: 7100 },
    { month: "May", income: 8900, expenses: 6300 },
    { month: "Jun", income: 9800, expenses: 6800 }
  ];

  const categoryExpenses = [
    { category: "Groceries", amount: 1200, percentage: 25, color: "bg-chart-1" },
    { category: "Utilities", amount: 800, percentage: 17, color: "bg-chart-2" },
    { category: "Entertainment", amount: 600, percentage: 13, color: "bg-chart-3" },
    { category: "Transportation", amount: 500, percentage: 10, color: "bg-chart-4" },
    { category: "Healthcare", amount: 400, percentage: 8, color: "bg-chart-5" },
    { category: "Other", amount: 1300, percentage: 27, color: "bg-muted" }
  ];

  const savingsGoals = [
    { name: "Emergency Fund", current: 8500, target: 10000, percentage: 85 },
    { name: "Vacation", current: 2300, target: 5000, percentage: 46 },
    { name: "New Car", current: 12000, target: 25000, percentage: 48 }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your financial insights and trends</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 6 Months
          </Button>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <p className="text-xl font-bold">$54,708.23</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Income</p>
                <p className="text-xl font-bold text-success">$9,800</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +3.2% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-error/10">
                <TrendingDown className="h-5 w-5 text-error" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Expenses</p>
                <p className="text-xl font-bold text-error">$6,800</p>
                <p className="text-xs text-error flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5.1% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Target className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Savings Rate</p>
                <p className="text-xl font-bold">30.6%</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Above target (25%)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income vs Expenses Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{data.month}</span>
                    <div className="flex gap-4">
                      <span className="text-success">${data.income.toLocaleString()}</span>
                      <span className="text-error">${data.expenses.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-success"
                      style={{ width: `${(data.income / 12000) * 100}%` }}
                    />
                    <div 
                      className="absolute left-0 top-0 h-full bg-error opacity-70"
                      style={{ width: `${(data.expenses / 12000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <span className="text-sm">Expenses</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryExpenses.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-sm font-medium">{category.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">${category.amount}</span>
                      <span className="text-xs text-muted-foreground ml-2">{category.percentage}%</span>
                    </div>
                  </div>
                  <Progress value={category.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Savings Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savingsGoals.map((goal, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{goal.name}</h3>
                  <span className="text-sm text-muted-foreground">{goal.percentage}%</span>
                </div>
                <Progress value={goal.percentage} className="h-3" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">${goal.current.toLocaleString()}</span>
                  <span className="font-medium">${goal.target.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Health Score */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Health Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">85</div>
                <div className="text-lg font-medium">Excellent</div>
                <p className="text-sm text-muted-foreground">Your financial health is in great shape!</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Emergency Fund</span>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-16 h-2" />
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Debt to Income</span>
                  <div className="flex items-center gap-2">
                    <Progress value={25} className="w-16 h-2" />
                    <span className="text-sm font-medium">25%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Savings Rate</span>
                  <div className="flex items-center gap-2">
                    <Progress value={95} className="w-16 h-2" />
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Recommendations</h3>
              <div className="space-y-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <p className="text-sm font-medium text-success">✓ Great job on your savings rate!</p>
                  <p className="text-xs text-muted-foreground">You're saving 30.6% of your income</p>
                </div>
                
                <div className="p-3 bg-warning/10 rounded-lg">
                  <p className="text-sm font-medium text-warning">Consider diversifying investments</p>
                  <p className="text-xs text-muted-foreground">Your portfolio could benefit from more variety</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">Review monthly subscriptions</p>
                  <p className="text-xs text-muted-foreground">Cancel unused services to optimize expenses</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}