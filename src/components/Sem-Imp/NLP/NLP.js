import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";

const NLP = () => {
  const [activeSection, setActiveSection] = useState("first");

  function showSection(sectionName) {
    setActiveSection(sectionName);
  }
  return (
    <>
      <div class="container">
        <div class="text-center">
          <h1 class="display-4">NLP Important Topics</h1>
          <div class="d-flex justify-content-center mt-3">
            <a
              href="#"
              class="btn btn-primary me-3"
              onClick={() => showSection("first")}
            >
              First Unit
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={() => showSection("second")}
            >
              Second Unit
            </a>
          </div>
        </div>

        <div
          id="first-section"
          class={`mt-5 ${activeSection !== "first" ? "d-none" : ""}`}
        >
          <First />
        </div>

        <div
          id="second-section"
          class={`mt-5 ${activeSection !== "second" ? "d-none" : ""}`}
        >
          <Second />
        </div>
      </div>
    </>
  );
};

export default NLP;
