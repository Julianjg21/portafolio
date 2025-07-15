// Import icons from react-icons for website and GitHub links.
import { FaLink } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import Carousel from "react-bootstrap/Carousel";
// Import the Card component from react-bootstrap for a styled card layout.
import Card from "react-bootstrap/Card";

// ProjectItem component: Displays details about a project in a card layout.
// Props:
// - projectImg: The image source for the project preview.
// - projectName: The name of the project.
// - projectDescription: A brief description of the project.
// - technologies: An array of objects containing technology names and their styles.
// - linkWebsite: The URL to the live project website.
// - linkGithub: The URL to the project's GitHub repository.
const ProjectItem = ({
  projectImg,
  projectName,
  projectDescription,
  technologies,
  links,
}) => {
  return (
    <Card className="mt-md-5 mt-3 border-primary bg-light shadow">
      <Card.Body>
        <div>
          <div className="row mt-md-5">
            <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
              <img
                src={projectImg}
                alt="project img"
                className="w-100 h-50  border"
              />
            </div>
            <div className="col-md-8 col-12">
              <h3 className="mb-4">{projectName}</h3>
              <Card.Text className="text-start">
                {projectDescription.map((exp, index) => (
                  <p key={index}>{exp.text}</p>
                ))}
              </Card.Text>
              <div className="d-flex flex-row  flex-wrap mt-4">
                {technologies.map((exp, index) => (
                  // Each technology is displayed as a styled paragraph.
                  <p key={index} className={`${exp.style} me-2 rounded p-1`}>
                    {exp.technology}
                  </p>
                ))}
              </div>
              <div className="d-flex  align-content-center justify-content-center flex-column  mt-2">
                <Card.Text className="text-center fw-bold"> Links: </Card.Text>
                <div className="d-flex justify-content-center  mt-2">
                  {links &&
                    links.map((obj, index) => (
                      <a
                        key={index}
                        href={obj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-light me-2 rounded p-2 d-flex flex-column align-items-center border "
                        title="Visit the project website"
                      >
                        {obj.type === "website" ? (
                          <FaLink size={28} className="text-primary" />
                        ) : (
                          <RxGithubLogo size={28} className="text-danger" />
                        )}

                        <span>{obj.name}</span>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;

export const MoreProyectsItem = (project, index) => {
  //directly return the <Carousel.item>
  return (
    <Carousel.Item key={index}>
      {/*  Display the project image in the carousel item. */}
      <img
        className="d-block w-100"
        src={project.projectImg}
        alt={project.projectTitle}
      />
      <Carousel.Caption className="text-start carousel-caption">
        {/* Link to the project repository with an image. */}
        <a
          href={project.hrefRepository}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.gif} alt="Link to repository" className="w-25" />
        </a>
        {/* Display the project title and description in the caption. */}
        <div>
          <h3>{project.projectTitle}</h3>
          <p className="truncate">{project.projectDescription}</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
};
