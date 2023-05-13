import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Loader from "../Loader/Loader";

const SemesterPage = () => {
  const { departmentId } = useParams();
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters`
      )
      .then((response) => {
        setSemesters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [departmentId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="text-center mb-4 ">Explore All Semesters</h2>

          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {semesters.map((semester) => (
              <div class="col">
                <Link
                  to={`/departments/${departmentId}/semesters/${semester.id}/subjects`}
                >
                  <div class="card text-dark bg-light mb-3">
                    <img src={semester.logo} class="card-img-top" alt="logo" />
                    <div class="card-body">
                      <h5 class="card-title text-center">{semester.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default SemesterPage;
