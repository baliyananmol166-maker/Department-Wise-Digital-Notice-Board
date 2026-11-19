import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  Tv, 
  Clock, 
  Calendar,
  AlertCircle 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/mockNotices';

export default function KioskMode({ notices, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [time, setTime] = useState(new Date());

  const currentNotice = notices[currentIndex] || notices[0];

  // Digital clock in kiosk
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide duration: 8 seconds (80 intervals of 100ms)
  const DURATION = 8000;
  const STEP = 100;

  useEffect(() => {
    if (!isPlaying || notices.length === 0) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % notices.length);
          return 0;
        }
        return prev + (STEP / DURATION) * 100;
      });
    }, STEP);

    return () => clearInterval(interval);
  }, [isPlaying, notices.length, currentIndex]);

  // Handle keyboard shortcuts (Escape, Space to pause, Left/Right arrows)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ') {
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, notices.length]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % notices.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!currentNotice) {
    return (
      <div className="kiosk-container">
        <button onClick={onClose} className="btn-icon" style={{ alignSelf: 'flex-end', color: 'white' }}>
          <X size={24} />
        </button>
        <p style={{ textAlign: 'center', marginTop: '20vh', fontSize: '1.5rem' }}>No notices to display in Kiosk Mode.</p>
      </div>
    );
  }

  const deptInfo = DEPARTMENTS.find(d => d.id === currentNotice.department) || {
    name: currentNotice.department,
    color: '#3b82f6'
  };

  return (
    <div className="kiosk-container">
      {/* Kiosk Header */}
      <div className="kiosk-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)', 
            padding: '0.6rem 0.8rem', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 800
          }}>
            <Tv size={24} />
            <span>CAMPUS DIGITAL TV</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8' }}>
            <span style={{ 
              background: deptInfo.color, 
              color: 'white', 
              padding: '0.35rem 0.8rem', 
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}>
              {deptInfo.name}
            </span>

            {currentNotice.priority === 'high' && (
              <span style={{ 
                background: '#dc2626', 
                color: 'white', 
                padding: '0.35rem 0.8rem', 
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <AlertCircle size={14} />
                URGENT CIRCULAR
              </span>
            )}
          </div>
        </div>

        {/* Clock & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontFamily: 'monospace' }}>
            <Clock size={20} color="#38bdf8" />
            <span>{time.toLocaleTimeString()}</span>
          </div>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-icon"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button 
            onClick={toggleFullscreen}
            className="btn-icon"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          <button 
            onClick={onClose}
            className="btn-icon"
            style={{ background: '#dc2626', borderColor: '#dc2626', color: 'white' }}
            title="Exit Kiosk Mode"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="kiosk-slide-card" key={currentNotice.id}>
        <div>
          <div style={{ 
            fontSize: '1rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: '#60a5fa', 
            marginBottom: '0.75rem',
            fontFamily: 'monospace'
          }}>
            REF: {currentNotice.refNo || currentNotice.id} • {currentNotice.category}
          </div>

          <h1 className="kiosk-slide-title">
            {currentNotice.title}
          </h1>

          <p className="kiosk-slide-body">
            {currentNotice.content}
          </p>
        </div>

        <div className="kiosk-footer">
          <div>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Issued by:</span> {currentNotice.issuedBy} ({currentNotice.role})
          </div>

          <div>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Audience:</span> {currentNotice.targetAudience}
          </div>

          <div>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Date:</span> {currentNotice.date}
          </div>
        </div>

        {/* Progress Countdown Bar */}
        <div className="kiosk-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Navigation Footer */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: '1.25rem',
        padding: '0 0.5rem'
      }}>
        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          Notice <strong>{currentIndex + 1}</strong> of <strong>{notices.length}</strong> 
          <span style={{ marginLeft: '1rem', opacity: 0.7 }}>(Press Space to pause, Arrow keys to navigate)</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={handlePrev} 
            className="btn-icon"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            title="Previous Notice"
          >
            <ChevronLeft size={22} />
          </button>
          <button 
            onClick={handleNext} 
            className="btn-icon"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            title="Next Notice"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
