import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "@/components/sidebar";
import GlobalChat from "@/components/global-chat";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--dark-primary)', color: 'var(--text-primary)' }}>
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg"
          style={{ backgroundColor: 'var(--dark-secondary)' }}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
      {/* Sidebar */}
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
        isMobile={isMobile}
      />
      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMobileMenu}
        />
      )}
      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl page-transition ml-[9px] mr-[9px]">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      {/* Global Chat */}
      <GlobalChat />
    </div>
  );
}