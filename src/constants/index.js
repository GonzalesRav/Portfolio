import {
javascript,
typescript,
html,
css,
reactjs,
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
threejs,
angular,
bootstrap,
queen,
burgerqueen,
datalovers,
mdlinks,
fems,
ghibli,
npm,
sn,
dev,
design,
deploy
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},
{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Web Design",
    icon: design,
},
{
    title: "Web Developement",
    icon: dev,
},
{
    title: "GIS Developement",
    icon: deploy,
}
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "TypeScript",
    icon: typescript,
},
{
    name: "Angular",
    icon: angular,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "Bootstrap",
    icon: bootstrap,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
}
];

const experiences = [
{
    title: "Burger Queen",
    tech_stack: "Typescript, Angular, Bootstrap",
    icon: queen,
    iconBg: "#E6DEDD",
    date: "April 2023 - May 2021",
    image: burgerqueen,
    source_code_link: "https://github.com/GonzalesRav/DEV003-burger-queen-api-client",
    points: [
    "A restaurant Progressive Web App (PWA) to manage orders, products and staff.",
    "Collaborating with other developers using Git",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
{
    title: "NPM Library Md-Links",
    tech_stack: "JavaScript, NodeJs, Axios",
    icon: npm,
    iconBg: "#E6DEDD",
    date: "February 2023 - April 2023",
    image: mdlinks,
    source_code_link: "https://github.com/GonzalesRav/DEV003-md-links",
    points: [
    "The library extracts URLs from markdown files, validates their status through HTTP requests, and provides statistics.",
    "Use of callbacks and asynchronous functions.",
    "Use of Git for control versioning.",
    "Unit tests with Jest."
    ],
},
{
    title: "Social Network - Fems",
    tech_stack: "JavaScript, Firebase, Jest",
    icon: sn,
    iconBg: "#E6DEDD",
    date: "January 2023 - February 2023",
    image: fems,
    source_code_link: "https://github.com/GonzalesRav/DEV003-social-network",
    points: [
    "Development of a social network for women, built as a Single Page Application (SPA).",
    "Use of Git to collaborate with other developers and versioning control.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
{
    title: "Data Lovers - Studio Ghibli",
    tech_stack: "JavaScript, HTML5, CSS",
    icon: ghibli,
    iconBg: "#E6DEDD",
    date: "December 2022 - January 2023",
    image: datalovers,
    source_code_link: "https://github.com/GonzalesRav/DEV003-data-lovers",
    points: [
    "Development of a web application for data management and visualization about Ghibli's World.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
];

//Testimonials define here


export { services, technologies, experiences };