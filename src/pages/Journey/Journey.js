import React, { useState } from 'react';
import './Journey.css';

const Journey = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="Journey">
      <div className="container">
        <h1>My Journey</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('education')}>Education</button>
          <button onClick={() => setActiveTab('experience')}>Professional Experience</button>
          <button onClick={() => setActiveTab('volunteer')}>Community/Volunteer Work</button>
        </div>
        {activeTab === 'education' && (
          <div>
            <p>Education content line 1...</p>
            <p>Education content line 2...</p>
            {/* Add more lines as needed */}
          </div>
        )}
        {activeTab === 'experience' && (
          <div>
            <p>Professional experience content line 1...</p>
            <p>Professional experience content line 2...</p>
            {/* Add more lines as needed */}
          </div>
        )}
        {activeTab === 'volunteer' && (
          <div>
            <p>Community/Volunteer work content line 1...</p>
            <p>Community/Volunteer work content line 2...</p>
            {/* Add more lines as needed */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;