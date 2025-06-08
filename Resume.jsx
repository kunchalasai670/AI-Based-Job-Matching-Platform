// import React, { useState } from 'react';
// import axios from 'axios';

// function Resume() {
//     const [resume, setResume] = useState(null);
//     const [keywords, setKeywords] = useState([]);
//     const [jobRoles, setJobRoles] = useState([]);

//     const handleFileChange = (e) => setResume(e.target.files[0]);

//     const handleUpload = async () => {
//         if (!resume) return alert('Please upload a resume');

//         const formData = new FormData();
//         formData.append('resume', resume);

//         try {
//             const response = await axios.post('/upload-resume', formData);
//             setKeywords(response.data.extracted_keywords);
//             setJobRoles(response.data.matching_jobs);
//         } catch (error) {
//             console.error('Error uploading resume:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Upload Your Resume</h1>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>

//             {resume && <p>Uploaded Resume: {resume.name}</p>}

//             {keywords.length > 0 && (
//                 <>
//                     <h2>Extracted Keywords:</h2>
//                     <ul>
//                         {keywords.map((kw, index) => (
//                             <li key={index}>{kw}</li>
//                         ))}
//                     </ul>
//                 </>
//             )}

//             {jobRoles.length > 0 && (
//                 <>
//                     <h2>Matching Job Roles:</h2>
//                     <ul>
//                         {jobRoles.map((role, index) => (
//                             <li key={index}>{role}</li>
//                         ))}
//                     </ul>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Resume;
// import React, { useState } from 'react';
// import * as pdfjsLib from 'pdfjs-dist';
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.js';

// // PDF.js Configuration for Vite
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// function Resume() {
//     const [resumeText, setResumeText] = useState('');

//     const extractTextFromPDF = async (pdfFile) => {
//         const reader = new FileReader();
//         reader.onload = async (event) => {
//             const typedArray = new Uint8Array(event.target.result);
//             const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
//             let textContent = '';

//             for (let i = 1; i <= pdf.numPages; i++) {
//                 const page = await pdf.getPage(i);
//                 const text = await page.getTextContent();
//                 textContent += text.items.map((item) => item.str).join(' ');
//             }

//             setResumeText(textContent);
//         };

//         reader.readAsArrayBuffer(pdfFile);
//     };

//     return (
//         <div>
//             <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={(e) => extractTextFromPDF(e.target.files[0])}
//             />
//             <div>
//                 <h3>Extracted Text:</h3>
//                 <p>{resumeText}</p>
//             </div>
//         </div>
//     );
// }

// export default Resume;
import React, { useState } from 'react';
import { pdfjsLib } from '../../workers/pdfWorker';  // ✅ Updated worker import
import JobSuggestions from './JobSuggestions';       // ✅ Import JobSuggestions Component

function Resume() {
    const [resumeText, setResumeText] = useState('');
    const [error, setError] = useState('');

    const extractTextFromPDF = async (pdfFile) => {
        setError('');
        setResumeText('');

        if (!pdfFile) {
            setError('Please select a valid PDF file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const typedArray = new Uint8Array(event.target.result);
                const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
                let textContent = '';

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const text = await page.getTextContent();
                    textContent += text.items.map((item) => item.str).join(' ');
                }

                setResumeText(textContent || 'No text found in the PDF.');
            } catch (error) {
                setError('Failed to extract text. Please ensure the PDF is valid.');
                console.error('PDF extraction error:', error);
            }
        };

        reader.readAsArrayBuffer(pdfFile);
    };

    return (
        <div>
            <input
                type="file"
                accept=".pdf"
                onChange={(e) => extractTextFromPDF(e.target.files[0])}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <h3>Extracted Text:</h3>
                <p>{resumeText || 'No text extracted yet.'}</p>

                {/* ✅ Job Suggestions Feature Added Here */}
                <JobSuggestions extractedText={resumeText} />
            </div>
        </div>
    );
}

export default Resume;
