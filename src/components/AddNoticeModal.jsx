import React, { useState, useEffect } from 'react';
import { X, Plus, AlertCircle, FilePlus, Paperclip } from 'lucide-react';
import { DEPARTMENTS, CATEGORIES } from '../data/mockNotices';

export default function AddNoticeModal({ onClose, onAddNotice }) {
  const [formData, setFormData] = useState({
    title: '',
    department: 'CSE',
    category: 'Academic',
    priority: 'medium',
    isPinned: false,
    issuedBy: 'Dr. Jane Doe',
    role: 'Faculty Coordinator',
    targetAudience: 'All Registered Students',
    expiryDate: '',
    content: '',
    tags: 'Announcement, Urgent',
    attachmentName: 'Circular_Annexure.pdf'
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Please provide both a notice title and full circular content.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const randomId = 'NOT-' + Date.now().toString().slice(-4);
    const refNo = `${formData.department}/2026/DISP-${Math.floor(100 + Math.random() * 900)}`;

    const newNotice = {
      id: randomId,
      refNo: refNo,
      title: formData.title.trim(),
      department: formData.department,
      category: formData.category,
      priority: formData.priority,
      isPinned: formData.isPinned,
      date: today,
      expiryDate: formData.expiryDate || 'Open',
      issuedBy: formData.issuedBy.trim() || 'Department Office',
      role: formData.role.trim() || 'Notice Board Admin',
      targetAudience: formData.targetAudience.trim() || 'All Students & Staff',
      content: formData.content.trim(),
      attachments: formData.attachmentName ? [
        { name: formData.attachmentName.trim(), size: '1.4 MB' }
      ] : [],
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : []
    };

    onAddNotice(newNotice);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FilePlus size={20} color="var(--brand-primary)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Publish Official Department Notice</h3>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && (
              <div style={{ 
                background: 'var(--urgent-bg)', 
                border: '1px solid var(--urgent-border)', 
                color: 'var(--urgent-color)', 
                padding: '0.75rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Notice Title *</label>
              <input
                type="text"
                name="title"
                required
                className="form-input"
                placeholder="e.g., Mandatory Industry Seminar on Artificial Intelligence & Ethics"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Department *</label>
                <select
                  name="department"
                  className="form-input"
                  value={formData.department}
                  onChange={handleChange}
                >
                  {DEPARTMENTS.filter(d => d.id !== 'ALL').map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.id})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  className="form-input"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {CATEGORIES.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Priority Level *</label>
                <select
                  name="priority"
                  className="form-input"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="high">🔴 High / Urgent</option>
                  <option value="medium">🟡 Medium / Important</option>
                  <option value="low">🔵 Low / Routine Circular</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Target Audience</label>
                <input
                  type="text"
                  name="targetAudience"
                  className="form-input"
                  placeholder="e.g., B.Tech 3rd Year (CSE & IT)"
                  value={formData.targetAudience}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Issued By (Faculty / Office)</label>
                <input
                  type="text"
                  name="issuedBy"
                  className="form-input"
                  placeholder="e.g., Dr. A. Sharma"
                  value={formData.issuedBy}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Designation / Role</label>
                <input
                  type="text"
                  name="role"
                  className="form-input"
                  placeholder="e.g., Head of Department"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Notice Validity / Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  className="form-input"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Attach File Name (Optional)</label>
                <input
                  type="text"
                  name="attachmentName"
                  className="form-input"
                  placeholder="e.g., Syllabus_Winter_2026.pdf"
                  value={formData.attachmentName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Notice Content & Body Details *</label>
              <textarea
                name="content"
                rows={5}
                required
                className="form-textarea"
                placeholder="Enter detailed notice specifications, instructions, deadlines, guidelines, and contact persons..."
                value={formData.content}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Search Keywords / Tags (comma-separated)</label>
              <input
                type="text"
                name="tags"
                className="form-input"
                placeholder="e.g., Exam, HallTicket, Important, Fee"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <label className="form-checkbox-row">
                <input
                  type="checkbox"
                  name="isPinned"
                  checked={formData.isPinned}
                  onChange={handleChange}
                />
                <span>Pin this notice to the top of the digital board</span>
              </label>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-kiosk" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <Plus size={16} />
              <span>Publish Circular</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
