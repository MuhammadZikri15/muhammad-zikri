import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certificate() {
const [selectedCertificate, setSelectedCertificate] = useState(null);

const certificates = [
{
title: "Digital Marketing",
issuer: "Dibimbing",
image: "/Dibimbing.png",
},
{
title: "BSI Incubator",
issuer: "Dibimbing",
image: "/Seminar.png",
},
{
title: "IT Bootcamp",
issuer: "Bina Sarana Informatika",
image: "/Bsi.png",
},
];

return ( <section id="certificate" className="certificate"> <div className="section-title"> <h2>Certificate</h2> </div>

  <div className="certificate-grid">
    {certificates.map((certificate, index) => (
      <motion.div
        key={index}
        className="certificate-card"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.15,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        style={{
          minHeight: "auto",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.div
          className="certificate-preview"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            position: "relative",
            width: "100%",
            height: "285px",
            overflow: "hidden",
            borderRadius: "18px",
            marginBottom: "24px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <motion.img
            src={certificate.image}
            alt={certificate.title}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: "0.9",
            }}
          />
        </motion.div>

        <h3
          style={{
            marginBottom: "8px",
          }}
        >
          {certificate.title}
        </h3>

        <h4
          style={{
            marginBottom: "22px",
          }}
        >
          {certificate.issuer}
        </h4>

        <motion.button
          type="button"
          className="certificate-button"
          onClick={() => setSelectedCertificate(certificate)}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            padding: "12px 18px",
            borderRadius: "12px",
            border: "1px solid rgba(16,185,129,0.45)",
            background: "rgba(16,185,129,0.12)",
            color: "#10b981",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          View Certificate
        </motion.button>
      </motion.div>
    ))}
  </div>

  <AnimatePresence>
    {selectedCertificate && (
      <motion.div
        className="certificate-modal"
        onClick={() => setSelectedCertificate(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: "0",
          zIndex: "9999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <motion.div
          onClick={(event) => event.stopPropagation()}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1050px",
            maxHeight: "92vh",
            background: "#0b0f14",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.55)",
          }}
        >
          <motion.button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: "2",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.7)",
              color: "#ffffff",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ×
          </motion.button>

          <div
            style={{
              padding: "18px 22px",
              borderBottom:
                "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "20px",
              }}
            >
              {selectedCertificate.title}
            </h3>

            <p
              style={{
                margin: "6px 0 0",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
              }}
            >
              {selectedCertificate.issuer}
            </p>
          </div>

          <div
            style={{
              maxHeight: "78vh",
              overflow: "auto",
              padding: "20px",
              background: "#05080c",
            }}
          >
            <motion.img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "14px",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>


);
}

export default Certificate;
