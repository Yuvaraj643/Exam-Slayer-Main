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
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters`
      )
      .then((response) => {
        setSemesters(response.data);
      });
  }, [departmentId]);

  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-3">
        {departments.map((department) => (
          <div class="col" key={department.id}>
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <Link to={`/departments/${department.id}/semesters`}>
                  <h5 class="card-title">{department.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SemesterPage;
