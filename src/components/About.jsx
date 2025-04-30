import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        // options={{
        //   max:45,
        //   scale:1,
        //   speed:450
        // }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-25 h-25 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>

    <motion.p
    variants={fadeIn("",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I am a Front-end Web Developer and I enjoy challenges that allow me 
    to learn new tools. I have experience using agile methodologies along 
    with tools like Trello, GitHub Projects, and Slack to keep my workflow 
    in line. I am always eager to continue learning and aspire to become 
    a full-stack developer.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-evenly'>
      {/*  la informacion se imprime desde... services */}
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About, 'about')