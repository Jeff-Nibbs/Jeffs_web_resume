import { useRef, useEffect } from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import cv from "../assets/Daniel-cv.pdf";
// import gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LeftSideBar() {
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  // set up ref for leftSidebar
  const leftSidebar = useRef(null);

  // build gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".side-line", {
          height: 112,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 1,
        })
        .from(
          ".side-link1",
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.1,
          },
          "-=1",
        )
        .from(
          ".side-link2",
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.1,
          },
          "-=0.85",
        )
        .from(
          ".side-link3",
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.1,
          },
          "-=0.7",
        )
        .from(
          ".side-link4",
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.1,
          },
          "-=0.7",
        )
        .to(leftSidebar.current, {
          y: 500,
          scrollTrigger: {
            trigger: leftSidebar.current,
            start: "top top",
            end: "+=800",
            scrub: 0.2,
          },
        });
    }, leftSidebar);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={leftSidebar}
      className="flex flex-col justify-center items-center gap-3 lg:gap-5 fixed bottom-2 left-5 lg:left-14 z-10">
      <a
        href="https://github.com/Jeff-Nibbs"
        target="_blank"
        rel="noopener noreferrer">
        <FiGithub className="translate-y-0 side-link1 invisible text-gray-600 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-nibbs/"
        target="_blank"
        rel="noopener noreferrer">
        <FiLinkedin className="translate-y-0 side-link2 invisible text-gray-600 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400" />
      </a>
      <a href="mailto:danielnibbs100@gmail.com">
        <FiMail className="translate-y-0 side-link3 invisible text-gray-600 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400" />
      </a>
      <a href={cv} download>
        <FiFileText className="translate-y-0 side-link4 invisible text-gray-600 text-3xl lg:text-4xl cursor-pointer hover:text-sky-400" />
      </a>
      <div className="side-line m-0 w-0.5 h-0 bg-gray-600"></div>
    </div>
  );
}

export default LeftSideBar;
