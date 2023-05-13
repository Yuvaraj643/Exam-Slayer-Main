import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css"
const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://exam-slayer.onrender.com/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <>
      <h2 className="text-center mb-4">Explore All Departments</h2>
      <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col">
          {departments.map((department) => (
            <div class="card" key={department.id}>
              <img src={department.logo} class="card-img-top" alt="logo" />
              <div class="card-body">
                <Link to={`/departments/${department.id}/semesters`}>
                  <h5 class="card-title">{department.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;
