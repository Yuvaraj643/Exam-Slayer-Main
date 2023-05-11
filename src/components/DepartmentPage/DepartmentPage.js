import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, ListGroup } from 'react-bootstrap';
import './style.css'
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
    <Card className="mx-auto card-container" style={{ maxWidth: '600px' }}>
      <Card.Header>
        <h1 className="text-center">Departments</h1>
      </Card.Header>
      <ListGroup variant="flush">
        {departments.map((department) => (
          <ListGroup.Item key={department.id}>
            <Link to={`/departments/${department.id}/semesters`}>
              {department.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default DepartmentPage;