// import React from "react"
// const About = () => {
//   return (
//     <div>About</div>
//   )
// }
// export default About

import React from "react"
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc"

const ServiceCard=({index,title,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>

   </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
         I have a profound enthusiasm for delving into diverse tech stacks and immersing myself in the latest trends and technologies. Furthermore, I am strongly dedicated to enhancing my skills and remaining well-versed in the most recent advancements in the industry. A key asset of mine is my unceasing eagerness to acquire novel information and broaden my understanding.Furthermore, I take joy in photography, discovering new locations, immersing myself in music, interacting with literature, and playing the keyboard.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service,index)=> (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")