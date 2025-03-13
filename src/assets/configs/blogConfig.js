import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import fastapiSklearn from "../images/fastapi_sklearn.png";
import icon from "../images/icon.png";
import blog3 from "../images/blog3.png"
import blog4 from "../images/blog4.png"
import blog5 from "../images/blog5.png"
import blog6 from "../images/blog6.png"
import bitcoin from "../images/bitcoin.png"
import blog8 from "../images/blog8.png"


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
        description: "This paper introduces a method for segmenting high-resolution remote sensing images using local binary patterns/contrasts of Gabor texture features within a split-merge framework, effectively distinguishing different land-use areas.",
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
        description: "The LiDAR control system at Wuhan University communicates with a photon counter and laser platform, automating observations and real-time data processing. An automatic alignment feature reduces setup time to about 30 minutes. Tests showed the system is easy to use and stable, collecting 9 hours of meteor trail data.",
        target: "_blank"
    },
        {
        id: "blog-6",
        title: "An efficient hybrid downscaling framework to\n" +
            "estimate high-resolution river hydrodynamics",
        links: [
            {
                name: "article",
                url: "https://doi.org/10.5194/egusphere-2024-3816",
                icon: <ImBook />,
            }
        ],
        image: blog6,
        description: "This paper presents an efficient hybrid modeling approach (LSG) for accurately downscaling river flow depth and velocity, greatly reducing errors and computational cost, enabling detailed flood modeling.",
        target: "_blank"
    },
        {
        id: "blog-7",
        title: "omprehensive Modeling Approaches for Forecasting Bitcoin Transaction Fees: A\n" +
            "Comparative Study",
        links: [
            {
                name: "article",
                url: "https://arxiv.org/abs/2502.01029",
                icon: <ImBook />,
            },
            {
                name: "repo",
                url: "https://github.com/majiangqin/bitcoin",
                icon: <AiFillGithub />
            }
        ],
        image: bitcoin,
        description: "Developed a 24-hour Bitcoin fee forecasting model using mempool metrics, network parameters, and historical trends. SARIMAX outperformed deep learning models, providing insights for optimizing fee-sensitive transactions.",
        target: "_blank"
    },
        {
        id: "blog-8",
        title: "Precision in Mutation: Enhancing Drug Design\n" +
            "with Advanced Protein Stability Prediction Tools",
        links: [
            {
                name: "article",
                url: "https://arxiv.org/abs/2501.07014",
                icon: <ImBook />,
            },
                  {
                name: "repo",
                url: "https://github.com/majiangqin/Enhancing-Drug-Design-with-Advanced-Protein-Stability-Prediction-Deep-Learning-Tools/tree/main",
                icon: <AiFillGithub />
            }
        ],
        image: blog8,
        description: "Developed ThermoMPNN+, a deep learning model using structural and sequence embeddings to predict protein stability changes from single-point mutations. Built an interactive web app with 3D protein visualization to enhance drug discovery and protein engineering.",
        target: "_blank"
    },

];

export default blogConfig;
