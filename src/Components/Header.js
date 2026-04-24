import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import facebookF from "@iconify-icons/uil/facebook-f";
import linkedinAlt from "@iconify-icons/uil/linkedin-alt";
import githubAlt from "@iconify-icons/uil/github-alt";
import linkedinWithCircle from "@iconify-icons/entypo-social/linkedin-with-circle";
import instagramWithCircle from "@iconify-icons/entypo-social/instagram-with-circle";
import facebookWithCircle from "@iconify-icons/entypo-social/facebook-with-circle";

export const Header = () => {
  return (
    <>
      <div className="profile-image content-center2 animate__animated animate__fadeIn">
        <a>
          <img
            src={`https://images.pexels.com/photos/6709838/pexels-photo-6709838.jpeg?cs=srgb&dl=pexels-santiago-gonzalez-6709838.jpg&fm=jpg`}
            alt={"mi nombre"}
          />
        </a>
      </div>
      <div className="letter content-center4 animate__animated animate__fadeIn ">
        SANTIAGO GONZALEZ
      </div>
      <div className="content-center3 letterSub animate__animated animate__fadeIn ">SOFTWARE DEVELOPER</div>
      <div className="content-center5">
        <a className="btn btn-info button espacio animate__animated animate__fadeIn" href="Documents/santiagoGonzalezv-convertido - Copy.pdf" download="CV Santiago Gonzalez">Millos CV</a>
      </div>

      <div className="row content-center6">
        <div className=" col-4 animate__animated animate__fadeInTopLeft text-right">
          <a href="https://www.facebook.com/profile.php?id=100027768411548 ">
            <Icon
              icon={facebookWithCircle}
              color="#6286E0"
              width="60"
              height="60"
            />
          </a>
        </div>

        <div className="col-4 animate__animated animate__fadeIn text-center">
          <a href="https://www.instagram.com/__santii_____/">
            <Icon
              icon={instagramWithCircle}
              color="#6286E0"
              width="60"
              height="60"
            />
          </a>
        </div>

        <div className="col-4 animate__animated animate__fadeInTopRight text-left">
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
    </>
  );
};
