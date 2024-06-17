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
            title: "Sr ML Engineer",
            company: "EPAM",
            description: "Working to build scalable ML solutions, LLM's, and RAG architectures.",
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["ml", "mlops", "python", "azure", "llm", "automl"]
        },
        {
            id: "work-3",
            title: "Sr Data Scientist",
            company: "Globant",
            description: "Build AutoML models and make them available to non-technical " +
                "users from a graphical interface.",
            date: "2021-2023",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "BI Manager",
            company: "Rappi",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig