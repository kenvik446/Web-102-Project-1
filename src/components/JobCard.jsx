import React from "react";
import "./JobCard.css"; 

function JobCard({ title, company, location, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p><strong>{company}</strong> - {location}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="apply-btn">Apply Now</a>
    </div>
  );
}

export default JobCard;
