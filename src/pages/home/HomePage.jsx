import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import MainNavbar from "../../components/navbar/MainNavbar";
import Resume from "../../sections/Resume";
import Projects from "../../sections/Projects";
import MainFooter from "../../components/footer/MainFooter";
function HomePage() {
  return (
    <div className="bg-light" id="home">
      <>
        <MainNavbar />
        <section>
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section>
          <MainFooter />
        </section>
      </>
    </div>
  );
}

export default HomePage;
