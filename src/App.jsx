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

  // State 6: User Authentication & Role Management
  // Default is logged in as Student (can also switch to Admin)
  const [currentUser, setCurrentUser] = useState({
    username: "student",
    role: "Student" // "Admin" or "Student"
  });

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Handle Login Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const username = inputUsername.trim().toLowerCase();
    const password = inputPassword.trim();

    if (username === "admin" && password === "admin123") {
      setCurrentUser({ username: "admin", role: "Admin" });
      setShowLoginModal(false);
      setInputUsername("");
      setInputPassword("");
    } else if (username === "student" && password === "student123") {
      setCurrentUser({ username: "student", role: "Student" });
      setShowLoginModal(false);
      setInputUsername("");
      setInputPassword("");
    } else {
      setLoginError("Invalid credentials! Please use valid Admin or Student login.");
    }
  };

  // Quick fill demo credentials
  const fillCredentials = (role) => {
    if (role === "admin") {
      setInputUsername("admin");
      setInputPassword("admin123");
    } else {
      setInputUsername("student");
      setInputPassword("student123");
    }
    setLoginError("");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAddForm(false);
  };

  // Function to add a new notice (Admin only)
  const handleAddNotice = (e) => {
    e.preventDefault();

    if (currentUser?.role !== "Admin") {
      alert("Permission Denied: Only Admin can publish notices! Please login as Admin.");
      return;
    }

    if (!newTitle.trim() || !newDesc.trim()) {
      alert("Please enter title and description!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const newNoticeObj = {
      id: Date.now(),
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

  // Function to delete a notice (Admin only)
  const handleDeleteNotice = (id) => {
    if (currentUser?.role !== "Admin") {
      alert("Permission Denied: Only Admin can delete notices! Please login as Admin.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this notice?")) {
      const updatedList = notices.filter((item) => item.id !== id);
      setNotices(updatedList);
    }
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
      {/* College / Board Header - with ABESEC Ghaziabad */}
      <header className="header">
        <div className="college-banner">ABESEC Ghaziabad</div>
        <h1>🎓 College Digital Notice Board</h1>
        <p>Department-Wise Campus Notices & Circulars</p>
      </header>

      {/* User Status & Authentication Bar */}
      <div className="user-auth-bar">
        <div className="user-badge-container">
          {currentUser ? (
            <span className={`user-badge ${currentUser.role.toLowerCase()}`}>
              {currentUser.role === "Admin" ? "👑 Admin Mode" : "🎓 Student Mode"} ({currentUser.username})
            </span>
          ) : (
            <span className="user-badge guest">👁️ Guest (Not Logged In)</span>
          )}

          <span className="role-hint">
            {currentUser?.role === "Admin"
              ? "Full Access: Can publish and delete notices"
              : "Read-Only: Can browse, filter, and search notices"}
          </span>
        </div>

        <div className="auth-btn-group">
          {currentUser ? (
            <>
              <button className="btn btn-switch" onClick={() => setShowLoginModal(true)}>
                Switch Role / Account
              </button>
              <button className="btn btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-login" onClick={() => setShowLoginModal(true)}>
              🔑 Login to Account
            </button>
          )}
        </div>
      </div>

      {/* Top Action Bar: Search and Add Button */}
      <div className="action-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search notices by keyword or topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {currentUser?.role === "Admin" ? (
          <button
            className="btn btn-add"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? "✖ Close Form" : "+ Add New Notice"}
          </button>
        ) : (
          <button
            className="btn btn-add-disabled"
            onClick={() => {
              alert("Admin privilege required to add new notices! Please login as Admin.");
              setShowLoginModal(true);
            }}
            title="Login as Admin to publish notices"
          >
            🔒 Post Notice (Admin Only)
          </button>
        )}
      </div>

      {/* Simple Form to Add New Notice (Shown when showAddForm is true and user is Admin) */}
      {showAddForm && currentUser?.role === "Admin" && (
        <form className="add-form" onSubmit={handleAddNotice}>
          <h3>Post a New Notice (Admin Portal)</h3>

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
                {currentUser?.role === "Admin" ? (
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteNotice(notice.id)}
                    title="Delete notice as Admin"
                  >
                    🗑️ Delete Notice
                  </button>
                ) : (
                  <span className="read-only-tag">📖 Verified Notice</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-notices">
            <p>No notices found for this department or search query.</p>
          </div>
        )}
      </div>

      {/* Login / Role Selection Modal */}
      {showLoginModal && (
        <div className="modal-backdrop" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🔐 User Role Login (FSD Project)</h3>
              <button className="modal-close-btn" onClick={() => setShowLoginModal(false)}>✖</button>
            </div>

            <div className="credentials-info-box">
              <p><strong>Available Login Credentials:</strong></p>
              <div className="cred-row">
                <span>👑 <strong>Admin:</strong> <code>admin</code> / <code>admin123</code> (Full Control)</span>
                <button type="button" className="btn-quick-fill" onClick={() => fillCredentials("admin")}>
                  Auto-fill
                </button>
              </div>
              <div className="cred-row">
                <span>🎓 <strong>Student:</strong> <code>student</code> / <code>student123</code> (Read-Only)</span>
                <button type="button" className="btn-quick-fill" onClick={() => fillCredentials("student")}>
                  Auto-fill
                </button>
              </div>
            </div>

            {loginError && <div className="error-message">{loginError}</div>}

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  placeholder="Enter username (admin / student)"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter password (admin123 / student123)"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowLoginModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-submit-login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer component with ABESEC Ghaziabad Details */}
      <footer className="footer">
        <p className="footer-dev">
          <strong>Developed & Maintained By:</strong> Anshika, Archana (CSE-15)
        </p>
        <p className="footer-team">Full Stack Development Team</p>
        <p className="footer-copy">© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
