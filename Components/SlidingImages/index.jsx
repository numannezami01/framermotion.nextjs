import React from "react";
import style from "./style.module.css";
import { useRef } from "react";
import { motion ,useScroll,useTransform } from "framer-motion";

const slider1 = [
  { color: "#e3e5e7", src: "first.jpg" },
  { color: "#BBDFFF", src: " second.jpg" },
  { color: "#e3e5e7", src: " third.jpg" },
  { color: "#e3e5e7", src: " fourth.jpg" },
];
const slider2 = [
  { color: "#e3e5e7", src: "fift.jpg" },
  { color: "#e3e5e7", src: "sixth.jpg" },
  { color: "#BBDFFF", src: "seventh.jpg" },
  { color: "#e3e5e7", src: "eight.jpg" },
];





const index = () => {
  const slider1ref = useRef(null);
  const slider2ref = useRef(null);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    trigger: container,
    start: "top bottom",
});
const x1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
const x2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
   

  return (
    <div className={style.slidingimages}ref={container}>

      < motion.div Ref={slider1ref} 
       className={style.slider} 
       style={{x:x1}}
  
       >

        {slider1.map((photo, index) => {
          return (
            <div
              className={style.photo}
              key={index}
              style={{ backgroundColor: photo.color }}
            >
              <img src={`${photo.src}`} alt="" />
            </div>
          );
        })}
      </motion.div>

      < motion.div ref={slider2ref} 
      className={style.slider} 
      style={{x:x2}}>

        {slider2.map((photo, index) => {
          return (
            <div
              className={style.photo}
              key={index}
              style={{ backgroundColor: photo.color }}
            >
              <img src={`${photo.src}`} alt="" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default index;
