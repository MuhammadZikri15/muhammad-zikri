import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <motion.section
      id="about"
      className="pp-about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <style>
        {`
          .pp-about,
          .pp-about * {
            box-sizing: border-box;
          }

          .pp-about {
            width: 100%;
            padding: 64px var(--container-x, 8%) 72px;
            margin-top: -44px;
            background: #ffffff !important;
            color: #000000 !important;
            overflow: visible;
            position: relative;
            z-index: 2;
            scroll-margin-top: calc(var(--nav-height, 84px) + 20px);
          }

          .pp-about-wrapper {
            width: 100%;
            max-width: 1180px;
            margin: 0;
            display: grid;
            grid-template-columns: minmax(280px, 420px) minmax(0, 620px);
            align-items: center;
            justify-content: start;
            gap: clamp(34px, 4.5vw, 64px);
          }

          .pp-about-image {
            width: 100%;
            min-width: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .pp-about-image img {
            width: clamp(300px, 30vw, 420px);
            max-width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            object-fit: cover;
            object-position: center top;
            border-radius: 18px;
            border: 2px solid #000000;
            display: block;
            box-shadow: 8px 8px 0 #f3e4c8;
          }

          .pp-about-text {
            width: 100%;
            max-width: 620px;
            min-width: 0;
            justify-self: start;
            text-align: left;
          }

          .pp-about-title {
            display: inline-block;
            color: #000000 !important;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0 0 28px;
            text-align: left;
            font-size: clamp(28px, 2.6vw, 40px);
            line-height: 1.25;
            font-weight: 900;
            letter-spacing: -0.5px;
            overflow: visible;
          }

          .pp-about-paragraph {
            width: 100%;
            max-width: 600px;
            color: #000000 !important;
            line-height: 1.75;
            font-size: clamp(15px, 1.15vw, 17px);
            font-weight: 500;
            margin: 0;
            overflow-wrap: break-word;
            text-align: left;
          }

          .pp-about-actions {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 18px;
            flex-wrap: wrap;
            margin-top: 30px;
          }

          .pp-about-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-width: 220px;
            max-width: 100%;
            padding: 15px 22px;
            border-radius: 30px;
            border: 2px solid #2f2f2f;
            color: #000000 !important;
            font-size: 14px;
            font-weight: 800;
            line-height: 1.2;
            text-decoration: none;
            position: relative;
            cursor: pointer;
            transition: all 0.28s ease;
            white-space: nowrap;
          }

          .pp-about-button-location {
            background: #f3e4c8;
            box-shadow: 6px 6px 0 #2f2f2f;
          }

          .pp-about-button-location:hover {
            background: #ead6b0;
            color: #000000 !important;
            border-color: #000000;
            box-shadow: 3px 3px 0 #000000;
            transform: translate(3px, 3px);
          }

          .pp-about-button-email {
            background: #f59e0b;
            box-shadow: 6px 6px 0 #92400e;
          }

          .pp-about-button-email:hover {
            background: #fb923c;
            color: #000000 !important;
            border-color: #000000;
            box-shadow: 3px 3px 0 #7c2d12;
            transform: translate(3px, 3px);
          }

          .pp-about-icon {
            font-size: 19px;
            flex-shrink: 0;
            transition: all 0.28s ease;
          }

          .pp-about-location-icon {
            color: #f97316;
          }

          .pp-about-gmail-icon {
            color: #000000;
          }

          .pp-about-button:hover .pp-about-location-icon {
            color: #ea580c;
            transform: scale(1.08);
          }

          .pp-about-button:hover .pp-about-gmail-icon {
            color: #000000;
            transform: scale(1.08);
          }

          @media (max-width: 1280px) {
            .pp-about {
              padding: 60px var(--container-x, 7%) 66px;
              margin-top: -38px;
            }

            .pp-about-wrapper {
              max-width: 1040px;
              grid-template-columns: minmax(260px, 380px) minmax(0, 560px);
              gap: 46px;
            }

            .pp-about-image img {
              width: clamp(280px, 29vw, 380px);
            }

            .pp-about-title {
              font-size: clamp(28px, 2.4vw, 34px);
              margin-bottom: 24px;
            }

            .pp-about-paragraph {
              max-width: 550px;
              font-size: 15.5px;
              line-height: 1.7;
            }

            .pp-about-button {
              min-width: 200px;
              padding: 14px 18px;
              font-size: 13.5px;
            }
          }

          @media (max-width: 1100px) {
            .pp-about {
              padding: 58px var(--container-x, 6%) 60px;
              margin-top: -30px;
            }

            .pp-about-wrapper {
              grid-template-columns: minmax(240px, 340px) minmax(0, 530px);
              gap: 38px;
            }

            .pp-about-image img {
              width: clamp(260px, 28vw, 340px);
            }

            .pp-about-title {
              font-size: 30px;
            }

            .pp-about-paragraph {
              font-size: 15px;
              line-height: 1.68;
            }

            .pp-about-actions {
              gap: 16px;
            }

            .pp-about-button {
              min-width: 190px;
              padding: 14px 17px;
              font-size: 13px;
            }
          }

          @media (max-width: 992px) {
            .pp-about {
              padding: 72px var(--container-x, 6%) 56px;
              margin-top: 0;
            }

            .pp-about-wrapper {
              grid-template-columns: 1fr;
              max-width: 760px;
              gap: 34px;
              margin: 0 auto;
            }

            .pp-about-image {
              justify-content: center;
              align-items: center;
            }

            .pp-about-image img {
              width: min(380px, 100%);
              margin-left: auto;
              margin-right: auto;
            }

            .pp-about-text {
              max-width: 760px;
              justify-self: center;
              text-align: left;
            }

            .pp-about-title {
              text-align: left;
            }

            .pp-about-paragraph {
              max-width: 680px;
              margin-left: 0;
              margin-right: 0;
              text-align: left;
            }

            .pp-about-actions {
              justify-content: flex-start;
            }
          }

          @media (max-width: 768px) {
            .pp-about {
              padding: 58px var(--container-x, 5%) 46px;
              margin-top: 0;
            }

            .pp-about-wrapper {
              gap: 30px;
              margin: 0 auto;
            }

            .pp-about-image {
              justify-content: center;
            }

            .pp-about-image img {
              width: min(330px, 88vw);
              margin-left: auto;
              margin-right: auto;
              box-shadow: 6px 6px 0 #f3e4c8;
            }

            .pp-about-title {
              font-size: 28px;
              margin-bottom: 22px;
            }

            .pp-about-paragraph {
              font-size: 15px;
              line-height: 1.65;
            }

            .pp-about-actions {
              width: 100%;
              gap: 16px;
              margin-top: 28px;
            }

            .pp-about-button {
              width: 100%;
              min-width: 100%;
              justify-content: center;
              padding: 15px 18px;
              font-size: 14px;
              white-space: normal;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .pp-about {
              padding: 48px 5% 38px;
              margin-top: 0;
            }

            .pp-about-wrapper {
              gap: 26px;
              margin: 0 auto;
            }

            .pp-about-image {
              justify-content: center;
            }

            .pp-about-image img {
              width: min(300px, 86vw);
              margin-left: auto;
              margin-right: auto;
              border-radius: 16px;
              box-shadow: 5px 5px 0 #f3e4c8;
            }

            .pp-about-title {
              font-size: 26px;
              margin-bottom: 20px;
            }

            .pp-about-paragraph {
              font-size: 14.5px;
              line-height: 1.62;
            }

            .pp-about-actions {
              margin-top: 24px;
            }

            .pp-about-button {
              padding: 14px 16px;
              border-radius: 30px;
              font-size: 13.5px;
            }

            .pp-about-icon {
              font-size: 18px;
            }
          }

          @media (max-width: 360px) {
            .pp-about {
              padding-top: 42px;
              padding-bottom: 34px;
              margin-top: 0;
            }

            .pp-about-image {
              justify-content: center;
            }

            .pp-about-image img {
              width: min(260px, 84vw);
              margin-left: auto;
              margin-right: auto;
            }

            .pp-about-title {
              font-size: 24px;
            }

            .pp-about-paragraph {
              font-size: 14px;
              line-height: 1.58;
            }

            .pp-about-button {
              font-size: 13px;
              padding: 13px 14px;
            }
          }
        `}
      </style>

      <div className="pp-about-wrapper">
        <motion.div
          className="pp-about-image"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={aboutImage} alt="Muhammad Zikri" />
        </motion.div>

        <motion.div
          className="pp-about-text"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <h2 className="pp-about-title">Tentang Saya</h2>

          <p className="pp-about-paragraph">
            Saya adalah mahasiswa semester 6 Program Studi Sistem Informasi yang
            memiliki ketertarikan pada pengembangan web, desain antarmuka, dan
            konten digital. Saya terbiasa mengerjakan proyek perancangan
            website, pengembangan aplikasi sederhana, serta desain tampilan yang
            berfokus pada kenyamanan pengguna. Saya ingin terus belajar dan
            memperoleh pengalaman di bidang teknologi informasi, khususnya dalam
            merancang serta mengembangkan aplikasi dan website sebagai solusi
            digital yang bermanfaat, efektif, dan bernilai bagi pengguna.
          </p>

          <div className="pp-about-actions">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kebon+Jeruk,+Jakarta+Barat"
              target="_blank"
              rel="noreferrer"
              className="pp-about-button pp-about-button-location"
            >
              <FaLocationDot className="pp-about-icon pp-about-location-icon" />
              Kebon Jeruk, Jakarta Barat
            </a>

            <a
              href="mailto:mz150904@gmail.com"
              className="pp-about-button pp-about-button-email"
            >
              <SiGmail className="pp-about-icon pp-about-gmail-icon" />
              mz150904@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
