import { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import placeholder1 from '../assets/dn-site-placeholder.jpg'
import placeholder2 from '../assets/loan-calculator-placeholder.jpg'
import placeholder3 from '../assets/sous-chef-helper-placeholder.jpg'
import picSmall1 from '../assets/dn-site-small.jpg'
import picSmall2 from '../assets/loan-calculator-small.jpg'
import picSmall3 from '../assets/sous-chef-helper-small.jpg'
import '../view/Portfolio.css'
import ButtonLink from './ButtonLink'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Portfolio() {
  const portfolio = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from('.title2', {
          autoAlpha: 0,
          x: 400,
          y: 200,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.title2',
            start: 'center bottom',
            end: 'bottom center',
            scrub: 0.2,
          },
        })
        .from('.portCard1', {
          autoAlpha: 0,
          x: -400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard1',
            start: '35% 90%',
            end: 'bottom 60%',
            scrub: 0.2,
          },
        })
        .from('.portCard2', {
          autoAlpha: 0,
          x: 400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard2',
            start: '35% 90%',
            end: 'bottom 60%',
            scrub: 0.2,
          },
        })
        .from('.portCard3', {
          autoAlpha: 0,
          x: -400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard3',
            start: '35% 90%',
            end: 'bottom 60%',
            scrub: 0.2,
          },
        })
    }, portfolio)
    return () => ctx.revert()
  }, [])

  return (
    <section id='projects' ref={portfolio} className='max-w-xs md:max-w-5xl mx-auto md:pt-16'>
      <h2 className='title2 invisible text-6xl md:text-9xl my-32 font-bold text-center text-slate-100 font-LeagueSpartan uppercase'>Projects</h2>

      <div className='portCard1 mb-12 invisible flex justify-center text-transparent rounded md:-ml-28'>
        <div className='w-1/2 hidden md:block rounded overflow-hidden relative border border-slate-800'>
          <LazyLoadImage
            src={picSmall1}
            alt='Screenshot of Don Nuva Web Solutions marketing site'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder1}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>

        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading text-lg md:text-6xl font-bold font-LeagueSpartan uppercase'>Don Nuva Web Solutions</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>Javascript</span>
          </p>
          <p className='text-sm md:text-base font-light font-lato text-slate-400 mt-2 mb-1'>
            A responsive marketing site built with HTML, CSS, and vanilla JavaScript. Focused on clean layout, performance, and mobile-first design without relying on a framework.
          </p>
          <div className='flex'>
            <ButtonLink href='https://github.com/Jeff-Nibbs/Front-sass-page' className='mt-7 mr-2 md:mr-5'>
              GITHUB
            </ButtonLink>
            <ButtonLink href='https://jeff-nibbs.github.io/Front-sass-page/' className='mt-7'>
              <span className='hidden md:inline mr-1'>LIVE </span> DEMO
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className='portCard2 justify-center mb-12 invisible flex text-transparent rounded md:-mr-28'>
        <div className='w-1/2 mr-5 flex flex-col justify-center text-right'>
          <h2 className='heading text-lg md:text-6xl font-semibold font-LeagueSpartan'>LOAN CALCULATOR</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>Javascript /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>React.js</span>
          </p>
          <p className='text-sm md:text-base font-light font-lato text-slate-400 mt-2 mb-1'>
            A React application for calculating loan payments, monthly breakdowns, and total interest. Built to practice state management, controlled inputs, and financial computation logic.
          </p>
          <div className='flex ml-auto'>
            <ButtonLink href='https://github.com/Jeff-Nibbs/loan-calulator' className='mt-7 mr-2 md:mr-5'>
              GITHUB
            </ButtonLink>
            <ButtonLink href='https://loan-calulator.vercel.app/' className='mt-7'>
              <span className='hidden md:inline mr-1'>LIVE</span> DEMO
            </ButtonLink>
          </div>
        </div>
        <div className='w-1/2 rounded hidden md:block overflow-hidden relative border border-slate-800'>
          <LazyLoadImage
            src={picSmall2}
            alt='Screenshot of the Loan Calculator React application'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder2}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>
      </div>

      <div className='portCard3 mb-12 invisible flex justify-center text-transparent rounded md:-ml-28'>
        <div className='w-1/2 rounded hidden md:block overflow-hidden relative border border-slate-800'>
          <LazyLoadImage
            src={picSmall3}
            alt='Screenshot of the Sous-Chef Helper recipe application'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder3}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading text-lg md:text-6xl mb-3 font-semibold font-LeagueSpartan uppercase'>Sous-Chef Helper</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>Javascript /</span>
            <span className='text-xs md:text-xl pl-1 text-slate-400 font-light font-lato'>API</span>
          </p>
          <p className='text-sm md:text-base font-light font-lato text-slate-400 mt-2 mb-1'>
            A JavaScript app that fetches recipes from a third-party API based on ingredients the user has on hand. Demonstrates async data fetching, DOM manipulation, and API integration.
          </p>
          <div className='flex'>
            <ButtonLink href='https://github.com/Jeff-Nibbs/sous-chef-helper' className='mt-7 mr-2 md:mr-5'>
              GITHUB
            </ButtonLink>
            <ButtonLink href='https://jeff-nibbs.github.io/sous-chef-helper/' className='mt-7'>
              <span className='hidden md:inline mr-1'>LIVE</span> DEMO
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
