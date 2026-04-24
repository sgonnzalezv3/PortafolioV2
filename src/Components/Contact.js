import { TextField } from "@material-ui/core";
import React from "react";
import MyForm from "./myform";
import { Icon, InlineIcon } from "@iconify/react";
import linkedinWithCircle from "@iconify-icons/entypo-social/linkedin-with-circle";
import instagramWithCircle from "@iconify-icons/entypo-social/instagram-with-circle";
import facebookWithCircle from "@iconify-icons/entypo-social/facebook-with-circle";

export const Contact = () => {
  return (
    <>
      <div className=" row m-0  infoCamp animate__animated animate__zoomIn chinche caja5 container">
        <div className="col-12 h2 text-center contactMe"> Contact Me</div>
        <div className="col-12">
          <MyForm />
        </div>
          <div className="row m-0 p-0 centrar container pt-2 pb-3 ">
            <div className="col-4 animate__animated animate__fadeInTopLeft text-center">
              <a href="https://www.facebook.com/profile.php?id=100027768411548 ">
                <Icon
                  icon={facebookWithCircle}
                  color="#6286E0"
                  width="60"
                  height="60"
                />
              </a>
            </div>

            <div className="col-4 animate__animated animate__fadeIn text-center ">
              <a href="https://www.instagram.com/__santii_____/">
                <Icon
                  icon={instagramWithCircle}
                  color="#6286E0"
                  width="60"
                  height="60"
                />
              </a>
            </div>

            <div className="col-4 animate__animated animate__fadeInTopRight text-center">
              <a href="https://www.linkedin.com/in/santiago-gonzalez-vergara-52b288180/">
                <Icon
                  icon={linkedinWithCircle}
                  color="#6286E0"
                  width="60"
                  height="60"
                />
              </a>
            </div>
          </div>
        </div>
    </>
  );
};
