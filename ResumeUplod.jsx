// import React, { useState } from 'react';
// import './ResumeUp.css';

// const ResumeUpload = () => {
//     const [file, setFile] = useState(null);
//     const [keywords, setKeywords] = useState([]);
//     const [matchedJobs, setMatchedJobs] = useState([]);

//     const handleFileChange = (e) => setFile(e.target.files[0]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!file) {
//             alert("Please upload a file first.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append('resume', file);

//         try {
//             const response = await fetch('http://localhost:9000/upload-resume/', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();

//             if (data.keywords) {
//                 setKeywords(data.keywords);
//                 setMatchedJobs(data.matched_jobs);
//             } else {
//                 alert("Failed to extract keywords. Try again.");
//             }
//         } catch (error) {
//             console.error("Error uploading file:", error);
//             alert("Error uploading file.");
//         }
//     };

//     return (
//         <div className="resume-container">
//             <h2>Upload Your Resume</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" accept=".pdf" onChange={handleFileChange} />
//                 <button type="submit">Submit</button>
//             </form>

//             {keywords.length > 0 && (
//                 <div className="results">
//                     <h3>Extracted Keywords</h3>
//                     <p>{keywords.join(', ')}</p>

//                     <h3>Matching Jobs</h3>
//                     <div className="job-cards">
//                         {matchedJobs.map((job, index) => (
//                             <div className="job-card" key={index}>
//                                 <h4>{job.title}</h4>
//                                 <p><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ResumeUpload;
import React, { useState } from 'react';
import './ResumeUp.css';

const ResumeUpload = () => {
    const [file, setFile] = useState(null);
    const [keywords, setKeywords] = useState([]);
    const [matchedJobs, setMatchedJobs] = useState([]);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please upload a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch('http://localhost:9000/upload-resume/', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.keywords) {
                setKeywords(data.keywords);
                setMatchedJobs(data.matched_jobs);
            } else {
                alert("Failed to extract keywords. Try again.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file.");
        }
    };

    return (
        <div className="resume-container">
            <h1 className="resume-title">Upload Your Resume</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept=".pdf"
                    className="file-input"
                    onChange={handleFileChange}
                />
                <button type="submit" className="upload-button">Submit</button>
            </form>

            {keywords.length > 0 && (
                <div className="results">
                    <h3>Extracted Keywords</h3>
                    <p>{keywords.join(', ')}</p>

                    <h3>Matching Jobs</h3>
                    <div className="job-cards">
                        {matchedJobs.map((job, index) => (
                            <div className="job-card" key={index}>
                                <h4>{job.title}</h4>
                                <p><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeUpload;
