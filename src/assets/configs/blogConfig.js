
import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiArxiv} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"
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
        description: "Developed AI system for automatic food image analysis and recipe generation using CNNs and RNNs\n" +
            "Implemented transfer learning and fine-tuned pre-trained models like ResNet, LSTM, Transformer and Inception.",
        target: "_blank"
    }
]

export default blogConfig