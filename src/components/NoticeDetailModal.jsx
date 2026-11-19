import React, { useEffect, useState } from 'react';
import { 
  X, 
  Printer, 
  Share2, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  User, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/mockNotices';

export default function NoticeDetailModal({ notice, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!notice) return null;

  const deptInfo = DEPARTMENTS.find(d => d.id === notice.department) || {
    name: notice.department,
    color: '#4f46e5',
    bg: '#eef2ff'
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadAttachment = (fileName) => {
    // Generate simple dummy download text blob
    const element = document.createElement("a");
    const file = new Blob([`Official Document Attachment:\n\nTitle: ${notice.title}\nRef: ${notice.refNo}\nDepartment: ${notice.department}\n\nContents verified by Academic Controller.`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="badges-group">
            <span 
              className="dept-badge"
              style={{ backgroundColor: deptInfo.bg, color: deptInfo.color }}
            >
              {deptInfo.name}
            </span>
            <span className={`priority-badge ${notice.priority}`}>
              {notice.priority === 'high' && <AlertCircle size={12} />}
              {notice.priority.toUpperCase()} PRIORITY
            </span>
          </div>

          <button 
            className="btn-icon" 
            onClick={onClose} 
            title="Close modal"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Dispatch Reference Bar */}
          <div className="modal-ref-strip">
            <span>OFFICIAL CIRCULAR REF: <strong>{notice.refNo || `REF-${notice.id}`}</strong></span>
            <span>STATUS: <strong>ACTIVE</strong></span>
          </div>

          <h2 className="modal-title">{notice.title}</h2>

          {/* Metadata Grid */}
          <div className="modal-meta-grid">
            <div>
              <div className="meta-field-label">Issued By</div>
              <div className="meta-field-val">{notice.issuedBy}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{notice.role || 'Department Faculty'}</div>
            </div>

            <div>
              <div className="meta-field-label">Target Audience</div>
              <div className="meta-field-val">{notice.targetAudience || 'All Students & Staff'}</div>
            </div>

            <div>
              <div className="meta-field-label">Publish Date</div>
              <div className="meta-field-val">{notice.date}</div>
            </div>

            <div>
              <div className="meta-field-label">Valid Until</div>
              <div className="meta-field-val">{notice.expiryDate || 'End of Term'}</div>
            </div>
          </div>

          {/* Formatted Content Body */}
          <div className="modal-content-text">
            {notice.content}
          </div>

          {/* Attachments Section */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="attachments-section">
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Official Attachments & Circular Documents ({notice.attachments.length})
              </h4>
              <div className="attachment-list">
                {notice.attachments.map((file, idx) => (
                  <div key={idx} className="attachment-item">
                    <div className="attachment-name">
                      <FileText size={18} color="var(--brand-primary)" />
                      <div>
                        <span>{file.name}</span>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{file.size}</div>
                      </div>
                    </div>

                    <button 
                      className="btn-download"
                      onClick={() => handleDownloadAttachment(file.name)}
                      title={`Download ${file.name}`}
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button 
            className="btn-kiosk" 
            onClick={handleCopyLink}
            title="Copy circular reference URL"
          >
            {copied ? <Check size={16} color="#10b981" /> : <Share2 size={16} />}
            <span>{copied ? 'Copied!' : 'Share Circular'}</span>
          </button>

          <button 
            className="btn-kiosk" 
            onClick={handlePrint}
            title="Print or export as PDF"
          >
            <Printer size={16} />
            <span>Print Notice</span>
          </button>

          <button className="btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
