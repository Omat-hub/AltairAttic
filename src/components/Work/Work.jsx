import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Import the chevron icon
import data from "../../utils/datas";
import "./Work.css";

const Work = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const wrapperRefs = useRef([]);

  const toggleDropdown = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = wrapperRefs.current.every((wrapper, index) => {
        const card = cardRefs.current[index];
        const dropdown = wrapper?.querySelector(".dropdown-content");
        return (
          card &&
          !card.contains(event.target) &&
          (!dropdown || !dropdown.contains(event.target))
        );
      });

      if (isOutside && activeCard !== null) {
        setActiveCard(null);
      }
    };

    if (activeCard !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeCard]);

  // Equal heights for cards
  useEffect(() => {
    const setCardHeights = () => {
      cardRefs.current.forEach((card) => {
        if (card) card.style.height = "auto";
      });

      const heights = cardRefs.current.map((card) =>
        card ? card.getBoundingClientRect().height : 0
      );
      const maxHeight = Math.max(...heights);

      cardRefs.current.forEach((card) => {
        if (card) card.style.height = `${maxHeight}px`;
      });
    };

    setCardHeights();
    window.addEventListener("resize", setCardHeights);
    return () => window.removeEventListener("resize", setCardHeights);
  }, [activeCard]);

  return (
    <section className="w-wrapper" id="services">
      <div className="paddings innerWidth w-container">
        <header className="flexColCenter w-head">
          <h2 className="primaryText">OUR SERVICES</h2>
        </header>
        <div className="w-grid">
          {data.map((card, index) => (
            <div
              key={index}
              className="w-card-wrapper"
              ref={(el) => (wrapperRefs.current[index] = el)}
            >
              <article
                className="w-card"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-card-image"
                />
                <h3 className="primaryText">{card.name}</h3>
                <p className="secondaryText">{card.define}</p>
                <button
                  className="toggle-button"
                  onClick={() => toggleDropdown(index)}
                  aria-expanded={activeCard === index}
                  aria-controls={`dropdown-${index}`}
                  aria-label={
                    activeCard === index ? "Hide details" : "Show details"
                  }
                >
                  <FaChevronDown
                    className={`chevron-icon ${
                      activeCard === index ? "chevron-up" : "chevron-down"
                    }`}
                  />
                </button>
              </article>
              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    className="dropdown-content"
                    id={`dropdown-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="dropdown-card">
                      <p className="dropdown-text">{card.description}</p>
                      <a href={card.url} className="learn-more-link">
                        Learn More
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
