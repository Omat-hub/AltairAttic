import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Team.css';
import teamData from '../../utils/teamData';

const Team = () => {
  return (
    <div className="team-section">
      <Helmet>
        <title>Our Team - Altair Attic Limited</title>
        <meta name="description" content="Meet the dedicated team of professionals at Altair Attic Limited who drive innovation and excellence." />
        <meta name="keywords" content="Altair Attic Limited team, professionals, innovation" />
        <meta property="og:title" content="Our Team - Altair Attic Limited" />
        <meta property="og:description" content="Meet the dedicated team of professionals at Altair Attic Limited who drive innovation and excellence." />
        <meta property="og:url" content="https://www.altairattic.com/team" />
        <meta property="og:image" content="https://www.altairattic.com/images/team.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - Altair Attic Limited" />
        <meta name="twitter:description" content="Meet the dedicated team of professionals at Altair Attic Limited who drive innovation and excellence." />
        <meta name="twitter:image" content="https://www.altairattic.com/images/team.jpg" />
      </Helmet>
      <h2>Our Team</h2>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
