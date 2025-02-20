'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    type: "Parent",
    name: "Chidinma Okafor",
    role: "Mother of Two",
    quote:
      "The transformation in my children's learning journey has been remarkable. The school's nurturing environment and dedicated teachers have made education a joy for them.",
    image: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 2,
    type: "Student",
    name: "Adaeze Nwankwo",
    role: "Grade 6 Student",
    quote:
      "I love coming to school every day! The interactive classes and fun activities make learning exciting. The teachers are super supportive and help us understand everything clearly.",
    image: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 3,
    type: "Parent",
    name: "Ifeanyi Okonkwo",
    role: "Parent Council Member",
    quote:
      "The school's commitment to holistic development is impressive. My daughter has grown not just academically, but also in confidence and creativity.",
    image: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 4,
    type: "Student",
    name: "Chinedu Nwosu",
    role: "Grade 5 Student",
    quote:
      "The science labs and art classes are my favorite! We get to do so many cool experiments and projects. Learning here is always fun and interesting.",
    image: "https://placehold.co/400",
    rating: 5,
  },
]

export default function Testimonials(){
  return (
    <section className="py-16 relative overflow-hidden text-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#32cd32]/50 to-white z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-200 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students and parents about their experiences at our school. <br />
            We&apos;re proud to have a supportive community that values education and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl p-6 relative group"
            >
              <div className="absolute top-0 right-0 bg-pink-100 text-pink-600 px-4 py-1 rounded-bl-2xl rounded-tr-2xl font-medium">
                {testimonial.type}
              </div>

              <div className="flex items-center mb-4 pt-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={''}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-pink-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 italic">&lsquo;{testimonial.quote}&rsquo;</p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-[#32cd32] transform scale-x-0 group-hover:scale-x-95 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}