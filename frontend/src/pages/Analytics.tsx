import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, ArrowUpRight, Target } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your financial performance and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$421,051.23</div>
            <p className="text-xs text-success flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$20,490.00</div>
            <p className="text-xs text-success flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,147.00</div>
            <p className="text-xs text-danger flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">70%</div>
            <p className="text-xs text-success flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Expenses Flow */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses Flow</CardTitle>
            <CardDescription>Breakdown of your monthly spending patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simulated Bar Chart */}
              <div className="flex items-end justify-between h-48 border-b border-border">
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => {
                  const heights = [60, 80, 70, 90, 85, 95, 88, 92, 75, 65, 78, 85];
                  const incomes = [40, 50, 45, 60, 55, 65, 58, 62, 45, 35, 48, 55];
                  
                  return (
                    <div key={month} className="flex flex-col items-center space-y-2">
                      <div className="flex flex-col items-center space-y-1">
                        {/* Expenses bar */}
                        <div 
                          className="w-6 bg-danger rounded-t"
                          style={{ height: `${heights[index]}px` }}
                        ></div>
                        {/* Income bar */}
                        <div 
                          className="w-6 bg-success rounded-b"
                          style={{ height: `${incomes[index]}px` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{month}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-danger rounded"></div>
                  <span>Expenses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded"></div>
                  <span>Income</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spending Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
            <CardDescription>Your top spending categories this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Food & Dining", amount: 1840, percentage: 30, color: "bg-primary" },
                { category: "Bills & Utilities", amount: 1520, percentage: 25, color: "bg-danger" },
                { category: "Transportation", amount: 920, percentage: 15, color: "bg-success" },
                { category: "Shopping", amount: 680, percentage: 11, color: "bg-orange-500" },
                { category: "Entertainment", amount: 460, percentage: 7, color: "bg-purple-500" },
                { category: "Other", amount: 727, percentage: 12, color: "bg-gray-400" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.category}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold">${item.amount.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-2">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Financial Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Goals</CardTitle>
            <CardDescription>Track your progress towards financial objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Emergency Fund</span>
                  <span className="text-sm text-muted-foreground">$15,000 / $20,000</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">75% complete</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">House Down Payment</span>
                  <span className="text-sm text-muted-foreground">$45,000 / $80,000</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-success h-3 rounded-full" style={{ width: '56%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">56% complete</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Vacation Fund</span>
                  <span className="text-sm text-muted-foreground">$2,800 / $5,000</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '56%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">56% complete</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Insights */}
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>Personalized recommendations for your finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-success bg-success/5 rounded">
                <div className="flex">
                  <TrendingUp className="h-5 w-5 text-success mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-success">Great Savings Progress!</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're saving 70% of your income this month, well above the recommended 20%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                <div className="flex">
                  <Target className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary">Investment Opportunity</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Consider diversifying your portfolio with index funds for long-term growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-orange-500 bg-orange-500/5 rounded">
                <div className="flex">
                  <CreditCard className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-500">Spending Alert</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your dining expenses are up 15% this month. Consider meal planning to optimize.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}