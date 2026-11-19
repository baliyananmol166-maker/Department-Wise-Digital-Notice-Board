import React, { useState } from 'react';
import './index.css';

// Initial sample notices data
const initialNotices = [
  {
    id: 1,
    title: "Final Year Project Synopsis Submission",
    department: "CSE",
    date: "2026-11-20",
    description: "All final year students must submit their project synopsis to their respective project guides before Friday 5:00 PM."
  },
  {
    id: 2,
    title: "Mid-Term Examination Datesheet Released",
    department: "Exam Cell",
    date: "2026-11-18",
    description: "Mid-semester exams will begin from 1st December. Hall tickets are available to download on the student portal."
  },
  {
    id: 3,
    title: "Campus Placement Drive: Infosys & TCS",
    department: "Placement Cell",
    date: "2026-11-19",
    description: "Registration is open for eligible 7th-semester students (CSE, IT, ECE) with 65% aggregate and no active backlogs."
  },
  {
    id: 4,
    title: "Robotics & Drone Workshop",
    department: "ECE",
    date: "2026-11-15",
    description: "3-day hands-on workshop on microcontroller programming and drone assembly in the ECE Hardware Lab."
  },
  {
    id: 5,
    title: "Industrial Plant Visit to Thermal Power Station",
    department: "Mechanical",
    date: "2026-11-14",
    description: "Mandatory site visit for 3rd-year Mechanical engineering students on Saturday. Buses leave at 8:30 AM."
  },
  {
    id: 6,
    title: "Surveying Lab Practical Schedule",
    department: "Civil",
    date: "2026-11-12",
    description: "Batch A and Batch B surveying fieldwork will be conducted near the sports complex ground this Thursday."
  }
];

// List of departments for filtering
const departments = ["All", "CSE", "ECE", "Mechanical", "Civil", "Exam Cell", "Placement Cell"];

export default function App() {
  // State 1: All notices list
  const [notices, setNotices] = useState(initialNotices);

  // State 2: Currently selected department filter
  const [selectedDept, setSelectedDept] = useState("All");

  // State 3: Search text
  const [searchTerm, setSearchTerm] = useState("");

  // State 4: Toggle form visibility
  const [showAddForm, setShowAddForm] = useState(false);

  // State 5: Form inputs for creating a new notice
  const [newTitle, setNewTitle] = useState("");
  const [newDept, setNewDept] = useState("CSE");
  const [newDesc, setNewDesc] = useState("");

  // Function to add a new notice
  const handleAddNotice = (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newDesc.trim()) {
      alert("Please enter title and description!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const newNoticeObj = {
      id: Date.now(), // unique ID using timestamp
      title: newTitle,
      department: newDept,
      date: today,
      description: newDesc
    };

    // Add new notice to top of list
    setNotices([newNoticeObj, ...notices]);

    // Reset form fields
    setNewTitle("");
    setNewDesc("");
    setShowAddForm(false);
  };

  // Function to delete a notice
  const handleDeleteNotice = (id) => {
    const updatedList = notices.filter((item) => item.id !== id);
    setNotices(updatedList);
  };

  // Filter notices based on selected department AND search text
  const filteredNotices = notices.filter((notice) => {
    const matchesDept = selectedDept === "All" || notice.department === selectedDept;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDept && matchesSearch;
  });

  return (
    <div className="container">
      {/* College / Board Header */}
      <header className="header">
        <h1>🎓 College Digital Notice Board</h1>
        <p>Department-Wise Campus Notices & Circulars</p>
      </header>

      {/* Top Action Bar: Search and Add Button */}
      <div className="action-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search notices by keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="btn btn-add"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "✖ Close Form" : "+ Add New Notice"}
        </button>
      </div>

      {/* Simple Form to Add New Notice (Shown when showAddForm is true) */}
      {showAddForm && (
        <form className="add-form" onSubmit={handleAddNotice}>
          <h3>Post a New Notice</h3>

          <div className="form-group">
            <label>Notice Title:</label>
            <input
              type="text"
              placeholder="e.g. Workshop on Web Development"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <select value={newDept} onChange={(e) => setNewDept(e.target.value)}>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Exam Cell">Exam Cell</option>
              <option value="Placement Cell">Placement Cell</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description / Details:</label>
            <textarea
              rows="3"
              placeholder="Enter notice details, instructions, venue, and timing..."
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-submit">
            Publish Notice
          </button>
        </form>
      )}

      {/* Department Filter Tabs */}
      <div className="dept-tabs">
        {departments.map((dept) => (
          <button
            key={dept}
            className={`dept-btn ${selectedDept === dept ? "active" : ""}`}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Total notices count */}
      <div className="notice-count">
        Showing <strong>{filteredNotices.length}</strong> notices for <strong>{selectedDept}</strong>
      </div>

      {/* Notice Cards Grid */}
      <div className="notices-grid">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <div className="card-top">
                <span className={`badge dept-${notice.department.replace(/\s+/g, '').toLowerCase()}`}>
                  {notice.department}
                </span>
                <span className="notice-date">📅 {notice.date}</span>
              </div>

              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-desc">{notice.description}</p>

              <div className="card-bottom">
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteNotice(notice.id)}
                  title="Delete notice"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-notices">
            <p>No notices found for this department or search query.</p>
          </div>
        )}
      </div>

      {/* Simple Footer */}
      <footer className="footer">
        <p>© 2026 Department Digital Notice Board | Student Frontend Project</p>
      </footer>
    </div>
  );
}
