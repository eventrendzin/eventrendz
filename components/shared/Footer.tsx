import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Movies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/movies" className="text-sm text-muted-foreground hover:text-primary">
                  Now Showing
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-sm text-muted-foreground hover:text-primary">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-sm text-muted-foreground hover:text-primary">
                  Cinemas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary">
                  Concerts
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary">
                  Theater
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-muted-foreground hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} evenTrendz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

