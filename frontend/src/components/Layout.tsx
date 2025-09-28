import { Outlet } from "react-router-dom";
import { BankingSidebar } from "./BankingSidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, User, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <BankingSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-foreground">OVERVIEW</h2>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-error text-error-foreground text-xs">
                5
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}