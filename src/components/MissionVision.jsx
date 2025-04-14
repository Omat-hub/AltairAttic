import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./MissionVision.css";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  return (
    <section className="mission-vision-section innerWidth">
      <div className="mission-vision-tabs">
        <button
          className={`tab-button ${activeTab === "mission" ? "active" : ""}`}
          onClick={() => setActiveTab("mission")}
        >
          <FaBullseye /> Mission
        </button>
        <button
          className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
          onClick={() => setActiveTab("vision")}
        >
          <FaEye /> Vision
        </button>
        <div
          className="tab-indicator"
          style={{
            transform: `translateX(${activeTab === "mission" ? "0%" : "100%"})`,
          }}
        />
      </div>

      <div className="mission-vision-container">
        <AnimatePresence mode="wait">
          {activeTab === "mission" && (
            <motion.div
              key="mission"
              className="mission-vision-content"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2>Our Mission</h2>
              <p>
                To deliver exceptional technology services and products that
                meet the evolving needs of our customers, fostering innovation,
                quality, and sustainability in everything we do.
              </p>
            </motion.div>
          )}
          {activeTab === "vision" && (
            <motion.div
              key="vision"
              className="mission-vision-content"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2>Our Vision</h2>
              <p>
                To be a leading provider of innovative tech solutions that
                simplify lives, enhance business operations, and empower
                individuals through advanced technology.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVision;
