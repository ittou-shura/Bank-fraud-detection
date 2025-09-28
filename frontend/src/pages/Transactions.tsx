import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  TrendingDown,
  MoreHorizontal
} from "lucide-react";

export default function Transactions() {
  const transactions = [
    {
      id: "TXN-001",
      date: "2024-01-15",
      time: "14:32",
      description: "Windler, Goodwin and Jast",
      category: "Transfer",
      account: "Main Account",
      amount: 1501.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN-002", 
      date: "2024-01-14",
      time: "09:15",
      description: "Langosh, Emmerich and Ritchie",
      category: "Payment",
      account: "Private Account",
      amount: -504.00,
      type: "debit",
      status: "completed"
    },
    {
      id: "TXN-003",
      date: "2024-01-13",
      time: "16:45",
      description: "Anderson - Krajcik",
      category: "Bill Payment",
      account: "Main Account",
      amount: -622.00,
      type: "debit", 
      status: "pending"
    },
    {
      id: "TXN-004",
      date: "2024-01-12",
      time: "11:20",
      description: "Nitzsche, Waelchi and Roob",
      category: "Transfer",
      account: "Private Account",
      amount: -4324.00,
      type: "debit",
      status: "completed"
    },
    {
      id: "TXN-005",
      date: "2024-01-11",
      time: "08:30",
      description: "Monthly Salary Deposit",
      category: "Salary",
      account: "Main Account",
      amount: 5200.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN-006",
      date: "2024-01-10",
      time: "13:45",
      description: "Grocery Store Purchase",
      category: "Shopping",
      account: "Private Account",
      amount: -157.89,
      type: "debit",
      status: "completed"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge className="bg-error text-error-foreground">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
          <p className="text-muted-foreground">View and manage your transaction history</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search transactions..." 
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">This Month</Button>
            <Button variant="outline">All Accounts</Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Income</p>
                <p className="text-xl font-bold text-success">$6,701.00</p>
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
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-xl font-bold text-error">$5,607.89</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Net Flow</p>
                <p className="text-xl font-bold text-success">$1,093.11</p>
              </div>
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
          <div className="space-y-1">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 py-3 text-xs font-medium text-muted-foreground border-b">
              <span>DATE</span>
              <span>DESCRIPTION</span>
              <span>CATEGORY</span>
              <span>ACCOUNT</span>
              <span>AMOUNT</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>

            {/* Transaction Rows */}
            {transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="grid grid-cols-7 gap-4 py-4 border-b border-border/50 hover:bg-muted/50 transition-colors"
              >
                <div className="text-sm">
                  <p className="font-medium">{transaction.date}</p>
                  <p className="text-muted-foreground text-xs">{transaction.time}</p>
                </div>
                
                <div className="text-sm">
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-muted-foreground text-xs">ID: {transaction.id}</p>
                </div>
                
                <div className="text-sm">
                  <Badge variant="outline" className="text-xs">
                    {transaction.category}
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {transaction.account}
                </div>
                
                <div className="text-sm font-medium">
                  <span className={
                    transaction.type === 'credit' ? 'text-success' : 'text-error'
                  }>
                    {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </span>
                </div>
                
                <div>
                  {getStatusBadge(transaction.status)}
                </div>
                
                <div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}