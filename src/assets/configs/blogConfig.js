
import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiArxiv} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"
import icon from "../images/icon.png"
import {ImBook} from "react-icons/im";

const blogConfig = [
    {
        id: "blog-1",
        title: "Deep Image-to-Recipe Translation",
        links: [
            {
                name: "article",
                url: "http://arxiv.org/abs/2407.00911",
                icon: <ImBook/>,
            },
            {
                name: "repo",
                url: "https://github.com/majiangqin/Image-to-Recipe-Translation-using-AI",
                icon: <AiFillGithub/>
            }
        ],
        image: fastapiSklearn,
        description: "Developed AI system for automatic food image analysis and recipe generation using CNNs and RNNs.\n" +
            "Implemented transfer learning and fine-tuned pre-trained models like ResNet, LSTM, Transformer and Inception.",
        target: "_blank"
    }

        {
        id: "blog-2",
        title: "Fine-Tuning Stable Diffusion XL for Stylistic Icon Generation",
        links: [
            {
                name: "article",
                url: "https://doi.org/10.48550/arXiv.2407.08513",
                icon: <ImBook/>,
            },
            {
                name: "repo",
                url: "https://github.com/majiangqin/Fine-Tuning-Stable-Diffusion-XL-for-Stylistic-Icon-Generation_",
                icon: <AiFillGithub/>
            }
        ],
        image: icon,
        description: "Engineered robust data pipeline to process diverse datasets, including structured product attributes, unstructured text, and imagery, optimizing for scalability and production readiness.\n" +
            "Implemented and fine-tuned Generative AI models for automated icon generation, achieving production-quality results and significant time savings in design workflows.",
        target: "_blank"
    }
]

export default blogConfig