import { Outlet } from "react-router-dom";
import EmergencyBar from "./EmergencyBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-warm">
      <ScrollToTop />
      <EmergencyBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}