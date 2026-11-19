import React from 'react';
import { FileText, AlertCircle, Pin, Layers } from 'lucide-react';

export default function StatsRow({ 
  totalNotices, 
  urgentCount, 
  pinnedCount, 
  activeDeptName, 
  filteredCount 
}) {
  return (
    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
          <FileText size={22} />
        </div>
        <div>
          <div className="stat-value">{totalNotices}</div>
          <div className="stat-label">Total Active Circulars</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ background: '#fef2f2', color: '#dc2626' }}>
          <AlertCircle size={22} />
        </div>
        <div>
          <div className="stat-value">{urgentCount}</div>
          <div className="stat-label">Urgent Announcements</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ background: '#fefce8', color: '#ca8a04' }}>
          <Pin size={22} />
        </div>
        <div>
          <div className="stat-value">{pinnedCount}</div>
          <div className="stat-label">Pinned on Top</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>
          <Layers size={22} />
        </div>
        <div>
          <div className="stat-value">{filteredCount}</div>
          <div className="stat-label">In {activeDeptName}</div>
        </div>
      </div>
    </div>
  );
}
