import React, { useState } from "react";
import Florante_at_Laura from "../assets/images/Florante_at_Laura.png";
import SearchBar from "../components/SearchBar";
import ActivityCard from "../components/ActivityCard";
import BuodSideBar from "../components/BuodSideBar";
import AtoZSideBar from "../components/AtoZSideBar";
import { motion } from "framer-motion";
import ActivityQuiz from "../components/modals/ActivityQuiz";
import ActivityQuizTwo from "../components/modals/ActivityQuizTwo";
import ActivityQuizThree from "../components/modals/ActivityQuizThree";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, staggerChildren: 0.5 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 100, transition: { duration: 1 } },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function Home() {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openQuizTwo, setOpenQuizTwo] = useState(false);
  const [openQuizThree, setOpenQuizThree] = useState(false);
  const [closeBuod, setCloseBuod] = useState(false);
  const [closeAtoZ, setCloseAtoZ] = useState(false);

  const handleOpenAtoZ = () => {
    setCloseAtoZ(true);
    setCloseBuod(false);
  };

  const handleOpenBuod = () => {
    setCloseBuod(true);
    setCloseAtoZ(false);
  };
  return (
    <div className="relative bg-hero-bg bg-cover bg-no-repeat min-h-screen w-full">
      <section>
        <motion.header
          className=" bg-[#863C18]/90 py-4 relative z-20"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex justify-center gap-8  padding-x mx-auto max-container">
            <li>
              <button
                className="nav-text cursor-pointer"
                onClick={() => handleOpenAtoZ()}
              >
                A to Z
              </button>
            </li>
            <li>
              <img src={Florante_at_Laura} height={160} width={160} alt="" />
            </li>
            <li>
              <button
                className="nav-text cursor-pointer"
                onClick={() => handleOpenBuod()}
              >
                Buod
              </button>
            </li>
          </ul>
          <SearchBar />
        </motion.header>

        <motion.div
          className="flex justify-center items-center mt-2 gap-4 overflow-x-auto padding-x z-0"
          variants={containerVariant}
          initial={"hidden"}
          animate={"visible"}
        >
          <motion.div variants={cardVariant} onClick={() => setOpenQuiz(true)}>
            <ActivityCard title={"Talasalitaan"} />
          </motion.div>
          <motion.div
            variants={cardVariant}
            onClick={() => setOpenQuizTwo(true)}
          >
            <ActivityCard title={"Tauhan"} />
          </motion.div>
          <motion.div
            variants={cardVariant}
            onClick={() => setOpenQuizThree(true)}
          >
            <ActivityCard title={"Pangyayari"} />
          </motion.div>
        </motion.div>
        <BuodSideBar
          isCloseSideBar={closeBuod}
          setIsCloseSideBar={setCloseBuod}
        />
        <AtoZSideBar
          isCloseSideBar={closeAtoZ}
          setIsCloseSideBar={setCloseAtoZ}
        />
        <div className={openQuiz ? "block" : "hidden"}>
          <ActivityQuiz setOpenQuiz={setOpenQuiz} />
        </div>
        <div className={openQuizTwo ? "block" : "hidden"}>
          <ActivityQuizTwo setOpenQuiz={setOpenQuizTwo} />
        </div>
        <div className={openQuizThree ? "block" : "hidden"}>
          <ActivityQuizThree setOpenQuiz={setOpenQuizThree} />
        </div>
      </section>
    </div>
  );
}

export default Home;
