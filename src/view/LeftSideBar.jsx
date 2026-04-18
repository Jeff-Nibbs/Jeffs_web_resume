import { useRef, useEffect } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi'
import cv from '../assets/Daniel-cv.pdf'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function LeftSideBar() {
  gsap.registerPlugin(ScrollTrigger)
  const leftSidebar = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.8 })
        .to('.side-line', { height: 112, duration: 1.2, ease: 'power4.inOut' })
        .from('.side-link1', { autoAlpha: 0, y: -15, duration: 0.35, ease: 'power4.out' }, '-=0.7')
        .from('.side-link2', { autoAlpha: 0, y: -15, duration: 0.35, ease: 'power4.out' }, '-=0.25')
        .from('.side-link3', { autoAlpha: 0, y: -15, duration: 0.35, ease: 'power4.out' }, '-=0.25')
        .from('.side-link4', { autoAlpha: 0, y: -15, duration: 0.35, ease: 'power4.out' }, '-=0.25')
        .to(leftSidebar.current, {
          y: 500,
          scrollTrigger: {
            trigger: leftSidebar.current,
            start: 'top top',
            end: '+=800',
            scrub: 0.2,
          },
        })
    }, leftSidebar)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={leftSidebar} className='flex flex-col justify-center items-center gap-3 lg:gap-5 fixed bottom-2 left-5 lg:left-14 z-10'>
      <a href='https://github.com/Jeff-Nibbs' target='_blank' rel='noopener noreferrer' aria-label='Daniel Nibbs GitHub profile'>
        <FiGithub aria-hidden='true' className='translate-y-0 side-link1 invisible text-slate-400 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400' />
      </a>
      <a href='https://www.linkedin.com/in/daniel-nibbs/' target='_blank' rel='noopener noreferrer' aria-label='Daniel Nibbs LinkedIn profile'>
        <FiLinkedin aria-hidden='true' className='translate-y-0 side-link2 invisible text-slate-400 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400' />
      </a>
      <a href='mailto:danielnibbs100@gmail.com' aria-label='Send email to Daniel Nibbs'>
        <FiMail aria-hidden='true' className='translate-y-0 side-link3 invisible text-slate-400 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400' />
      </a>
      <a href={cv} download aria-label='Download Daniel Nibbs resume PDF'>
        <FiFileText aria-hidden='true' className='translate-y-0 side-link4 invisible text-slate-400 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400' />
      </a>
      <div aria-hidden='true' className='side-line m-0 w-0.5 h-0 bg-slate-400'></div>
    </div>
  )
}

export default LeftSideBar
