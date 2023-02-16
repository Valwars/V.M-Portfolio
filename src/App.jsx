import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SocialBar from "./components/social_icons/socialBar";
import { Canvas } from "react-three-fiber";
import Cube from "./components/Cube/cube";
import Dev from "./components/Developper";
import Designer from "./components/Designer";
import ContentCreator from "./components/ContentCreator";
import Other from "./components/Other";
import { useEffect, useState } from "react";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [scrolled, setScrolled] = useState("0%");

  useEffect(() => {
    // Code à exécuter lors du montage du composant
    window.addEventListener("scroll", scrollProgress);
  }, []); // L

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const sc = `${(scrollPx / winHeightPx) * 100}%`;

    setScrolled(sc);
  };

  const progressBarStyle = {
    width: scrolled,
  };

  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);

  return (
    <>
      {" "}
      <div className="progress-bar" style={progressBarStyle} />
      <NavBar></NavBar>
      <div className="Home">
        <div
          className="home-left"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="1000"
          data-aos-offset="-200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <SocialBar></SocialBar>
          <div className="canvascontainer">
            <Canvas id="canvas">
              <pointLight position={[5, 5, 5]} />
              <Cube />
            </Canvas>
          </div>
        </div>
        <div className="home-right">
          <div className="intro">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <span>Hey</span>, <br></br>I’m Valentin !
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="1000"
              data-aos-offset="-200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              I’m a web developper and so much more.
            </h2>
            <p
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-delay="1000"
              data-aos-offset="-200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <span>Scroll down</span> to learn more about me...
            </p>
          </div>
        </div>
      </div>
      <Dev></Dev>
      <Designer></Designer>
      <ContentCreator></ContentCreator>
      <Other></Other>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer progressClassName="toastProgress" />
    </>
  );
}

export default App;
