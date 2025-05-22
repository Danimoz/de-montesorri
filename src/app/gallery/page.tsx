import Img1 from '@images/IMG-20250522-WA0001.jpg'
import Img2 from '@images/IMG-20250522-WA0002.jpg'
import Img3 from '@images/IMG-20250522-WA0003.jpg'
import Img4 from '@images/IMG-20250522-WA0004.jpg'
import Img5 from '@images/97482e88.jpg'
import Image from 'next/image'

const Images = [
 Img1,
 Img5,
 Img2,
 Img3,
 Img4
]

export default function Gallery() {
  return (
    <main className="min-h-screen">
      <section className="md:container md:mx-auto mx-3 py-8">
        <h2 className="text-3xl font-bold text-center mt-6 text-secondary">Gallery</h2>
        <p className="text-center text-gray-500 mb-8">
          Explore the vibrant life at DE MONTESSORI CARE INTL. SCHOOL through our curated collection of images showcasing our campus, students, events, and achievements.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
          {Images.map((image, index) => (
            <div key={index} className={`aspect-square rounded-full overflow-hidden shadow-lg transition-all duration-300`}>
              <Image
                alt={`School photo showing ${index === 0 ? 'the front entrance' :
                  index === 1 ? 'the campus grounds' :
                    index === 2 ? 'a classroom' :
                      index === 3 ? 'students at work' :
                        'playground activities'}`}
                src={image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}