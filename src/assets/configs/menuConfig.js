import React from "react";

import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";

import { BsMedium } from "react-icons/bs";

import { FaBook } from "react-icons/fa";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Publications",
      path: "/blogs",
      icon: <FaBook size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
