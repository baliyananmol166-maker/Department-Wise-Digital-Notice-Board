export const DEPARTMENTS = [
  { id: 'ALL', name: 'All Departments', short: 'All', icon: 'LayoutGrid', color: '#4f46e5', bg: '#eef2ff' },
  { id: 'CSE', name: 'Computer Science & Engineering', short: 'CSE', icon: 'Code', color: '#2563eb', bg: '#eff6ff' },
  { id: 'IT', name: 'Information Technology', short: 'IT', icon: 'Terminal', color: '#0284c7', bg: '#f0f9ff' },
  { id: 'ECE', name: 'Electronics & Communication', short: 'ECE', icon: 'Cpu', color: '#7c3aed', bg: '#f5f3ff' },
  { id: 'ME', name: 'Mechanical Engineering', short: 'ME', icon: 'Wrench', color: '#ea580c', bg: '#fff7ed' },
  { id: 'CE', name: 'Civil Engineering', short: 'CE', icon: 'Building2', color: '#16a34a', bg: '#f0fdf4' },
  { id: 'MBA', name: 'Management Studies', short: 'MBA', icon: 'Briefcase', color: '#d97706', bg: '#fffbeb' },
  { id: 'EXAM', name: 'Examination Cell', short: 'Exam Cell', icon: 'FileCheck', color: '#dc2626', bg: '#fef2f2' },
  { id: 'ADMIN', name: 'Administration & Dean Office', short: 'Admin', icon: 'ShieldAlert', color: '#475569', bg: '#f8fafc' },
];

export const CATEGORIES = [
  'All',
  'Urgent Alerts',
  'Academic',
  'Exams & Results',
  'Placements & Internships',
  'Events & Workshops',
  'General Circulars'
];

export const INITIAL_NOTICES = [
  {
    id: 'NOT-2026-001',
    title: 'Submission of Final Year Capstone Project Abstracts & Guide Allotment',
    department: 'CSE',
    category: 'Academic',
    priority: 'high',
    isPinned: true,
    refNo: 'CSE/2026/CAP-402',
    date: '2026-11-19',
    expiryDate: '2026-11-28',
    issuedBy: 'Dr. Ramesh Sharma',
    role: 'HOD, Department of Computer Science & Engineering',
    targetAudience: 'B.Tech CSE - 7th/8th Semester',
    content: `All final year B.Tech (CSE) students are hereby informed that the portal for Capstone Project Phase-II abstract submissions is now active.
    
Key Guidelines:
1. Team size must not exceed 4 members.
2. Abstract must clearly specify the problem statement, proposed methodology, tech stack, and expected outcomes.
3. Plagiarism check will be conducted using Turnitin (threshold: < 15%).
4. Guide preference forms must be submitted through the department ERP before November 28, 2026, 5:00 PM.

Failure to submit by the deadline will result in automatic guide allotment by the departmental project committee.`,
    attachments: [
      { name: 'Capstone_Project_Guidelines_Phase2.pdf', size: '2.4 MB' },
      { name: 'Faculty_Research_Domains_2026.xlsx', size: '420 KB' }
    ],
    tags: ['Capstone', 'Projects', 'Deadline', 'BTech']
  },
  {
    id: 'NOT-2026-002',
    title: 'Schedule for End-Semester Practical & Theory Examinations (Winter 2026)',
    department: 'EXAM',
    category: 'Exams & Results',
    priority: 'high',
    isPinned: true,
    refNo: 'COE/EXAM/W26/108',
    date: '2026-11-18',
    expiryDate: '2026-12-15',
    issuedBy: 'Prof. Anil Kumar Varma',
    role: 'Controller of Examinations',
    targetAudience: 'All Undergraduate & Postgraduate Students',
    content: `The comprehensive schedule for Winter 2026 End-Semester Examinations (both Laboratory and Theory components) has been finalized and approved by the Academic Council.

Important Points for Examinees:
• Practical Exams: Commencing December 01, 2026.
• Theory Exams: Commencing December 10, 2026 to December 24, 2026.
• Admit cards can be downloaded from the student portal starting November 25, 2026.
• Strict compliance with the Examination Code of Conduct is mandatory. Carrying electronic gadgets, smartwatches, or programmable calculators into the hall is strictly prohibited.`,
    attachments: [
      { name: 'Winter_2026_Full_Exam_Timetable.pdf', size: '3.8 MB' },
      { name: 'Hall_Ticket_Download_Instructions.pdf', size: '650 KB' }
    ],
    tags: ['Exams', 'Datesheet', 'Timetable', 'Winter 2026']
  },
  {
    id: 'NOT-2026-003',
    title: 'On-Campus Recruitment Drive: TechCorp Global Solutions (Package: 14.5 LPA)',
    department: 'CSE',
    category: 'Placements & Internships',
    priority: 'high',
    isPinned: true,
    refNo: 'TPO/DRIVE/2026/89',
    date: '2026-11-19',
    expiryDate: '2026-11-22',
    issuedBy: 'Training & Placement Cell',
    role: 'Head of Corporate Relations',
    targetAudience: 'CSE, IT & ECE Eligible Batches',
    content: `TechCorp Global Solutions is visiting our campus for hiring Software Development Engineers (SDE-1) and Cloud Engineers.

Eligibility Criteria:
• B.Tech (CSE / IT / ECE) with CGPA 7.5 and above without active backlogs.
• Strong foundation in Data Structures, Algorithms, DBMS, and System Design.
• CTC Offered: 14.5 LPA (Fixed: 12 LPA + Performance Bonus).

Selection Rounds:
1. Online Coding Assessment: Nov 23, 2026 (College Labs).
2. Technical Interview Round 1 & 2: Nov 25, 2026.
3. HR Round & Offer Rollout: Nov 26, 2026.

Register via the placement portal using the link provided in the circular.`,
    attachments: [
      { name: 'TechCorp_Job_Description_SDE.pdf', size: '1.1 MB' },
      { name: 'Eligible_Students_Shortlist.xlsx', size: '890 KB' }
    ],
    tags: ['Placement', 'Recruitment', 'Jobs', 'SDE']
  },
  {
    id: 'NOT-2026-004',
    title: 'Hands-on Workshop on Embedded IoT & Drone Avionics Control Systems',
    department: 'ECE',
    category: 'Events & Workshops',
    priority: 'medium',
    isPinned: false,
    refNo: 'ECE/WS/2026/044',
    date: '2026-11-17',
    expiryDate: '2026-11-25',
    issuedBy: 'Dr. Meenakshi Sundaram',
    role: 'Faculty Coordinator, Robotics & IoT Lab',
    targetAudience: 'ECE & ME 2nd & 3rd Year Students',
    content: `The Department of Electronics & Communication Engineering in association with IEEE Student Branch is organizing a 3-day intensive hands-on bootcamp on "Embedded IoT & Autonomous Drone Flight Controllers".

Workshop Highlights:
• Microcontroller interfacing using STM32 & ESP32.
• Sensor telemetry and PID tuning for quadcopters.
• Free hardware kit provided per team of 3.
• Certificates will be issued with IEEE accreditation.

Venue: Advanced VLSI & IoT Lab (Block C, Room 302). Limited to first 45 registrations.`,
    attachments: [
      { name: 'IoT_Drone_Workshop_Brochure.pdf', size: '5.2 MB' }
    ],
    tags: ['Workshop', 'IoT', 'Drones', 'Robotics']
  },
  {
    id: 'NOT-2026-005',
    title: 'Submission of Industrial Training & Internship Reports (Summer 2026)',
    department: 'ME',
    category: 'Academic',
    priority: 'medium',
    isPinned: false,
    refNo: 'ME/INT/2026/019',
    date: '2026-11-16',
    expiryDate: '2026-11-30',
    issuedBy: 'Prof. Rajesh K. Nair',
    role: 'Internship Coordinator, Dept. of Mechanical Engg.',
    targetAudience: 'Mechanical Engineering 5th Semester',
    content: `All 3rd-year Mechanical Engineering students who completed their mandatory 6-8 weeks industrial training during summer vacation are required to submit their spiral-bound reports along with completion certificates from the industry.

The viva-voce examination will be conducted between Dec 03 and Dec 05, 2026 by external examiners from manufacturing and automotive sectors.`,
    attachments: [
      { name: 'Mechanical_Internship_Report_Template.docx', size: '180 KB' }
    ],
    tags: ['Mechanical', 'Internship', 'Viva', 'Report']
  },
  {
    id: 'NOT-2026-006',
    title: 'Site Visit to Metro Rail Elevated Corridor & Bridge Engineering Project',
    department: 'CE',
    category: 'Events & Workshops',
    priority: 'medium',
    isPinned: false,
    refNo: 'CE/VISIT/2026/012',
    date: '2026-11-15',
    expiryDate: '2026-11-21',
    issuedBy: 'Er. Sandeep Mukherjee',
    role: 'HOD, Civil Engineering',
    targetAudience: 'Civil Engineering 3rd & 4th Year',
    content: `An educational field visit has been arranged to the ongoing Phase-3 Metro Rail construction site to study pre-stressed concrete girder installation, soil stabilization, and quality compliance testing.

College buses will depart from the Main Campus Gate at 8:30 AM sharp on Saturday, November 22, 2026. Safety helmets and fluorescent vests will be provided at the site. Students must wear sturdy footwear.`,
    attachments: [
      { name: 'Site_Visit_Parental_Consent_Form.pdf', size: '310 KB' }
    ],
    tags: ['Field Visit', 'Metro', 'Civil', 'Structural']
  },
  {
    id: 'NOT-2026-007',
    title: 'Annual Management Conclave "STRATAGEM 2026" - Call for Case Study Papers',
    department: 'MBA',
    category: 'Events & Workshops',
    priority: 'low',
    isPinned: false,
    refNo: 'DOMS/CONF/2026/03',
    date: '2026-11-14',
    expiryDate: '2026-12-05',
    issuedBy: 'Dr. Ananya Sengupta',
    role: 'Dean, Department of Management Studies',
    targetAudience: 'MBA & PGDM Scholars',
    content: `We are pleased to invite original research papers, business case studies, and empirical articles for the upcoming National Conclave on "AI Disruption in Financial Markets and Supply Chain Resiliency".

Cash awards of ₹25,000, ₹15,000, and ₹10,000 will be awarded to top 3 presentations. Selected papers will be published in the Scopus-indexed University Journal of Business Analytics.`,
    attachments: [
      { name: 'Stratagem_2026_Call_for_Papers.pdf', size: '1.9 MB' }
    ],
    tags: ['Management', 'Conclave', 'MBA', 'Case Study']
  },
  {
    id: 'NOT-2026-008',
    title: 'Annual Library Book Return & No Dues Clearance for Graduating Batch',
    department: 'ADMIN',
    category: 'General Circulars',
    priority: 'low',
    isPinned: false,
    refNo: 'LIB/GEN/2026/77',
    date: '2026-11-13',
    expiryDate: '2026-12-10',
    issuedBy: 'Central Library Directorate',
    role: 'Chief Librarian',
    targetAudience: 'All Final Year Students & Faculty',
    content: `All students who have issued books from the central library or departmental book banks must return overdue books by Dec 10, 2026.
    
Late fees will be waived for any returns completed during the 'Book Amnesty Week' (Nov 24 to Nov 30). Clear your dues online via the library portal to ensure your hall tickets are processed without interruption.`,
    attachments: [],
    tags: ['Library', 'NoDues', 'Circular', 'Admin']
  },
  {
    id: 'NOT-2026-009',
    title: 'Emergency Maintenance of Campus Wi-Fi & Firewall Upgrades',
    department: 'IT',
    category: 'Urgent Alerts',
    priority: 'high',
    isPinned: true,
    refNo: 'IT/NET/2026/911',
    date: '2026-11-19',
    expiryDate: '2026-11-20',
    issuedBy: 'Network & Systems Administration',
    role: 'Head of IT Infrastructure',
    targetAudience: 'Campus-wide (All Students, Hostels, and Staff)',
    content: `Please note that network infrastructure maintenance, fiber optic splicing, and core firewall updates will be carried out tonight between 11:30 PM and 04:30 AM.

During this window, both Campus Wi-Fi (EDUROAM / CAMPUS-NET) and the Student Hostel LAN will experience intermittent outages. Cloud ERP and Moodle servers will remain accessible via mobile data. We regret any inconvenience caused.`,
    attachments: [],
    tags: ['WiFi', 'Maintenance', 'Network', 'Urgent']
  }
];
