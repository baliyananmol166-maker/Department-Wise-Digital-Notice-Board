import React from 'react';
import { 
  Search, 
  X, 
  LayoutGrid, 
  List, 
  Filter, 
  RotateCcw 
} from 'lucide-react';
import { CATEGORIES } from '../data/mockNotices';

export default function FilterControls({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  priorityFilter,
  onPriorityChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onResetFilters,
  isFiltered
}) {
  return (
    <div className="toolbar-card">
      <div className="toolbar-top">
        {/* Search Bar */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search circulars by title, reference no, topic, or faculty..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="search-clear-btn" 
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Priority Filter */}
        <select 
          className="filter-select"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
          aria-label="Filter by Priority"
        >
          <option value="ALL">All Priorities</option>
          <option value="high">🔴 High / Urgent</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🔵 Normal / Low</option>
        </select>

        {/* Sort Order */}
        <select 
          className="filter-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort Notices"
        >
          <option value="newest">📅 Newest Date</option>
          <option value="oldest">⏳ Oldest Date</option>
          <option value="priority">⚡ High Priority First</option>
          <option value="title">🔤 Title (A-Z)</option>
        </select>

        {/* View Toggle */}
        <div className="view-mode-toggle">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewModeChange('grid')}
            title="Grid View"
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewModeChange('list')}
            title="List View"
          >
            <List size={18} />
          </button>
        </div>

        {/* Reset Filter Button */}
        {isFiltered && (
          <button 
            onClick={onResetFilters}
            className="btn-kiosk"
            style={{ padding: '0.65rem 0.9rem', color: '#ef4444' }}
            title="Reset all search and filters"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="category-chips">
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '4px' }}>
          CATEGORY:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              className={`cat-chip ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
