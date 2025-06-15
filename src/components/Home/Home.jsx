import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import HomeSection from "./HomeSection.jsx";
import Education from "../Education/Education.jsx";
import Experience from "../Experience/Experience.jsx";
import ProjectsHighlighted from "../Projects/ProjectsHighlighted.jsx";
import Technologies from "../Technologies/Technologies.jsx";
import Contact from "../Contact/Contact.jsx";
import Arrow from "../Arrow/Arrow.jsx";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
      <Education />
      <Experience />
      <Technologies />
      <ProjectsHighlighted />
      <Contact />
      <Arrow />
      <Footer />
    </div>
  );
}
