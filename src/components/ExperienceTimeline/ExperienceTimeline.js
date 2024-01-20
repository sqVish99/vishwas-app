import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const experiences = [
    { title: 'Bachelor of Engineering in Computer Science', date: 'July 2016 - April 2020', description: 'Visvesvaraya Technological University' },
    { title: 'Teaching Volunteer', date: 'August 2017 - August 2020', description: 'Abhikalpana Trust, Bengaluru' },
    { title: 'Board Member', date: 'August 2019 - August 2020', description: 'Abhikalpana Trust, Bengaluru' },
    { title: 'Software Engineering Intern', date: 'July 2019 - August 2019', description: 'Samartha Infosolutions, Bengaluru' },
    { title: 'Associate Software Engineer', date: 'December 2020 - September 2021', description: 'Accenture, Bengaluru' },
    { title: 'Software Engineer', date: 'September 2021 - January 2023', description: 'Piktorlabs, Bengaluru' },
    { title: 'Software Developer III', date: 'January 2023 - July 2023', description: 'UST, Bengaluru' },
    { title: 'Master of Science in Computer Science', date: 'August 2023 - May 2025', description: 'Arizona State University' },
  ];

  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={experience.date}
          iconStyle={{ background: '#d7dbe8', color: 'bac4d6' }}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
          <p>{experience.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
