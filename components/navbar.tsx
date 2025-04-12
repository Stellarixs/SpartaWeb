"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Add this import
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-stone-950/80 backdrop-blur-sm border-b border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Add your logo image here */}
              <Image 
                src="/images/pjc-logo.webp" 
                alt="PJC Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              {/* You can keep this text or remove it if you only want the logo */}
              <span className="text-amber-400 text-2xl font-bold">Sparta</span>
            </Link>
          </div>

          {/* The rest of your navbar code remains unchanged */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-stone-100 hover:text-amber-300 transition-colors">
              Home
            </Link>
            <Link href="/factions" className="text-stone-100 hover:text-amber-300 transition-colors">
              Divisions
            </Link>
            <Link href="/market" className="text-stone-100 hover:text-amber-300 transition-colors">
              Market
            </Link>
            <Link href="/updates" className="text-stone-100 hover:text-amber-300 transition-colors">
              Updates
            </Link>
            <Link href="/contact" className="text-stone-100 hover:text-amber-300 transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-100 hover:text-amber-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-stone-950/95 border-b border-amber-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-stone-100 hover:text-amber-300 hover:bg-amber-900/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/factions"
              className="block px-3 py-2 text-stone-100 hover:text-amber-300 hover:bg-amber-900/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Factions
            </Link>
            <Link
              href="/market"
              className="block px-3 py-2 text-stone-100 hover:text-amber-300 hover:bg-amber-900/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Market
            </Link>
            <Link
              href="/updates"
              className="block px-3 py-2 text-stone-100 hover:text-amber-300 hover:bg-amber-900/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Updates
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-stone-100 hover:text-amber-300 hover:bg-amber-900/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}