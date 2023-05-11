import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  <h1>Chapters</h1>
  <div class="row">
    {chapters.map((chapter) => (
      <div class="col-md-6 col-lg-4" key={chapter.id}>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{chapter.name}</h5>
            <a href={chapter.description} target="_blank">
            <button class="btn btn-primary">Download</button></a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ChapterPage;
