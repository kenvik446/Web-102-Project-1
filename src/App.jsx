import React from "react";
import JobCard from "./components/JobCard";
import "./App.css";

const jobs = [
  { title: "Frontend Developer Intern", company: "Google", location: "Remote", image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://careers.google.com" },
  { title: "Software Engineer Intern", company: "Microsoft", location: "Seattle, WA", image: "https://media.istockphoto.com/id/2013971698/photo/it-programmer-using-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnkYNJuZIF-O_9-QCBcpUgBX8V71WUQnaHnuuwAxCRE=", link: "https://careers.microsoft.com" },
  { title: "Product Designer", company: "Airbnb", location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGRlc2lnbmVyfGVufDB8fDB8fHww", link: "https://careers.airbnb.com" },
  { title: "Data Analyst Intern", company: "Netflix", location: "Los Angeles, CA", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c3R8ZW58MHx8MHx8fDA%3D", link: "https://jobs.netflix.com" },
  { title: "Backend Developer", company: "Meta", location: "Menlo Park, CA", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D", link: "https://www.metacareers.com" },
  { title: "Cybersecurity Analyst", company: "CrowdStrike", location: "Austin, TX", image: "https://images.unsplash.com/photo-1639503547276-90230c4a4198?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGN5YmVyc2VjdXJpdHklMjBhbmFseXN0fGVufDB8fDB8fHww", link: "https://www.crowdstrike.com/careers" },
  { title: "Full Stack Developer", company: "Amazon", location: "New York, NY", image: "https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1bGxzdGFjayUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D", link: "https://www.amazon.jobs" },
  { title: "Game Developer", company: "Epic Games", location: "Cary, NC", image: "https://media.istockphoto.com/id/1482455750/photo/gamer-playing-driving-game-with-game-controller-in-neon-game-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=juSUtrodnsle_khYj-x2fKR9hewi_KyhEJrOYGmtiNA=", link: "https://www.epicgames.com/careers" },
  { title: "Machine Learning Engineer", company: "Tesla", location: "Palo Alto, CA", image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D", link: "https://www.tesla.com/careers" },
  { title: "Cloud Engineer", company: "IBM", location: "Boston, MA", image: "https://media.istockphoto.com/id/2169874739/photo/cloud-computing-concept-software-as-a-service-saas-communication-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=iUgze6YH7k6aUMJ8ebIGj_JhKrrsfyekL6z9Y-vrRsc=", link: "https://www.ibm.com/careers" }
];

function App() {
  return (
    <div className="board">
      <h1>Student Job Board</h1>
      <div className="card-container">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;
