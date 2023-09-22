import React from 'react'
import style from "./style.module.css"
import Image from "next/image";
import Button from "@/Components/Button";
import Link from   "next/link";
 


const index = () => {
  return (
    <div className={style.lastpage}>
       <div className={style.together}>
        <div className={style.photo}>
          <Image src="/p.jpg" width={100}height={100} alt="" />
          <h3>Let’s work</h3>
        </div>
        <h3>together</h3>
        <Image  className={style.arrow2} src={"/arrow.svg"} height={20} width={20} alt="arrow" />

       </div>
       <div className={style.button2}>
             <h2>Get in touch</h2>
        </div>
        <div className={style.footer}>
          <div className={style.button1} >
            <a className={style.a} href="numannezami217@gmail.com">numannezami217@gmail.com</a>
            <Button/>
          </div>
          <div className={style.button3}>
            <h2>9755230722</h2>
            <Button/>
          </div>
        </div>
        <div className={style.footer2}>
          <div className={style.left}>
            <div className={style.leftcontent}>
              <h6>VERSION</h6>
              <h5>2022 © Edition</h5>
            </div>
            <div className={style.leftcontent}>
            <h6>LOCAL TIME</h6>
              <h5> 06:06 PM GMT+2</h5>
            </div>
          </div>
          <div className={style.right}>
          <h5>SOcial</h5>
        <div className={style.media}>
          <Link className={style.insta} href="https://www.awwwards.com/websites/">awwards</Link>
          <Link className={style.insta} href="https://www.instagram.com/numan_nezami/">instgram</Link>
          <Link className={style.insta} href="https://twitter.com/NumanNezami">tweeter</Link>
          <Link className={style.insta} href="https://www.linkedin.com/in/numannezami/">linkdin</Link>

        </div>
          </div>
        </div>
    </div>
  )
}

export default index