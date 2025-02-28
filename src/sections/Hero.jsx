import React from "react";
import photo from "../assets/photo.png";

function Hero() {
  return (
    <div className="bg-image container-fluid">
      <div className="row  w-100 h-100">
        <div className="col-md-4 col-6 d-flex justify-content-center align-items-center text-light text-center">
          <h1 className="fs-md-2 fs-4  welcome-text">
            Hola, soy <br />
            Julian Jiménez
            <br />
            <span className="fs-md-5  fs-6 opacity-75">
              Desarrollador Backend
            </span>
          </h1>
        </div>

        <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
          <div className=" background-user-photo p-3 mt-md-0 mt-4">
            <img src={photo} alt="Default avatar" className="userPicture " />
          </div>
        </div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Hero;
