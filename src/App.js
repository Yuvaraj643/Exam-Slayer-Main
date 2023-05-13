import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DepartmentPage from "./components/DepartmentPage/DepartmentPage";
import SemesterPage from "./components/SemesterPage/SemesterPage";
import SubjectPage from "./components/SubjectPage/SubjectPage";
import ChapterPage from "./components/ChapterPage/ChapterPage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homapage/HomePage";
// import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setDataFetched(true);
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
              element={
                <SemesterPage
                  setLoading={setLoading}
                  setDataFetched={setDataFetched}
                />
              }
            />
            <Route
              path="/departments/:departmentId/semesters/:semesterId/subjects"
              element={
                <SubjectPage
                  setLoading={setLoading}
                  setDataFetched={setDataFetched}
                />
              }
            />
            <Route
              path="/departments/:departmentId/semesters/:semesterId/subjects/:subjectId/chapters"
              element={
                <ChapterPage
                  setLoading={setLoading}
                  setDataFetched={setDataFetched}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
