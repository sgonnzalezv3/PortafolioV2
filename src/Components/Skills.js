import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Skills = () => {
  return (
    <div className="row m-0 infoCamp animate__animated animate__zoomIn chinche caja4 skillColor">
      <div className="col-lg-6 col-md-12 ">
        <div className="row comfortable">
          <div className="col-6">.NET 5</div>
          <div className="col-6 text-right">45%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={45}/>
              <ProgressBar className="unSuccess" now={55}/>
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">SQL Server</div>
          <div className="col-6 text-right">45%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={45} />
              <ProgressBar className="unSuccess" now={55}  />
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">C#</div>
          <div className="col-6 text-right">55%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={55}/>
              <ProgressBar className="unSuccess" now={45}/>
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">Git</div>
          <div className="col-6 text-right">45%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={45}  />
              <ProgressBar className="unSuccess" now={55}  />
            </ProgressBar>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="row comfortable">
          <div className="col-6">JavaScript</div>
          <div className="col-6 text-right">35%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={35}/>
              <ProgressBar className="unSuccess" now={65}/>
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">CSS</div>
          <div className="col-6 text-right">45%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={45}/>
              <ProgressBar className="unSuccess" now={65}/>
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">HTML</div>
          <div className="col-6 text-right">65%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={65}/>
              <ProgressBar className="unSuccess" now={35}/>
            </ProgressBar>
          </div>
        </div>
        <div className="row comfortable">
          <div className="col-6">React</div>
          <div className="col-6 text-right">25%</div>
          <div className="col-12 mt-2">
            <ProgressBar>
              <ProgressBar className="success" now={25}/>
              <ProgressBar className="unSuccess" now={75}/>
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
};
