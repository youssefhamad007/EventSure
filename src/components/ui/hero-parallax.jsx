"use client";

import React, { useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const openModal = (product, cardElement) => {
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setCardPosition({
        x: rect.left,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      });
    }
    setSelectedEvent(product);
  };

  const closeModal = () => setSelectedEvent(null);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d] w-200 md:w-full"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              onClick={(e) => openModal(product, e.currentTarget)}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              onClick={(e) => openModal(product, e.currentTarget)}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              onClick={(e) => openModal(product, e.currentTarget)}
            />
          ))}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={closeModal}
            cardPosition={cardPosition}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl mx-auto py-20 md:py-40 px-4">
    <h1 className="text-5xl md:text-7xl font-bold text-white">
    Feel the Beat. <br /> Live the Moment.
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 text-white">
    Discover electrifying live concerts, underground DJ nights, and music festivals across the globe.
    </p>
  </div>
);

export const ProductCard = ({ product, translate, onClick }) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    onClick={onClick}
    key={product.title}
    className="group md:h-96 h-70 md:w-[30rem]  w-[20rem] relative shrink-0 cursor-pointer"
  >
    <div className="block group-hover:shadow-2xl">
      <img
        src={product.thumbnail}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </div>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-80 bg-black pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 text-white">
      {product.title}
    </h2>
  </motion.div>
);

export const EventModal = ({ event, onClose, cardPosition }) => {
  const [modalPosition, setModalPosition] = useState({ initialX: 0, initialY: 0, scale: 1 });

  useLayoutEffect(() => {
    const modalWidth = window.innerWidth < 640 ? window.innerWidth * 0.9 : 896;
    const modalHeight = window.innerHeight * 0.8;
    const x = cardPosition.x + cardPosition.width / 2 - modalWidth / 2;
    const y = cardPosition.y + cardPosition.height / 2 - modalHeight / 2;
    const scale = cardPosition.width / modalWidth;
    setModalPosition({ initialX: x, initialY: y, scale });
  }, [cardPosition]);

  return (
    <motion.div
      initial={{
        x: modalPosition.initialX,
        y: modalPosition.initialY,
        scale: modalPosition.scale,
        opacity: 0,
      }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      exit={{
        x: modalPosition.initialX,
        y: modalPosition.initialY,
        scale: modalPosition.scale,
        opacity: 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute left-0 top-0 z-50 flex items-center justify-center w-full h-full p-4 sm:p-8"
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-full max-w-4xl h-[80vh] overflow-y-auto z-10 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <motion.h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {event.title}
        </motion.h2>
        <motion.img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <motion.p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
          {event.description}
        </motion.p>
        <div className="mb-6 space-y-2">
          <p><strong>Price:</strong> {event.price}</p>
          <p><strong>City:</strong> {event.city}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={"/Event"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-center"
          >
            Visit Event Page
          </a>
          <a
            href={"/Cart"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-center"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
