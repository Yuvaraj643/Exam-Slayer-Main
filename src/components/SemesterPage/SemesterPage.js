import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const SemesterPage = () => {
  const { departmentId } = useParams();
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const response = axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters`
      )
      .then((response) => {
        setSemesters(response.data);
      });
    console.log(response.data);
  }, [departmentId]);

  return (
    <>
      <h2 className="text-center mb-4 ">Explore All Departments</h2>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {semesters.map((semester) => (
          <div class="col">
            <div class="card text-dark bg-light mb-3">
              <img src={semester.logo} class="card-img-top" alt="logo" />
              <div class="card-body">
                <Link
                  to={`/departments/${departmentId}/semesters/${semester.id}/subjects`}
                >
                  <h5 class="card-title text-center">{semester.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </>
  );
};
export default SemesterPage;
