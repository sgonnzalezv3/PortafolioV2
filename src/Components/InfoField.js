import React from "react";

export const InfoField = () => {
  return (
    <div className="row m-0 infoCamp animate__animated animate__zoomIn chinche caja3">
      <div className="col-lg-6 col-md-12 mt-3 ">
        <div className="h1 personalInfoTitle ">About</div>
        <p className=" mb-0 mt-0 parrafo parrafito personalInfo">
          I'm a young university student with capacity to organize, control and
          execute goals, proposals aimed at the exercise of activities, the
          achievement of personal and professional objectives, desire for
          constant preparation, creativity and progress, ingenious and
          innovative with the mentality available for new challenges, always
          with a good aptitude, commitment and aware that teamwork is
          indispensable to achieve the objectives.
        </p>
      </div>
      <div className="col-lg-6 col-md-12 mt-3 ">
        <div className="h1 personalInfoTitle">Personal Information</div>
        <div className="row">
          <div className="col-12 personalInfo">
            <strong>NAME</strong>
          </div>
          <div className="col-12 personalInfo">Santiago Gonzalez Vergara</div>
        </div>
        <div className="row">
          <div className="col-12 personalInfo">
            <strong>PHONE</strong>
          </div>
          <div className="col-12 personalInfo">+57 3204531581</div>
        </div>
        <div className="row">
          <div className="col-12 personalInfo">
            <strong>EMAIL</strong>
          </div>
          <div className="col-12 personalInfo">santiago-052-2@hotmail.com</div>
        </div>
        <div className="row">
          <div className="col-12 personalInfo">
            <strong>LANGUAGE</strong>
          </div>
          <div className="col-12 personalInfo">
            Spanish (Native) - English (intermediate)
          </div>
        </div>
      </div>
    </div>
  );
};
