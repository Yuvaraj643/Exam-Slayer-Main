import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const SubjectPage = () => {
  const { departmentId, semesterId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true before making the API request

    axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters/${semesterId}/subjects`
      )
      .then((response) => {
        setSubjects(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [departmentId, semesterId]);

  return (
    <div>
      {loading ? (
        <Loader /> // Render the loader component while loading is true
      ) : (
        <div>
          <h1 className="text-center mb-4">Subjects</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {subjects.map((subject) => (
              <div className="col mb-4" key={subject.id}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{subject.name}</h5>
                    <a
                      href={`/departments/${departmentId}/semesters/${semesterId}/subjects/${subject.id}/chapters`}
                      className="btn btn-primary"
                    >
                      Go to Chapters
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div id="container-1d1c989847e46d1cd7b18a9cdec67f28"></div>

    </div>
  );
};

export default SubjectPage;
