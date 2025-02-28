import projectImg from "../assets/projects_images/project-img.jpg";

//Here we can add the projects that we want to show in the portfolio
//The projectImg is the image that we want to show in the project
//The projectName is the name of the project
//The projectDescription is the description of the project
//The technologies is an array of objects that contains the technologies used in the project
//The technology is the name of the technology
//The style is the style of the technology badge
//The linkWebsite is the link to the website of the project
//The linkGithub is the link to the github repository of the project

export const projectsItem = [
  {
    projectImg: projectImg,
    projectName: "Software de gestion de recursos humanos (HRMS)",
    projectDescription:
      "Software de gestion de recursos humanos (HRMS) HRMS es una aplicación web diseñada para ayudar a las empresas a administrar de manera más eficiente el área de recursos humanos. Con este software, es posible gestionar el registro y control de empleados, el manejo de la documentación de empleados, la administración de la nómina, el manejo de horarios de empleados, notas, entre otros módulos.Los empleados también tendrán su apartado donde podrán acceder a su documentación, descargar sus extractos de nómina y manejar algunos datos de su información personal.Este aplicativo cuenta con seguridad de autenticación de login, permisos de usuario y roles para manejar la seguridad de los datos almacenados y la seguridad de la empresa. También cuenta con restablecimiento de contraseña por medio del correo electrónico y código de seguridad para autenticación.",
    technologies: [
      { technology: "Node.js", style: "text-success border border-success" },
      {
        technology: "Express.js",
        style: "text-warning border border-warning",
      },
      { technology: "React.js", style: "text-primary border border-primary" },
      { technology: "Bootstrap", style: "text-info border border-info" },
      { technology: "Axios", style: "text-danger border border-danger" },
      {
        technology: "React-icons",
        style: "text-primary border border-primary",
      },
      { technology: "pdfKit", style: "text-danger border border-danger" },
      { technology: "mysql", style: "text-dark border border-dark" },
    ],
    linkWebsite: "www.google.com",
    linkGithub: "www.github.com",
    linkGithub2: "www.github.com",
  },
  {
    projectImg: projectImg,
    projectName: "Software de gestion de recursos humanos (HRMS)",
    projectDescription:
      "Software de gestion de recursos humanos (HRMS) HRMS es una aplicación web diseñada para ayudar a las empresas a administrar de manera más eficiente el área de recursos humanos. Con este software, es posible gestionar el registro y control de empleados, el manejo de la documentación de empleados, la administración de la nómina, el manejo de horarios de empleados, notas, entre otros módulos.Los empleados también tendrán su apartado donde podrán acceder a su documentación, descargar sus extractos de nómina y manejar algunos datos de su información personal.Este aplicativo cuenta con seguridad de autenticación de login, permisos de usuario y roles para manejar la seguridad de los datos almacenados y la seguridad de la empresa. También cuenta con restablecimiento de contraseña por medio del correo electrónico y código de seguridad para autenticación.",
    technologies: [
      { technology: "Node.js", style: "text-success border border-success" },
      {
        technology: "Express.js",
        style: "text-warning border border-warning",
      },
      { technology: "React.js", style: "text-primary border border-primary" },
      { technology: "Python", style: "text-danger border border-danger" },
    ],
    linkWebsite: "www.google.com",
    linkGithub: "www.github.com",
  },
];
