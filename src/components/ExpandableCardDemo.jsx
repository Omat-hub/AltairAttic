import React, { useEffect, useRef, useState, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import data from "./../utils/wordSlid";
import "./Work/Work.css";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit md:h-fit md:max-h-[700px] flex flex-col bg-white sm:rounded-3xl overflow-hidden pb-2"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  priority
                  src={active.image}
                  alt={active.name}
                  className="w-full h-40 object-cover object-center"
                />
              </motion.div>
              <div className="h-60 p-4 space-y-4 overflow-y-auto">
                <div className="flex flex-col justify-between gap-2 items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className=" primaryText text-[18px]"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.h6
                      layoutId={`description-${active.define}-${id}`}
                      className="secondaryText text-[14px]"
                    >
                      {active.define}
                    </motion.h6>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.url}
                    className=" px-6 py-3 text-sm rounded-sm float-right font-bold bg-blue-500 text-white hover:bg-blue-300 transition-colors duration-200 ease-in-out"
                  >
                    Visit
                  </motion.a>
                </div>
                <motion.ul
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="list-disc space-y-1 text-black text-xs md:text-sm lg:text-base h-40 md:h-fit pl-4 pb-5"
                >
                  {active.additionalInfo?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className=" block md:flex  gap-2 justify-between">
        {data.map((card) => (
          <motion.div
            layoutId={`card-${card.name}-${id}`}
            key={card.name}
            onClick={() => setActive(card)}
            className="p-4 w-full flex flex-col rounded-sm cursor-pointer gap-0.5 e-card"
          >
            <motion.div layoutId={`image-${card.name}-${id}`}>
              <img
                src={card.image}
                alt={card.name}
                className="h-60 w-full rounded-lg object-cover object-top"
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                layoutId={`title-${card.name}-${id}`}
                className="primaryText text-[18px] font-bold"
              >
                {card.name}
              </motion.span>
              <motion.span
                layoutId={`description-${card.define}-${id}`}
                className="secondaryText text-[0.7rem] font-normal"
              >
                {card.define}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

/* const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness1",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics.
      </p>
    ),
  },
  {
    description: "Lana Del Rey2",
    title: "Summertime Sadness2",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics.
      </p>
    ),
  },
  {
    description: "Lana Del Rey3",
    title: "Summertime Sadness3",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics.
      </p>
    ),
  },
];
 */
