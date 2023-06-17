import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import Footer from "../Footer/Footer";
function HomePage() {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://exam-slayer.onrender.com/departments")
      .then((response) => {
        setDepartments(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="homepage-image">
              <img
                src="https://source.unsplash.com/random/800x600/?study,education"
                alt="Books Studying"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="text-center">
              {/* <h1 className="display-4 fw-bold">ExamSlayer</h1> */}
              <p className="lead mb-4">
                ExamSlayer is an online platform that provides comprehensive
                study materials for various exams. We aim to help students
                achieve their academic goals by offering high-quality resources
                and personalized learning experiences.
              </p>
              <div className="d-grid gap-2 col-6 mx-auto">
                <a href="#container">
                  <Button variant="primary" size="lg">
                    Explore
                  </Button>
                </a>
                <Link to="./">
                  <Button variant="outline-primary" size="lg">
                    About us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="container">
        
        <h2 className="text-center mb-4">Explore All Departments</h2>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="card-deck">
            <Link to="/NLP" className="text-decoration-none">
              <div className="card mb-4">
                <img
                  src={
                    "https://image.lexica.art/full_jpg/f091a46a-2d4c-4338-9fa9-95f3e2e3c06c"
                  }
                  alt="NLP Important"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="card-title">NLP Important</div>
                </div>
              </div>
            </Link>

            {departments.map((department) => (
              <Link
                to={`/departments/${department.id}/semesters`}
                key={department.id}
                className="text-decoration-none"
              >
                <div className="card mb-4">
                  <img
                    src={department.logo}
                    className="card-img-top"
                    alt="logo"
                  />
                  <div className="card-body">
                    <div className="card-title">{department.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
