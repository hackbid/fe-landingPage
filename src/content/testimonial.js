import bayu from "../assets/bayu.png";
import dwiki from "../assets/Dwiki.png";
import hayyik from "../assets/hayyik.png";
import mitra from "../assets/mitra.png";

import "./style/testimonial.css";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  const popUpAnimation = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      animation.start({
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.main
        initial={{
          x: "-200",
          y: "-200",
        }}
        animate={animation}
        className=" h-64 mb-80"
      >
        <h1 className="text-center mb-24 text-6xl">Developers</h1>
        <ul className="flex gap-14 justify-center items-center" style={{}}>
          <li
            className="bg-slate-500 h-64 w-64 relative induk"
            style={{ borderRadius: "2rem", overflow: "hidden" }}
          >
            <section className="flex absolute tansitions">
              <main className="color transforms text-center px-5 py-7 flex flex-col gap-5">
                <p>
                  "Everyone can learn code, but only fearless that will be great
                  developer"
                </p>
                <p className="mt-2">
                  "Lead" <br /> &<br />" fullstack Developers" <br />
                  (Hayyik Lanaa R)
                </p>
              </main>
              <main className="w-96 image">
                <img src={hayyik} alt="luffy" style={{ height: "20rem" }} />
              </main>
            </section>
          </li>
          <li
            className="bg-slate-500 h-64 w-64 relative induk"
            style={{ borderRadius: "2rem", overflow: "hidden" }}
          >
            <section className="flex absolute tansitions">
              <main className="color transforms text-center px-5 py-16 flex flex-col gap-3">
                <p>"Who conquers himself is Mighty."</p>
                <p className="mt-10">
                  "Design & fullstack developer" <br />
                  (Bayuaji Arinanda)
                </p>
              </main>
              <main className="w-96 image">
                <img src={bayu} alt="Naruto" style={{ height: "17rem" }} />
              </main>
            </section>
          </li>
          <li
            className="bg-slate-500 h-64 w-64 relative induk"
            style={{ borderRadius: "2rem", overflow: "hidden" }}
          >
            <section className="flex absolute tansitions">
              <main className="color transforms text-center px-5 py-12 flex flex-col gap-10">
                <p>
                  "Unlock the power to create and innovate with the limitless
                  possibilities of programming."
                </p>
                <p className="mt-3">
                  "fullstack Developer" <br />
                  (Mitra Surya U)
                </p>
              </main>
              <main className="w-96 image">
                <img src={mitra} alt="Tanjiro" style={{ height: "17rem" }} />
              </main>
            </section>
          </li>
          <li
            className="bg-slate-500 h-64 w-64 relative induk"
            style={{ borderRadius: "2rem", overflow: "hidden" }}
          >
            <section className="flex absolute tansitions">
              <main className="color transforms text-center px-5 py-12 flex flex-col gap-10">
                <p>
                  "Coding is not just a skill, it's a mindset - a way of
                  thinking that empowers you to turn ideas into reality."
                </p>
                <p className="mt-3">
                  "fullstack Developer" <br />
                  (Dwiki Okvian P)
                </p>
              </main>
              <main className="w-96 image">
                <img src={dwiki} alt="Tanjiro" style={{ height: "17rem" }} />
              </main>
            </section>
          </li>
        </ul>
      </motion.main>
    </div>
  );
};
export default Testimonial;
