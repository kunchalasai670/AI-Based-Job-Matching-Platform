// import './App.css'
// import AppRoutes from './routes/AppRoutes'
// function App() {
//   return (
//         <AppRoutes/>
//   )
// }

// export default App
// import React from 'react';

// function App() {
//     return (
//         <div>
//             <h1>Welcome to MatchWise!</h1>
//         </div>
//     );
// }

// export default App;
/*
import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';`` 
import './App.css';

function App() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:9000/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);
    

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <nav className="navbar">
                <h1>MatchWise</h1>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Jobs</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
            
    

            <div className="hero-section">
                <h2>Find Your Dream Job</h2>
                <input 
                    type="text" 
                    placeholder="Search jobs..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="job-list">
                {filteredJobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3>{job.title}</h3>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </div>
                ))}
            </div>

            <footer className="footer">
                <p>&copy; 2025 MatchWise. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
*/ 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 
import Resume from './components/resume/Resume';
import './App.css';
import ResumeUpload from './components/resume/ResumeUpload';

function Home() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {`  q`
        fetch('http://localhost:9000/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    const sampleJobs = [
        { title: 'Software Engineer', company: 'TechCorp', location: 'Remote' },
        { title: 'Data Analyst', company: 'DataGen', location: 'On-site' },
        { title: 'UI/UX Designer', company: 'Creative Inc.', location: 'Hybrid' },
        { title: 'DevOps Engineer', company: 'CloudBase', location: 'Remote' },
        { title: 'Frontend Developer', company: 'WebWorks', location: 'Remote' },
        { title: 'Backend Developer', company: 'CodeCore', location: 'On-site' },
        { title: 'Full Stack Developer', company: 'BuildIt', location: 'Hybrid' },
        { title: 'AI Engineer', company: 'AI Innovations', location: 'Remote' },
        { title: 'ML Engineer', company: 'DeepMind', location: 'On-site' },
        { title: 'Cybersecurity Analyst', company: 'SecureNet', location: 'Remote' },
        { title: 'Cloud Architect', company: 'CloudBase', location: 'Remote' },
        { title: 'Product Manager', company: 'InnoTech', location: 'On-site' }
    ];

    const filteredJobs = sampleJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="content-container">
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="job-list">
                {filteredJobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3>{job.title}</h3>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/resume" element={<ResumeUpload />} />
                </Routes>

                <footer className="footer">
                    <p>&copy; A platform for upskilling</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
