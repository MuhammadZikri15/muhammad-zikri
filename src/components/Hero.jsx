import { useState } from "react";
import heroImage from "../assets/zikri.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  const [nameDone, setNameDone] = useState(false);
  const [buttonsDone, setButtonsDone] = useState(false);

  const handleNameDone = () => {
    setNameDone(true);

    setTimeout(() => {
      setButtonsDone(true);
    }, 900);
  };

  return (
    <section id="home" className="pp-hero">
      <style>
        {`
          .pp-hero,
          .pp-hero * {
            box-sizing: border-box;
          }

          .pp-hero {
            /* DESKTOP */
            --hero-photo-bottom-desktop: 27px;
            --hero-photo-left-desktop: 50%;
            --hero-photo-width-desktop: 72%;

            /* MOBILE DEFAULT */
            --hero-photo-bottom-mobile: 8px;
            --hero-photo-left-mobile: 50%;
            --hero-photo-width-mobile: 75%;

            width: 100%;
            min-height: 100vh;
            padding: calc(var(--nav-height, 84px) + 44px) var(--container-x, 8%) 72px;
            background: #ffffff;
            color: #000000;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(340px, 500px);
            align-items: center;
            gap: clamp(32px, 5vw, 72px);
            position: relative;
            overflow: hidden;
          }

          .pp-hero-content {
            width: 100%;
            max-width: 680px;
            min-width: 0;
            position: relative;
            z-index: 5;
            order: 1;
          }

          .pp-hero-subtitle {
            color: #000000;
            font-size: clamp(12px, 1vw, 14px);
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: clamp(2px, 0.35vw, 3px);
            margin: 0 0 20px 0;
          }

          .pp-hero-heading {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 26px;
            width: 100%;
            min-width: 0;
          }

          .pp-hero-title-top {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            color: transparent;
            -webkit-text-fill-color: #ffffff;
            -webkit-text-stroke: clamp(1.8px, 0.18vw, 2.5px) #f59e0b;
            text-stroke: clamp(1.8px, 0.18vw, 2.5px) #f59e0b;
            font-size: clamp(42px, 4.6vw, 72px);
            line-height: 1.05;
            font-weight: 900;
            letter-spacing: clamp(-2px, -0.12vw, -1px);
            opacity: 1;
            overflow-wrap: normal;
          }

          .pp-hero-name-wrapper {
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
          }

          .pp-hero-name,
          .pp-hero-name span {
            display: block;
            max-width: 100%;
            color: #000000;
            -webkit-text-fill-color: #000000;
            font-size: clamp(44px, 4.5vw, 70px);
            line-height: 1.05;
            font-weight: 900;
            letter-spacing: clamp(-2px, -0.12vw, -1px);
            margin: 0;
            padding: 0;
            opacity: 1;
            white-space: nowrap;
          }

          .pp-hero-reveal {
            opacity: 0;
            visibility: hidden;
            transform: translateY(30px);
            transition:
              opacity 0.75s ease,
              transform 0.75s ease,
              visibility 0.75s ease;
          }

          .pp-hero-reveal.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .pp-hero-description {
            width: 100%;
            max-width: 640px;
            color: #000000;
            font-size: clamp(15.5px, 1.25vw, 18px);
            line-height: 1.75;
            font-weight: 500;
            margin: 0 0 34px;
          }

          .pp-hero-buttons {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
          }

          .pp-hero-buttons.pp-hero-reveal {
            transform: translateY(24px);
          }

          .pp-hero-buttons.pp-hero-reveal.show {
            transform: translateY(0);
          }

          .pp-hero-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 160px;
            padding: 17px 42px;
            border-radius: 40px;
            font-size: 15px;
            font-weight: 800;
            line-height: 1;
            text-decoration: none;
            cursor: pointer;
            position: relative;
            transition: all 0.28s ease;
          }

          .pp-hero-btn-primary {
            background: #f3e4c8;
            color: #000000;
            border: 2px solid #2f2f2f;
            box-shadow: 6px 6px 0 #2f2f2f;
          }

          .pp-hero-btn-primary:hover {
            background: #ead6b0;
            color: #000000;
            border-color: #000000;
            box-shadow: 3px 3px 0 #000000;
            transform: translate(3px, 3px);
          }

          .pp-hero-btn-secondary {
            background: #f59e0b;
            color: #000000;
            border: 2px solid #2f2f2f;
            box-shadow: 6px 6px 0 #92400e;
          }

          .pp-hero-btn-secondary:hover {
            background: #fb923c;
            color: #000000;
            border-color: #000000;
            box-shadow: 3px 3px 0 #7c2d12;
            transform: translate(3px, 3px);
          }

          .pp-hero-image {
            width: 100%;
            min-width: 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            z-index: 3;
            order: 2;
          }

          .pp-hero-float {
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .pp-hero-image-wrapper {
            position: relative;
            width: clamp(330px, 30vw, 470px);
            aspect-ratio: 4.4 / 5.1;
            height: auto;
            overflow: visible;
          }

          .pp-hero-frame-back {
            position: absolute;
            inset: 18px -18px -18px 18px;
            background: #f3e4c8;
            border: clamp(3px, 0.35vw, 5px) solid #000000;
            z-index: 1;
          }

          .pp-hero-frame-main {
            position: absolute;
            inset: 0;
            background: #f3e4c8;
            border: clamp(3px, 0.35vw, 5px) solid #000000;
            z-index: 2;
            overflow: hidden;
          }

          .pp-hero-frame-inner {
            position: absolute;
            inset: clamp(18px, 1.7vw, 24px);
            border: clamp(2px, 0.2vw, 3px) solid #000000;
            z-index: 5;
            pointer-events: none;
          }

          .pp-hero-photo {
            position: absolute;
            left: var(--hero-photo-left-desktop);
            bottom: var(--hero-photo-bottom-desktop);
            translate: -50% 0;
            width: var(--hero-photo-width-desktop);
            height: auto;
            object-fit: contain;
            object-position: bottom center;
            z-index: 4;
            transform-origin: bottom center;
            filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.14));
          }

          @media (max-width: 1280px) {
            .pp-hero {
              grid-template-columns: minmax(0, 1fr) minmax(310px, 440px);
              gap: 40px;
            }

            .pp-hero-content {
              max-width: 620px;
            }

            .pp-hero-title-top {
              font-size: clamp(40px, 4.2vw, 62px);
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(42px, 4.2vw, 64px);
            }

            .pp-hero-description {
              max-width: 590px;
              font-size: 16px;
              line-height: 1.7;
            }

            .pp-hero-image-wrapper {
              width: clamp(310px, 29vw, 430px);
            }
          }

          @media (max-width: 1100px) {
            .pp-hero {
              grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
              gap: 34px;
              padding-left: var(--container-x, 6%);
              padding-right: var(--container-x, 6%);
              --hero-photo-width-desktop: 73%;
            }

            .pp-hero-content {
              max-width: 560px;
            }

            .pp-hero-title-top {
              font-size: clamp(38px, 4vw, 56px);
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(40px, 4vw, 58px);
            }

            .pp-hero-description {
              max-width: 540px;
              font-size: 15.5px;
            }

            .pp-hero-image-wrapper {
              width: clamp(280px, 28vw, 370px);
            }
          }

          @media (max-width: 992px) {
            .pp-hero {
              min-height: auto;
              padding: calc(var(--nav-height, 80px) + 34px) var(--container-x, 6%) 64px;
              grid-template-columns: 1fr;
              gap: 42px;
              text-align: center;
              overflow-x: hidden;
              overflow-y: visible;

              --hero-photo-bottom-mobile: 10px;
              --hero-photo-left-mobile: 50%;
              --hero-photo-width-mobile: 75%;
            }

            .pp-hero-image {
              order: 1;
              justify-content: center;
              width: 100%;
              margin: 0 auto;
            }

            .pp-hero-float {
              justify-content: center;
              max-width: 100%;
            }

            .pp-hero-image-wrapper {
              width: min(330px, 72vw);
            }

            .pp-hero-photo {
              left: var(--hero-photo-left-mobile);
              bottom: var(--hero-photo-bottom-mobile);
              width: var(--hero-photo-width-mobile);
            }

            .pp-hero-content {
              width: 100%;
              max-width: 720px;
              margin: 0 auto;
              order: 2;
            }

            .pp-hero-heading {
              align-items: center;
            }

            .pp-hero-name,
            .pp-hero-name span {
              white-space: normal;
              text-align: center;
            }

            .pp-hero-description {
              max-width: 680px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
            }

            .pp-hero-buttons {
              justify-content: center;
            }
          }

          @media (max-width: 768px) {
            .pp-hero {
              padding-top: calc(var(--nav-height, 76px) + 28px);
              padding-bottom: 56px;
              gap: 36px;

              --hero-photo-bottom-mobile: 9px;
              --hero-photo-left-mobile: 50%;
              --hero-photo-width-mobile: 75%;
            }

            .pp-hero-subtitle {
              font-size: 12px;
              letter-spacing: 2.5px;
              margin-bottom: 16px;
            }

            .pp-hero-title-top {
              font-size: clamp(36px, 10vw, 54px);
              -webkit-text-stroke: 2px #f59e0b;
              text-stroke: 2px #f59e0b;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(38px, 10vw, 56px);
              line-height: 1.08;
            }

            .pp-hero-description {
              font-size: 15.5px;
              line-height: 1.7;
              margin-bottom: 30px;
            }

            .pp-hero-image-wrapper {
              width: min(310px, 74vw);
            }

            .pp-hero-frame-back {
              inset: 16px -16px -16px 16px;
              border-width: 4px;
            }

            .pp-hero-frame-main {
              border-width: 4px;
            }

            .pp-hero-frame-inner {
              inset: 18px;
              border-width: 2px;
            }
          }

          @media (max-width: 576px) {
            .pp-hero {
              padding-left: 5%;
              padding-right: 5%;
              padding-top: calc(var(--nav-height, 76px) + 26px);
              padding-bottom: 50px;
              gap: 32px;

              /* INI BAGIAN UTAMA UNTUK TAMPILAN MOBILE KAMU 496px */
              --hero-photo-bottom-mobile: 16px;
              --hero-photo-left-mobile: 50%;
              --hero-photo-width-mobile: 75%;
            }

            .pp-hero-heading {
              margin-bottom: 22px;
            }

            .pp-hero-title-top {
              font-size: clamp(34px, 11vw, 48px);
              -webkit-text-stroke: 1.8px #f59e0b;
              text-stroke: 1.8px #f59e0b;
              letter-spacing: -1px;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(34px, 11vw, 48px);
              letter-spacing: -1px;
            }

            .pp-hero-description {
              font-size: 15px;
              line-height: 1.65;
              margin-bottom: 28px;
            }

            .pp-hero-buttons {
              width: 100%;
              flex-direction: column;
              align-items: stretch;
              gap: 16px;
            }

            .pp-hero-btn {
              width: 100%;
              min-width: 100%;
              padding: 17px 32px;
              border-radius: 40px;
            }

            .pp-hero-image-wrapper {
              width: min(270px, 68vw);
            }

            .pp-hero-frame-back {
              inset: 14px -14px -14px 14px;
              border-width: 3px;
            }

            .pp-hero-frame-main {
              border-width: 3px;
            }

            .pp-hero-frame-inner {
              inset: 16px;
              border-width: 2px;
            }
          }

          @media (max-width: 390px) {
            .pp-hero {
              padding-top: calc(var(--nav-height, 74px) + 24px);
              gap: 30px;

              --hero-photo-bottom-mobile: 6px;
              --hero-photo-left-mobile: 50%;
              --hero-photo-width-mobile: 76%;
            }

            .pp-hero-subtitle {
              font-size: 11px;
              letter-spacing: 2px;
            }

            .pp-hero-title-top {
              font-size: clamp(31px, 10.5vw, 40px);
              -webkit-text-stroke: 1.5px #f59e0b;
              text-stroke: 1.5px #f59e0b;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(32px, 10.5vw, 42px);
            }

            .pp-hero-description {
              font-size: 14.5px;
              line-height: 1.62;
            }

            .pp-hero-image-wrapper {
              width: min(245px, 66vw);
            }

            .pp-hero-btn {
              padding: 16px 26px;
              font-size: 14px;
            }
          }

          @media (max-width: 340px) {
            .pp-hero {
              --hero-photo-bottom-mobile: 4px;
              --hero-photo-left-mobile: 50%;
              --hero-photo-width-mobile: 77%;
            }

            .pp-hero-title-top {
              font-size: 30px;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: 31px;
            }

            .pp-hero-description {
              font-size: 14px;
            }

            .pp-hero-image-wrapper {
              width: min(225px, 64vw);
            }
          }
        `}
      </style>

      <div className="pp-hero-content">
        <h4 className="pp-hero-subtitle">PORTFOLIO</h4>

        <div className="pp-hero-heading">
          <TypeAnimation
            sequence={[500, "Hallo, Saya"]}
            wrapper="h1"
            speed={200}
            cursor={false}
            repeat={0}
            className="pp-hero-title-top"
          />

          <div className="pp-hero-name-wrapper">
            <h2 className="pp-hero-name">
              <TypeAnimation
                sequence={[
                  1800,
                  "Muhammad Zikri",
                  () => {
                    handleNameDone();
                  },
                ]}
                speed={200}
                cursor={false}
                repeat={0}
              />
            </h2>
          </div>
        </div>

        <p
          className={
            nameDone
              ? "pp-hero-description pp-hero-reveal show"
              : "pp-hero-description pp-hero-reveal"
          }
        >
          Mahasiswa semester 6 jurusan Sistem Informasi di Universitas Bina
          Sarana Informatika dengan minat pada pengembangan web, desain
          antarmuka, dan teknologi digital. Berpengalaman mengerjakan berbagai
          proyek kampus maupun individu, mulai dari perancangan UI website
          hingga pengembangan aplikasi. Memiliki ketertarikan dalam
          menggabungkan keterampilan teknis dan pemecahan masalah kreatif untuk
          menciptakan solusi digital yang efektif, fungsional, dan menarik.
        </p>

        <div
          className={
            buttonsDone
              ? "pp-hero-buttons pp-hero-reveal show"
              : "pp-hero-buttons pp-hero-reveal"
          }
        >
          <motion.a
            href="#projects"
            className="pp-hero-btn pp-hero-btn-primary"
            whileTap={{ scale: 0.96 }}
          >
            Kunjungi
          </motion.a>

          <motion.a
            href="#contact"
            className="pp-hero-btn pp-hero-btn-secondary"
            whileTap={{ scale: 0.96 }}
          >
            Kontak
          </motion.a>
        </div>
      </div>

      <div className="pp-hero-image">
        <div className="pp-hero-float">
          <div className="pp-hero-image-wrapper">
            <span className="pp-hero-frame-back"></span>
            <span className="pp-hero-frame-main"></span>
            <span className="pp-hero-frame-inner"></span>

            <motion.img
              src={heroImage}
              alt="Muhammad Zikri"
              className="pp-hero-photo"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
