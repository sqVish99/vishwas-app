import React from 'react';
import './Home.css';
// import logo from '../../assets/images/logo192.png';

const Home = () => (
  <section id="Home">
    <div className="container">
      <h1>
        Hi!
        {/* <div className="react-logo-container">
          <img className="react-logo" src={logo} alt="React Logo" />
        </div> */}
      </h1>
      <div className="about">
        <p className="about-text">
          Welcome to my portfolio! I'm a dedicated Computer Science Master's student at ASU, 
          with a deep passion for crafting innovative software solutions. 
          My journey has been a blend of academic excellence, practical project work, 
          and a continuous quest for knowledge in AI, web development, and beyond. 
          Through this website, I share my projects, insights, 
          and experiences that have shaped my approach to technology and problem-solving. 
          Whether you're a fellow tech enthusiast, a potential collaborator, or an employer looking for talent, 
          I invite you to explore my work and discover the impact we can make together.
          Aside from my professional life, I love cycling, hiking, and reading books.
          I love giving back to the community and I have been a part of various volunteering activities.
        </p>
      </div>
    </div>
  </section>
);

export default Home;
