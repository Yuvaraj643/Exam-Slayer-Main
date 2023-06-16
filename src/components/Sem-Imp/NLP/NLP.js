import React from "react";
import { Link } from "react-router-dom";
import First from "./First";

const NLP = () => {
  return (
    <>
      <div class="container">
        <div class="text-center">
          <h1 class="display-4">NLP Important Topics</h1>
          <a href="#first" class="d-block mt-3">
            <div class="fs-4">First Unit</div>
          </a>
        </div>
      </div>

      <First id="first" />
    </>
  );
};

export default NLP;
