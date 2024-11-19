import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/img.jpg)] bg-left lg:bg-[20%] bg-cover'
    style={{backgroundSize:"35%"}}>
      
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] text-accent font-bold leading-tight flex justify-center items-center gap-10'>
          <p data-aos="zoom-in-up">I &apos;m</p>
          <p data-aos="zoom-in-up">Asmarah</p>
        
        </div>
      </div>
    </div>
  )
}

export default Hero
