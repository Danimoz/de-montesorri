'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import GradImage from '@images/teachersndStudents.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const activities = [
  {
    title: "Excellence in Education",
    description: "Our dedicated faculty ensures the highest standards of academic achievement.",
  },
  {
    title: "Diverse Extracurriculars",
    description:
      "From sports to cultural activities, we offer a wide range of opportunities for personal growth.",
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Our modern campus provides the perfect environment for learning and development.",
  },
  {
    title: "Educational Excursions",
    description: "Regular field trips and excursions that enhance learning through real-world experiences.",
  },
  {
    title: "Career Development",
    description: "Annual career days expose students to various professions and future opportunities.",
  },
]

export default function WelcomeSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <h3 className="text-2xl text-pink-400 mb-4">Distance Learning</h3>
          <h2 className="text-4xl font-bold mb-6">Welcome to School</h2>
          <p className="text-gray-600 text-xl mb-6">
            Welcome to De Montessori Care International School, a leading primary and nursery school dedicated to providing a high quality education.
            Our school is committed to creating a safe, inclusive, and supportive learning environment that allows our students to thrive.
            <br /><br />
            Browse our website to learn more about our programs, and feel free to reach out with any questions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold"
          >
            MORE INFO
          </motion.button>
        </motion.div>
        <motion.div {...fadeInUp} className="h-[24rem]">
          <Image
            src={GradImage}
            alt="Student studying"
            className="rounded-lg w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Why Choose De Montessori Care International School?</h2>
        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              className="bg-white p-6 md:p-9 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-500">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
