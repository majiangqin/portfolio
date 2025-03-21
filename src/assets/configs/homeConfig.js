import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Jiangqin Ma</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "A Full Stack Developer",
        "A Data Analyst",
    ],
    about: {
        start: "I recently graduated with a master's degree in Analytics from Georgia Tech and am currently working as a lead data scientist at Connected to Culture. ",
        exit:  "I have a strong interest in data science, with expertise in machine learning, deep learning, " +
            "geospatial data analysis, and cloud technologies."
    },
    workTimeline: [
        {
            id: "work-7",
            title: "Lead Data Scientist",
            company: "Connected to Culture",
            description: "Implemented Machine Learning models for user engagement and content recommendation. \n" +
                     "Enhanced features using MongoDB. Expertise in GCP, full-stack development. " ,
            date: "Dec 2023-Present",
            icon: <FaMobileAlt/>,
            tags: ["ml", "SQL", "python", "GCP", "llm", "chatbot"]
        },
        {
            id: "work-6",
            title: "Data Analyst",
            company: "Welocalize",
            description: "Conducted research per project guidelines to ensure data accuracy across maps, news, and audio tasks. Transformed raw data into actionable insights, enhancing content quality and user experience. Verified and categorized data to support reliable, data-driven decisions for a wide audience. " ,
            date: "Apr 2024-Present",
            icon: <FaChartBar/>,
            tags: ["ml", "llm", "excel"]
        },

        {
            id: "work-5",
            title: "Researcher",
            company: "Georgia Tech",
            description: "Master technologies including 3D laser scanning, LiDAR, and GPS. Employ machine learning, computer vision, AI, pattern\n" +
                "recognition, and signal processing. Innovate in providing spatial-temporal GIS analyses, and dynamic data analytics for\n" +
                "mapping, forecasting, and optimization.",
            date: "Jul 2024-Present",
            icon: <BiRocket/>,
            tags: ["ml", "deeplearning", "python", "gis", "lidar", "gps"]
        },
        {
            id: "work-4",
            title: "AI researcher",
            company: "Blockonomics",
            description: "Built advanced machine learning models to predict Bitcoin mempool behavior, improving transaction fee estimation and user experience. Developed a real-time trend forecasting system, delivering insights to help cryptocurrency users reduce transaction costs.",
            date: "Aug 2024- Feb 2025",
            icon: <DiCodeigniter/>,
            tags: ["ml", "deeplearning", "python", "blockchain", "bitcoin"]
        },
        {
            id: "work-3",
            title: "Data Science Practicum",
            company: "The Home Depots",
            description: "Engineered robust data pipeline to process diverse datasets, including structured product attributes, unstructured text, and\n" +
                "imagery, optimizing for scalability and production readiness.\n" +
                "Implemented and fine-tuned Generative AI models for automated icon generation, achieving production-quality results and\n" +
                "significant time savings in design workflows",
            date: "Apr 2024- Aug 2024",
            icon: <FaRobot/>,
            tags: ["ml", "deeplearning", "python", "generative ai", "hugging face"]
        },
       {
            id: "work-2",
            title: "Financial Analyst",
            company: "New York Life",
            description: "Performed financial analysis to assess clients' insurance and investment needs, providing tailored solutions for long-term security. Developed customized financial plans with a focus on life insurance, annuities, and retirement strategies. Presented financial products and offered guidance to help clients make informed decisions for their personal and business goals.",
            date: "Jan 2022 - Dec 2022",
            icon: <FaChartLine/>,
            tags: ["ml", "forecasting", "risk assessment", "financial analysis", "SQL"]
        },
        {
            id: "work-1",
            title: "Software Engineer",
            company: "CHC Navigation",
            description: "Integrated GPS and GIS analytics, performing data cleaning, transformation, visualization, and optimized software testing and documentation processes to support business decisions.",
            date: "Jun 2015 - May 2020",
            icon: <FaMapMarkedAlt/>,
            tags: ["GPS Analytics", "Data Visualization", "Documentation", "Cross-functional Collaboration", "SQL"]
        },
    ]
}


export default homeConfig