import React from "react";
import ProjectItem from "../components/projects_items/projectsItem"; // Import the componente that will show the projects
import { projectsItem, moreProyectsData } from "../data/ProjectsData.mjs"; // Importing data of the our projects
import { MoreProyectsItem } from "../components/projects_items/projectsItem"; // Importing the component that will show the more projects
import Carousel from "react-bootstrap/Carousel"; // Importing the carousel component from react-bootstrap

function Projects() {
  return (
    <div className="p-4 container-fluid  bg-light">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 border border-1 border-primary"></div>
        <div className="col-2"></div>
      </div>
      <div className="ms-3 mt-4">
        <h2 className="text-start fs-4">
          <span className="custom-underline">Pro</span>yectos
        </h2>
      </div>
      <div className="p-md-2 p-0">
        {projectsItem.map((exp, index) => (
          <ProjectItem key={index} {...exp} />
        ))}
      </div>
      <div className="row mt-4">
        <div class="col-2"></div>
        <div class="col-8 border border-1 border-primary"></div>
        <div class="col-2"></div>
      </div>
      <h3 className="mt-5 mb-4 ">
        <span className="custom-underline ">Ot</span>ros Proyectos
      </h3>
      <div className="carousel-wrapper">
        <Carousel className="shadow responsive-carousel">
          {moreProyectsData.map((project, index) =>
            MoreProyectsItem(project, index)
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
