import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateHomeScreen from "../components/CandidateHomeScreen/CandidateHomeScreen";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<CandidateHomeScreen/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes;
