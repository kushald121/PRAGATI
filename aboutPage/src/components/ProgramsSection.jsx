import React from 'react';

const ProgramsSection = () => {
  return (
    <section className="programs-section">
      <div className="container center">
        <h2 className="title">Our Programs</h2>
        <p className="subtitle">
          Discover our expertly designed programs to master in-demand tech skills through hands-on projects 
          and mentorship from industry professionals.
        </p>
        <div className="program-grid">
          {[
            {
              title: 'Web Development',
              img: 'https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8033.jpg?semt=ais_hybrid&w=740',
              desc: 'Build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React and Vue.'
            },
            {
              title: 'Data Science',
              img: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8051.jpg?semt=ais_hybrid&w=740',
              desc: 'Master data analysis, machine learning, and visualization with Python, R, and tools like TensorFlow.'
            },
            {
              title: 'Cloud Computing',
              img: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-2269.jpg?semt=ais_hybrid&w=740',
              desc: 'Gain expertise in cloud platforms like AWS, Azure, and GCP through real-world projects.'
            },
            {
              title: 'Cybersecurity',
              img: 'https://img.freepik.com/free-vector/cyber-security-concept_114360-2294.jpg?semt=ais_hybrid&w=740',
              desc: 'Learn to secure systems and networks with hands-on training in ethical hacking and security protocols.'
            }
          ].map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.img} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;