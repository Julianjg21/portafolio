import javascriptIcon from "../assets/technology_icons/javascriptIcon.png";
import nodejs from "../assets/technology_icons/nodejs.png";
import expressjs from "../assets/technology_icons/expressjs.png";
import reactjs from "../assets/technology_icons/reactjs.png";
import python from "../assets/technology_icons/python.png";
import bootstrap from "../assets/technology_icons/bootstrap.png";
import mysql from "../assets/technology_icons/mysql.png";
import selenium from "../assets/technology_icons/selenium.png";
import csharp from "../assets/technology_icons/csharp.png";
import vscode from "../assets/technology_icons/vscode.png";
import postman from "../assets/technology_icons/postman.png";
import dbeaver from "../assets/technology_icons/dbeaver.png";
import linux from "../assets/technology_icons/linux.png";
import heroku from "../assets/technology_icons/heroku.png";
import netlify from "../assets/technology_icons/netlify.png";
import git from "../assets/technology_icons/git.png";

//Here we can add the technologies we have used

const technologyIcons = [
  {
    imgSrc1: javascriptIcon, //Here we can add the path of the image
    alt1: "javascript icon", //Here we can add the alt of the image
    styleImg1: { height: "40px", width: "40px" }, //Here we can add the style of the image
    imgSrc2: nodejs,
    alt2: "node js icon",
    styleImg2: { height: "40px", width: "40px" },
    imgSrc3: expressjs,
    alt3: "express js icon",
    styleImg3: {
      height: "20px",
      width: "30px",
      position: "relative",
      top: "0.5rem",
    },
    imgSrc4: reactjs,
    alt4: "reactjs icon",
    styleImg4: { height: "50px", width: "60px" },
  },
  {
    imgSrc1: python,
    alt1: "python icon",
    styleImg1: { height: "40px", width: "80px" },
    imgSrc2: bootstrap,
    alt2: "bootstrap  icon",
    styleImg2: { height: "45px", width: "50px" },
    imgSrc3: mysql,
    alt3: "mysql  icon",
    styleImg3: { height: "45px", width: "50px" },
    imgSrc4: selenium,
    alt4: "selenium icon",
    styleImg4: {
      height: "30px",
      width: "30px",
      position: "relative",
      top: "0.5rem",
    },
  },
  {
    imgSrc1: csharp,
    alt1: "csharp icon",
    styleImg1: { height: "20px", width: "40px" },
  },
];
//Here we can add the tools we have used

const toolsIcons = [
  {
    imgSrc1: vscode, //Here we can add the path of the image
    alt1: "vscode icon", //Here we can add the alt of the image
    styleImg1: { height: "50px", width: "60px" }, //Here we can add the style of the image
    imgSrc2: postman,
    alt2: "postman  icon",
    styleImg2: {
      height: "40px",
      width: "40px",
      position: "relative",
      top: "0.3rem",
    },
    imgSrc3: dbeaver,
    alt3: "dbeaver  icon",
    styleImg3: {
      height: "40px",
      width: "80px",
      position: "relative",
      top: "0.3rem",
    },
    imgSrc4: linux,
    alt4: "linux  icon",
    styleImg4: {
      height: "40px",
      width: "85px",
      position: "relative",
      top: "0.5rem",
    },
  },
  {
    imgSrc1: heroku,
    alt1: "heroku icon",
    styleImg1: {
      height: "45px",
      width: "65px",
      position: "relative",
      top: "0.3rem",
    },
    imgSrc2: netlify,
    alt2: "netlify  icon",
    styleImg2: { height: "60px", width: "100px" },
    imgSrc3: git,
    alt3: "git  icon",
    styleImg3: {
      height: "35px",
      width: "40px",
      position: "relative",
      top: "0.5rem",
    },
  },
];

export { technologyIcons, toolsIcons };
