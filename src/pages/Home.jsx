import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Motion3D from "../components/Motion3D";
import Magnetic from "../components/Magnetic";
import PageTransition from "../components/PageTransition";
import "./Home.css";

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [-100, 100], [-30, 30]);
  const bgY = useTransform(mouseY, [-100, 100], [-30, 30]);

  return (
    <PageTransition>
      <motion.section
        className="home section"
        style={{ backgroundPositionX: bgX, backgroundPositionY: bgY }}
        onMouseMove={(e) => {
          mouseX.set(e.clientX - window.innerWidth / 2);
          mouseY.set(e.clientY - window.innerHeight / 2);
        }}
      >
        <div className="container hero-3d">
          <Motion3D>
            <div className="hero-card">
              <h1>
                Hi, I’m <span>Parikshit</span>
                <br />
                Full Stack Developer
              </h1>

              <p>
                I build modern, performance-focused web applications using React, JavaScript, and backend integrations, with strong attention to UI, animation, and real-world usability.
              </p>

              {/* SINGLE, CORRECT BUTTON SET */}
              <div className="hero-buttons">
                <Magnetic>
                  <Link to="/projects" className="btn btn-primary">
                    View Projects
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link to="/contact" className="btn btn-secondary">
                    Contact Me
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Motion3D>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Home;
