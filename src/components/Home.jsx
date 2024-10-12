// src/Home.js
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <motion.div
          className="home__data"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="home__title">
            SNACK <br />
            WITH NO <br />
            LIMITS
          </h1>

          <p className="home__description">
            When you are hungry and don't have time to cook, snacks are the
            perfect solution, always prepare for midday hunger.
          </p>

          <img src="public/meat.png" alt="meat" className="home__meat" />

          <div className="home__buttons">
            <motion.a
              href="#favorites"
              className="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Snack Now
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=03184152091"
              className="button button__ghost"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Buy Now
            </motion.a>
          </div>
        </motion.div>

        <div className="home__images">
          <div className="home__circle">
            <motion.div
              className="home__subcircle"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            ></motion.div>
          </div>

          {/* Principal */}
          <motion.img
            src="public/home-chips.png"
            alt="home image"
            className="home__img"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Chips */}
          <motion.img
            src="public/chips-1.png"
            alt="chips"
            className="home__chips-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="public/chips-2.png"
            alt="chips"
            className="home__chips-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src="public/chips-3.png"
            alt="chips"
            className="home__chips-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

          {/* Tomato */}
          <motion.img
            src="public/tomato-1.png"
            alt="tomato"
            className="home__tomato-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.img
            src="public/tomato-2.png"
            alt="tomato"
            className="home__tomato-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Leaf */}
          <motion.img
            src="public/leaf-3.png"
            alt="leaf"
            className="home__leaf"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
