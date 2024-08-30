import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import fastapiSklearn from "../images/fastapi_sklearn.png";
import icon from "../images/icon.png";
import blog3 from "../images/blog3.png"
import blog4 from "../images/blog4.png"
import blog5 from "../images/blog5.png"


const blogConfig = [
    {
        id: "blog-1",
        title: "Deep Image-to-Recipe Translation",
        links: [
            {
                name: "article",
                url: "http://arxiv.org/abs/2407.00911",
                icon: <ImBook />,
            },
            {
                name: "repo",
                url: "https://github.com/majiangqin/Image-to-Recipe-Translation-using-AI",
                icon: <AiFillGithub />
            }
        ],
        image: fastapiSklearn,
        description: "Developed an AI system for automatic food image analysis and recipe generation using CNNs and RNNs. " +
            "Implemented transfer learning and fine-tuned pre-trained models like ResNet, LSTM, Transformer, and Inception.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "Fine-Tuning Stable Diffusion XL for Stylistic Icon Generation",
        links: [
            {
                name: "article",
                url: "https://doi.org/10.48550/arXiv.2407.08513",
                icon: <ImBook />,
            },
            {
                name: "repo",
                url: "https://github.com/majiangqin/Fine-Tuning-Stable-Diffusion-XL-for-Stylistic-Icon-Generation_",
                icon: <AiFillGithub />
            }
        ],
        image: icon,
        description: "Engineered a robust data pipeline to process diverse datasets, including structured product attributes, unstructured text, and imagery, optimizing for scalability and production readiness. " +
            "Implemented and fine-tuned Generative AI models for automated icon generation, achieving production-quality results and significant time savings in design workflows.",
        target: "_blank"
    },
    {
        id: "blog-3",
        title: "High-Resolution Remote Sensing Image Automatic Segmentation by Gabor Texture Feature",
        links: [
            {
                name: "article",
                url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/7495/74953F/High-resolution-remote-sensing-image-automatic-segmentation-by-Gabor-texture/10.1117/12.833940.short#_=_",
                icon: <ImBook />,
            }
        ],
        image: blog3,
        description: "This paper presents a high-resolution remote sensing image segmentation method, using distributions of local binary patterns/contrasts (LBP/C) of Gabor texture features to measure the similarity of adjacent image regions during segmentation. " +
            "The method is integrated into a split-merge plus refinement framework. Segmentation is realized by comparing correlation coefficients between different Gabor feature LBP/C histograms of sub-regions. The image can be segmented into different regions that often correspond to different land-use or other objects. " +
            "Experimental results show that it is effective to use Gabor texture features in high-resolution remote sensing image segmentation.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "Investigation on Map Digital Error Distribution Characteristics",
        links: [
            {
                name: "article",
                url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nZ3eMX4AAAAJ&citation_for_view=nZ3eMX4AAAAJ:IjCSPb-OGe4C",
                icon: <ImBook />,
            }
        ],
        image: blog4,
        description: "This article indicates that within different methods of map digital error distribution statistics, error data is found to comply with a P Fan distribution with a P value within 1.0 to 2.0 or NL distribution better. " +
            "It also compares fitting results between these two kinds of distributions.",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Design of the LiDAR Control System and Optimization of System Joint Adjustment",
        links: [
            {
                name: "article",
                url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nZ3eMX4AAAAJ&citation_for_view=nZ3eMX4AAAAJ:UeHWp8X0CEIC",
                icon: <ImBook />,
            }
        ],
        image: blog5,
        description: "The LiDAR control system at Wuhan University communicates with a multi-channel photon counter SR430 and a laser reflection platform via GPIB and serial buses, respectively. " +
            "This system enables the automation of LiDAR observations and real-time processing of observation data. Based on the normal distribution characteristics of the optimal observation point offset, an automatic search function was incorporated into the daily alignment of the emission optical axis, " +
            "reducing the time required for system joint adjustment to approximately 30 minutes and simplifying the operation steps. " +
            "During the LiDAR observation of meteor trails from 21:20 on November 11, 2006, to 6:20 on November 12, 9 hours of effective data were obtained using this system. " +
            "Experimental results demonstrate that the control system is easy to operate and runs stably.",
        target: "_blank"
    }
];

export default blogConfig;
