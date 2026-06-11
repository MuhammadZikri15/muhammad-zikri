import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const logoSrc = `${import.meta.env.BASE_URL}logoz.png`;
  const resumeSrc = `${import.meta.env.BASE_URL}resume.jpg`;

  const navItems = [
    { label: "Tentang", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Sertifikat", href: "#certificate" },
  ];

  const closeMenu = () => setOpen(false);

  const openResumeCard = () => {
    setOpen(false);
    setShowResume(true);
  };

  const closeResumeCard = () => {
    setShowResume(false);
  };

  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showResume]);

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  const desktopLinksVariants = {
    hidden: {
      opacity: 0,
      x: 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const linkItemVariants = {
    hidden: {
      opacity: 0,
      y: -16,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -18,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.96,
      transition: {
        duration: 0.22,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -18,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.28,
        ease: "easeOut",
      },
    },
  };

  const resumeBackdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const resumeCardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.24,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <style>
        {`
          .pp-navbar,
          .pp-navbar * {
            box-sizing: border-box;
          }

          .pp-navbar {
            width: 100%;
            height: var(--nav-height, 84px);
            padding-left: var(--container-x, 8%) !important;
            padding-right: var(--container-x, 8%) !important;
            background: #ffffff !important;
            color: #000000 !important;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1.8px solid #8f8f8f;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            overflow: visible;
            box-shadow: none;
          }

          .pp-navbar-logo {
            width: auto;
            min-width: 0;
            height: var(--nav-height, 84px);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
            margin: 0 0 0 -22px;
            padding: 0;
            line-height: 0;
          }

          .pp-navbar-logo img {
            width: 106px;
            max-width: 106px;
            max-height: 78px;
            height: auto;
            object-fit: contain;
            object-position: left center;
            display: block;
            opacity: 1;
            visibility: visible;
            filter: none;
            margin: 0;
            transform-origin: left center;
            transition: transform 0.28s ease;
          }

          .pp-navbar-logo:hover img {
            transform: translateY(-2px) scale(1.04);
          }

          .pp-navbar-links {
            display: flex;
            align-items: center;
            gap: 18px;
            position: relative;
            z-index: 2;
          }

          .pp-navbar-link {
            color: #000000 !important;
            font-size: 14px;
            font-weight: 650;
            text-decoration: none;
            padding: 10px 4px;
            border-radius: 0;
            position: relative;
            white-space: nowrap;
            background: transparent !important;
            transition: all 0.28s ease;
          }

          .pp-navbar-link:hover {
            color: #000000 !important;
            background: transparent !important;
            transform: translateY(-2px);
          }

          .pp-navbar-link::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3px;
            height: 3px;
            border-radius: 999px;
            background-color: #f59e0b;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.28s ease;
          }

          .pp-navbar-link:hover::after {
            transform: scaleX(1);
          }

          .pp-navbar-hire-btn {
            color: #000000 !important;
            font-family: inherit;
            font-size: 14px;
            font-weight: 750;
            text-decoration: none;
            border: 2px solid #000000;
            border-radius: 40px;
            padding: 12px 24px;
            background: #f59e0b;
            transition: all 0.28s ease;
            white-space: nowrap;
            box-shadow: 5px 5px 0 #92400e;
            cursor: pointer;
            line-height: 1;
          }

          .pp-navbar-hire-btn:hover {
            background: #fb923c;
            color: #000000 !important;
            border-color: #000000;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0 #7c2d12;
          }

          .pp-navbar-menu-btn {
            display: none;
            width: 46px;
            height: 46px;
            border-radius: 14px;
            border: 2px solid #000000;
            background: #f3e4c8;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-shrink: 0;
            z-index: 1002;
            transition: all 0.28s ease;
            box-shadow: 4px 4px 0 #000000;
          }

          .pp-navbar-menu-btn:hover {
            background: #f59e0b;
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0 #92400e;
          }

          .pp-navbar-hamburger {
            width: 22px;
            height: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .pp-navbar-hamburger span {
            width: 100%;
            height: 2px;
            background: #000000;
            border-radius: 999px;
            transition: all 0.28s ease;
          }

          .pp-navbar-hamburger.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .pp-navbar-hamburger.active span:nth-child(2) {
            opacity: 0;
          }

          .pp-navbar-hamburger.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .pp-navbar-mobile-backdrop {
            position: fixed;
            top: var(--nav-height, 84px);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--nav-height, 84px));
            background: rgba(0, 0, 0, 0.16);
            z-index: 998;
          }

          .pp-navbar-mobile-menu {
            position: fixed;
            top: calc(var(--nav-height, 84px) + 14px);
            left: var(--container-x, 8%);
            right: var(--container-x, 8%);
            background: #f3e4c8 !important;
            opacity: 1 !important;
            border: 2px solid #000000;
            border-radius: 24px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 13px;
            z-index: 1001;
            box-shadow: 7px 7px 0 #000000;
            overflow: hidden;
          }

          .pp-navbar-mobile-menu .pp-navbar-link {
            width: 100%;
            color: #000000 !important;
            font-size: 16px;
            font-weight: 700;
            padding: 14px 16px;
            border: 2px solid #000000;
            border-radius: 16px;
            box-shadow: 4px 4px 0 #000000;
            background: #ffffff !important;
            opacity: 1 !important;
            transform: none;
          }

          .pp-navbar-mobile-menu .pp-navbar-link:nth-child(3n + 1) {
            background: #dfd0b7 !important;
          }

          .pp-navbar-mobile-menu .pp-navbar-link:nth-child(3n + 2) {
            background: #f3c4a8 !important;
          }

          .pp-navbar-mobile-menu .pp-navbar-link:nth-child(3n) {
            background: #f3e4c8 !important;
          }

          .pp-navbar-mobile-menu .pp-navbar-link:hover {
            background: #f59e0b !important;
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0 #92400e;
          }

          .pp-navbar-mobile-menu .pp-navbar-link::after {
            display: none;
          }

          .pp-navbar-mobile-menu .pp-navbar-hire-btn {
            width: 100%;
            text-align: center;
            margin-top: 4px;
            background: #f59e0b !important;
            color: #000000 !important;
            border-color: #000000;
            border-radius: 16px;
            padding: 14px 16px;
            box-shadow: 5px 5px 0 #92400e;
            opacity: 1 !important;
            font-size: 15px;
          }

          .pp-navbar-mobile-menu .pp-navbar-hire-btn:hover {
            background: #fb923c !important;
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0 #7c2d12;
          }

          .pp-resume-backdrop {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.42);
            z-index: 1998;
          }

          .pp-resume-modal {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100vh;
            z-index: 1999;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: calc(var(--nav-height, 84px) + 24px) var(--container-x, 8%) 36px;
            overflow-y: auto;
            overflow-x: hidden;
          }

          .pp-resume-card {
            width: min(900px, 100%);
            background: #f3e4c8;
            border: 2px solid #000000;
            border-radius: 26px;
            box-shadow: 8px 8px 0 #000000;
            padding: clamp(18px, 2.4vw, 28px);
            color: #000000;
            display: flex;
            flex-direction: column;
            gap: 20px;
            overflow: visible;
          }

          .pp-resume-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            flex-shrink: 0;
          }

          .pp-resume-top h2 {
            display: inline-block;
            color: #000000;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0;
            font-size: clamp(26px, 2.4vw, 38px);
            font-weight: 900;
            line-height: 1.15;
            letter-spacing: -0.5px;
          }

          .pp-resume-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
            flex-wrap: wrap;
          }

          .pp-resume-back-btn,
          .pp-resume-download-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-shrink: 0;
            padding: 13px 19px;
            border-radius: 30px;
            border: 2px solid #000000;
            color: #000000;
            font-family: inherit;
            font-size: 15px;
            font-weight: 800;
            line-height: 1;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.28s ease;
          }

          .pp-resume-back-btn {
            background: #ffffff;
            box-shadow: 5px 5px 0 #000000;
          }

          .pp-resume-download-btn {
            background: #f59e0b;
            box-shadow: 5px 5px 0 #92400e;
          }

          .pp-resume-back-btn:hover {
            background: #f3e4c8;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0 #000000;
          }

          .pp-resume-download-btn:hover {
            background: #fb923c;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0 #7c2d12;
          }

          .pp-resume-image-box {
            width: 100%;
            background: #ffffff;
            border: 2px solid #000000;
            border-radius: 20px;
            padding: 14px;
            overflow: visible;
            line-height: 0;
          }

          .pp-resume-image-box img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
            object-position: top center;
            border-radius: 14px;
          }

          @media (max-width: 1200px) {
            .pp-navbar-logo {
              margin-left: -18px;
            }

            .pp-navbar-logo img {
              width: 98px;
              max-width: 98px;
              max-height: 74px;
            }

            .pp-navbar-links {
              gap: 14px;
            }
          }

          @media (max-width: 992px) {
            .pp-navbar {
              padding-left: var(--container-x, 6%) !important;
              padding-right: var(--container-x, 6%) !important;
            }

            .pp-navbar-logo {
              margin-left: -14px;
            }

            .pp-navbar-logo img {
              width: 92px;
              max-width: 92px;
              max-height: 70px;
            }

            .pp-navbar-links {
              gap: 10px;
            }

            .pp-navbar-link {
              font-size: 13.5px;
              padding-left: 3px;
              padding-right: 3px;
            }

            .pp-navbar-hire-btn {
              padding: 11px 20px;
            }

            .pp-navbar-mobile-menu {
              left: var(--container-x, 6%);
              right: var(--container-x, 6%);
            }

            .pp-resume-modal {
              padding-left: var(--container-x, 6%);
              padding-right: var(--container-x, 6%);
            }

            .pp-resume-card {
              width: min(820px, 100%);
            }
          }

          @media (max-width: 768px) {
            .pp-navbar {
              padding-left: var(--container-x, 5%) !important;
              padding-right: var(--container-x, 5%) !important;
              align-items: center;
            }

            .pp-navbar-logo {
              height: var(--nav-height, 84px);
              margin-left: -10px;
              align-items: center;
            }

            .pp-navbar-logo img {
              width: 86px;
              max-width: 86px;
              max-height: 66px;
            }

            .pp-navbar-desktop-links {
              display: none;
            }

            .pp-navbar-menu-btn {
              display: inline-flex;
            }

            .pp-navbar-mobile-menu {
              left: var(--container-x, 5%);
              right: var(--container-x, 5%);
            }

            .pp-resume-modal {
              padding: calc(var(--nav-height, 84px) + 22px) var(--container-x, 5%) 30px;
            }

            .pp-resume-card {
              width: 100%;
              border-radius: 22px;
              box-shadow: 6px 6px 0 #000000;
              gap: 18px;
            }

            .pp-resume-top h2 {
              font-size: 28px;
            }

            .pp-resume-back-btn,
            .pp-resume-download-btn {
              padding: 12px 16px;
              font-size: 14px;
              box-shadow: 4px 4px 0 #000000;
            }

            .pp-resume-download-btn {
              box-shadow: 4px 4px 0 #92400e;
            }

            .pp-resume-image-box {
              border-radius: 18px;
              padding: 12px;
            }
          }

          @media (max-width: 480px) {
            .pp-navbar-logo {
              margin-left: -8px;
            }

            .pp-navbar-logo img {
              width: 78px;
              max-width: 78px;
              max-height: 62px;
            }

            .pp-navbar-menu-btn {
              width: 44px;
              height: 44px;
              border-radius: 13px;
            }

            .pp-navbar-mobile-menu {
              left: 5%;
              right: 5%;
              padding: 18px;
              border-radius: 22px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-navbar-mobile-menu .pp-navbar-link,
            .pp-navbar-mobile-menu .pp-navbar-hire-btn {
              font-size: 15px;
              padding: 13px 14px;
              border-radius: 14px;
            }

            .pp-resume-modal {
              padding: calc(var(--nav-height, 84px) + 18px) 5% 26px;
            }

            .pp-resume-card {
              border-radius: 20px;
              padding: 18px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-resume-top {
              flex-direction: column;
              align-items: flex-start;
              gap: 14px;
            }

            .pp-resume-top h2 {
              font-size: 26px;
            }

            .pp-resume-actions {
              width: 100%;
              flex-direction: column;
              align-items: stretch;
            }

            .pp-resume-back-btn,
            .pp-resume-download-btn {
              width: 100%;
              padding: 13px 16px;
            }

            .pp-resume-image-box {
              padding: 10px;
              border-radius: 16px;
            }

            .pp-resume-image-box img {
              border-radius: 12px;
            }
          }

          @media (max-width: 360px) {
            .pp-navbar-logo {
              margin-left: -6px;
            }

            .pp-navbar-logo img {
              width: 72px;
              max-width: 72px;
              max-height: 58px;
            }

            .pp-navbar-menu-btn {
              width: 42px;
              height: 42px;
            }

            .pp-resume-card {
              padding: 15px;
            }

            .pp-resume-top h2 {
              font-size: 24px;
            }

            .pp-resume-image-box {
              padding: 8px;
            }
          }
        `}
      </style>

      <motion.nav
        className="pp-navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#home"
          className="pp-navbar-logo"
          onClick={closeMenu}
          variants={logoVariants}
          whileTap={{ scale: 0.96 }}
        >
          <img src={logoSrc} alt="Muhammad Zikri Logo" />
        </motion.a>

        <motion.div
          className="pp-navbar-links pp-navbar-desktop-links"
          variants={desktopLinksVariants}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="pp-navbar-link"
              onClick={closeMenu}
              variants={linkItemVariants}
              whileTap={{ scale: 0.94 }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.button
            type="button"
            className="pp-navbar-hire-btn"
            onClick={openResumeCard}
            variants={linkItemVariants}
            whileTap={{ scale: 0.94 }}
          >
            Resume
          </motion.button>
        </motion.div>

        <motion.button
          type="button"
          className="pp-navbar-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          variants={linkItemVariants}
          whileTap={{ scale: 0.92 }}
        >
          <span
            className={
              open ? "pp-navbar-hamburger active" : "pp-navbar-hamburger"
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="pp-navbar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeMenu}
            />

            <motion.div
              className="pp-navbar-mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="pp-navbar-link"
                  onClick={closeMenu}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.button
                type="button"
                className="pp-navbar-hire-btn"
                onClick={openResumeCard}
                variants={mobileItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <>
            <motion.div
              className="pp-resume-backdrop"
              variants={resumeBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeResumeCard}
            />

            <motion.div
              className="pp-resume-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Resume"
            >
              <motion.div
                className="pp-resume-card"
                variants={resumeCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="pp-resume-top">
                  <h2>Resume</h2>

                  <div className="pp-resume-actions">
                    <a
                      href={resumeSrc}
                      download="Muhammad-Zikri-Resume.png"
                      className="pp-resume-download-btn"
                    >
                      Download
                    </a>

                    <button
                      type="button"
                      className="pp-resume-back-btn"
                      onClick={closeResumeCard}
                    >
                      <FaArrowLeft />
                      Kembali
                    </button>
                  </div>
                </div>

                <div className="pp-resume-image-box">
                  <img src={resumeSrc} alt="Resume Muhammad Zikri" />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
