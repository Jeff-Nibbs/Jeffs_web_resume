import { useRef, useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

import { gsap } from 'gsap'
function Hero() {
  // set up ref for hero
  const hero = useRef(null)

  //useEffect for gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from('.hero-text1', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, 0.2)
        .from('.hero-text2', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, 0.3)
        .from('.hero-text3', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, 0.4)
        .to('.line', { width: '83.33%', duration: 0.9, ease: 'power4.inOut' }, 0.3)
        .from('.title', { autoAlpha: 0, duration: 0.7, ease: 'power4.out' }, 1.0)
        .from('.hero-text4', { autoAlpha: 0, y: -15, duration: 0.5, ease: 'power4.out' }, 1.4)
    }, hero)
    return () => ctx.revert()
  }, [])

  return (
    <section id='hero' ref={hero} className='flex justify-center items-end md:items-center h-96 md:h-screen relative'>
      <LeftSideBar />
      <RightSideBar />
      <div className='relative text-center lg:w-auto w-7/12'>
        <div className='flex gap-1 md:gap-2 lg:gap-3 text-left text-sm md:text-lg lg:text-xl lg:pl-3 text-slate-400 font-light font-lato'>
          <div className='hero-text1 invisible hidden md:inline '>HI</div>
          <div className='hero-text2 invisible'>I</div>
          <div className='hero-text3 invisible'>AM</div>
        </div>
        <div aria-hidden='true' className='line h-1.5 w-0 bg-sky-400 absolute top-1 right-0 md:top-2.5 lg:top-3.5'></div>
        <h1 className='title invisible text-6xl lg:text-9xl pt-3.5 font-bold text-slate-100 font-LeagueSpartan'>DANIEL NIBBS</h1>
        <div className='hero-text4 invisible text-right font-light text-sm md:text-lg lg:text-2xl leading-5 text-sky-400 font-lato'>
          DEVELOPER · DEVOPS · SECURITY
        </div>
      </div>
    </section>
  )
}

export default Hero
