// Import the ProgressBar component from react-bootstrap for displaying progress bars.
import ProgressBar from "react-bootstrap/ProgressBar";

// ExperienceItem component: Displays details about a work experience entry.
// Props:
// - period: The time period of the experience (e.g., "Jan 2020 - Dec 2022").
// - company: The name of the company.
// - position: The job position held.
// - duties: A description of the duties performed.
const ExperienceItem = ({ period, company, position, duties }) => {
  return (
    <li>
      {/* Display the period in a smaller font size and primary color for emphasis. */}
      <h3 className="fs-6 text-primary">{period}</h3>
      {/* Display the company name. */}
      <p>
        <strong>Company:</strong> {company}
      </p>
      {/* Display the job position. */}
      <p>
        <strong>Position:</strong> {position}
      </p>
      {/* Display the duties performed. */}
      <p>
        <strong>Duties:</strong> {duties}
      </p>
    </li>
  );
};

// EducationItem component: Displays details about an education entry.
// Props:
// - period: The time period of the education (e.g., "2016 - 2020").
// - institution: The name of the educational institution.
// - degree: The degree or qualification earned.
const EducationItem = ({ period, institution, degree }) => {
  return (
    <li>
      {/* Display the period in a smaller font size and primary color for emphasis. */}
      <h3 className="fs-6 text-primary">{period}</h3>
      {/* Display the educational institution. */}
      <p>{institution}</p>
      {/* Display the degree earned. */}
      <p>{degree}</p>
    </li>
  );
};

// SkillItem component: Displays a skill and its proficiency level using a progress bar.
// Props:
// - skill: The name of the skill.
// - progress: The proficiency level (0-100) to display in the progress bar.
const SkillItem = ({ skill, progress }) => {
  return (
    <li className="mt-2">
      {/* Display the skill name. */}
      {skill}
      {/* Display a progress bar to represent the skill level. */}
      <ProgressBar now={progress} className="" style={{ height: "7px" }} />
    </li>
  );
};

// PersonalProjectItem component: Displays details about a personal project.
// Props:
// - period: The time period of the project (e.g., "2021 - 2022").
// - projectName: The name of the project.
// - projectDescription: A brief description of the project.
// - state: The current state of the project (e.g., "Completed", "In Progress").
// - stateColor: A CSS class to style the state text (e.g., "text-success").
const PersonalProjectItem = ({
  period,
  projectName,
  projectDescription,
  state,
  stateColor,
}) => {
  return (
    <li>
      {/* Display the period in a smaller font size and primary color for emphasis. */}
      <h3 className="fs-6 text-primary">{period}</h3>
      {/* Display the project name. */}
      <p>
        <strong>Project:</strong> {projectName}
      </p>
      {/* Display the project description. */}
      <p>
        <strong>Project Description:</strong> {projectDescription}
      </p>
      {/* Display the project state with dynamic styling based on the stateColor prop. */}
      <p>
        <strong>State:</strong>
        <span className={stateColor}> {state}</span>
      </p>
    </li>
  );
};

// TechnologyItem component: Displays up to four technology logos or icons.
// Props:
// - imgSrc1, imgSrc2, imgSrc3, imgSrc4: The image sources for the logos/icons.
// - alt1, alt2, alt3, alt4: The alt text for the images.
// - styleImg1, styleImg2, styleImg3, styleImg4: Optional inline styles for the images.
const TechnologyItem = ({
  imgSrc1,
  alt1,
  styleImg1 = {},
  imgSrc2,
  alt2,
  styleImg2 = {},
  imgSrc3,
  alt3,
  styleImg3 = {},
  imgSrc4,
  alt4,
  styleImg4 = {},
}) => {
  return (
    <div className="row mb-2">
      {/* Display the first technology logo/icon if imgSrc1 is provided. */}
      <div className="col-3 d-flex justify-content-center">
        {imgSrc1 && <img src={imgSrc1} alt={alt1} style={styleImg1} />}
      </div>
      {/* Display the second technology logo/icon if imgSrc2 is provided. */}
      <div className="col-3 d-flex justify-content-center">
        {imgSrc2 && <img src={imgSrc2} alt={alt2} style={styleImg2} />}
      </div>
      {/* Display the third technology logo/icon if imgSrc3 is provided. */}
      <div className="col-3 d-flex justify-content-center">
        {imgSrc3 && <img src={imgSrc3} alt={alt3} style={styleImg3} />}
      </div>
      {/* Display the fourth technology logo/icon if imgSrc4 is provided. */}
      <div className="col-3 d-flex justify-content-center">
        {imgSrc4 && <img src={imgSrc4} alt={alt4} style={styleImg4} />}
      </div>
    </div>
  );
};

// Export all components for use in other parts of the application.
export {
  ExperienceItem,
  EducationItem,
  SkillItem,
  PersonalProjectItem,
  TechnologyItem,
};
