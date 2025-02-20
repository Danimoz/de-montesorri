import Image from "next/image";
import Sport1 from "@images/pexels-patrick-manga-96719689-9265329.jpg";
import Sport2 from "@images/pexels-rdne-8337503.jpg";


export default function About() {
  return (
    <div>
      <section className="py-12 px-4 mx-auto container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our School</h1>
            <p className="text-lg text-gray-600 mb-6">
              De Montessori Care International School was founded in 2005 with a vision to provide exceptional early childhood education based on the Montessori philosophy. Our school offers a nurturing environment where children can develop their full potential.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe that every child is unique and learns differently. Our certified Montessori teachers guide each child through individualized learning experiences, fostering independence, creativity, and a love for learning.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To nurture each child&apos;s natural desire to learn, explore, and grow in a prepared environment that fosters independence, self-discipline, and joy in learning.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image src={Sport1} alt="Children playing sports" className="rounded-lg h-full" />
            <Image src={Sport2} alt="Children playing sports" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">Respect</h3>
            <p className="text-gray-600">
              We foster mutual respect between teachers, children, and families, creating a harmonious learning community.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">Independence</h3>
            <p className="text-gray-600">
              We encourage children to develop self-reliance and confidence through guided exploration and discovery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">Community</h3>
            <p className="text-gray-600">
              We build strong partnerships with families to create a supportive educational environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}