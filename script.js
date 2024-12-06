const header = document.getElementById("header");
header.innerHTML = `
  <div class="header-content">
    <h1>Nitish Jha</h1>
    <div class="header-details">
      <span><i class="fas fa-map-marker-alt"></i> New Delhi, INDIA</span> |
      <span><i class="fas fa-phone-alt"></i> +91-7678303875</span> |
      <a href="https://www.linkedin.com/in/nitish-jha-2b82aa155/" target="_blank" class="header-link">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a> |
      <a href="https://github.com/Nj221102" target="_blank" class="header-link">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
  </div>
`;

const photo = document.getElementById("photo");
photo.innerHTML = `
  <img src="pic.png" alt="Your Photo">
`;

const about = document.getElementById("about");
about.innerHTML = `
  <h2>About Me</h2>
  <p>Hi, I’m Nitish Jha, a B.Tech Computer Science student at Polaris School of Technology, Gurugram. I’m passionate about software development and contributing to open-source projects.</p>
  <p>Currently, as a Software Engineering Intern at Classplus, I focus on backend development, building scalable features with Node.js, Express.js, and RESTful APIs in a collaborative environment. These experiences continue to shape my growth as a developer and strengthen my expertise in creating impactful software solutions.</p>
`;

// Render Resume Links
const resumeLinks = document.getElementById("resume-links");
resumeLinks.innerHTML = `
  <h2>Links</h2>
  <p>
    <ul> 
      <li>
        <a href="https://docs.google.com/document/d/1_94nuu6HIlEyYFykkSs6pltFox3GLkSNBQb9-3Q6Ps4/edit?usp=sharing" target="_blank">My CV</a> 
       </li>
      <li>
        <a href="https://summerofcode.withgoogle.com/archive/2024/projects/Yy7ajjAG" target="_blank"> Google Summer of Code - R Project (2024)</a>
      </li>
    </ul>
  </p>
`;

// Render Education
const education = document.getElementById("education");
education.innerHTML = `
  <h2>Education</h2>
  <ul>
    <li>
      <strong>Polaris School of Technology (Starex University)</strong> 
      <span class="align-right"><em>Aug 2023 - Present | Gurugram, Haryana</em></span>
      <br>B.Tech in Computer Science | SGPA: 8.59
    </li>
    <li>
      <strong>M.B.S International School, Greater Noida</strong> 
      <span class="align-right"><em>Mar 2021 - Mar 2023 | Noida, UP</em></span>
      <br>Senior Secondary School (STEM) | CGPA: 8.0
    </li>
  </ul>
`;

const experience = document.getElementById("experience");
experience.innerHTML = `
  <h2>Experience</h2>
  <ul>
    <li>
      <strong>Software Engineer Intern @Classplus</strong> 
      <span class="align-right"><em>Nov 2024 - Present</em></span>
      <ul>
        <li>Developed and migrated APIs, abstracting database queries using ORMs in TypeScript.</li>
        <li>Built scalable server infrastructure in Go (Golang) with SQL (MySQL) and NoSQL (MongoDB).</li>
        <li>Optimized CI/CD pipelines and enhanced backend workflows.</li>
      </ul>
    </li>
    <li>
      <strong>Google Summer of Code 2024 @R Project</strong>
      <span class="align-right"><em>May 2024 - Aug 2024</em></span>
      <ul>
        <li>Contributed to the <code>data.table</code> package, resolving issues and improving functionality.</li>
        <li>Enhanced performance optimizations and documentation for better user experience.</li>
        <li>Collaborated with a global open-source community, working with R, C, GitHub, and Docker.</li>
      </ul>
    </li>
  </ul>
`;

const skills = document.getElementById("skills");
skills.innerHTML = `
  <h2>Skills</h2>
  <div>
    <h3>Programming Languages</h3>
    <div class="skills-grid">
      <span class="skill-badge">JavaScript</span>
      <span class="skill-badge">Python</span>
      <span class="skill-badge">R</span>
      <span class="skill-badge">TypeScript</span>
      <span class="skill-badge">C</span>
      <span class="skill-badge">Ruby</span>
    </div>
    <h3>Frameworks</h3>
    <div class="skills-grid">
      <span class="skill-badge">Node.js</span>
      <span class="skill-badge">React</span>
      <span class="skill-badge">Express</span>
      <span class="skill-badge">Ruby on Rails</span>
    </div>
    <h3>Tools</h3>
    <div class="skills-grid">
      <span class="skill-badge">Git</span>
      <span class="skill-badge">Docker</span>
      <span class="skill-badge">Postman</span>
    </div>
    <h3>Databases</h3>
    <div class="skills-grid">
      <span class="skill-badge">MySQL</span>
      <span class="skill-badge">MongoDB</span>
      <span class="skill-badge">Postgres</span>
    </div>
    <h3>Soft Skills</h3>
    <div class="skills-grid">
      <span class="skill-badge">Leadership</span>
      <span class="skill-badge">Problem-Solving</span>
      <span class="skill-badge">Time Management</span>
      <span class="skill-badge">Documentation</span>
    </div>
  </div>
`;

const achievements = document.getElementById("achievements");
achievements.innerHTML = `
  <h2>Achievements</h2>
  <ul>
    <li>Worked with open source org R project and completed my project with <code>data.table</code> during Google Summer of Code 2024.</li>
    <li>President of Training and Placement Club (Oct 2023).</li>
    <li>
      Solved <a href="https://leetcode.com/u/Nitishj221102/" target="_blank">190+ problems on LeetCode</a>.
    </li>
  </ul>
`;

const certificates = document.getElementById("certificates");
certificates.innerHTML = `
  <h2>Certificates</h2>
  <ul>
    <li><a href="https://docs.google.com/document/d/1QOcN2W-jsp9ekdjn8nybrAkG_svYSdt-Rt_dUhamAPw/edit?tab=t.0" target="_blank">Google Summer of Code 2024 Certificate</a></li>
  </ul>
`;

const projects = document.getElementById("projects");
projects.innerHTML = `
  <h2>Projects</h2>
  <ul>
    <li>
      <strong>Scarpe</strong> <span class="align-right"><em>Dec 2023 – Present</em></span>
      <ul>
        <li>Contributed to Scarpe, an early-stage prototype aimed at resurrecting the Shoes library.</li>
        <li>Successfully merged 10 pull requests, improving functionality and fixing critical bugs.</li>
        <li>Added new features such as tooltip, font-family, and font-weight, enhancing the library’s user experience.</li>
      </ul>
    </li>
    <li>
      <strong>R/data.table</strong> <span class="align-right"><em>Jan 2024 – Present</em></span>
      <ul>
        <li>Enhanced the <code>data.table</code> package by addressing critical issues and resolving bugs.</li>
        <li>Successfully merged 20+ pull requests during Google Summer of Code 2024.</li>
        <li>Implemented new features and improved documentation for better usability.</li>
      </ul>
    </li>
  </ul>
`;