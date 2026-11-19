import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function NoticeTicker({ urgentNotices, onSelectNotice }) {
  if (!urgentNotices || urgentNotices.length === 0) return null;

  return (
    <div className="urgent-ticker-bar">
      <div className="ticker-tag">
        <AlertTriangle size={14} />
        <span>Urgent Alerts</span>
      </div>

      <div className="ticker-content">
        {urgentNotices.map((notice, idx) => (
          <span 
            key={notice.id} 
            className="ticker-text"
            onClick={() => onSelectNotice(notice)}
            title="Click to view urgent circular details"
          >
            <strong>[{notice.department}]</strong> {notice.title} &nbsp; • &nbsp;
          </span>
        ))}
      </div>

      <button 
        onClick={() => onSelectNotice(urgentNotices[0])}
        style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
      >
        <span>View</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
