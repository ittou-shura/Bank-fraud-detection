import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  EyeOff,
  Lock,
  Unlock
} from "lucide-react";
import { useState } from "react";

export default function Cards() {
  const [showDetails, setShowDetails] = useState(true);

  const cards = [
    {
      id: 1,
      type: "VISA",
      number: "1656 8462 1154 2988",
      holder: "Sarah J. Black",
      expiry: "01/23",
      balance: 2580.50,
      limit: 5000,
      status: "active",
      gradient: "from-slate-700 to-slate-800"
    },
    {
      id: 2,
      type: "VISA", 
      number: "5694 2669 8745 3452",
      holder: "John M. Black",
      expiry: "01/23",
      balance: 1245.75,
      limit: 3000,
      status: "active",
      gradient: "from-amber-600 to-amber-700"
    },
    {
      id: 3,
      type: "MASTERCARD",
      number: "4532 1234 5678 9012",
      holder: "Sarah J. Black",
      expiry: "12/25",
      balance: 0,
      limit: 2500,
      status: "locked",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  const transactions = [
    {
      id: 1,
      merchant: "Amazon",
      amount: 89.99,
      date: "Today, 2:30 PM",
      category: "Shopping",
      card: "****2988"
    },
    {
      id: 2,
      merchant: "Starbucks",
      amount: 12.45,
      date: "Today, 9:15 AM",
      category: "Food & Dining",
      card: "****2988"
    },
    {
      id: 3,
      merchant: "Gas Station",
      amount: 45.20,
      date: "Yesterday, 6:45 PM",
      category: "Gas",
      card: "****3452"
    },
    {
      id: 4,
      merchant: "Netflix",
      amount: 17.99,
      date: "Jan 15, 2024",
      category: "Entertainment",
      card: "****2988"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Cards</h1>
          <p className="text-muted-foreground">Manage your credit and debit cards</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Lock className="h-4 w-4" />
            Freeze All
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Card
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cards Display */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Your Cards</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
                className="gap-2"
              >
                {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showDetails ? 'Hide' : 'Show'} Details
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div key={card.id} className={`bg-gradient-to-r ${card.gradient} rounded-xl p-6 text-white relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm font-medium opacity-90">{card.type}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white hover:bg-white/10 h-8 w-8 p-0"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      {card.status === 'locked' && (
                        <div className="flex items-center gap-1 bg-red-500/20 px-2 py-1 rounded text-xs">
                          <Lock className="h-3 w-3" />
                          Locked
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="font-mono text-lg tracking-wider">
                      {showDetails ? card.number : `**** **** **** ${card.number.slice(-4)}`}
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-70 mb-1">CARDHOLDER</p>
                        <p className="text-sm font-medium">{card.holder}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-70 mb-1">EXPIRES</p>
                        <p className="text-sm font-medium">{card.expiry}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Card Transactions</CardTitle>
                <Button variant="link">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.merchant}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{transaction.date}</span>
                          <span>•</span>
                          <span>{transaction.card}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">-${transaction.amount}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Card Limits */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Utilization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cards.filter(card => card.status === 'active').map((card) => {
                const utilization = (card.balance / card.limit) * 100;
                return (
                  <div key={card.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>**** {card.number.slice(-4)}</span>
                      <span className="font-medium">{utilization.toFixed(1)}%</span>
                    </div>
                    <Progress value={utilization} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${card.balance.toLocaleString()}</span>
                      <span>${card.limit.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Transaction Notifications</p>
                    <p className="text-xs text-muted-foreground">Get alerts for all transactions</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">On</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Contactless Payments</p>
                    <p className="text-xs text-muted-foreground">Tap to pay enabled</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">On</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">International Transactions</p>
                    <p className="text-xs text-muted-foreground">Allow foreign purchases</p>
                  </div>
                  <Badge variant="secondary">Off</Badge>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Manage Security</Button>
            </CardContent>
          </Card>

          {/* Card Services */}
          <Card>
            <CardHeader>
              <CardTitle>Card Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Lock className="h-4 w-4" />
                Freeze/Unfreeze Card
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-2">
                <CreditCard className="h-4 w-4" />
                Request New Card
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-2">
                <MoreHorizontal className="h-4 w-4" />
                Report Lost/Stolen
              </Button>
            </CardContent>
          </Card>

          {/* Monthly Spending */}
          <Card>
            <CardHeader>
              <CardTitle>This Month's Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">$3,826.25</p>
                  <p className="text-sm text-muted-foreground">Total spent this month</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Shopping</span>
                    <span className="font-medium">$1,240</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Food & Dining</span>
                    <span className="font-medium">$890</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gas & Transportation</span>
                    <span className="font-medium">$456</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Entertainment</span>
                    <span className="font-medium">$340</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Other</span>
                    <span className="font-medium">$900</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}