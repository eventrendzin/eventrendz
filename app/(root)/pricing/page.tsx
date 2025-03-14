import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata = {
  title: "Pricing | evenTrendz - Premier Event Management",
  description:
    "Explore our transparent pricing packages for event management services, from essential planning to premium full-service solutions.",
}

export default function PricingPage() {
  // Pricing packages
  const pricingPackages = [
    {
      name: "Essential",
      price: "2,500",
      description: "Perfect for smaller events with basic planning needs",
      features: [
        "Initial consultation",
        "Event concept development",
        "Vendor recommendations",
        "Basic timeline creation",
        "Day-of coordination (8 hours)",
        "Email support",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "5,000",
      description: "Comprehensive planning for medium-sized events",
      features: [
        "Everything in Essential",
        "Venue selection assistance",
        "Vendor management",
        "Detailed event timeline",
        "Budget management",
        "2 on-site coordinators",
        "Day-of coordination (12 hours)",
        "Phone and email support",
      ],
      popular: true,
      cta: "Choose Professional",
    },
    {
      name: "Premium",
      price: "10,000+",
      description: "Full-service planning for large or complex events",
      features: [
        "Everything in Professional",
        "Custom event design",
        "Full vendor selection and management",
        "Contract negotiation",
        "Comprehensive budget management",
        "Multiple planning meetings",
        "3+ on-site coordinators",
        "Extended day-of coverage",
        "VIP guest management",
        "Post-event evaluation",
      ],
      popular: false,
      cta: "Contact Us",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How far in advance should I book your services?",
      answer:
        "We recommend booking our services at least 6-12 months in advance for large events, and 3-6 months for smaller events. However, we do accommodate last-minute requests when possible.",
    },
    {
      question: "Do you require a deposit?",
      answer:
        "Yes, we require a 50% deposit to secure your date, with the remaining balance due 30 days before the event. For the Premium package, we offer a payment plan option.",
    },
    {
      question: "Can I customize a package to fit my specific needs?",
      answer:
        "Our packages are starting points, and we're happy to create a custom package tailored to your specific event requirements and budget.",
    },
    {
      question: "Do you handle destination events?",
      answer:
        "Yes, we specialize in both local and destination events. For destination events, travel and accommodation expenses will be added to the package price.",
    },
    {
      question: "What types of events do you manage?",
      answer:
        "We manage a wide range of events including corporate gatherings, weddings, conferences, product launches, social celebrations, fundraisers, and more.",
    },
    {
      question: "How many events do you take on at once?",
      answer:
        "We limit the number of events we manage simultaneously to ensure each client receives our full attention and the highest level of service.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="evenTrendz Pricing"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-lg md:text-xl">
              Flexible packages designed to meet your event management needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your event needs, or contact us for a custom solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${
                  pkg.popular ? "ring-2 ring-primary shadow-lg relative" : "border shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    {!pkg.price.includes("+") && <span className="text-muted-foreground"> starting at</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <Button asChild className={`w-full ${pkg.popular ? "bg-primary" : ""}`}>
                    <Link href="/contact">{pkg.cta}</Link>
                  </Button>
                </div>
                <div className="bg-muted p-8">
                  <h4 className="font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Need a custom solution? We're happy to create a tailored package for your specific event needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/placeholder.svg?height=200&width=200" alt="Client" fill className="object-cover" />
              </div>
              <div>
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
                <p className="text-lg mb-6">
                  The Professional package from evenTrendz was exactly what we needed for our company's annual gala.
                  Their team handled everything flawlessly, allowing us to focus on our guests and enjoy the event. The
                  value for the price was exceptional.
                </p>
                <div>
                  <p className="font-semibold">Robert Anderson</p>
                  <p className="text-sm text-muted-foreground">Director of Operations, Nexus Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to discuss your event needs and how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

