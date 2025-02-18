// Certifications.jsx
import { motion } from "motion/react";

const CERTIFICATIONS = [
  {
    title: "Python Automation Testing using Selenium",
    provider: "Udemy",
  },
  {
    title: "Python Automation Testing",
    provider: "LinkedIn Learning",
  },
  {
    title: "Introduction to Generative AI",
    provider: "Google Badge",
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    provider: "Udemy",
  },
  {
    title: "NumPy Essential Training: 1 Foundations of NumPy",
    provider: "LinkedIn Learning",
  },
  {
    title: "Python for Data Visualization",
    provider: "LinkedIn Learning",
  },
  {
    title: "Learning Python (2020)",
    provider: "LinkedIn Learning",
  },
];

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div>
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={index}
            className="mb-4 flex flex-wrap lg:justify-center items-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{cert.provider}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{cert.title}</h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;