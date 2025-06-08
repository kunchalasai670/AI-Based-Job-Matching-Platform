// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'; // For future v7 compatibility
// import { createBrowserHistory } from 'history'; // Required for HistoryRouter
// import App from './App.jsx';
// import './index.css';

// const history = createBrowserHistory();

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HistoryRouter history={history} future={{ 
//             v7_startTransition: true, 
//             v7_relativeSplatPath: true 
//         }}>
//             <App />
//         </HistoryRouter>
//     </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Ensure this import is correct
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// );
