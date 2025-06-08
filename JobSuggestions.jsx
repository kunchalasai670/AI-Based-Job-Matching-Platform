// import React, { useState } from 'react';

// const keywordJobMapping = {
//     'Embedded Systems': ['Embedded Systems Engineer', 'Firmware Developer', 'IoT Developer'],
//     'Python': ['Python Developer', 'Data Scientist', 'AI Engineer'],
//     'JavaScript': ['Frontend Developer', 'Full Stack Developer', 'Web Developer'],
//     'UI/UX': ['UI/UX Designer', 'Product Designer'],
//     'VLSI': ['VLSI Engineer', 'FPGA Design Engineer'],
//     'Machine Learning': ['ML Engineer', 'Data Scientist', 'AI Researcher'],
//     'Arduino': ['Hardware Engineer', 'IoT Developer'],
//     'Verilog': ['Digital Design Engineer', 'VLSI Engineer']
// };

// const JobSuggestions = ({ extractedText }) => {
//     const [jobRoles, setJobRoles] = useState([]);

//     const fetchJobRoles = async () => {
//         const response = await fetch('/api/suggest-jobs/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ text: extractedText }),
//         });

//         const data = await response.json();
//         setJobRoles(data.suggestedRoles);
//     };

//     return (
//         <div>
//             <h3>Suggested Job Roles</h3>
//             <button onClick={fetchJobRoles}>Get Job Suggestions</button>
//             <ul>
//                 {jobRoles.length > 0 ? (
//                     jobRoles.map((role, index) => (
//                         <li key={index}>{role}</li>
//                     ))
//                 ) : (
//                     <p>No suggestions found. Try uploading a different resume.</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default JobSuggestions;
import React from 'react';

// Define keywords and their respective job roles
const keywordJobMapping = {
    'ui/ux': ['UI/UX Designer', 'Product Designer'],
    'ux design': ['UX Designer', 'Interaction Designer'],
    'user experience': ['UX Researcher', 'UX Strategist'],
    'figma': ['UI/UX Designer', 'Visual Designer'],
    'web development': ['Frontend Developer', 'Full Stack Developer'],
    'javascript': ['Frontend Developer', 'Web Developer'],
    'python': ['Python Developer', 'AI Engineer'],
    'machine learning': ['ML Engineer', 'Data Scientist'],
    'vlsi': ['VLSI Engineer', 'FPGA Design Engineer'],
    'embedded systems': ['Embedded Systems Engineer', 'Firmware Developer'],
    'arduino': ['Hardware Engineer', 'IoT Developer'],
    'verilog': ['Digital Design Engineer', 'VLSI Engineer']
};

const JobSuggestions = ({ extractedText }) => {
    if (!extractedText) return null;

    const normalizedText = extractedText.toLowerCase();

    const suggestedRoles = [];

    // Improved keyword matching with flexible search logic
    Object.entries(keywordJobMapping).forEach(([keyword, roles]) => {
        const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i'); // Improved pattern matching
        if (keywordRegex.test(normalizedText)) {
            suggestedRoles.push(...roles);
        }
    });

    // Remove duplicates from suggestions
    const uniqueRoles = [...new Set(suggestedRoles)];

    return (
        <div>
            <h3>Suggested Job Roles:</h3>
            {uniqueRoles.length > 0 ? (
                <ul>
                    {uniqueRoles.map((role, index) => (
                        <li key={index}>{role}</li>
                    ))}
                </ul>
            ) : (
                <p>No suitable job roles found based on the resume content.</p>
            )}
        </div>
    );
};

export default JobSuggestions;
