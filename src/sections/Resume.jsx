import React from "react";
import {
  ExperienceItem,
  EducationItem,
  SkillItem,
  PersonalProjectItem,
  TechnologyItem,
} from "../components/resume_items/ResumeItems"; //import the components that will be used to display the data
import {
  educationCompleted,
  educationInProgress,
} from "../data/EducationData.mjs"; //import the data of our education
import { skills } from "../data/SkillsData.mjs"; //import the data of the our skills
import {
  profesionalExperience,
  personalProjectsExperience,
} from "../data/ExperienceData.mjs"; //import the data of the professional experience
import { technologyIcons, toolsIcons } from "../data/TechnologiesData.mjs"; //import the data of the technologies used
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function About() {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col-12 text-start">
          <h2 className="fs-4 mt-3 mb-3">
            <span className="text-primary ">For</span>mación y Experiencia
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-12  mb-2">
          <Card className=" h-100 border border-primary  bg-light">
            <Card.Body>
              <Card.Title className="mt-4 mb-4">
                Experiencia Profesional
              </Card.Title>
              <div className="text-start">
                <ul className="mt-2">
                  {profesionalExperience.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12 mb-2">
          <Card className=" h-100 border border-primary  bg-light">
            <Card.Body>
              <Card.Title className="mt-4 mb-4">Educación</Card.Title>
              <Card.Subtitle className="float-start ">Concluido:</Card.Subtitle>
              <div className="text-start">
                <ul className="mt-5">
                  {educationCompleted.map((exp, index) => (
                    <EducationItem key={index} {...exp} />
                  ))}
                </ul>
              </div>
              <Card.Subtitle className="float-start">En curso:</Card.Subtitle>
              <div className="text-start">
                <ul className="mt-5">
                  {educationInProgress.map((exp, index) => (
                    <EducationItem key={index} {...exp} />
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12 mb-2">
          <Card className=" h-100 border border-primary  bg-light">
            <Card.Body>
              <Card.Title className="mt-4 mb-4">Skills</Card.Title>

              <div className="text-start">
                <ul className="mt-5">
                  {skills.map((exp, index) => (
                    <SkillItem key={index} {...exp} />
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 col-12 mb-2">
          <Card className=" h-100 border border-primary  bg-light">
            <Card.Body>
              <Card.Title className="mt-4 mb-4">
                Experiencia Proyectos Personales
              </Card.Title>
              <div className="text-start">
                <ul className="mt-2">
                  {personalProjectsExperience.map((exp, index) => (
                    <PersonalProjectItem key={index} {...exp} />
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12 ">
          <Card className=" h-100 border border-primary  bg-light">
            <Card.Body>
              <Card.Title className="text-start mt-4 mb-5">
                Tecnologias usadas:
              </Card.Title>

              <div class="table-responsive">
                <table className="table table-light">
                  <tbody className=" ">
                    {technologyIcons
                      .reduce((acc, icon, index) => {
                        if (index % 4 === 0) acc.push([]);
                        acc[acc.length - 1].push(icon);
                        return acc;
                      }, [])
                      .map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((icon, index) => (
                            <TechnologyItem key={index} {...icon} />
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Card.Subtitle className="text-start mt-5 mb-5 w-100">
                Herramientas usadas:
              </Card.Subtitle>
              <div className="table-responsive">
                <Table className="table table-light">
                  <tbody>
                    {toolsIcons
                      .reduce((acc, icon, index) => {
                        if (index % 4 === 0) acc.push([]);
                        acc[acc.length - 1].push(icon);
                        return acc;
                      }, [])
                      .map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((icon, index) => (
                            <TechnologyItem key={index} {...icon} />
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12 "></div>
      </div>
    </div>
  );
}

export default About;
