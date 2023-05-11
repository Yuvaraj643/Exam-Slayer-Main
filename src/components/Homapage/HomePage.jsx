// import React from 'react';

// const Homepage = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6">
//           <div className="homepage-content">
//             <h2>About ExamSlayer</h2>
//             <p>ExamSlayer is an online platform that provides comprehensive study materials for various exams. We aim to help students achieve their academic goals by offering high-quality resources and personalized learning experiences.</p>
//             <div className="mt-4">
//               <button className="btn btn-primary mr-3">Explore All Departments</button>
//               <button className="btn btn-secondary">Learn More</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <div className="homepage-image">
//             <img src="/path/to/image.jpg" alt="Books Studying" className="img-fluid" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
        <div className="homepage-image">
            <img
              src="https://source.unsplash.com/random/?study,education"
              alt="Books Studying"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div className="text-center">
            <h1 className="display-4 fw-bold">ExamSlayer</h1>
            <p className="lead mb-4">
              ExamSlayer is an online platform that provides comprehensive study
              materials for various exams. We aim to help students achieve their
              academic goals by offering high-quality resources and personalized
              learning experiences.
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="./departments">
                <Button variant="primary" size="lg">
                  Explore Study Materials
                </Button>
              </Link>
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
  );
}

export default HomePage;
