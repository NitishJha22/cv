// Render Header
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

// Render Photo
const photo = document.getElementById("photo");
photo.innerHTML = `
  <img src="pic.png" alt="Your Photo">
`;

// Render About Me
const about = document.getElementById("about");
about.innerHTML = `
  <h2>About Me</h2>
  <p>Hi, I’m Nitish Jha, a B.Tech Computer Science student at Polaris School of Technology, Gurugram. I’m passionate about software development and contributing to open-source projects.</p>
  <p>Currently, as a Software Engineering Intern at Classplus, I focus on backend development, building scalable features with Node.js, Express.js, and RESTful APIs in a collaborative environment. These experiences continue to shape my growth as a developer and strengthen my expertise in creating impactful software solutions.</p>
`;

// Render Resume Links
const resumeLinks = document.getElementById("resume-links");
resumeLinks.innerHTML = `
  <h2>Resume & Links</h2>
  <p>
    <a href="https://docs.google.com/document/d/1_94nuu6HIlEyYFykkSs6pltFox3GLkSNBQb9-3Q6Ps4/edit?usp=sharing" target="_blank">Resume</a> |
    <a href="https://summerofcode.withgoogle.com/archive/2024/projects/Yy7ajjAG" target="_blank">Google Summer of Code - R Project (2024)</a>
  </p>
`;

// Render Education
const education = document.getElementById("education");
education.innerHTML = `
  <h2>Education</h2>
  <ul>
    <li>
      <strong>Polaris School of Technology (Starex University)</strong> 
      <br>B.Tech in Computer Science | SGPA: 8.59 
      <br><em>Aug 2023 - Present, Gurugram, Haryana</em>
    </li>
    <li>
      <strong>M.B.S International School, Greater Noida</strong> 
      <br>Senior Secondary School (STEM) | CGPA: 8.0 
      <br><em>Mar 2021 - Mar 2023, Noida, UP</em>
    </li>
  </ul>
`;

// Render Experience
const experience = document.getElementById("experience");
experience.innerHTML = `
  <h2>Experience</h2>
  <ul>
    <li>
      <strong>Software Engineer Intern @Classplus</strong> 
      <br><em>Nov 2024 - Present</em>
      <ul>
        <li>Developed and migrated APIs, abstracting database queries using ORMs in TypeScript.</li>
        <li>Built scalable server infrastructure in Go (Golang) with SQL (MySQL) and NoSQL (MongoDB).</li>
        <li>Optimized CI/CD pipelines and enhanced backend workflows.</li>
      </ul>
    </li>
    <li>
      <strong>Google Summer of Code 2024 @R Project</strong>
      <br><em>May 2024 - Aug 2024</em>
      <ul>
        <li>Contributed to the <code>data.table</code> package, resolving issues and improving functionality.</li>
        <li>Enhanced performance optimizations and documentation for better user experience.</li>
        <li>Collaborated with a global open-source community, working with R, C, GitHub, and Docker.</li>
      </ul>
    </li>
  </ul>
`;

// Render Skills
const skills = document.getElementById("skills");
skills.innerHTML = `
  <h2>My Skills</h2>
  <div class="skills-grid">
    <span class="skill-badge">R</span>
    <span class="skill-badge">C</span>
    <span class="skill-badge">Java</span>
    <span class="skill-badge">Ruby</span>
    <span class="skill-badge">JavaScript</span>
    <span class="skill-badge">TypeScript</span>
    <span class="skill-badge">HTML</span>
    <span class="skill-badge">CSS</span>
    <span class="skill-badge">Node.js</span>
    <span class="skill-badge">Express.js</span>
    <span class="skill-badge">Ruby on Rails</span>
    <span class="skill-badge">RESTful APIs</span>
    <span class="skill-badge">Git</span>
    <span class="skill-badge">Docker</span>
    <span class="skill-badge">VS Code</span>
    <span class="skill-badge">Postman</span>
    <span class="skill-badge">data.table</span>
    <span class="skill-badge">dplyr</span>
    <span class="skill-badge">ggplot2</span>
  </div>
`;

// Render Certificates
const certificates = document.getElementById("certificates");
certificates.innerHTML = `
  <h2>Certificates</h2>
  <ul>
    <li><a href="https://docs.google.com/document/d/1QOcN2W-jsp9ekdjn8nybrAkG_svYSdt-Rt_dUhamAPw/edit?tab=t.0" target="_blank">Google Summer of Code 2024 Certificate</a></li>
  </ul>
`;

// Render Projects and Open Source Contributions
const projects = document.getElementById("projects");
projects.innerHTML = `
  <h2>Projects & Open Source Contributions</h2>
  <ul>
    <li>
      <a href="https://summerofcode.withgoogle.com/archive/2024/projects/Yy7ajjAG" target="_blank">Google Summer of Code - R Project (2024)</a>
    </li>
    <li>
      <a href="https://nj221102.github.io/Nitish-gSoc-24/2024-08-24-gsoc'24-summary/" target="_blank">Open Source Contributions: GSoC'24 Summary</a>
    </li>
    <li>
      <a href="https://github.com/scarpe-team/scarpe/pulls?q=is%3Apr+author%3ANj221102" target="_blank">Scarpe Contributions</a>
    </li>
  </ul>
`;