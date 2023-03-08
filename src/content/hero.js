import Profil from "../assets/person.png";
import "./style/hero.css";

import { motion } from "framer-motion";

const boxVariants = {
  initState: { x: -120, y: -120 },
  finalState: { x: 0, y: 0 },
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Hero = () => {
  return (
    <section
      className="grid px-5 max-w-5xl m-auto center mb-24"
      style={{ height: "90vh" }}
    >
      <motion.main
        variants={boxVariants}
        animate="finalState"
        initial="initState"
        transition={{ duration: 1 }}
        className="items-start"
      >
        <h1
          className="font-bold text-left mb-10 leading"
          style={{ color: "#302F2E" }}
        >
          Discover unique and rare items on
          <span className="hackbid">Hackbid</span>
        </h1>

        <p className="text-left text-xl" style={{ color: "#302F2E" }}>
          There is no longer a geographic limit in the auction process - find
          products from all over the world with just a few clicks on our auction
          site.
        </p>
        <main className="text-white text-left mt-7 flex items-center gap-10">
          <button className="download">
            <a href="https://expo.dev/artifacts/eas/TdkUavpkckXWWdXyT5Toj.apk">
              Download
            </a>
          </button>
        </main>
      </motion.main>
      <motion.main
        animate={{ x: 0, y: 0, opacity: 1 }}
        initial={{ x: 140, y: 150, opacity: 0 }}
        transition={{ duration: 1 }}
        className="background gambar-bg w-80 radius"
      >
        <img src={Profil} className="gambar" alt="gambar" />
      </motion.main>
    </section>
  );
};

export default Hero;
