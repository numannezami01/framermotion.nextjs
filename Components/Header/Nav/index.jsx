import React from "react";
import style from "./style.module.css";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";


const variants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  open: {
    opacity: 1,
    x: 0,
    Transition: {
      ease: easeInOut,
      durration: 0.3,
      staggerChildren: 0.08,
      delayChildrn: 0.2,
    },
  },
  closed: {
    opacity: 1,
    x: "100%",
    Transition: {
      durration: 0.8,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const index = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="open" 
      exit="closed"
      className={style.nav}
    >
    <div className={style.navigation}>
      <h6>navigation</h6>
      <div className={style.links}>
        <div className={style.wrapper}>
          <div className={style.gola}></div>
          <Link className={style.home} href="#">home</Link>
          
        </div>
        <div className={style.wrapper}>
          <div className={style.gola}></div>
          <Link className={style.home} href="#">work</Link>
          
        </div>
        <div className={style.wrapper}>
          <div className={style.gola}></div>
          <Link className={style.home} href="#">about</Link>
          
        </div>
        <div className={style.wrapper}>
          <div className={style.gola}></div>
          <Link className={style.home} href="#">contact</Link>
          
        </div>
 
      </div>
      <div className={style.social}>
        <h5>SOcial</h5>
        <div className={style.media}>
          <Link className={style.insta} href="https://www.awwwards.com/websites/">awwards</Link>
          <Link className={style.insta} href="https://www.instagram.com/numan_nezami/">instgram</Link>
          <Link className={style.insta} href="https://twitter.com/NumanNezami">tweeter</Link>
          <Link className={style.insta} href="https://www.linkedin.com/in/numannezami/">linkdin</Link>

        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default index;
