import React from 'react';
import '../views/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Our History</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-container">
          {/* Team Member */}
          <div className="team-member">
            <img className="avatar" src="https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg?w=300" alt="Bob Doe" />
            <h3 className="member-name">Leonardo DiCaprio</h3>
            <p className="member-role">Director</p>
          </div>

          {/* Team Member */}
          <div className="team-member">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJszN3ya6WcT2IV4j52G7Nmu7rtCjdX2Kpkg&s" alt="Alice Smith" />
            <h3 className="member-name">John wick</h3>
            <p className="member-role">Manager</p>
          </div>

          {/* Team Member */}
          <div className="team-member">
            <img
              className="avatar"
              src="data:image/jpeg;base64,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"
              alt="John Johnson"
            />
            <h3 className="member-name">Tom Hardy</h3>
            <p className="member-role">Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
