import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "CSS", "HTML"],
  },
  { label: "Backend", skills: ["Node.js", "Python", "SQL", "Bash"] },
  { label: "Tools", skills: ["Linux", "Git", "Figma", "Homelab"] },
  { label: "Learning", skills: ["Cybersecurity", "AI / LLMs", "DevOps"] },
];

function About() {
  const about = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().from(about.current, {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: about.current,
          start: "center center",
          end: "+=600",
          pin: true,
          scrub: 0.2,
        },
      });
    }, about);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={about}
      className="invisible flex justify-center items-center">
      <div className="max-w-5xl p-6 grid md:gap-12 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col pt-16 md:pt-0 justify-center">
          <h2 className="text-3xl md:text-7xl font-LeagueSpartan text-slate-100 mb-5">
            ABOUT ME
            <div
              aria-hidden="true"
              className="line2 h-1.5 w-4/5 bg-sky-400 mt-2"></div>
          </h2>
          <p className="text-sm md:text-lg font-light font-lato text-slate-400 leading-relaxed">
            Self-taught developer and career changer. Years of managing teams in
            busy kitchens taught me more about staying calm, communicating
            clearly, and delivering under pressure than any classroom would.
          </p>
          <p className="text-sm md:text-lg font-light font-lato text-slate-400 leading-relaxed mt-4">
            I build full-stack web apps, run my Linux homelab, and I&apos;m
            actively learning cybersecurity and AI/LLM integration. I learn by
            building real things, not watching tutorials.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5 pt-10 md:pt-0">
          {skillGroups.map(group => (
            <div key={group.label}>
              <p className="text-xs font-lato font-light text-slate-500 uppercase tracking-widest mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs md:text-sm font-lato font-light text-slate-300 border border-slate-700 rounded px-3 py-1 hover:border-sky-500 hover:text-sky-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
