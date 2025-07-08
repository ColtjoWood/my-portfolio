import React, { useState } from 'react';
import './App.css';
import ProjectCard from './ProjectCard'; 
import { FaHome, FaUserAlt, FaProjectDiagram } from 'react-icons/fa';



  function App() {
  return (
    <div style={{
  minHeight: '300vh',
  background: 'linear-gradient(...)',
  color: 'white',
  width: '100vw',       
  overflowX: 'hidden',  
}}>

  <div className="side-nav-bar" style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '60px',
  height: '100vh',
  backgroundColor: 'black',
  zIndex: 500,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '1rem',
}}>
  <img
    src='https://raw.githubusercontent.com/ColtjoWood/Images/refs/heads/main/ChatGPT%20Image%20Jul%208%2C%202025%2C%2005_39_32%20PM.png'
    alt="CW Logo"
    style={{
      width: '70px',
      height: '60px',
      objectFit: 'contain',
      marginBottom: '2rem',
    }}
  />
</div>




    
    <SideNav />

    <section
      id="welcome"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
      }}
      >
      <header style={{ padding: '5rem' }}>
  <h1 
    style={{ 
      animation: 'slideInLeft 1.5s ease-out forwards',
      opacity: 0,
      whiteSpace: 'pre-line',
      fontSize: '2.5rem',
      fontWeight: 'bold'
    }}
  >
    {`
      Hi
      I'm Colt,
      software engineer.`}
  </h1>

  <p>Welcome to my portfolio.</p>
</header>



<div style={{ textAlign: 'center', marginTop: '1rem' }}>   
  <button
    onClick={() => window.location.href = 'colt72wood@gmail.com'}
    style={{
      padding: '1.5rem 5rem',
      backgroundColor: '#1E90FF',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '1rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.2s',
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={e => e.currentTarget.style.transform = 'scale(1.0)'}
  >
    Contact Me
  </button>
</div>
</section>


<section
  id="about"
  style={{
    display: 'flex',
    alignItems: 'center',
    padding: '14rem 20rem 20rem',
  }}>
<img
  alt=''
  src="https://raw.githubusercontent.com/ColtjoWood/Images/refs/heads/main/texas-tech-logo-double-t-2.png"
  style={{
    width: '300px',
    height: '300px',
    borderRadius: '1%',
    marginRight: '3rem',
    objectFit: 'cover',
  }}
/>
<div style={{ maxWidth: '600px' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
    <p style={{ fontSize: '1.1rem' }}>
      I’m a senior Computer Science student at Texas Tech University, passionate about building clean, efficient, and user-focused applications.<br /><br />
  I enjoy solving problems through code and have experience with full-stack development, focusing mostly on React, C++, and Java.<br /><br />
  Right now, I’m focused on growing my development skills and working toward a career in software engineering.
    </p>
  </div>
  </section> 



<section
  id="projects"
  style={{
    padding: '12rem 2rem',
    
  }}
>

<main style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
  <ProjectCard
    title="C++ Personal Calculator 2.0"
    techStack="ReactJS, PostgreSQL, Spring Boot"
    image="https://raw.githubusercontent.com/ColtjoWood/Images/refs/heads/main/raf%2C360x360%2C075%2Ct%2Cfafafa_ca443f4786.jpg" 
    link="https://github.com/users/ColtjoWood/projects/1/views/1"
  />


  <ProjectCard
    title="Fantasy Football Draft Assistant"
    techStack="ReactJS, PostgreSQL, Spring Boot"
    image="https://raw.githubusercontent.com/ColtjoWood/Images/refs/heads/main/NFL-logo-2.webp" 
    link="https://github.com/users/ColtjoWood/projects/2"
  />

      </main>
    </section>
   </div>
  
  );
}




function SideNav() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navStyle = {
    position: 'fixed',
    top: '50%',
    left: '0.5rem',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    zIndex: 1000,
  };

  const getIconStyle = (index) => ({
    backgroundColor: hoveredIndex === index ? '#1E90FF' : '#ffffff88',
    borderRadius: '50%',
    width: hoveredIndex === index ? '46px' : '40px',
    height: hoveredIndex === index ? '46px' : '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: hoveredIndex === index ? 'white' : '#000',
    fontSize: '1.2rem',
    boxShadow: '0 0 6px rgba(0,0,0,0.3)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  });

  return (
    <nav style={navStyle}>
      <a
        href="#welcome"
        style={getIconStyle(0)}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <FaHome />
      </a>
      <a
        href="#projects"
        style={getIconStyle(1)}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#about"
        style={getIconStyle(2)}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <FaUserAlt />
      </a>
    </nav>
  );
}





export default App;
