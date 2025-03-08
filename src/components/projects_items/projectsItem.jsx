// Import icons from react-icons for website and GitHub links.
import { FaLink } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

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
  linkWebsite,
  linkGithub,
  linkGithub2,
}) => {
  return (
    <Card className="mt-md-5 mt-3 border-primary bg-light">
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
              <div className="d-flex justify-content-center mt-4">
                {linkWebsite && (
                  <a
                    href={linkWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2 rounded p-1"
                    title="Visit the project website"
                  >
                    <FaLink size={34} /> {/* Website link icon */}
                  </a>
                )}
                {linkGithub && (
                  <a
                    href={linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2 rounded p-1"
                    title="Visit the project repository"
                  >
                    <RxGithubLogo size={34} /> {/* GitHub link icon */}
                  </a>
                )}
                {linkGithub2 && (
                  <a
                    href={linkGithub2}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2 rounded p-1"
                    title="Visit the project repository"
                  >
                    <RxGithubLogo size={34} /> {/* GitHub link icon */}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
