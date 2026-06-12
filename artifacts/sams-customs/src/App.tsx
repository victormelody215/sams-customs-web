import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
import React from 'react';
// Import matching your Vite root folder architecture
import WorkstationShowcase from '../components/WorkstationShowcase';
function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation header stays here */}

      {/* Embedded Showcase Layout Grid & Multi-Step Engine */}
      <WorkstationShowcase />

      {/* Structural Footer */}
    </div>
  );
}

export default App;
