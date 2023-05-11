import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DepartmentPage from "./components/DepartmentPage/DepartmentPage";
import SemesterPage from "./components/SemesterPage/SemesterPage";
import SubjectPage from "./components/SubjectPage/SubjectPage";
import ChapterPage from "./components/ChapterPage/ChapterPage";
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homapage/HomePage";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/departments" element={<DepartmentPage />} />
          <Route
            path="/departments/:departmentId/semesters"
            element={<SemesterPage />}
          />
          <Route
            path="/departments/:departmentId/semesters/:semesterId/subjects"
            element={<SubjectPage />}
          />
          <Route
            path="/departments/:departmentId/semesters/:semesterId/subjects/:subjectId/chapters"
            element={<ChapterPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
