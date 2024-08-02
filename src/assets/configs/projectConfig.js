import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import {FaBookOpen} from "react-icons/fa";
import {AiFillIeCircle } from 'react-icons/ai';
import {AiFillYoutube } from 'react-icons/ai';

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"
import chatbot from "../images/chatbot.png"
import lidar from "../images/lidar.png"
import food from "../images/food.png"
import sdxl from "../images/sdxl.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Chatbot for Travel Mobile App",
        links: [
            {
                name: "repo",
                url: "https://github.com/Connected-To-Culture",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/Connected-To-Culture/trip-planner-back-end/tree/chatbot-testing",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/Connected-To-Culture/trip-planner-front-end/tree/chatbot-test",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "docs",
                url: "https://www.connectedtoculture.org/",
                icon: <AiFillIeCircle/>,
            }
        ],
        image: chatbot,
        description: "Gained proficiency in Google Cloud Platform and full stack development, integrating AI by utilizing Dialogflow CX and Vertex\n" +
            "AI to integrate a chatbot into the travel mobile app. Enabled the chatbot to translate African languages, provide customer\n" +
            "service, and assist in making customer travel plans.",
        target: "_blank"
    },
        {
        id: "project-4",
        title: "Fine-Tuning Stable Diffusion XL for Stylistic Icon Generation",
        links: [
            {
                name: "repo",
                url: "https://github.com/majiangqin/Fine-Tuning-Stable-Diffusion-XL-for-Stylistic-Icon-Generation_",
                icon: <AiFillGithub/>,
            },
            {
                name: "docs",
                url: "\n" +
                    "https://doi.org/10.48550/arXiv.2407.08513",
                icon: <ImBook/>,
            }
        ],
        image: sdxl,
       description: "Engineered robust data pipeline to process diverse datasets, including structured product attributes, unstructured text, and imagery, optimizing for scalability and production readiness.\n" +
            "Implemented and fine-tuned Generative AI models for automated icon generation, achieving production-quality results and significant time savings in design workflows.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Smart City Infrastructure Program",
        links: [
            {
                name: "docs",
                url: "https://vip.gatech.edu/teams/vvc",
                icon: <AiFillIeCircle/>,
            }
        ],
        image: lidar,
        description: "Master technologies including 3D laser scanning, LiDAR, and GPS. Employ machine learning, computer vision, AI, pattern recognition, and signal processing. Innovate in providing spatial-temporal GIS analyses, and dynamic data analytics for mapping, forecasting, and optimization.\n" +
            "Identify asset deficiencies such as potholes, cracks, and hazardous roadway sections, enabling predictive and proactive safety analyses and improvements.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Enhancing Drug Design with Advanced Protein Stability Prediction Tools",
        links: [
            {
                name: "repo",
                url: "https://github.com/majiangqin/Enhancing-Drug-Design-with-Advanced-Protein-Stability-Prediction-Deep-Learning-Tools",
                icon: <AiFillGithub/>
            },
            {
                name: "subscription",
                url: "https://www.youtube.com/watch?v=IbQWr89lMok&list=PLiuFBGOczQsFA_utn86-8eFfRbii-nopO",
                icon: <AiFillYoutube/>
            }
        ],
        image: kafkaMl,
        description: "Developed an integrated approach using graph neural networks and evolutionary scale modeling for protein thermostability\n" +
            "predictions, enhancing drug discovery workflows. Employed AlphaFold2 to predict 3D protein structures, facilitating stability\n" +
            "studies due to mutations. \n"  +
            "Designed interactive web application for 3D protein structure visualization and manipulation.\n",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Image-to-Recipe Translation Using AI",
        links: [
            {
                name: "repo",
                url: "https://github.com/majiangqin/Image-to-Recipe-Translation-using-AI",
                icon: <AiFillGithub/>
            },
            {
                name: "docs",
                url: "http://arxiv.org/abs/2407.00911",
                icon: <ImBook/>,
            }
        ],
        image: food,
        description: "Developed AI system for automatic food image analysis and recipe generation using CNNs and RNNs.\n" +
            "Implemented transfer learning and fine-tuned pre-trained models like ResNet, LSTM, Transformer and Inception.",
        target: "_blank"
    },
]

export default projectConfig