"use client"
import React, { useEffect, useRef, useState} from "react";
import { ScrollTrigger } from "gsap/all";  
import style from "./style.module.css";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";




const index = () => {
 const [isActive, setIsActive] = useState(false)

 const btn = useRef(null)

 


  return (
    <div className={style.header}>
      <div className={style.headerNav}>
        <div className={style.headerNavlogo}>
          <p className={style.copy}>©</p>
          <div className={style.something}>
            <p className={style.codeby}>code by numan nezami</p>
          </div>
        </div>
        <div className={style.headerLinks}>
          <ul>
            <li>
              <Link className={style.link} href="/#">Work</Link>
              <div className={style.dots}></div>
            </li>
            <li>
              <Link  className={style.link} href="/#">About</Link>
              <div className={style.dots}></div>

            </li>
            <li>
              <Link  className={style.link} href="/#">Contact</Link>
              <div className={style.dots}></div>

            </li>
          </ul>
        </div>
      </div>
         <div className={style.headerButtonContainer}>
          <div  className={style.button}onClick={()=>setIsActive(!isActive)}>
            <div className={`${style.burger} ${isActive ? style.burgerActive:""}`}>

            </div>
          </div>
       </div>
         <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
     </div>
  );
};

export default index;
