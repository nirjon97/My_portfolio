import './App.css';
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import BgImage from "./assets/img/parallex/background.webp";


import MyCarousal from './components/my-carousal/my-carousal.component';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
       <MyNavbar></MyNavbar>
       <MyTitleMessage></MyTitleMessage>
       <MyCarousal></MyCarousal>

       <Particles className="particles particles-box" params={particlesOptions} />

        {/*about pages */}
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          
        </Parallax>
      </div>
      <div>
             
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills></Skills>
        </Slide>
      </Container>

      </div>

      <div>
             
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Experience></Experience>
        </Slide>
      </Container>

      </div>


      <div>
             
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine></TimeLine>
        </Slide>
      </Container>

      </div>


      <div>
             
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ContactForm></ContactForm>
        </Slide>
      </Container>

      </div>

      <div>
      <hr />
      <FooterPanel />
      </div>
         
    </div>
  );
}

export default App;
