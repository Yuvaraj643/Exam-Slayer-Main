import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const ChapterPage = () => {
  const { departmentId, semesterId, subjectId } = useParams();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://exam-slayer.onrender.com/departments/${departmentId}/semesters/${semesterId}/subjects/${subjectId}/chapters`
      )
      .then((response) => {
        setChapters(response.data);
      });
  }, [departmentId, semesterId, subjectId]);

  return (
    <div class="container">
      <h1 className="text-center mb-4">Chapters</h1>
      <div class="row">
        {chapters.map((chapter) => (
          <div class="col-md-6 col-lg-3" key={chapter.id}>
            <div class="card mb-3">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title">{chapter.name}</h5>
                <a href={chapter.description} target="_blank" rel="noreferrer">
                  <button>
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>View</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="container-1d1c989847e46d1cd7b18a9cdec67f28"></div>

    </div>
  );
};

export default ChapterPage;
