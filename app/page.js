"use client" 
import Image from 'next/image'
 import style  from './style.module.css';
 import Landing  from '@/Components/Landing';
 import Gallery   from '@/Components/Gallery';
 import SlidingImages from "@/Components/SlidingImages"
 import Info from "@/Components/Info"
 import Lastpage from "@/Components/Lastpage"
//  import Nav from "@/Components/Header/Nav"
 


import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'




 export default function homepage(){

  useEffect(() => {
    const locomotivescroll = new LocomotiveScroll();
  },[])   
  
  return(
    <div className={style.main}>
    <Landing />
    <Info />
    <Gallery />
    <SlidingImages />
    <Lastpage />
    </div>
  )
      
 }