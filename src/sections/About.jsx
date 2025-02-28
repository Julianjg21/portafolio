import React from "react";
import Card from "react-bootstrap/Card";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";

function About() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-4 col-12 p-0">
          <Card className=" border-0 border-end border-bottom border-primary h-100 p-3  bg-light">
            <Card.Body>
              <Card.Title className="mt-3 mb-5">
                ¿<span className=" custom-underline">Qui</span>én soy?
              </Card.Title>
              <div className="text-start">
                <Card.Text>
                  ¡Hola! Soy Julian David Jimenez Gonzalez,
                  <br /> desarrollador de software enfocado en el backend. Desde
                  que tengo memoria, la tecnología siempre me ha llamado la
                  atención. Me encantaba desmontar cosas solo para ver cómo
                  funcionaban (y, bueno... a veces no volvían a funcionar, pero
                  valía la pena el intento).
                </Card.Text>
                <Card.Text>
                  Hoy en día, esa curiosidad sigue siendo mi motor. Me apasiona
                  escribir código, optimizar procesos y darle vida a ideas a
                  través del software. Me encanta el desafío de encontrar
                  soluciones prácticas y eficientes, sin complicar más de lo
                  necesario.
                </Card.Text>
                <Card.Text>
                  Soy de los que creen que siempre hay algo nuevo por aprender,
                  y disfruto explorando herramientas y enfoques diferentes para
                  mejorar en lo que hago. Siempre trato de hacer las cosas de la
                  mejor forma para hacer un buen trabajo y seguir creciendo en
                  este mundo tan cambiante de la tecnología.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12  p-0">
          <Card className="border-0 border-end  border-bottom  border-primary h-100 p-3  bg-light">
            <Card.Body>
              <Card.Title className="mt-3 mb-5">
                <span className=" custom-underline"> Info</span>
                rmacíon Personal
              </Card.Title>
              <div className="text-start">
                <Card.Text>
                  <strong>Fecha de nacimiento:</strong> 03/08/2001
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> julianjimenez2001@hotmail.com
                </Card.Text>
                <Card.Text>
                  <strong>País de residencia:</strong> Colombia
                </Card.Text>
                <Card.Text>
                  <strong>Teléfono:</strong> +(57) 3103373693
                </Card.Text>
                <div>
                  <a
                    href="https://www.linkedin.com/in/julian-jimenez-g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    title="Vistar el perfil de LinkedIn"
                  >
                    <TiSocialLinkedinCircular
                      size={34}
                      className=""
                      color="#0D6EFD"
                    />
                  </a>
                  <a
                    href="https://github.com/Julianjg21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    title="Visitar el perfil de GitHub"
                  >
                    <VscGithub size={26} color="#0D6EFD" />
                  </a>
                  <a
                    href="mailto:julianjimenez2001@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    title="Enviar un correo electrónico"
                  >
                    <PiMicrosoftOutlookLogoFill size={28} color="#0D6EFD" />
                  </a>
                  <a
                    href="https://wa.me/3103373693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    title="Enviar un mensaje de WhatsApp"
                  >
                    <BsWhatsapp size={25} color="#0D6EFD" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12 p-0">
          <Card className=" h-100 border-0  border-bottom border-primary p-3  bg-light">
            <Card.Body>
              <Card.Title className="mt-3 mb-4">
                M<span className=" custom-underline">i Ex</span>
                periencia Técnica
              </Card.Title>
              <div className="text-start">
                <ul>
                  <li>
                    <strong>Desarrollo Backend:</strong>
                    Creación de APIs eficientes y seguras, gestión de
                    servidores.
                  </li>
                  <li>
                    <strong>JavaScript y Node.js:</strong>
                    Desarrollo de aplicaciones escalables utilizando JavaScript
                    tanto en frontend como en backend con Node.js.
                  </li>
                  <li>
                    <strong>Bases de Datos:</strong>
                    Manejo de MySQL para diseño y administración de bases de
                    datos relacionales.
                  </li>
                  <li>
                    <strong>React:</strong>
                    Experiencia en el desarrollo de interfaces dinámicas y
                    reutilizables utilizando componentes funcionales en React.
                  </li>
                  <li>
                    <strong>Express:</strong>
                    Creación de APIs RESTful con Express, priorizando el
                    rendimiento y la seguridad.
                  </li>
                  <li>
                    <strong>Desarrollo de Bots en Telegram:</strong>
                    Creación de bots personalizados para Telegram utilizando
                    JavaScript y Node.js.
                  </li>
                  <li>
                    <strong>Despliegue de Proyectos:</strong>
                    Implementación y despliegue de aplicaciones en plataformas
                    en la nube como Heroku, Railway y Netlify.
                  </li>
                  <li>
                    <strong>Bootstrap:</strong>
                    Diseño de interfaces responsivas y modernas utilizando
                    Bootstrap para una experiencia de usuario fluida.
                  </li>
                  <li>
                    <strong>Autenticación y Seguridad:</strong>
                    Implementación de sistemas de autenticación con manejo de
                    tokens y middleware de seguridad.
                  </li>
                  <li>
                    <strong>Control de Versiones:</strong>
                    Uso de Git para el control de versiones.
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
