import React from 'react'
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="container mx-auto px-4">
      <div className="flex items-center h-16 justify-between">
        <Link href="/" className="font-bold text-2xl">
          eventTrendz
        </Link>

        <SignedIn>
            <nav className="hidden w-full max-w-xs md:flex md:justify-between">
                <NavItems />
            </nav>
        </SignedIn>
        <div className="flex items-center space-x-4">
        <SignedIn>
            <UserButton afterSwitchSessionUrl='/' />
            <MobileNav />
        </SignedIn>
        <SignedOut>
          <Button asChild>
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
    
  </header>
  )
}

export default Header