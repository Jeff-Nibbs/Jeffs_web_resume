import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-scroll'
import cv from '../assets/Daniel-cv.pdf'
import logo from '../assets/d-button-icon.svg'
import ButtonLink from './ButtonLink'
import '../view/Nav.css'

function Nav() {
  const nav = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 1.2 })
        .from('.logo', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' })
        .from('.nav1', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, '-=0.2')
        .from('.nav2', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, '-=0.2')
        .from('.nav3', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, '-=0.2')
        .from('.nav4', { autoAlpha: 0, y: -20, duration: 0.4, ease: 'power4.out' }, '-=0.2')
    }, nav)
    return () => ctx.revert()
  }, [])

  return (
    <nav ref={nav} className='flex p-auto justify-center items-center fixed min-w-full py-3 md:px-4 z-10 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800'>
      <Link to='hero' smooth={true} delay={150} duration={1000} isDynamic={true} className='mr-auto cursor-pointer ml-7 hidden md:block'>
        <img src={logo} alt='logo' className='logo w-5 md:w-16' />
      </Link>
      <div className='flex justify-center items-center gap-10 md:gap-7 md:mr-7 font-lato font-light'>
        <Link
          to='about'
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={100}
          className='invisible link nav1 text-sm md:text-lg cursor-pointer text-slate-400'
        >
          ABOUT
        </Link>

        <Link
          to='projects'
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={50}
          className='invisible link nav2 text-sm md:text-lg cursor-pointer text-slate-400'
        >
          PROJECTS
        </Link>

        <Link
          to='contact'
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={100}
          className='invisible link nav3 text-sm md:text-lg cursor-pointer text-slate-400'
        >
          CONTACT
        </Link>

        <ButtonLink href={cv} className='invisible text-sm'>
          RESUME
        </ButtonLink>
      </div>
    </nav>
  )
}

export default Nav
