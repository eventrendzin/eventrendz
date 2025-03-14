import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Calendar, Heart, Mic, PartyPopper, Users } from "lucide-react"

export const metadata = {
  title: "Portfolio | evenTrendz - Premier Event Management",
  description:
    "Explore our portfolio of successful events including corporate gatherings, weddings, conferences, and more.",
}

export default function PortfolioPage() {
  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "TechCon 2025",
      category: "Conference",
      description: "A technology conference with over 5,000 attendees and 50 speakers from around the world.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Global Corp Annual Gala",
      category: "Corporate",
      description: "An elegant evening celebrating company achievements and milestones with 300 employees.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Johnson & Smith Wedding",
      category: "Wedding",
      description:
        "A beautiful garden wedding with 150 guests, featuring custom floral arrangements and gourmet catering.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "NextGen Product Launch",
      category: "Product Launch",
      description:
        "A high-energy product launch event that generated significant media coverage and customer interest.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Charity Fundraiser Gala",
      category: "Fundraiser",
      description: "A successful fundraising event that exceeded donation goals by 40% and attracted 250 donors.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "25th Anniversary Celebration",
      category: "Social",
      description: "A memorable anniversary celebration with custom entertainment and personalized touches.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <PartyPopper className="h-5 w-5" />,
    },
    {
      id: 7,
      title: "Leadership Summit 2025",
      category: "Conference",
      description:
        "An executive leadership conference featuring workshops, keynote speakers, and networking opportunities.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      id: 8,
      title: "Summer Team Building Retreat",
      category: "Corporate",
      description: "A three-day team building retreat that strengthened company culture and improved team dynamics.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: 9,
      title: "Tech Startup Demo Day",
      category: "Corporate",
      description: "A showcase event for 12 startups to present their innovations to investors and industry leaders.",
      image: "/placeholder.svg?height=600&width=800",
      icon: <Building className="h-5 w-5" />,
    },
  ]

  // Categories for filtering
  const categories = ["All", "Corporate", "Wedding", "Conference", "Product Launch", "Social", "Fundraiser"]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="evenTrendz Portfolio"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg md:text-xl">Explore our showcase of successful events and creative solutions.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our portfolio of successful events that showcase our capabilities and creativity.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} className="mb-2">
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">View Details</Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mr-2">
                      {item.icon}
                      <span className="ml-1">{item.category}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Link href={`/portfolio/${item.id}`} className="text-primary hover:underline">
                    Read case study
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with evenTrendz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp Inc.",
                quote:
                  "evenTrendz transformed our annual conference into an unforgettable experience. Their attention to detail and creative solutions exceeded our expectations.",
              },
              {
                name: "Michael Chen",
                company: "Global Enterprises",
                quote:
                  "Working with evenTrendz was seamless from start to finish. They handled every aspect of our corporate retreat with professionalism and creativity.",
              },
              {
                name: "Jessica Williams",
                company: "Innovate Solutions",
                quote:
                  "The team at evenTrendz brought our product launch vision to life. Their strategic approach and flawless execution resulted in record-breaking attendance.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Next Exceptional Event?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to discuss how evenTrendz can bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

