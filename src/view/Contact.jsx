import { useRef } from 'react'
import ButtonLink from './ButtonLink'

function Contact() {
  const contact = useRef(null)

  return (
    <section id='contact' ref={contact} className='flex justify-center items-center h-screen relative'>
      <div className='flex flex-col text-center gap-5'>
        <h2 className='text-8xl pt-3.5 font-bold text-slate-100 font-LeagueSpartan'>LET&apos;S TALK</h2>
        <p className='leading-snug w-4/5 md:w-3/5 mx-auto text-xl font-light font-lato text-slate-400'>
          I&apos;m actively looking for my next role in DevOps, infrastructure, security, or AI engineering. I&apos;m open to full-time positions, contract work, and conversations that might lead somewhere useful. No pitch required &mdash; just reach out.
        </p>
        <ButtonLink href='mailto:danielnibbs100@gmail.com' external={false} size='lg' className='mt-6 mx-auto'>
          SAY HELLO
        </ButtonLink>
      </div>
    </section>
  )
}

export default Contact
