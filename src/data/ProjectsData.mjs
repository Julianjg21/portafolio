import portada_hrms from "../assets/projects_covers/portada-hrms.webp";
import portada_blue_notebook from "../assets/projects_covers/portada-blue-notebook.webp";
import portada_xmbot from "../assets/projects_covers/portada-xmbot.webp";
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
    projectImg: portada_hrms,
    projectName: "💼Software de gestion de recursos humanos (HRMS)",
    projectDescription: [
      {
        text: "Software de gestion de recursos humanos (HRMS) HRMS es una aplicación web diseñada para ayudar a las empresas a administrar de manera más eficiente el área de recursos humanos. Con este software, es posible gestionar el registro y control de empleados, el manejo de la documentación de empleados, la administración de la nómina, el manejo de horarios de empleados, notas, entre otros módulos.Los empleados también tendrán su apartado donde podrán acceder a su documentación, descargar sus extractos de nómina y manejar algunos datos de su información personal.Este aplicativo cuenta con seguridad de autenticación de login, permisos de usuario y roles para manejar la seguridad de los datos almacenados y la seguridad de la empresa. También cuenta con restablecimiento de contraseña por medio del correo electrónico y código de seguridad para autenticación.",
      },
      {
        text: "📍Credenciales de prueba: correo:administrador@hotmail.com, contraseña: 21282821",
      },
    ],
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
      { technology: "JWT", style: "text-primary border border-primary" },
      { technology: "Bcrypt", style: "text-danger border border-danger" },
    ],
    linkWebsite: "https://hrms-sml.netlify.app",
    linkGithub: "https://github.com/Julianjg21/hrms-client",
    linkGithub2: "https://github.com/Julianjg21/hrms-server",
  },
  {
    projectImg: portada_blue_notebook,
    projectName: "📘Blue Notebook",
    projectDescription: [
      {
        text: "Blue Notebook es una plataforma web diseñada para facilitar la organización personal y el manejo de notas y tareas. Ofrece un sistema de autenticación seguro que permite a los usuarios registrarse, iniciar sesión y restaurar su contraseña cuando lo necesiten. Dentro de la plataforma, los usuarios pueden acceder a diferentes módulos que les permiten gestionar su información de manera eficiente. En el módulo Home, pueden visualizar todas sus notas y tareas registradas, con opciones para editarlas, eliminarlas y organizarlas según sus necesidades. El módulo New Notes permite la creación de nuevas notas mediante un editor de texto enriquecido, facilitando la personalización y estructuración del contenido. En Watch Notes, los usuarios pueden consultar sus notas en un formato más detallado y realizar acciones como crear nuevas notas, editar las existentes o eliminarlas si ya no son necesarias. Por otro lado, el módulo Add Tasks está diseñado para el control de tareas diarias, permitiendo registrar pendientes, modificarlos, eliminarlos y hacer seguimiento de responsabilidades.",
      }, {
        text:"¡Regístrate ahora y descubre lo fácil y rápido que es usar nuestra plataforma! 🚀"
      }
    ],
    technologies: [
      { technology: "Node.js", style: "text-success border border-success" },
      {
        technology: "Express.js",
        style: "text-warning border border-warning",
      },
      { technology: "React.js", style: "text-primary border border-primary" },
      { technology: "Bootstrap", style: "text-info border border-info" },
      { technology: "JWT", style: "text-primary border border-primary" },
      { technology: "Bcrypt", style: "text-danger border border-danger" },
      { technology: "mysql", style: "text-dark border border-dark" },
      { technology: "CDBReact", style: "text-info border border-info" },
      { technology: "React-Quill ", style: "text-danger border border-danger" },
    ],
    linkWebsite: "https://bluenotebook-production.up.railway.app",
    linkGithub: "https://github.com/Julianjg21/Blue_NoteBook",
  },
  {
    projectImg: portada_xmbot,
    projectName: "👾XM REPORT DOWNLOADER BOT",
    projectDescription: [
      {
        text: "XM REPORT FETCHER es un innovador bot de Telegram desarrollado para facilitar la obtención y descarga de informes de despacho y redespacho proporcionados por XM en Colombia.Este bot permite a los usuarios acceder a datos actualizados de manera rápida y eficiente.Desarrollado en Node.js, XM REPORT FETCHER hace uso de la biblioteca axios para realizar las solicitudes de datos, garantizando un rendimiento óptimo y una integración fluida. Además, el bot cuenta con una interfaz amigable y fácil de usar, lo que lo convierte en una herramienta invaluable para profesionales del sector energético que necesiten mantenerse al tanto de la información crítica en tiempo real.",
      }, {
        text: "¡Nuestro bot cuenta con dos versiones! 'xm-report-fetcher-bot' está programado para obtener datos de forma directa mediante fetch, mientras que 'xm-report-downloader-bot' utiliza la automatización de navegador en segundo plano para la extracción de datos."
      }, {
        text:"¡Prueba nuestro bot de forma sencilla y gratuita! 🚀"
      }

    ],
    technologies: [
      { technology: "Node.js", style: "text-success border border-success" },
      {
        technology: "telegraf.js",
        style: "text-warning border border-warning",
      },
      { technology: "puppeteer.js", style: "text-primary border border-primary" },
      { technology: "axios", style: "text-info border border-info" },
    ],
    linkWebsite: "https://t.me/dsProgramadobot",
    linkGithub: "https://github.com/Julianjg21/xm-report-fetcher-bot",
    linkGithub2: "https://github.com/Julianjg21/xm-report-downloader-bot"
  },
];
