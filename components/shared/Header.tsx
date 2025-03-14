"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <a href="tel:7230456189" className="flex items-center hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              7230456189
            </a>
            <a href="mailto:info@eventrendz.com" className="flex items-center hover:text-primary">
              <Mail className="h-4 w-4 mr-2" />
              eventrendzin@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">evenTrendz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About
            </Link>
            <Link href="/services" className="font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" className="font-medium hover:text-primary">
              Portfolio
            </Link>
            <Link href="/pricing" className="font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link href="/about" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="/services" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Services
              </Link>
              <Link href="/portfolio" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Portfolio
              </Link>
              <Link href="/pricing" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Pricing
              </Link>
              <Link href="/blog" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Blog
              </Link>
              <Link href="/contact" className="font-medium hover:text-primary px-2 py-1" onClick={toggleMobileMenu}>
                Contact
              </Link>
              <Button asChild className="mt-2">
                <Link href="/contact" onClick={toggleMobileMenu}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

