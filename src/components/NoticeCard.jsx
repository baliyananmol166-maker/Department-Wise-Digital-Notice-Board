import React from 'react';
import { 
  Pin, 
  Paperclip, 
  Calendar, 
  Users, 
  ExternalLink, 
  AlertCircle 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/mockNotices';

export default function NoticeCard({ notice, onSelectNotice }) {
  const deptInfo = DEPARTMENTS.find(d => d.id === notice.department) || {
    name: notice.department,
    color: '#4f46e5',
    bg: '#eef2ff'
  };

  const priorityLabel = 
    notice.priority === 'high' ? 'Urgent' : 
    notice.priority === 'medium' ? 'Important' : 'Normal';

  const formattedDate = new Date(notice.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article 
      className={`notice-card priority-${notice.priority}`}
      onClick={() => onSelectNotice(notice)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectNotice(notice);
        }
      }}
    >
      <div>
        <div className="card-header">
          <div className="badges-group">
            <span 
              className="dept-badge"
              style={{ backgroundColor: deptInfo.bg, color: deptInfo.color }}
            >
              {deptInfo.short || notice.department}
            </span>

            <span className={`priority-badge ${notice.priority}`}>
              {notice.priority === 'high' && <AlertCircle size={12} />}
              {priorityLabel}
            </span>

            <span 
              style={{ 
                fontSize: '0.7rem', 
                color: 'var(--text-muted)', 
                background: 'var(--bg-primary)',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px'
              }}
            >
              {notice.category}
            </span>
          </div>

          {notice.isPinned && (
            <div title="Pinned circular" className="pin-icon">
              <Pin size={16} fill="currentColor" />
            </div>
          )}
        </div>

        <div className="card-content-col">
          <h3 className="card-title">{notice.title}</h3>

          {notice.targetAudience && (
            <div className="card-audience">
              <Users size={13} color="var(--text-muted)" />
              <span>Target: {notice.targetAudience}</span>
            </div>
          )}

          <p className="card-preview">
            {notice.content}
          </p>
        </div>
      </div>

      <div>
        {notice.tags && notice.tags.length > 0 && (
          <div className="card-tags">
            {notice.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="tag-item">#{tag}</span>
            ))}
          </div>
        )}

        <div className="card-footer">
          <div className="card-issuer">
            <span className="issuer-name">{notice.issuedBy}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {formattedDate}
            </span>
          </div>

          <div className="card-meta-right">
            {notice.attachments && notice.attachments.length > 0 && (
              <span className="attachment-indicator" title={`${notice.attachments.length} attachment(s) available`}>
                <Paperclip size={14} />
                <span>{notice.attachments.length}</span>
              </span>
            )}

            <button 
              className="btn-icon" 
              style={{ width: '30px', height: '30px' }}
              title="Open full notice"
              onClick={(e) => {
                e.stopPropagation();
                onSelectNotice(notice);
              }}
            >
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
