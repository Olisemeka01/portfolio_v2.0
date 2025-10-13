import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {

    // ✅ Pull webhook URL from environment
    const webhookURL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    if (!webhookURL) {
      return;
    }

    // Fetch visitor location and device data
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {

        const userAgent = navigator.userAgent;
        const referrer = document.referrer || "Direct visit";
        const time = new Date().toLocaleString();

        const message = {
          content: `👋 **Someone Clicked your Portfolio!**  
🕒 **Time:** ${time}  
🌎 **Country:** ${data.country_name} (${data.country_code})  
🏙️ **City:** ${data.city || "Unknown"}  
🏢 **ISP:** ${data.org || "N/A"}  
💻 **Device:** ${userAgent}  
🔗 **Referrer:** ${referrer}`,
        };


        fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to send webhook");
            return res.text();
          })
          .catch((err) => console.error("❌ Webhook error:", err));
      })
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
