import Hp from "../assets/hp.png";
import Apk from "../assets/ss.png";
import "./style/about.css";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
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
    <>
      <div ref={ref}>
        <motion.h1
          initial={{
            x: "200",
            y: "200",
          }}
          animate={animation}
          className="text-6xl mb-10 font-medium text-center"
        >
          About Us
        </motion.h1>
        <motion.section
          initial={{
            x: "100vw",
          }}
          animate={animation}
          className="grid grid-cols-35-65  max-w-6xl m-auto justify-around items-center mb-28"
        >
          <main className="relative">
            {/* <span className="satu"></span> */}
            <img
              src={Apk}
              alt="Aplikasi"
              className="absolute"
              style={{
                height: "32rem",
                width: "16rem",
                top: 30,
                left: 75,
                borderRadius: 40,
              }}
            />
            <img src={Hp} alt="product" className="screen absolute top-0" />
          </main>
          <ul>
            <li
              className="h-32 py-10 px-5 mb-10 borders text-center items-end"
              style={{ backgroundColor: "#FEC72C" }}
            >
              This auction app has an easy-to-understand interface, so users can
              easily explore the app's features without going through a
              complicated training process.
            </li>
            <li
              className="text-white h-32 py-10 px-5 mb-10 borders2 text-center items-start"
              style={{ backgroundColor: "#07114F" }}
            >
              With a verification system for users and goods to be auctioned,
              this application can ensure that each auction is carried out
              fairly and honestly.
            </li>
            <li
              className="bg-slate-500 h-32 py-10 px-5 mb-10 borders text-center items-end"
              style={{ backgroundColor: "#FEC72C" }}
            >
              This auction application provides high transparency and accuracy
              in the auction process, so users can trust the final outcome of
              the auction.
            </li>
          </ul>
        </motion.section>
      </div>
    </>
  );
};
export default About;
