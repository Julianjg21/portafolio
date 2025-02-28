import React from "react";
import ProjectItem from "../components/projects_items/projectsItem"; // Import the componente that will show the projects
import { projectsItem } from "../data/ProjectsData.mjs"; // Importing data of the our projects

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
    </div>
  );
}

export default Projects;
