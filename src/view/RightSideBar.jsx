import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function RightSideBar() {
  const rightSideBar = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to('.side-line2', { height: 112, duration: 1.2, ease: 'power4.inOut' })
        .from('.side-email', { autoAlpha: 0, y: -15, duration: 0.5, ease: 'power4.out' }, '-=0.5')
        .to(rightSideBar.current, {
          y: 500,
          scrollTrigger: {
            trigger: rightSideBar.current,
            start: 'top top',
            end: '+=800',
            scrub: 0.2,
          },
        })
    }, rightSideBar)
    return () => ctx.revert()
  }, [])

  const textRotation = { writingMode: 'vertical-rl' }

  return (
    <div ref={rightSideBar} className='flex flex-col justify-center items-center gap-5 fixed bottom-2 right-5 lg:right-14 z-10'>
      <a
        href='mailto:danielnibbs100@gmail.com'
        style={textRotation}
        aria-label='Send email to Daniel Nibbs'
        className='side-email invisible text-slate-400 text-sm lg:text-lg cursor-pointer font-lato font-normal hover:text-sky-400'
      >
        danielnibbs100@gmail.com
      </a>

      <div aria-hidden='true' className='side-line2 w-0.5 h-0 bg-slate-400'></div>
    </div>
  )
}

export default RightSideBar
