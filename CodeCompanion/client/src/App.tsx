import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AzusPage from "@/pages/azus";
import DifferencePage from "@/pages/difference";
import AttractorPage from "@/pages/attractor";
import ExistencePage from "@/pages/existence";
import ConsciousnessPage from "@/pages/consciousness";
import FineTuningPage from "@/pages/fine-tuning";
import OntologyVsSciencePage from "@/pages/ontology-vs-science";
import ComparisonPage from "@/pages/comparison";
import FaqPage from "@/pages/faq";
import ManifestPage from "@/pages/manifest";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/azus" component={AzusPage} />
      <Route path="/difference" component={DifferencePage} />
      <Route path="/attractor" component={AttractorPage} />
      <Route path="/existence" component={ExistencePage} />
      <Route path="/consciousness" component={ConsciousnessPage} />
      <Route path="/fine-tuning" component={FineTuningPage} />
      <Route path="/ontology-vs-science" component={OntologyVsSciencePage} />
      <Route path="/comparison" component={ComparisonPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/manifest" component={ManifestPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
