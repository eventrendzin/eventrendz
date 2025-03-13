import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Contact Us | evenTrendz - Premier Event Management",
  description:
    "Get in touch with evenTrendz for all your event management needs. Contact us for inquiries, quotes, or to discuss your upcoming event.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Get-in-touch.jpg?height=800&width=1920"
            alt="Contact evenTrendz"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl">
              We'd love to hear from you. Contact us to discuss your event needs or request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or ready to start planning your event? Reach out to us using any of the methods below, or
                fill out the contact form.
              </p>

              <div className="space-y-6 mb-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">prashant.kumarjha2024@vitstudent.ac.in</p>
                    <p className="text-sm text-muted-foreground">eventrendzin@gmail.com</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">7230456189</p>
                  </div>
                </div>
              </Card>

                <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Prashant Kumar Jha
                      <br />
                      Vit Chennai
                      <br />
                      Vandalur-Kelambakkam road
                      <br />
                      Chennai-600 127, Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </Card>
                
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-muted hover:bg-muted/80 p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/prashantjha.11/" className="bg-muted hover:bg-muted/80 p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-muted hover:bg-muted/80 p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/prashant-kumar-jha-59146b31a/" className="bg-muted hover:bg-muted/80 p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                    Event Type*
                  </label>
                  <select
                    id="eventType"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="social">Social Event</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your event and how we can help..."
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-input text-primary focus:ring-primary" />
                    <span className="ml-2 text-sm text-muted-foreground">
                      I agree to receive emails from evenTrendz about my inquiry and other relevant information.
                    </span>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our office to meet with our event planning team in person.
            </p>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-md h-[400px] relative">
            <Image src="/map.png?height=800&width=1600" alt="Map location" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-transparent-sm p-6 rounded-lg max-w-md">
                <h3 className="text-xl font-semibold mb-2">evenTrendz Headquarters</h3>
                <p className="mb-4">
                Prashant Kumar Jha
                    <br />
                    Vit Chennai
                    <br />
                    Vandalur-Kelambakkam road
                    <br />
                    Chennai-600 127, Tamil Nadu, India.
                </p>
                <Button asChild variant="default" size="sm">
                  <a href="https://maps.app.goo.gl/uor82uueF7p87P658" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "How soon should I contact you before my event?",
                  answer:
                    "We recommend reaching out at least 3-6 months before your event date for optimal planning time. However, we can accommodate shorter timelines when necessary.",
                },
                {
                  question: "What information should I have ready when I contact you?",
                  answer:
                    "It's helpful to have a general idea of your event date, location, estimated guest count, and budget range. Don't worry if you don't have all the details yet—we're here to help you figure it out.",
                },
                {
                  question: "Do you travel for events?",
                  answer:
                    "Yes! We manage events nationwide and can travel to your location. Travel fees may apply depending on the distance.",
                },
                {
                  question: "How do I get a quote for my event?",
                  answer:
                    "Fill out our contact form with your event details, and we'll get back to you within 24-48 hours with a customized quote based on your specific needs.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Unforgettable Event?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's start planning your next exceptional event experience.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:5551234567">Call Us Now: 7230456189</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


