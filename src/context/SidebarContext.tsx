import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";

type SidebarContextType = {
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
  setIsMobileOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isMobileOpen,
        toggleMobileSidebar,
        setIsMobileOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
