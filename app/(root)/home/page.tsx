import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Award, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org markup for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventPlanningBusiness",
            name: "evenTrendz",
            image: "https://eventrendz.com/images/logo.png",
            url: "https://eventrendz.com",
            telephone: "+1-555-123-4567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Event Plaza, Suite 500",
              addressLocality: "New York",
              addressRegion: "NY",
              postalCode: "10001",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7128,
              longitude: -74.006,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "16:00",
              },
            ],
            priceRange: "$$$",
            description:
              "evenTrendz is a premier event management company founded in 2025, specializing in corporate events, weddings, conferences, and more.",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
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
              evenTrendz is your premier partner for creating exceptional event experiences. Founded in 2025, we
              specialize in corporate events, weddings, conferences, and more. Our dedicated team of event professionals
              combines creativity, precision, and innovation to deliver events that exceed expectations and create
              lasting memories for you and your guests.
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
              We combine creativity, precision, and innovation to deliver events that exceed expectations. Our approach
              to event management is built on a foundation of experience, attention to detail, and a passion for
              creating exceptional experiences. When you choose evenTrendz, you're partnering with a team that is
              committed to bringing your vision to life and making your event a resounding success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Calendar size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
              <p className="text-muted-foreground">
                Our experienced team handles every detail, from concept to execution, ensuring flawless events. With
                years of experience in the event industry, we have the knowledge and skills to anticipate challenges,
                solve problems creatively, and deliver exceptional results. Our meticulous planning process ensures that
                nothing is overlooked and that your event runs smoothly from start to finish.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">
                A personal event coordinator works with you throughout the entire process. Your dedicated coordinator
                serves as your main point of contact, ensuring clear communication and a seamless planning experience.
                They take the time to understand your vision, preferences, and objectives, and work closely with you to
                bring your ideas to life. Our team approach means you benefit from collective expertise while enjoying
                personalized service.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We partner with top-tier vendors and venues to deliver exceptional quality. Our extensive network of
                trusted partners allows us to recommend the best vendors for your specific event needs and budget. We
                carefully vet all vendors to ensure they meet our high standards for quality, reliability, and
                professionalism. This commitment to quality extends to every aspect of your event, from the venue and
                catering to entertainment and decor.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <MapPin size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Service</h3>
              <p className="text-muted-foreground">
                We organize events across the country, bringing our expertise wherever you need us. Whether you're
                planning an event in your hometown or a destination event in another city, our team has the flexibility
                and resources to make it happen. We have experience working in diverse venues and locations, and we
                understand the unique considerations and logistics involved in planning events in different regions. No
                matter where your event takes place, you can count on the same level of service and attention to detail.
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
              Browse through some of our most successful events that showcase our capabilities. These case studies
              demonstrate our ability to create diverse events that meet a variety of objectives and exceed client
              expectations. Each event represents a unique challenge and solution, showcasing our creativity, attention
              to detail, and commitment to excellence in event management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TechCon 2025",
                description:
                  "A technology conference with over 5,000 attendees and 50 speakers. This three-day event featured keynote presentations, breakout sessions, networking opportunities, and an interactive exhibition area. We handled all aspects of the conference, from venue selection and speaker management to registration, catering, and audiovisual production. The event received overwhelmingly positive feedback from attendees and sponsors.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Corporate Gala",
                description:
                  "An elegant evening celebrating company achievements and milestones. This black-tie event for 300 employees included a cocktail reception, gourmet dinner, awards ceremony, and entertainment. We transformed the venue with sophisticated decor that reflected the company's brand and created an atmosphere of celebration and recognition. The evening featured custom touches that highlighted the company's history and accomplishments.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Charity Fundraiser",
                description:
                  "A successful fundraising event that exceeded donation goals by 40%. This gala dinner and auction raised funds for a local nonprofit organization. We worked closely with the organization to create an event that told their story effectively and inspired generosity from attendees. The evening included emotional testimonials, compelling presentations about the organization's work, and both silent and live auctions featuring donated items and experiences.",
                image: "/placeholder.svg?height=600&width=800",
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    View Case Study
                  </Button>
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
              Don't just take our word for it. Here's what our clients have to say about working with evenTrendz. These
              testimonials reflect our commitment to excellence, attention to detail, and dedication to creating
              exceptional event experiences that exceed our clients' expectations. We're proud of the relationships
              we've built with our clients and the trust they place in us to bring their visions to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp Inc.",
                quote:
                  "evenTrendz transformed our annual conference into an unforgettable experience. Their attention to detail and creative solutions exceeded our expectations. From the initial planning stages to the day of the event, the team was professional, responsive, and proactive in addressing our needs. They understood our objectives and created an event that perfectly aligned with our company culture and goals. We received numerous compliments from attendees, and we'll definitely be working with evenTrendz for future events.",
              },
              {
                name: "Michael Chen",
                company: "Global Enterprises",
                quote:
                  "Working with evenTrendz was seamless from start to finish. They handled every aspect of our corporate retreat with professionalism and creativity. What impressed me most was their ability to understand our company culture and translate that into an event that felt authentic and meaningful for our team. They managed all the logistics flawlessly, allowing our leadership team to focus on connecting with employees rather than worrying about event details. The retreat achieved all our objectives and received overwhelmingly positive feedback from participants.",
              },
              {
                name: "Jessica Williams",
                company: "Innovate Solutions",
                quote:
                  "The team at evenTrendz brought our product launch vision to life. Their strategic approach and flawless execution resulted in record-breaking attendance. They understood the importance of creating an event that would generate excitement about our new product and leave a lasting impression on attendees. Their attention to detail, from the venue selection to the timing of each presentation, ensured that our message was delivered effectively. The media coverage and social media engagement exceeded our expectations, and we attribute much of that success to evenTrendz's expertise.",
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
              Contact us today to discuss how evenTrendz can bring your vision to life. Whether you're planning a
              corporate event, wedding, conference, or any other special occasion, our team of experienced event
              planners is ready to help you create an unforgettable experience. We'll work closely with you to
              understand your objectives, preferences, and budget, and develop a customized plan that meets your
              specific needs. Let's start planning your exceptional event today!
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

