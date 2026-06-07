
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function GmailOutlinedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M4 6.5h16v11H4z" />
      <path d="M4 7l8 6.2L20 7" />
      <path d="M4 17.5V8.5" />
      <path d="M20 17.5V8.5" />
    </svg>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const waNumber = "6281574779615";

    const text = `Halo Muhammad Zikri,

Full Name: ${name}
Email: ${email}
Phone Number: ${phone}

Message:
${message}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

return (
  <motion.section
    id="contact"
    className="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.8 }}
  >
    <div className="contact-box">
      {/* LEFT SIDE */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Me</h2>

        <p>
          Feel free to contact me for collaboration, project discussion,
          freelance work, or professional opportunities.
        </p>

        <div className="contact-list">
          <a
            href="mailto:mz150904@gmail.com"
            className="contact-item"
          >
            <div className="contact-icon gmail-contact-outlined">
              <GmailOutlinedIcon />
            </div>

            <div>
              <span>Email</span>
              <h4>mz150904@gmail.com</h4>
            </div>
          </a>

          <a
            href="https://wa.me/6281574779615"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon whatsapp-contact">
              <FaWhatsapp />
            </div>

            <div>
              <span>WhatsApp</span>
              <h4>+62 815 7477 9615</h4>
            </div>
          </a>

          <a
            href="https://instagram.com/emzikrri"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon instagram-contact">
              <FaInstagram />
            </div>

            <div>
              <span>Instagram</span>
              <h4>@emzikrri</h4>
            </div>
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={(e) => {
          e.preventDefault();
          sendWhatsAppMessage();
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          rows="6"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Send Message
        </button>
      </motion.form>
    </div>
  </motion.section>
)
}

export default Contact;
