import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Award, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/event.jpeg"
            alt="Event Management"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Ideas into Unforgettable Events</h1>
            <p className="text-lg md:text-xl mb-8">
              Looking for a premier partner event management company that delivers seamless and unforgettable experiences? 
              evenTrendz is your go-to solution for expert event planning and execution. Specializing in a wide range of events, 
              from corporate conferences to weddings, evenTrendz ensures every detail is handled with precision and creativity. 
              With a team dedicated to innovation, quality, and customer satisfaction, we tailor each event to meet your specific 
              needs and exceed your expectations. Whether it's a small gathering or a grand celebration, trust evenTrendz for 
              flawless event management and a stress-free experience that leaves a lasting impression!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/30"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose evenTrendz?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, precision, and innovation to deliver events that exceed expectations. 
              Whether it's a corporate conference, a wedding, or any special occasion, evenTrendz is your trusted premier partner 
              in making your vision a reality. Our experienced team will take care of every aspect of your event, 
              ensuring a seamless experience for you and your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Calendar size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
              <p className="text-muted-foreground">
                Our experienced team handles every detail, from concept to execution, ensuring flawless events. 
                We work with you to craft a tailored plan that aligns with your goals, objectives, and vision.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">
                A personal event coordinator works with you throughout the entire process. 
                From the first consultation to the final farewell, we ensure your event runs smoothly and meets your expectations.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We partner with top-tier vendors and venues to deliver exceptional quality. 
                Whether it's finding the perfect location or hiring the best entertainment, our partnerships ensure your event stands out.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <MapPin size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Service</h3>
              <p className="text-muted-foreground">
                We organize events across the country, bringing our expertise wherever you need us. Whether it's a local event or a destination gathering, evenTrendz ensures consistency and high standards wherever we go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through some of our most successful events that showcase the capabilities of evenTrendz, your personal premier partner for event management. 
              From large conferences to intimate gatherings, evenTrendz ensures that every event is executed flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TechCon 2025",
                description: "A technology conference with over 5,000 attendees and 50 speakers, featuring cutting-edge discussions and presentations.",
                image: "/confrence.jpg?height=600&width=800",
              },
              {
                title: "Corporate Gala",
                description: "An elegant evening celebrating company achievements and milestones, with live entertainment, a gala dinner, and networking opportunities.",
                image: "/corporate_event.jpg?height=600&width=800",
              },
              {
                title: "Charity Fundraiser",
                description: "A successful fundraising event that exceeded donation goals by 40%, featuring live auctions, guest speakers, and community engagement.",
                image: "/fundraiser.jpg?height=600&width=800",
              },
            ].map((event, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link href="/portfolio" className="flex items-center gap-2">
                View All Events <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with evenTrendz. Our clients appreciate our attention to detail, creativity, and the personal touch we bring to every event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Contact us today to discuss how evenTrendz can bring your vision to life. Our team is ready to help you plan and execute your next event, no matter how big or small.
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
