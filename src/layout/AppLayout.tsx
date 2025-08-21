import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import AppHeaderSkeleton from "../components/AppHeader/Skeletons/AppHeaderSkeleton";
import { useEffect, useState } from "react";
import AppFooter from "./AppFooter";

const LayoutContent: React.FC = () => {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Mobile Sidebar */}
      <AppSidebar />

      {/* Backdrop for mobile */}
      {isMobileOpen && <Backdrop onClick={() => setIsMobileOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        {loading ? <AppHeaderSkeleton /> : <AppHeader />}

        <div className="p-2 md:p-6 bg-themeBackgroundColor sm:p-4 pb-0! mx-auto max-w-(--breakpoint-2xl)">
          <Outlet />
        </div>

        <AppFooter />
      </div>

      
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
