
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <img src={aboutImage} alt="Muhammad Zikri" />
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>About Me</h2>

        <p>
          I believe that software development is as much about people as it is
          about syntax. My approach focuses on bridging the gap between
          technical complexity and intuitive user experiences.
        </p>

        <p>
          With strong experience in web development, I enjoy building digital
          products from early concepts into clean, responsive, and useful
          applications.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;

