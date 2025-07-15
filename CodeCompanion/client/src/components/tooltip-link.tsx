import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

interface TooltipLinkProps {
  href: string;
  children: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export default function TooltipLink({ 
  href, 
  children, 
  tooltip, 
  onClick, 
  className = "", 
  style = {},
  onMouseEnter,
  onMouseLeave
}: TooltipLinkProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (onMouseEnter) onMouseEnter(e);
    
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (onMouseLeave) onMouseLeave(e);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLDivElement>(null);

  const updateTooltipPosition = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.right + 16,
        y: rect.top
      });
    }
  };

  const handleMouseEnterWithPosition = (e: React.MouseEvent) => {
    if (onMouseEnter) onMouseEnter(e);
    updateTooltipPosition();
    
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
  };

  return (
    <div className="relative" ref={linkRef}>
      <Link
        href={href}
        onClick={onClick}
        className={className}
        style={style}
        onMouseEnter={handleMouseEnterWithPosition}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
      
      {showTooltip && (
        <div 
          className="fixed w-80 p-4 rounded-lg shadow-2xl border backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(17, 17, 17, 0.95)',
            borderColor: 'var(--dark-accent)',
            color: 'var(--text-primary)',
            zIndex: 9999,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`
          }}
        >
          <div className="text-sm leading-relaxed">
            {tooltip}
          </div>
          {/* Arrow */}
          <div 
            className="absolute left-0 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent transform -translate-x-full"
            style={{ borderRightColor: 'rgba(17, 17, 17, 0.95)' }}
          />
        </div>
      )}
    </div>
  );
}