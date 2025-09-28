import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight, ArrowDownLeft, Search, Filter, Download } from "lucide-react";

const transactions = [
  {
    id: "TXN001",
    date: "2024-09-28",
    time: "14:30:24",
    description: "Amazon Prime Subscription",
    category: "Subscription",
    account: "My private account",
    amount: -14.99,
    status: "Completed"
  },
  {
    id: "TXN002",
    date: "2024-09-28", 
    time: "09:15:12",
    description: "Salary Deposit",
    category: "Income",
    account: "My private account",
    amount: 3500.00,
    status: "Completed"
  },
  {
    id: "TXN003",
    date: "2024-09-27",
    time: "16:45:33",
    description: "Grocery Store - Whole Foods",
    category: "Food & Dining",
    account: "Our Account",
    amount: -127.84,
    status: "Completed"
  },
  {
    id: "TXN004",
    date: "2024-09-27",
    time: "11:20:15",
    description: "Transfer to Savings",
    category: "Transfer",
    account: "My private account",
    amount: -500.00,
    status: "Completed"
  },
  {
    id: "TXN005",
    date: "2024-09-26",
    time: "08:30:45",
    description: "Coffee Shop - Starbucks",
    category: "Food & Dining",
    account: "Our Account",
    amount: -5.75,
    status: "Completed"
  },
  {
    id: "TXN006",
    date: "2024-09-26",
    time: "19:12:30",
    description: "Electric Bill Payment",
    category: "Bills & Utilities",
    account: "Our Account", 
    amount: -110.24,
    status: "Completed"
  },
  {
    id: "TXN007",
    date: "2024-09-25",
    time: "13:45:18",
    description: "Investment Dividend",
    category: "Investment",
    account: "Investments",
    amount: 75.50,
    status: "Completed"
  },
  {
    id: "TXN008",
    date: "2024-09-25",
    time: "10:22:11", 
    description: "Gas Station - Shell",
    category: "Transportation",
    account: "Our Account",
    amount: -45.20,
    status: "Pending"
  }
];

const categories = ["All Categories", "Income", "Food & Dining", "Bills & Utilities", "Transportation", "Investment", "Subscription", "Transfer"];
const accounts = ["All Accounts", "My private account", "Our Account", "Savings", "Investments"];

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">New Transaction</Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>
            
            <Select defaultValue="all-categories">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="all-accounts">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {accounts.map((account) => (
                  <SelectItem key={account} value={account.toLowerCase().replace(/\s+/g, '-')}>
                    {account}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">$3,575.50</p>
              <p className="text-sm text-success">Total Income</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">$803.02</p>
              <p className="text-sm text-danger">Total Expenses</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">$2,772.48</p>
              <p className="text-sm text-muted-foreground">Net Income</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Total Transactions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.amount > 0 
                      ? 'bg-success/10 text-success' 
                      : 'bg-danger/10 text-danger'
                  }`}>
                    {transaction.amount > 0 ? 
                      <ArrowDownLeft className="h-4 w-4" /> : 
                      <ArrowUpRight className="h-4 w-4" />
                    }
                  </div>
                  
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{transaction.date} {transaction.time}</span>
                      <Badge variant="outline" className="text-xs">
                        {transaction.category}
                      </Badge>
                      <span>• {transaction.account}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`font-semibold text-lg ${
                    transaction.amount > 0 ? 'text-success' : 'text-danger'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                  <Badge 
                    variant={transaction.status === 'Completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline">Load More Transactions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}