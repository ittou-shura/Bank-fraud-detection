import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal, TrendingUp, CreditCard } from "lucide-react";

const accounts = [
  {
    name: "Our account",
    available: 23854.00,
    reserved: 1501.00,
    type: "Joint Checking Account",
    number: "26489651203",
    status: "Active"
  },
  {
    name: "My private account", 
    available: 10854.00,
    reserved: 1501.00
  },
  {
    name: "Savings",
    available: 100854.00,
    reserved: 1501.00
  },
  {
    name: "Investments",
    available: 285342.23,
    reserved: 501.00
  }
];

const recentTransactions = [
  {
    date: "Mar 12 2021 23:33:24",
    description: "Windler, Goodwin and Jast",
    amount: 1501.00,
    type: "credit"
  },
  {
    date: "Sep 20 2021 21:38:48", 
    description: "Langosh, Emmerich and Ritchie",
    amount: -504.00,
    type: "debit"
  },
  {
    date: "Jan 17 2021 05:37:22",
    description: "Anderson - Krajcik", 
    amount: -622.00,
    type: "debit"
  },
  {
    date: "Aug 01 2021 15:21:32",
    description: "Nitzsche, Waelchi and Roob",
    amount: -4324.00,
    type: "debit"
  }
];

const bills = [
  { name: "Electricity Bill", amount: 110.24 },
  { name: "Water Bill", amount: 70.86 },
  { name: "Trash/Recycling", amount: 14.32 },
  { name: "Spotify", amount: 9.99 }
];

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Overview</h1>
          <p className="text-muted-foreground">Active accounts are listed below</p>
        </div>
        <Button>Add Widget</Button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Accounts */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Favorite Accounts</h2>
          
          {accounts.map((account, index) => (
            <Card key={index} className={index === 0 ? "bg-primary text-primary-foreground" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{account.name}</CardTitle>
                  <MoreHorizontal className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm opacity-90">Available</span>
                    <span className="font-semibold">${account.available.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm opacity-90">Reserved</span>
                    <span className="font-semibold">${account.reserved.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Middle Column - Main Account & Transactions */}
        <div className="space-y-6">
          {/* Main Account Info */}
          <Card>
            <CardHeader>
              <CardTitle>Our Account</CardTitle>
              <CardDescription>
                Account Number: 26489651203 • Status: 
                <Badge variant="secondary" className="ml-2">Active</Badge>
                • Type: Joint Checking Account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button className="flex-1">Pay</Button>
                <Button variant="outline" className="flex-1">Transfer</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'credit' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-danger/10 text-danger'
                      }`}>
                        {transaction.type === 'credit' ? 
                          <ArrowDownLeft className="h-4 w-4" /> : 
                          <ArrowUpRight className="h-4 w-4" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'credit' ? 'text-success' : 'text-danger'
                      }`}>
                        {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Received Bills */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Received Bills</CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bills.map((bill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{bill.name}</span>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold">${bill.amount}</span>
                      <Button size="sm">Pay bill</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Cards & Analytics */}
        <div className="space-y-6">
          {/* Connected Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Connected Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Visa Card 1 */}
              <div className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl p-4 text-white">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-sm opacity-80">VISA</span>
                  <CreditCard className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-mono tracking-wider">1655 8462 1154 2988</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80">Sarah J. Black</p>
                      <p className="text-xs opacity-80">01/23</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visa Card 2 */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-4 text-white">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-sm opacity-80">VISA</span>
                  <CreditCard className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-mono tracking-wider">6894 2589 8745 3452</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80">John M. Black</p>
                      <p className="text-xs opacity-80">01/23</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Ratio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                Transaction Ratio
                <TrendingUp className="ml-2 h-4 w-4 text-success" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-success">• Income</span>
                  <span className="font-semibold text-success">$20,490.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-danger">• Expenses</span>
                  <span className="font-semibold text-danger">$6,147.00</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '77%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}