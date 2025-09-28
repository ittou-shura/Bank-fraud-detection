import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Eye, 
  EyeOff, 
  TrendingUp, 
  TrendingDown, 
  MoreHorizontal,
  Plus,
  CreditCard
} from "lucide-react";
import { useState } from "react";

export default function Overview() {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    {
      name: "Our account",
      type: "Main Account",
      available: 23854.00,
      reserved: 1501.00,
      currency: "USD"
    },
    {
      name: "My private account", 
      type: "Private",
      available: 10854.00,
      reserved: 1501.00,
      currency: "USD"
    },
    {
      name: "Foregin",
      type: "Foreign Exchange",
      available: 150.00,
      reserved: 1.00,
      currency: "EUR"
    },
    {
      name: "Savings",
      type: "Savings Account",
      available: 100854.00,
      reserved: 1501.00,
      currency: "USD"
    },
    {
      name: "Investments",
      type: "Investment Portfolio",
      available: 285342.23,
      reserved: 501.00,
      currency: "USD"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      date: "Mar 12 2021 23:33:24",
      description: "Windler, Goodwin and Jast",
      amount: 1501.00,
      type: "income"
    },
    {
      id: 2,
      date: "Sep 20 2021 21:38:48", 
      description: "Langosh, Emmerich and Ritchie",
      amount: -504.00,
      type: "expense"
    },
    {
      id: 3,
      date: "Jan 17 2021 05:37:22",
      description: "Anderson - Krajcik",
      amount: -622.00,
      type: "expense"
    },
    {
      id: 4,
      date: "Aug 01 2021 15:21:32",
      description: "Nitzsche, Waelchi and Roob", 
      amount: -4324.00,
      type: "expense"
    }
  ];

  const bills = [
    { name: "Electricity Bill", amount: 110.24 },
    { name: "Water Bill", amount: 70.86 },
    { name: "Trash/Recycling", amount: 14.32 },
    { name: "Spotify", amount: 9.99 }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Overview</h1>
          <p className="text-muted-foreground">Manage your finances</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Widget
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Accounts */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Favorite Accounts</h2>
            <p className="text-sm text-muted-foreground mb-4">Active accounts are listed below</p>
            
            <div className="space-y-3">
              {accounts.map((account, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{account.name}</h3>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-medium">
                        {showBalance ? `${account.currency === 'EUR' ? '€' : '$'}${account.available.toLocaleString()}` : '****'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Reserved</span>
                      <span className="font-medium">
                        {showBalance ? `${account.currency === 'EUR' ? '€' : '$'}${account.reserved.toLocaleString()}` : '****'}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Main Account & Transactions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Account Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium">Our Account</CardTitle>
                  <p className="text-xs opacity-90">Account Number: 26489551203</p>
                  <p className="text-xs opacity-90">Status: Active | Type: Joint Checking Account</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div>
                  <p className="text-xs opacity-90">Available</p>
                  <p className="text-2xl font-bold">
                    {showBalance ? "$23,854.00" : "****"}
                  </p>
                </div>
                <div>
                  <p className="text-xs opacity-90">Reserved</p>
                  <p className="text-lg font-semibold">
                    {showBalance ? "$1,501.00" : "****"}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Pay
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Transfer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
                <Button variant="link" className="text-primary">View all</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        transaction.type === 'income' ? 'text-success' : 'text-error'
                      }`}>
                        {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </span>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bills and Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Received Bills */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Received Bills</CardTitle>
                  <Button variant="link" className="text-primary">View all</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bills.map((bill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{bill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">${bill.amount}</span>
                        <Button size="sm" className="text-xs">Pay bill</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction Ratio Chart */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Transaction Ratio</CardTitle>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-sm text-muted-foreground">Income</span>
                    <span className="ml-auto text-sm font-medium text-success">$20,490.00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <span className="text-sm text-muted-foreground">Expenses</span>
                    <span className="ml-auto text-sm font-medium text-error">$6,147.00</span>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Net Income</span>
                      <span className="font-medium text-success">$14,343.00</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connected Cards */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Connected Cards</CardTitle>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-4 text-white">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-medium">VISA</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 mb-4">
                    <p className="text-lg font-mono tracking-wider">1656 8462 1154 2988</p>
                    <div className="flex justify-between text-sm">
                      <span>Sarah J. Black</span>
                      <span>01/23</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-4 text-white">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-medium">VISA</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 mb-4">
                    <p className="text-lg font-mono tracking-wider">5694 2669 8745 3452</p>
                    <div className="flex justify-between text-sm">
                      <span>John M. Black</span>
                      <span>01/23</span>
                    </div>
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