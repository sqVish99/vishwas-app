import React from 'react';
import './Journey.css';
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline';

const Journey = () => {

  return (
    <section id="Journey">
      <div className="container journey-container">
        <h1>My Journey</h1>
          <div className='journey-map'>
            <ExperienceTimeline/>
          </div>
      </div>
    </section>
  );
};

export default Journey;