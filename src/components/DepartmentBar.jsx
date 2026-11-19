import React from 'react';
import { 
  LayoutGrid, 
  Code, 
  Terminal, 
  Cpu, 
  Wrench, 
  Building2, 
  Briefcase, 
  FileCheck, 
  ShieldAlert 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/mockNotices';

const ICON_MAP = {
  LayoutGrid,
  Code,
  Terminal,
  Cpu,
  Wrench,
  Building2,
  Briefcase,
  FileCheck,
  ShieldAlert
};

export default function DepartmentBar({ 
  selectedDept, 
  onSelectDept, 
  getDeptCount 
}) {
  return (
    <section className="department-section">
      <div className="section-label">
        <span>Select Department</span>
        <span>Filter by Academic Unit</span>
      </div>

      <div className="dept-pills-container">
        {DEPARTMENTS.map((dept) => {
          const IconComponent = ICON_MAP[dept.icon] || LayoutGrid;
          const count = getDeptCount(dept.id);
          const isActive = selectedDept === dept.id;

          return (
            <button
              key={dept.id}
              className={`dept-pill ${isActive ? 'active' : ''}`}
              onClick={() => onSelectDept(dept.id)}
              style={
                !isActive
                  ? { borderColor: dept.color + '33' }
                  : { backgroundColor: dept.color, borderColor: dept.color }
              }
            >
              <IconComponent size={16} color={isActive ? '#ffffff' : dept.color} />
              <span>{dept.name}</span>
              <span className="dept-pill-count">{count}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
