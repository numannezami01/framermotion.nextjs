"use client"
import Image from "next/image";
import style from "./style.module.css";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";  

const index = () => {
   
 const slider = useRef(null)
 const firstText = useRef(null)
 const secondText = useRef(null)

 let xPercent =0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: 0.25,
            onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
    });
    requestAnimationFrame(animate);
});

const animate = () => {
    if (xPercent < -100) {
        xPercent = 0;
    } else if (xPercent > 0) {
        xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });

    xPercent += direction * 0.1;
    requestAnimationFrame(animate);
};








  return (
    <div className={style.landing}>
      <Image src={"/p.jpg"} fill={true} alt="photo" />

      <div className={style.content} data-scroll data-scroll-speed="0.3">
        <Image src={"/arrow.svg"} height={20} width={20} alt="arrow" />
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>

      <div className={style.sliderContainer}>

      <div ref={slider} className={style.slider}>
        <p ref={firstText}>Dennis Snellenberg-</p>
        <p ref={secondText}>Dennis Snellenberg-</p>
      </div>
      </div>
    </div>
  );
};

export default index;
