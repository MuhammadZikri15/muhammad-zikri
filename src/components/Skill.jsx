
import { motion } from "framer-motion";


function Skill() {
  const MicrosoftOfficeIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14 10L34 4L52 12V52L34 60L14 54V10Z" fill="#D83B01" />
      <path d="M34 4V60L52 52V12L34 4Z" fill="#F25022" />
      <path d="M22 19L34 15L44 20V44L34 49L22 45V19Z" fill="#FF8C00" />
      <path d="M14 10L34 18V49L14 54V10Z" fill="#B7472A" />
    </svg>
  );

  const ExcelIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M38 8H56C58.2 8 60 9.8 60 12V52C60 54.2 58.2 56 56 56H38V8Z"
        fill="#21A366"
      />
      <path d="M38 8H56V20H38V8Z" fill="#33C481" />
      <path d="M38 20H56V32H38V20Z" fill="#107C41" />
      <path d="M38 32H56V44H38V32Z" fill="#185C37" />
      <path d="M38 44H56V56H38V44Z" fill="#107C41" />
      <path d="M6 14L40 8V56L6 50V14Z" fill="#107C41" />
      <path
        d="M16 23H22L26 30L30 23H36L29 33L36 44H30L26 36L21 44H15L23 33L16 23Z"
        fill="white"
      />
    </svg>
  );

  const FigmaIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );

  const FlutterIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M34 6L10 30L18 38L50 6H34Z" fill="#54C5F8" />
      <path d="M34 30L22 42L34 54H50L38 42L50 30H34Z" fill="#01579B" />
      <path d="M22 42L30 34L38 42L30 50L22 42Z" fill="#29B6F6" />
      <path d="M34 54H50L38 42L30 50L34 54Z" fill="#0D47A1" />
    </svg>
  );

  const DartIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 18L26 6H50L58 14V38L46 50H22L6 34V26L14 18Z"
        fill="#0175C2"
      />
      <path d="M14 18L46 50H22L6 34V26L14 18Z" fill="#13B9FD" />
      <path d="M26 6L58 38V14L50 6H26Z" fill="#40C4FF" />
      <path d="M14 18H38L58 38L46 50L14 18Z" fill="#01579B" />
      <path d="M14 18L6 26V34L22 50H46L14 18Z" fill="#29B6F6" />
    </svg>
  );

  const HtmlIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 6H54L50 54L32 60L14 54L10 6Z" fill="#E34F26" />
      <path d="M32 10H50L47 51L32 56V10Z" fill="#EF652A" />
      <path
        d="M21 18H43L42.5 24H27.5L28 30H42L40.8 45L32 48L23.2 45L22.6 37H28.5L28.8 40.5L32 41.6L35.2 40.5L35.6 35.8H22.4L21 18Z"
        fill="white"
      />
    </svg>
  );

  const CssIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 6H54L50 54L32 60L14 54L10 6Z" fill="#1572B6" />
      <path d="M32 10H50L47 51L32 56V10Z" fill="#33A9DC" />
      <path
        d="M21 18H43L42.4 24H28L28.4 29.5H42L40.8 45L32 48L23.2 45L22.6 37H28.5L28.8 40.5L32 41.6L35.2 40.5L35.6 35.5H22.3L21 18Z"
        fill="white"
      />
      <path d="M28 24H42.4L42 29.5H28.4L28 24Z" fill="#EBEBEB" />
    </svg>
  );

  const SQLIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="32" cy="15" rx="20" ry="8" fill="#003B57" />
      <path
        d="M12 15V45C12 49.4 21 53 32 53C43 53 52 49.4 52 45V15"
        fill="#0F80CC"
      />
      <ellipse cx="32" cy="45" rx="20" ry="8" fill="#003B57" />
      <ellipse cx="32" cy="15" rx="20" ry="8" fill="#1E9DEB" />
      <path
        d="M20 31C24 34 40 34 44 31"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        SQL
      </text>
    </svg>
  );

  const MySQLIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 36C16 24 28 18 44 18C52 18 58 22 60 28C54 26 48 27 43 31C37 36 32 42 22 42C17 42 13 40 10 36Z"
        fill="#00758F"
      />
      <path
        d="M28 34C34 24 43 19 56 20C50 24 47 30 48 38C42 34 36 33 28 34Z"
        fill="#F29111"
      />
      <path
        d="M17 39C26 46 41 47 54 40C48 50 31 55 17 47C12 44 9 40 7 36C10 37 13 38 17 39Z"
        fill="#00618A"
      />
      <circle cx="46" cy="25" r="2" fill="white" />
    </svg>
  );

  const PhpMyAdminIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="32" cy="16" rx="19" ry="7" fill="#6C78AF" />
      <path
        d="M13 16V42C13 45.9 21.5 49 32 49C42.5 49 51 45.9 51 42V16"
        fill="#8892BF"
      />
      <ellipse cx="32" cy="42" rx="19" ry="7" fill="#4F5B93" />
      <path
        d="M20 27H30C35 27 38 30 38 34C38 38 35 41 30 41H26L25 47H18L20 27Z"
        fill="white"
      />
      <path
        d="M26 33H30C31.5 33 32.5 33.7 32.5 35C32.5 36.4 31.5 37 30 37H25L26 33Z"
        fill="#8892BF"
      />
      <path d="M39 27H46L43 47H36L39 27Z" fill="white" />
    </svg>
  );

  const skills = [
    {
      name: "Microsoft Office",
      icon: <MicrosoftOfficeIcon />,
    },
    {
      name: "Microsoft Excel",
      icon: <ExcelIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
    {
      name: "Laravel",
      icon: "https://cdn.simpleicons.org/laravel",
    },
    {
      name: "Flutter",
      icon: <FlutterIcon />,
    },
    {
      name: "Dart",
      icon: <DartIcon />,
    },
    {
      name: "HTML",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS",
      icon: <CssIcon />,
    },
    
    {
      name: "MySQL",
      icon: <MySQLIcon />,
    },
    {
      name: "phpMyAdmin",
      icon: <PhpMyAdminIcon />,
    },
  ];


return (
  <motion.section
    id="skills"
    className="skills"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
    </motion.div>

    <div className="skill-grid">
      {skills.map((skill, index) => (
        <motion.div
          className="skill-card"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <div className="skill-icon">
            {typeof skill.icon === "string" ? (
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
              />
            ) : (
              skill.icon
            )}
          </div>

          <h3>{skill.name}</h3>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
}

export default Skill;
