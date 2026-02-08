import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";
import cv from "../assets/Daniel-cv.pdf";
import logo from "../assets/d-button-icon.svg";
import "../view/Nav.css";
function Nav() {
  // set up ref for nav
  const nav = useRef(null);

  // build gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".logo", {
          autoAlpha: 0,
          y: -50,
          duration: 0.5,
          ease: "power4.out",
          delay: 1,
        })
        .from(
          ".nav1",
          { autoAlpha: 0, y: -50, duration: 1, ease: "power4.out" },
          "-=0.7",
        )
        .from(
          ".nav2",
          { autoAlpha: 0, y: -50, duration: 1, ease: "power4.out" },
          "-=0.7",
        )
        .from(
          ".nav3",
          { autoAlpha: 0, y: -50, duration: 1, ease: "power4.out" },
          "-=0.7",
        )
        .from(
          ".nav4",
          { autoAlpha: 0, y: -50, duration: 1, ease: "power4.out" },
          "-=0.7",
        );
    }, nav);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={nav}
      className="flex p-auto justify-center items-center fixed min-w-full py-3 md:px-4 z-10">
      <Link
        to="hero"
        smooth={true}
        delay={150}
        duration={1000}
        isDynamic={true}
        className="mr-auto cursor-pointer ml-7 hidden md:block ">
        <img src={logo} alt="logo" className="logo w-5 md:w-16 " />
      </Link>
      <div className="flex justify-center items-center gap-10 md:gap-7 md:mr-7 font-lato font-light">
        <Link
          to="about"
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={100}
          className="invisible link nav1 text-sm md:text-lg cursor-pointer text-gray-600">
          ABOUT
        </Link>

        <Link
          to="projects"
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={50}
          className="invisible link nav2 text-sm md:text-lg cursor-pointer text-gray-600">
          PROJECTS
        </Link>

        <Link
          to="contact"
          smooth={true}
          delay={150}
          duration={1000}
          isDynamic={true}
          offset={100}
          className="invisible link nav3 text-sm md:text-lg cursor-pointer text-gray-600">
          CONTACT
        </Link>

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="invisible nav4 flex justify-center item-center border-2 rounded py-1 px-2 text-sm md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400">
          RESUME
        </a>
      </div>
    </nav>
  );
}

export default Nav;
