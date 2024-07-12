import React from "react";
import "./Header.css"
import  image from "../../Assets/Financial-freedom.jpg" 
import {motion} from 'framer-motion'

// import {Stars} from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'

const container = {
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, y: 0},
    
}


export const Header = () => {
  return (
    <div className="header section__padding" id="home">
        {/* <div className="stars">
            <Canvas>
                <Stars radius={100} count={2500} factor={4} fade speed={2}/>
            </Canvas>
        </div> */}
        <div className= "header-content">
            <motion.h1 variants={container} initial="hidden" animate="visible"  transition={{duration:0.6,  ease:"easeInOut"}} className="gradient__text">
            "Unlock Financial Freedom with BudgetSmith &#9472; Every Expense Shapes Your Wealth."
            </motion.h1>
        

            <motion.div variants={container} initial="hidden" animate="visible" transition={{duration:0.6,  ease:"easeInOut"}} className="header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="visible" transition={{delay:3,  ease:"easeInOut"}} className="header-content__people">
                {/* <img src={people} /> */}
                <p>1,600 people requested access a visit in last 24 hours</p>
            </motion.div>
        </div>

        <motion.div initial={{opacity: 0, y: -100}} 
        animate={{ opacity: 1 , y:0, rotate: [90,0], scale: [3,1]}}
        
        transition={{duration:2, ease: "easeInOut", delay: 0.6}}
         className="header-image">
            <img src={image} alt="financial freedom"></img>
        </motion.div>
        
    </div>
  )
}
