"use client"; // Add this directive

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from 'next/link';
import { sendEmail } from '../actions';
import { useState, useTransition } from 'react'; // Import useState and useTransition

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result?.error) {
        setMessage(`Error: ${result.error}`);
      } else if (result?.success) {
        setMessage("Message sent successfully!");
        (event.target as HTMLFormElement).reset(); // Reset form on success
      }
    });
  };

  return (
    <main>
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you. Please reach out with any questions about our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 h-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6"> {/* Use onSubmit */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Ensure name attribute is present
                  className="mt-1 block w-full p-3 rounded-md border border-neutral-500 shadow-sm focus:border-pink-500 focus:ring-primary-500"
                  required
                  disabled={isPending} // Disable input while pending
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Ensure name attribute is present
                  className="mt-1 block w-full p-3 rounded-md border border-neutral-500 shadow-sm focus:border-pink-500 focus:ring-primary-500"
                  required
                  disabled={isPending} // Disable input while pending
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Ensure name attribute is present
                  rows={4}
                  className="mt-1 block w-full p-3 rounded-md border border-neutral-500 shadow-sm focus:border-pink-500 focus:ring-primary-500"
                  required
                  disabled={isPending} // Disable input while pending
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200 disabled:opacity-50"
                disabled={isPending} // Disable button while pending
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </button>
              {message && <p className={`mt-4 text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
            </form>
          </div>

          <div className="space-y-8 h-full">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">9 Okoye Odume Layout II<br />Obosi, Anambra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <Link href='tel:2348037767346' className="text-gray-600">(234) 803-776-7346</Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Whatsapp</h3>
                    <Link href='https://wa.me/2347069523239' className="text-gray-600">(234) 706-952-3239</Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">demontessorischool@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}