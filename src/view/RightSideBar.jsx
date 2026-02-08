import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function RightSideBar() {
  // set up ref for rightSideBar
  const rightSideBar = useRef(null);
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // build gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".side-line2", {
          height: 112,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 1,
        })
        .from(
          ".side-email",
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.8,
            ease: "elastic.out(1,0.3)",
            delay: 0.3,
          },
          "-=1",
        )
        .to(rightSideBar.current, {
          y: 500,
          scrollTrigger: {
            trigger: rightSideBar.current,
            start: "top top",
            end: "+=800",
            scrub: 0.2,
          },
        });
    }, rightSideBar);
    return () => ctx.revert();
  }, []);

  // to rotate email text
  const textRotation = {
    writingMode: "vertical-rl",
  };
  return (
    <div
      ref={rightSideBar}
      className="flex flex-col justify-center items-center gap-5 fixed bottom-2 right-5 lg:right-14 z-10">
      <a
        href="mailto:danielnibbs100@gmail.com"
        style={textRotation}
        className="side-email invisible text-gray-600 text-sm lg:text-lg cursor-pointer font-lato font-normal hover:text-sky-400">
        danielnibbs100@gmail.com
      </a>

      <div className="side-line2 w-0.5 h-0 bg-gray-600"></div>
    </div>
  );
}

export default RightSideBar;
