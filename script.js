// Render Header
const header = document.getElementById("header");
header.innerHTML = `
  <h1>Nitish Jha</h1>
  <p>New Delhi, INDIA | +91-7678303875 | <a href="https://www.linkedin.com/in/nitish-jha-2b82aa155/">LinkedIn</a> | <a href="https://github.com/Nj221102">GitHub</a></p>
`;

// Render Photo
const photo = document.getElementById("photo");

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
  <p><a href="#">Resume</a> | <a href="#">LinkedIn</a> | <a href="#">GitHub</a></p>
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
  <ul>
    <li><strong>Programming:</strong> R, C, Java, Ruby, JavaScript, TypeScript, HTML, CSS</li>
    <li><strong>Backend Development:</strong> Node.js, Express.js, Ruby on Rails, RESTful APIs</li>
    <li><strong>Version Control:</strong> Git, GitHub</li>
    <li><strong>Tools:</strong> VS Code, Postman, Docker</li>
    <li><strong>Data Science Tools:</strong> data.table, dplyr, ggplot2</li>
    <li><strong>Soft Skills:</strong> Problem-Solving, Communication, Teamwork, Adaptability, Time Management</li>
  </ul>
`;