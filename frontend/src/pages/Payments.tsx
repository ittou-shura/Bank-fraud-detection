import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Payments() {
  const [selectedAccount, setSelectedAccount] = useState("private");

  const connectedBills = [
    { type: "Electricity Bill", payee: "My private account", action: "..." },
    { type: "Water Bill", payee: "My private account", action: "..." },
    { type: "Trash/Recycling", payee: "My private account", action: "..." },
    { type: "Netflix", payee: "Our Account", action: "..." },
    { type: "Xfinity", payee: "Our Account", action: "..." },
    { type: "Spotify", payee: "My private account", action: "..." },
    { type: "Mortgage", payee: "Our Account", action: "..." },
    { type: "Auto Loans", payee: "Our Account", action: "..." },
    { type: "Auto insurance", payee: "Our Account", action: "..." },
    { type: "Health insurance", payee: "My private account", action: "..." }
  ];

  const receivedBills = [
    { type: "Electricity Bill", payee: "My private account", amount: 110.24 },
    { type: "Water Bill", payee: "My private account", amount: 70.86 },
    { type: "Trash/Recycling", payee: "My private account", amount: 14.32 },
    { type: "Netflix", payee: "Our Account", amount: 17.99 },
    { type: "Xfinity", payee: "Our Account", amount: 25.00 },
    { type: "Spotify", payee: "My private account", amount: 9.99 }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments</h1>
          <p className="text-muted-foreground">Send money and manage bills</p>
        </div>
        <Button variant="outline" className="gap-2">
          Payee templates
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* New Payment Form */}
      <Card>
        <CardHeader>
          <CardTitle>New Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* From Section */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-muted-foreground">FROM</Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>SELECT ACCOUNT</Label>
                <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                  <SelectTrigger className="bg-primary text-primary-foreground">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">My private account</SelectItem>
                    <SelectItem value="main">Our Account</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>ACCOUNT DETAILS</Label>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Balance:</span>
                    <span className="font-medium">$10,854.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-medium">6584965133</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Account Status:</span>
                    <span className="font-medium text-success">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* To Section */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-muted-foreground">TO</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>PAYEE NAME</Label>
                <Input placeholder="Enter payee name" />
              </div>
              <div className="space-y-2">
                <Label>DESTINATION ACCOUNT</Label>
                <Input placeholder="Account number" />
              </div>
              <div className="space-y-2">
                <Label>PAYEE ADDRESS</Label>
                <Input placeholder="Enter address" />
              </div>
            </div>
          </div>

          {/* Amount Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>AMOUNT</Label>
                <div className="flex">
                  <Input placeholder="0.00" className="rounded-r-none" />
                  <Button variant="outline" className="rounded-l-none border-l-0 px-3">
                    USD
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>MODEL AND REFERENCE NUMBER</Label>
                <Input placeholder="Reference" />
              </div>
              <div className="space-y-2">
                <Label>PAYMENT CODE</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>PAYMENT PURPOSE</Label>
                <Input placeholder="Purpose" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Pay</Button>
          </div>
        </CardContent>
      </Card>

      {/* Bills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Connected Bills */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 text-xs font-medium text-muted-foreground py-2 border-b">
                <span>BILL TYPE</span>
                <span>PAYEE</span>
                <span>ACTION</span>
              </div>
              
              {/* Bills List */}
              {connectedBills.map((bill, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-3 text-sm border-b border-border/50">
                  <span className="font-medium">{bill.type}</span>
                  <span className="text-muted-foreground">{bill.payee}</span>
                  <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Received Bills */}
        <Card>
          <CardHeader>
            <CardTitle>Received Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground py-2 border-b">
                <span>BILL TYPE</span>
                <span>PAYEE</span>
                <span>AMOUNT</span>
                <span>ACTION</span>
              </div>
              
              {/* Bills List */}
              {receivedBills.map((bill, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 py-3 text-sm border-b border-border/50 items-center">
                  <span className="font-medium">{bill.type}</span>
                  <span className="text-muted-foreground">{bill.payee}</span>
                  <span className="font-medium">${bill.amount}</span>
                  <Button size="sm" className="text-xs">Pay bill</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}