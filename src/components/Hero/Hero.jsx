import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";

import { BiPause, BiPlay } from "react-icons/bi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = ["url('./home-auto2.jpg')", "url('./software-dev.png')"];

  // Automatically change slides every 5 seconds if playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isPlaying, slides.length]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flexCenter overflow-hidden">
      {/*  <Header /> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 "
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: slides[currentSlide],
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-start justify-center  z-10 relative px-8   innerWidth">
        {/* Left Section */}
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="hero-left flex flex-col justify-center items-start space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white">
            Innovative Tech for <br />
            <span className="text-blue-500">Everyday</span> Life
          </h1>
          <p className="text-gray-300 xl:max-w-lg">
            Empowering homes, businesses, and individuals with smart solutions
            in automation, software, and IoT integration.
          </p>
          <div className="flex">
            <button
              className="btn flex items-center gap-2 bg-blue-500 text-white py-3.5 px-7 rounded-md mt-4 hover:bg-blue-600"
              onClick={() =>
                document
                  .getElementById("contact-us")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 right-4 bg-transparent text-blue-700 p-2 rounded-full z-20 hover:bg-white/20 border-2 border-blue-700"
      >
        {isPlaying ? <BiPause size={30} /> : <BiPlay size={30} />}
      </button>
    </section>
  );
};

export default Hero;
