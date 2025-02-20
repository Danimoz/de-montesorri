'use client';

import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  const date = new Date();
  return (
    <footer className="py-12 bg-gradient-to-t from-[#32cd32]/50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">De Montessori Care International School</h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>De Montessori Care International School</p>
            <p>Address: 9 Okoye Odume Layout II Obosi, Anambra</p>
            <p>
              Phone: {' '}
              <Link href='tel:2348037767346'>(+234) 706-952-3239</Link>
            </p>
            <p>
              Email: {' '}
              <Link href='mailto:demontessorischool@gmail.com'>demontessorischool@gmail.com</Link>
            </p>

          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; {date.getFullYear()} De Montessori Care International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}