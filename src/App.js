import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DepartmentPage from "./components/DepartmentPage/DepartmentPage";
import SemesterPage from "./components/SemesterPage/SemesterPage";
import SubjectPage from "./components/SubjectPage/SubjectPage";
import ChapterPage from "./components/ChapterPage/ChapterPage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homapage/HomePage";
import NLP from "./components/Sem-Imp/NLP/NLP";
import First from "./components/Sem-Imp/NLP/First";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {loading ? (
          <Loader /> // Render the loader component while loading is true
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/departments/:departmentId/semesters"
              element={<SemesterPage setLoading={setLoading} />}
            />
            <Route
              path="/departments/:departmentId/semesters/:semesterId/subjects"
              element={<SubjectPage setLoading={setLoading} />}
            />
            <Route
              path="/departments/:departmentId/semesters/:semesterId/subjects/:subjectId/chapters"
              element={<ChapterPage setLoading={setLoading} />}
            />
            <Route path="/NLP" element={<NLP />} />
          </Routes>
        )}

      </div>
      <div id="container-1d1c989847e46d1cd7b18a9cdec67f28"></div>

    </Router>
    
  );
};

export default App;
