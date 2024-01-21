import React from 'react';
import './Home.css';

const Home = () => (
  <section id="Home">
    <div className="container">
      <h1>Hi!</h1>
      <div className="about">
        <p>Thank you for visting my page!</p>
        <p className="about-text">
          I'm Vishwas. I'm an ambitious Master's student majoring in Computer Science at Arizona State University,
          on track to graduate in May 2025. Armed with a robust background in Computer Science and Engineering, 
          I actively contribute to software development, specializing in elevating application performance. 
          Beyond academia, I channel my passion into community service, guiding underprivileged children, 
          and spearheading impactful fundraising events. Proficient in a diverse array of cutting-edge programming languages 
          and technologies, I bring a dynamic skill set to the table. 
          Fluent in English, Hindi, and Kannada, I integrate technical expertise with strong communication and leadership skills. 
          Outside of tech, I enjoy going on long bicycle rides, hiking and reading books.
        </p>
      </div>
    </div>
  </section>
);

export default Home;
