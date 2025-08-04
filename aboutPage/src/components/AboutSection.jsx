import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Uptoskills</h2>
        <p className="section-description">
          Uptoskills is a vibrant peer-to-peer learning platform that empowers tech enthusiasts to acquire 
          practical skills through collaboration, mentorship, and real-world projects. Our mission is to make 
          tech education accessible and impactful for all.
        </p>

        <div className="grid-two">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To democratize tech education by offering collaborative, hands-on learning experiences that 
              empower learners from all backgrounds to succeed in the tech industry.
            </p>
          </div>
          <div className="card">
            <h3>Our Approach</h3>
            <p>
              We champion learning by doing, connecting learners with peers and mentors to tackle real-world 
              challenges and build skills that drive career success.
            </p>
          </div>
        </div>

        <div className="section-block">
          <h3>Our Vision</h3>
          <p>
            We envision a world where tech education is universally accessible, fostering innovation and 
            empowering individuals to shape the future of technology.
          </p>
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1007.jpg?semt=ais_hybrid&w=740"
            alt="Teamwork"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Our Values</h3>
          <div className="grid-three">
            <div className="card">
              <h4>Collaboration</h4>
              <p>We unite diverse perspectives to solve complex challenges through collective learning.</p>
            </div>
            <div className="card">
              <h4>Innovation</h4>
              <p>We inspire creative thinking to push the boundaries of technology and learning.</p>
            </div>
            <div className="card">
              <h4>Inclusivity</h4>
              <p>We foster an inclusive environment where everyone can thrive and succeed.</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/diversity-concept-illustration_114360-1410.jpg?semt=ais_hybrid&w=740"
            alt="Diversity"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Our Journey</h3>
          <p>
            From a small community of learners to a global platform, Uptoskills has grown to impact thousands 
            of lives through tech education. Here's a glimpse of our milestones.
          </p>
          <div className="milestones">
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2018: Founded</h4>
                <p>Uptoskills was born to connect tech enthusiasts for peer learning.</p>
              </div>
            </div>
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2020: First Hackathon</h4>
                <p>Hosted our inaugural hackathon, fostering innovation and collaboration.</p>
              </div>
            </div>
            <div className="milestone">
              <div className="dot"></div>
              <div>
                <h4>2025: Global Reach</h4>
                <p>Expanded to support learners in over 50 countries.</p>
              </div>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/milestone-concept-illustration_114360-2786.jpg?semt=ais_hybrid&w=740"
            alt="Milestones"
            className="section-image"
          />
        </div>

        <div className="section-block">
          <h3>Community Impact</h3>
          <p>
            Our community has transformed thousands of lives by enabling learners to secure tech jobs, contribute 
            to open-source projects, and innovate in their fields.
          </p>
          <div className="grid-two">
            <div className="card testimonials">
              <h4>Testimonials</h4>
              <div className="quote">
                <p>"Uptoskills gave me the skills and confidence to become a developer."</p>
                <small>- Jane Doe, Software Engineer</small>
              </div>
              <div className="quote">
                <p>"The hands-on projects prepared me for real-world challenges."</p>
                <small>- John Smith, Data Analyst</small>
              </div>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/successful-team-concept-illustration_114360-3966.jpg?semt=ais_hybrid&w=740"
                alt="Community Success"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;