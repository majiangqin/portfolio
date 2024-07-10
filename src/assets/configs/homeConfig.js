import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Julia Ma</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "A Full Stack Developer",
    ],
    about: {
        start: "I am currently studying at Georgia Tech and working as a lead data scientist at Connected to Culture. ",
        exit:  "I have a strong interest in data science, with expertise in machine learning, deep learning, " +
            "geospatial data analysis, and cloud technologies."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Lead Data Scientist",
            company: "Connected to Culture",
            description: "Implemented ML models for user engagement and content recommendation. " +
                     "Enhanced features using MongoDB. Expertise in GCP, full-stack development. " ,
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["ml", "python", "GCP", "llm", "chatbot"]
        },
        {
            id: "work-3",
            title: "AI research intern",
            company: "Blockonomics",
            description: "Developed AI models to predict Bitcoin mempool behavior, formulating and adapting features for optimal model training\n" +
                "Analyzed Bitcoin blockchain internals, and iteratively improved model accuracy through rigorous testing and refinement.",
            date: "Aug 2024- Oct 2024",
            icon: <DiCodeigniter/>,
            tags: ["ml", "deeplearning", "python", "blockchain", "bitcoin"]
        },
        {
            id: "work-2",
            title: "Student Researcher",
            company: "Georgia Tech",
            description: "Master technologies including 3D laser scanning, LiDAR, and GPS. Employ machine learning, computer vision, AI, pattern\n" +
                "recognition, and signal processing. Innovate in providing spatial-temporal GIS analyses, and dynamic data analytics for\n" +
                "mapping, forecasting, and optimization.",
            date: "Jul 2024-Present",
            icon: <FaMobileAlt/>,
            tags: ["ml", "deeplearning", "python", "gis", "lidar", "gps"]
        },
    ]
}


export default homeConfig