// ============================================================
//  EDIT YOUR CONTENT HERE. Components read everything from this file.
//  Leave a link as '' (empty) and its button is hidden automatically.
// ============================================================

export const profile = {
  name: 'Mahesh Chandra Ganji',
  roles: ['Full-Stack Developer'],
  tagline:
    'Computer Science graduate skilled in building responsive web apps with HTML5, CSS3, JavaScript, and React.js, currently strengthening backend skills with FastAPI and MySQL toward full-stack development.',
  bio: 'I am a Computer Science graduate from Mohan Babu University with hands-on experience building frontend applications in React.js. I am growing into full-stack development with FastAPI and MySQL, and I like turning plain requirements into clean, responsive interfaces that feel quick to use.',
  email: 'gmaheshchandra75@gmail.com',
  phone: '+91-9390769926',
  github: 'https://github.com/MaheshMahi-005',
  linkedin: 'https://www.linkedin.com/in/mahesh-chandra-785bb535a',
  resume: '/assets/resume.pdf',
};

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'internships', label: 'Internships' },
  { id: 'participations', label: 'Participations' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript (ES6+)'] },
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'React.js'] },
  { group: 'Backend', items: ['REST API', 'FastAPI', 'SQLAlchemy', 'JSON'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman'] },
];

export const projects = [
  {
    title: 'Invacc',
    stack: ['React','Fast API','Python','MySQL'],
    description:
      'A full-stack inventory app where anyone can browse products and categories, while only admins can create, edit, or delete them. Authentication uses JWT with role checks enforced in the API, not just hidden in the UI. Includes debounced search and server-side pagination with total counts',
    live: 'https://github.com/MaheshMahi-005/Invaac',
    github: 'https://github.com/MaheshMahi-005/Invaac', // check this repo URL
  },
  {
    title: 'CineBase API',
    stack: ['Python', 'FastAPI', 'MySQL'],
    description:
      'RESTful CRUD API with SQLAlchemy ORM for actor record management. 7 endpoints with filtering by ID, first name and last name, plus pagination. Pydantic validation and dependency-injected DB sessions.',
    live: 'https://github.com/MaheshMahi-005/FAST_API',
    github: 'https://github.com/MaheshMahi-005/FAST_API', // check this repo URL
  },
  {
    title: 'Skyline',
    stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    description:
      'Multi-city weather dashboard with real-time temperature, humidity, wind speed and conditions. Dynamic card grid for 5 preloaded cities built with DOM manipulation, condition-based color themes and duplicate-city validation.',
    live: 'https://maheshmahi-005.github.io/SkyLine/', // add your live demo URL
    github: 'https://github.com/MaheshMahi-005/SkyLine', // add your GitHub repo URL
  },
  { 
    title: 'TaskManager',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Full-featured task manager with task creation, deadline tracking, status updates, priority filtering, and a client-side JS-timer reminder system. Mobile-first responsive UI deployed on GitHub Pages.',
    live: 'https://maheshmahi-005.github.io/Algonive_Task_Manager',
    github: 'https://github.com/MaheshMahi-005/Algonive_Task_Manager', // check this repo URL
  }
];

export const internships = [
  {
    role: 'Web Development Intern',
    org: 'Algonive',
    period: 'Jan 2026 – Mar 2026',
    description:
      'Developed and deployed a responsive Task Manager app with 5 core features, improving task organization and deadline tracking through an intuitive UI.',
  },
  {
    role: 'Generative AI Virtual Internship',
    org: 'AICTE National Internship Portal · EduSkills · curriculum by Google Cloud',
    period: 'Jul 2025 – Sep 2025',
    description:
      'Completed a 10-week program with an Outstanding (O) grade, covering generative AI fundamentals and prompt engineering.',
  },
];

export const participations = [
  { title: 'Cloud Technical Series: OnBoard Edition', certificate: '' },
  { title: 'TCS Lastmile Program', certificate: '' },
];

export const certifications = [
  { title: 'Python Essentials', issuer: 'Cisco', certificate: '' },
  { title: 'Prompt Design in Vertex AI', issuer: 'Google Cloud', certificate: '' },
];

export const education = [
  { school: 'Mohan Babu University', degree: 'B.Tech, Computer Science & Engineering', period: '2022 – 2026', score: 'CGPA 7.88' },
  { school: 'Sri Gowthami Jr College', degree: 'Intermediate', period: '2020 – 2022', score: '85%' },
  { school: 'Sri Sai High School', degree: 'SSC', period: '2019 – 2020', score: '86%' },
];
