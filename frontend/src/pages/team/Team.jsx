import React from 'react';
import './team.css';

const teamMembers = [
  {
    name: 'Anjali Yadav',
    role: 'Founder',
    image: 'http://res.cloudinary.com/dbbhmh2ji/image/upload/v1747035587/pxjw9pq4n9wuhvz0hrsn.jpg',
  },
  {
    name: 'Rishika Sinha',
    role: 'Lead Developer',
    image: 'http://res.cloudinary.com/dbbhmh2ji/image/upload/v1747041827/ofn1iyq0njgogbrvxbqh.jpg',
  },
];

const Team = () => {
  return (
    <section className="our-team">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
