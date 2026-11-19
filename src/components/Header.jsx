import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  PlusCircle, 
  Tv, 
  Sun, 
  Moon, 
  Clock, 
  Calendar 
} from 'lucide-react';

export default function Header({ 
  theme, 
  onToggleTheme, 
  onOpenAddNotice, 
  onOpenKiosk, 
  totalNotices, 
  urgentCount 
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  const formattedDate = currentTime.toLocaleDateString([], { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand-section">
          <div className="logo-icon">
            <Bell size={24} />
          </div>
          <div>
            <div className="brand-title">
              CAMPUS PULSE
              <span className="brand-badge">LIVE</span>
            </div>
            <div className="brand-subtitle">
              Department-Wise Digital Notice Board
            </div>
          </div>
        </div>

        {/* Live Digital Clock */}
        <div className="header-clock">
          <div className="live-indicator" title="Live Board Sync Active" />
          <Clock size={16} color="var(--brand-primary)" />
          <span className="clock-time">{formattedTime}</span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Calendar size={14} color="var(--text-muted)" />
          <span className="clock-date">{formattedDate}</span>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <button 
            className="btn-kiosk" 
            onClick={onOpenKiosk}
            title="Launch Fullscreen Smart TV / Kiosk Display Mode"
          >
            <Tv size={16} />
            <span>Kiosk Mode</span>
          </button>

          <button 
            className="btn-primary" 
            onClick={onOpenAddNotice}
            title="Publish a new official department circular"
          >
            <PlusCircle size={18} />
            <span>Post Notice</span>
          </button>

          <button 
            className="btn-icon" 
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
