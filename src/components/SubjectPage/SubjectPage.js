import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubjectPage = () => {
  const { departmentId, semesterId } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters/${semesterId}/subjects`
      )
      .then((response) => {
        setSubjects(response.data);
      });
  }, [departmentId, semesterId]);
  

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <a
              href={`/departments/${departmentId}/semesters/${semesterId}/subjects/${subject.id}/chapters`}
            >
              {subject.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectPage;