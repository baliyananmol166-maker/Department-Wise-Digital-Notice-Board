# 📢 Department-Wise Digital Notice Board

A modern, responsive, and feature-rich **Department-Wise Digital Notice Board** built using **React** and modern CSS. Designed specifically for colleges, universities, and academic institutions to broadcast announcements, circulars, exam datesheets, placement notices, and emergency alerts.

---

## ✨ Features Included

### 1. 🏢 Department-Wise Categorization
- Dedicated tabs for all major departments:
  - **All Departments** (Central college overview)
  - **CSE** (Computer Science & Engineering)
  - **IT** (Information Technology)
  - **ECE** (Electronics & Communication)
  - **ME** (Mechanical Engineering)
  - **CE** (Civil Engineering)
  - **MBA** (Management Studies)
  - **Exam Cell** (Controller of Examinations)
  - **Admin Office** (Dean, Registrar & Central Library)
- Real-time notice counter badge on each department tab.

### 2. 🚨 Live Emergency & Urgent Ticker
- Top scrolling marquee displaying high-priority announcements and urgent alerts.
- One-click instant navigation to view the active urgent notice.

### 3. 🔍 Search & Multi-Criteria Filtering
- **Live Search**: Instant keyword search across titles, content, official reference numbers, tags, and faculty names.
- **Category Filter**: Academic, Exams & Results, Placements & Internships, Events & Workshops, Urgent Alerts, General Circulars.
- **Priority Filter**: High (Urgent 🔴), Medium (Important 🟡), Low (Normal 🔵).
- **Sorting Options**: Newest First, Oldest First, Priority Rank, Alphabetical (A-Z).
- **View Switcher**: Toggle between **Card Grid View** and **Compact List View**.

### 4. 📄 Interactive Notice Details Modal
- Official circular format with Reference Number (e.g. `REF: CSE/2026/CAP-402`).
- Target Audience indicator (e.g. `B.Tech CSE - 7th/8th Semester`).
- Detailed announcement body.
- Downloadable attachment files with simulated file download.
- **Print Official Circular**: Clean print stylesheet automatically formatting the notice for physical paper or PDF export (`Ctrl + P`).
- Share link / copy reference button.

### 5. ✍️ "Post Notice" Faculty / Admin Form
- Interactive form allowing department coordinators or admins to publish new circulars.
- Fields: Title, Department, Category, Priority, Target Audience, Issued By, Expiry Date, Content, Attachments, Tags, and Pin to Top.
- Real-time reactivity: New notices appear instantly on the board and persist via `localStorage`.

### 6. 📺 Smart TV / Kiosk Display Mode
- Fullscreen mode designed for wall-mounted TV monitors in college hallways and department corridors.
- Auto-rotates notices every 8 seconds with an animated countdown progress bar.
- Play / Pause controls, next/prev slide navigation, and fullscreen toggle.

### 7. 🌓 Dark / Light Theme & Live Clock
- Toggle between sleek Dark Mode and clean Academic Light Mode.
- Live updating digital clock with date in the top bar.

---

## 🚀 How to Run the Project

### Option A: Modern React with Vite (Recommended)

1. **Install dependencies** (already configured):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the URL displayed in the terminal).

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

### Option B: Standalone Zero-Install HTML Version

If you need to show or test the notice board immediately without starting a terminal:
- Double-click [`notice_board_standalone.html`](./notice_board_standalone.html) in your file explorer.
- It loads React 18 and Babel directly via CDN in any modern web browser!

---

## 📁 Project Structure

```
Department-Wise Digital Notice Board/
├── index.html                     # HTML shell with Google Fonts & Lucide icons
├── notice_board_standalone.html   # Zero-setup standalone demo version
├── package.json                   # React 18, Lucide React, and Vite configs
├── vite.config.js                 # Vite dev server configuration (port 3000)
├── src/
│   ├── main.jsx                   # React root entry point
│   ├── App.jsx                    # Core App component with state & filters
│   ├── index.css                  # Custom styling (light/dark theme, print, kiosk)
│   ├── data/
│   │   └── mockNotices.js         # Realistic college departments and notices dataset
│   └── components/
│       ├── Header.jsx             # Top bar, branding, live clock, theme toggle
│       ├── NoticeTicker.jsx       # Urgent alerts scrolling banner
│       ├── StatsRow.jsx           # Metric cards (Total, Urgent, Pinned, Filtered)
│       ├── DepartmentBar.jsx      # Department tabs with count badges
│       ├── FilterControls.jsx     # Search bar, category chips, priority, view toggle
│       ├── NoticeCard.jsx         # Card component for grid and list views
│       ├── NoticeDetailModal.jsx  # Full circular modal with download & print
│       ├── AddNoticeModal.jsx     # Faculty/Admin circular submission form
│       └── KioskMode.jsx          # Fullscreen Smart TV display auto-slider
```
