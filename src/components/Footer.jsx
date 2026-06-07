import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* BRAND */}
      <motion.div
        className="footer-brand"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3>MUHAMMAD ZIKRI</h3>
        <p>© 2026 Muhammad Zikri. Built with React and Vite.</p>
      </motion.div>

      {/* SOCIALS */}
      <motion.div
        className="footer-socials"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram />
          <span>Instagram</span>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
