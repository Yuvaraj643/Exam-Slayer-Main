import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SemesterPage = () => {
  const { departmentId } = useParams();
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters`
      )
      .then((response) => {
        setSemesters(response.data);
      });
  }, [departmentId]);

  return (
    <>
      <h2 className="text-center mb-4">Explore All Departments</h2>
      <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col">
          {semesters.map((semester) => (
            <div class="card" key={semester.id}>
              <div class="card-body">
                <Link
                  to={`/departments/${departmentId}/semesters/${semester.id}/subjects`}
                >
                  <h5 class="card-title">{semester.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SemesterPage;
