import { motion } from "motion/react";

const EDUCATION = [
  {
    institution: "California State University - Chico",
    degree: "MS in Computer Science; GPA: 3.8",
    location: "Chico, CA, USA",
    duration: "August 2022 – May 2024",
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelors in Computer Science",
    location: "Hyderabad, TS, India",
    duration: "June 2015 – May 2019",
  },
];

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((edu, index) => (
          <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{edu.duration}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {edu.degree} -{" "}
                <span className="text-sm text-purple-100">{edu.institution}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{edu.location}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;