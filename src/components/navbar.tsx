'use client';

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react'


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-black">
          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            DE MONTESSORI CARE INTL. SCHOOL
          </motion.span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-semibold hover:text-pink-500 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden hover:text-pink-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden bg-white space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block p-4 text-lg font-semibold hover:text-pink-500 transition-colors">
              {link.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}