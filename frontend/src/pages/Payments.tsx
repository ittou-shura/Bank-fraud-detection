import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

const connectedBills = [
  { type: "Electricity Bill", payee: "My private account" },
  { type: "Water Bill", payee: "My private account" },
  { type: "Trash/Recycling", payee: "My private account" },
  { type: "Netflix", payee: "Our Account" },
  { type: "Xfinity", payee: "Our Account" },
  { type: "Spotify", payee: "My private account" },
  { type: "Mortgage", payee: "Our Account" },
  { type: "Auto Loans", payee: "Our Account" },
  { type: "Auto insurance", payee: "Our Account" },
  { type: "Health insurance", payee: "My private account" }
];

const receivedBills = [
  { type: "Electricity Bill", payee: "My private account", amount: 110.24 },
  { type: "Water Bill", payee: "My private account", amount: 70.86 },
  { type: "Trash/Recycling", payee: "My private account", amount: 14.32 },
  { type: "Netflix", payee: "Our Account", amount: 17.99 },
  { type: "Xfinity", payee: "Our Account", amount: 25.00 },
  { type: "Spotify", payee: "My private account", amount: 9.99 }
];

export default function Payments() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Payments</h1>
        <Button>Payee templates</Button>
      </div>

      {/* New Payment Form */}
      <Card>
        <CardHeader>
          <CardTitle>New Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* From Section */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">From</Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Select Account</Label>
                <Select defaultValue="private">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">My private account</SelectItem>
                    <SelectItem value="joint">Our Account</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Account Details</Label>
                <div className="bg-accent rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Available Balance:</p>
                      <p className="font-semibold">$10,854.00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Account Number:</p>
                      <p className="font-semibold">65849652133</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Account Status:</p>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* To Section */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">To</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Payee Name</Label>
                <Input placeholder="Enter payee name" />
              </div>
              <div className="space-y-2">
                <Label>Destination Account</Label>
                <Input placeholder="Account number" />
              </div>
              <div className="space-y-2">
                <Label>Payee Address</Label>
                <Input placeholder="Address" />
              </div>
            </div>
          </div>

          {/* Amount and Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Amount</Label>
              <div className="flex">
                <Input placeholder="0.00" className="rounded-r-none" />
                <Select defaultValue="usd">
                  <SelectTrigger className="w-20 rounded-l-none border-l-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Model and Reference Number</Label>
              <Input placeholder="Reference" />
            </div>
            <div className="space-y-2">
              <Label>Payment Code</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bills">Bills</SelectItem>
                  <SelectItem value="transfer">Transfer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Payment Purpose</Label>
              <Input placeholder="Purpose" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
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
            <div className="space-y-3">
              {connectedBills.map((bill, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{bill.type}</p>
                    <p className="text-xs text-muted-foreground">{bill.payee}</p>
                  </div>
                  <Button variant="ghost" size="sm">
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
            <div className="space-y-3">
              {receivedBills.map((bill, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{bill.type}</p>
                    <p className="text-xs text-muted-foreground">{bill.payee}</p>
                  </div>
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
    </div>
  );
}