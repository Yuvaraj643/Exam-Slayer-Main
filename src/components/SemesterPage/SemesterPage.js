import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SemesterPage = () => {
  const { departmentId } = useParams();
  const [semesters, setSemesters] = useState([]);

  // useEffect(() => {
  //   const fetchSemesters = async () => {
  //     const result = await axios('http://localhost:3000/departments/1/semesters');
  //     setSemesters(result.data);
  //   };
  //   fetchSemesters();
  // }, []);
  useEffect(() => {
    axios
      .get(`https://exam-slayer.onrender.com/departments/${departmentId}/semesters`)
      .then((response) => {
        setSemesters(response.data);
      });
  }, [departmentId]);

  return (
    <div>
      <h1>Semesters</h1>
      <ul>
        {semesters.map((semester) => (
          <li key={semester.id}>
            <a href={`/departments/${departmentId}/semesters/${semester.id}/subjects`}>
              {semester.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SemesterPage;
