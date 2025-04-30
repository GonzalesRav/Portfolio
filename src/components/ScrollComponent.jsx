import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { github } from "../assets"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
<VerticalTimelineElement
contentStyle={{background: '#1d1836', color: '#fff'}}
contentArrowStyle={{borderRight: '10px solid #232631'}}
date={experience.date}
iconStyle={{background: experience.iconBg}}
icon={
    <div className="flex justify-center items-center w-full h-full">
    <img
    src={experience.icon}
    alt={experience.title}
    className="w-[60%] h-[60%] object-contain"
    />
    </div>
}
>
<div>
    <h3 className="text-white text-[24px] font-bold">
    {experience.title}
    </h3>
    <div 
    className="bg-tertiary p-5  sm:w-[360px]"
    >
        <div className="relative rounded-2xl w-[full] h-[230px]">
            <img 
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={() => window.open(experience.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center 
                items-center cursor-pointer">
                    <img src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
    <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
</div>

<ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
    <li key={`experience-point-${index}`}
    className="text-white-100 text-[14px] pl-1 tracking-wider"
    > {point}
    </li>
    ))}
</ul>
</VerticalTimelineElement>
)

const ScrollComponent = () => {
return (
<>
{/* <motion.div variants={textVariant()}> */}
<p className={styles.sectionSubText}>
    What I have done so far</p>
<h2 className={styles.sectionHeadText}>Work Experience</h2>
{/* </motion.div> */}


<div className="mt-20 flex flex-col">
    <VerticalTimeline>
    {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience}/>
    ))}
    </VerticalTimeline>
</div>
</>
)
}

export default SectionWrapper(ScrollComponent, "work")