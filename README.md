# 🎓 Department-Wise Digital Notice Board — ABESEC Ghaziabad

A responsive, role-based **Department-Wise Digital Notice Board** frontend web application built using **React** and modern CSS.

This project enables students and faculty to view, filter, search, publish, and manage departmental circulars, exam notifications, and campus announcements in real-time.

---

## 🌐 Live Render Deployment

- 🚀 **Live Demo URL:** [https://department-wise-digital-notice-board.onrender.com](https://department-wise-digital-notice-board.onrender.com)
- 📌 **GitHub Repository:** [https://github.com/baliyananmol166-maker/Department-Wise-Digital-Notice-Board](https://github.com/baliyananmol166-maker/Department-Wise-Digital-Notice-Board)
- 🟢 **Deployment Status:** Active / Operational on Render Static Site

---

## 🔐 User Login Credentials & Role Permissions

The application features role-based access control for **Administrators** and **Students**:

| User Role | Username | Password | Role Description & Permissions |
| :--- | :---: | :---: | :--- |
| 👑 **Administrator** | `admin` | `admin123` | **Full Administrative Access**: Can publish new departmental notices, delete notices, search, and filter circulars across all departments. |
| 🎓 **Student** | `student` | `student123` | **Read-Only Access**: Can view, search, and filter circulars for all departments (cannot post or delete notices). |

> 💡 **Quick Login Feature:** The login popup modal on the website includes convenient **"Auto-fill"** buttons to test both Admin and Student roles instantly.

---

## 👥 Project Team Members & Institutional Details

- **Institute:** ABESEC Ghaziabad
- **Branch & Section:** Computer Science & Engineering, **CSE-15**
- **Course:** Full Stack Development (FSD) Project

| S.No. | Student Name | University Roll No. | Section | Department |
| :---: | :--- | :---: | :---: | :---: |
| **1.** | **Anshika** | `2400320100224` | **CSE-15** | Computer Science & Engineering |
| **2.** | **Archana** | `2400320100267` | **CSE-15** | Computer Science & Engineering |

---

## 🏛️ Header & Footer Information

### Main Page Header:
- **Institution Name:** `ABESEC Ghaziabad`
- **Application Title:** `College Digital Notice Board`
- **Subtitle:** `Department-Wise Campus Notices & Circulars`

### Main Page Footer:
- **Developed & Maintained By:** Anshika, Archana (CSE-15)
- **Team:** Full Stack Development Team
- **Copyright:** © 2026 ABESEC Ghaziabad. All Rights Reserved.

---

## ✨ Key Features & Functionality

1. **🏢 Department-Wise Categorization:**
   - Filter circulars by department: **CSE**, **ECE**, **Mechanical**, **Civil**, **Exam Cell**, **Placement Cell**, or view **All Departments**.
   - Department badges with individual color accents for quick recognition.

2. **🔍 Real-Time Search:**
   - Instant search bar that filters notices by title or content keywords as you type.

3. **🔐 Role-Based Access Control (RBAC):**
   - **Admin Mode:** Unlocks the `+ Add New Notice` form and `🗑️ Delete Notice` buttons on each circular card.
   - **Student Mode:** Restricts management actions to read-only browsing mode with clear indicators.

4. **➕ Interactive Notice Creation:**
   - Form to add new circulars with title, department dropdown, and detailed description.

5. **📱 Fully Responsive Design:**
   - Optimized for mobile phones, tablets, laptops, and digital hallway monitors.

---

## 🚀 How to Deploy on Render (Step-by-Step Guide)

If deploying or re-linking to Render manually:

1. Go to [https://dashboard.render.com/](https://dashboard.render.com/) and sign in with GitHub.
2. Click **New +** and select **Static Site**.
3. Connect your GitHub repository:
   `https://github.com/baliyananmol166-maker/Department-Wise-Digital-Notice-Board`
4. Configure the build settings:
   - **Name:** `department-wise-digital-notice-board`
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**.
6. Render will build and deploy the site in ~1 minute and provide your live link!

---

## 💻 Running the Project Locally

```bash
# 1. Clone repository
git clone https://github.com/baliyananmol166-maker/Department-Wise-Digital-Notice-Board.git
cd Department-Wise-Digital-Notice-Board

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build
```

---

## 🛠️ Tech Stack Used

- **Frontend:** React.js (Hooks: `useState`, `useEffect`)
- **Styling:** Modern CSS3 (Flexbox, CSS Grid, Responsive Design)
- **Tooling:** Vite
- **Hosting / Deployment:** Render (Static Site)
- **Version Control:** Git & GitHub
