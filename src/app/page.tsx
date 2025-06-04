import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";
import WelcomeSection from "@/components/welcome-section";
import Image from "next/image";
import Link from "next/link";

// Import images for the sections
import NurseryImage from "@images/IMG-20250522-WA0001.jpg";
import PrimaryImage from "@images/IMG-20250522-WA0002.jpg";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WelcomeSection />

      {/* Nursery and Primary Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Nursery Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={NurseryImage}
                alt="Nursery classroom with young children learning"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-4">Nursery Section</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;Tiny tots, big dreams! Planting seeds of knowledge in our nursery class garden 🌱 ✨ #LittleLearners #GrowingMinds&rdquo;
                </p>
                <Link href="/about">
                  <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Primary Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={PrimaryImage}
                alt="Primary classroom with students in uniforms studying"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-4">Primary Section</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;Unlocking potential, shaping futures! Join us in empowering young minds through quality education and holistic development.&rdquo;
                </p>
                <Link href="/about">
                  <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Nurturing Excellence at Every Level</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From our nurturing nursery environment where tiny tots begin their learning journey,
            to our comprehensive primary education that shapes young minds for the future,
            De Montessori Care International School provides exceptional educational experiences
            tailored to each child&apos;s developmental stage.
          </p>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
