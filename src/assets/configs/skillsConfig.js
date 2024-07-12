// import { SiPython, SiPostgresql, SiDocker, SiReact, SiJavascript, SiCss3, SiHtml5, SiWindowsterminal, SiSnowflake, SiPowerbi, SiMongodb, SiGooglecloud, SiTableau, SiOpencv, SiR } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
// import { FaGitAlt, FaGlobe } from "react-icons/fa";
// import React from "react";
//
// const skillsConfig = {
//   mainSkills: [
//     { id: "skills-0", className: "skill-icon", icon: <SiPython size={50}/>, text: "Python" },
//     { id: "skills-1", className: "skill-icon", icon: <SiPostgresql size={50}/>, text: "Postgres" },
//     { id: "skills-2", className: "skill-icon", icon: <SiDocker size={50}/>, text: "Docker" },
//     { id: "skills-3", className: "skill-icon", icon: <FaGitAlt size={50}/>, text: "Git" },
//     { id: "skills-4", className: "skill-icon", icon: <SiMongodb size={50}/>, text: "MongoDB" },
//     { id: "skills-5", className: "skill-icon", icon: <SiGooglecloud size={50}/>, text: "Google Cloud Platform" },
//     { id: "skills-6", className: "skill-icon", icon: <SiR size={50}/>, text: "R" }
//   ],
//   complementarySkills: [
//     { id: "skills-7", className: "skill-icon", icon: <GrMysql size={50}/>, text: "MySQL" },
//     { id: "skills-8", className: "skill-icon", icon: <SiWindowsterminal size={50}/>, text: "Bash" },
//     { id: "skills-9", className: "skill-icon", icon: <SiSnowflake size={50}/>, text: "Snowflake" },
//     { id: "skills-10", className: "skill-icon", icon: <SiJavascript size={50}/>, text: "JS" },
//     { id: "skills-11", className: "skill-icon", icon: <SiCss3 size={50}/>, text: "CSS 3" },
//     { id: "skills-12", className: "skill-icon", icon: <SiHtml5 size={50}/>, text: "HTML 5" },
//     { id: "skills-13", className: "skill-icon", icon: <SiReact size={50}/>, text: "React" },
//     { id: "skills-14", className: "skill-icon", icon: <SiPowerbi size={50}/>, text: "Power BI" },
//     { id: "skills-15", className: "skill-icon", icon: <SiTableau size={50}/>, text: "Tableau" },
//     { id: "skills-16", className: "skill-icon", icon: <SiOpencv size={50}/>, text: "OpenCV" },
//     { id: "skills-17", className: "skill-icon", icon: <FaGlobe size={50}/>, text: "ArcGIS" }
//   ]
// }
//
// export default skillsConfig;
//


import { SiPython, SiDocker, SiReact, SiJavascript, SiWindowsterminal, SiSnowflake, SiPowerbi, SiMongodb, SiGooglecloud, SiTableau, SiOpencv, SiR } from "react-icons/si";
import { FaGitAlt, FaGlobe, FaDatabase } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import React from "react";

const skillsConfig = {
  mainSkills: [
    { id: "skills-0", className: "skill-icon", icon: <SiPython size={50}/>, text: "Python" },
    { id: "skills-2", className: "skill-icon", icon: <FaGitAlt size={50}/>, text: "Git" },
    { id: "skills-3", className: "skill-icon", icon: <SiMongodb size={50}/>, text: "MongoDB" },
    { id: "skills-4", className: "skill-icon", icon: <SiGooglecloud size={50}/>, text: "Google Cloud Platform" },
    { id: "skills-5", className: "skill-icon", icon: <SiR size={50}/>, text: "R" },
    { id: "skills-6", className: "skill-icon", icon: <FaDatabase size={50}/>, text: "SQL" }
  ],
  complementarySkills: [
    { id: "skills-7", className: "skill-icon", icon: <AiOutlineApi size={50}/>, text: "RESTful APIs" },
    { id: "skills-8", className: "skill-icon", icon: <SiWindowsterminal size={50}/>, text: "Bash" },
    { id: "skills-9", className: "skill-icon", icon: <SiSnowflake size={50}/>, text: "Snowflake" },
    { id: "skills-10", className: "skill-icon", icon: <SiJavascript size={50}/>, text: "JS" },
    { id: "skills-11", className: "skill-icon", icon: <SiReact size={50}/>, text: "React" },
    { id: "skills-12", className: "skill-icon", icon: <SiPowerbi size={50}/>, text: "Power BI" },
    { id: "skills-13", className: "skill-icon", icon: <SiTableau size={50}/>, text: "Tableau" },
    { id: "skills-14", className: "skill-icon", icon: <SiOpencv size={50}/>, text: "OpenCV" },
    { id: "skills-15", className: "skill-icon", icon: <FaGlobe size={50}/>, text: "ArcGIS" },
    { id: "skills-1", className: "skill-icon", icon: <SiDocker size={50}/>, text: "Docker" },
  ]
}

export default skillsConfig;