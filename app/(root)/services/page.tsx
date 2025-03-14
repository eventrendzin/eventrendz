import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Calendar, GraduationCap, Heart, Mic, PartyPopper } from "lucide-react"

export const metadata = {
  title: "Our Services | evenTrendz - Premier Event Management",
  description:
    "Discover our comprehensive event management services including corporate events, weddings, conferences, product launches, and more.",
}

export default function ServicesPage() {
  // Service data with expanded descriptions to increase text content
  const services = [
    {
      icon: <Building size={48} />,
      title: "Corporate Events",
      description:
        "From team-building activities to annual galas, we create corporate events that align with your company culture and objectives. Our corporate event planning services include strategic planning, venue selection, catering coordination, entertainment booking, and comprehensive logistics management. We understand that corporate events are not just gatherings—they're strategic opportunities to strengthen your brand, motivate your team, and build relationships with clients and partners.",
      link: "#corporate-events",
    },
    {
      icon: <Heart size={48} />,
      title: "Weddings",
      description:
        "We transform your vision into a beautiful celebration of love, handling every detail to create your perfect day. Our wedding planning services cover everything from venue selection and vendor coordination to timeline creation and day-of management. We believe your wedding day should be as unique as your love story, which is why we work closely with you to create a celebration that reflects your personality, style, and vision. From intimate gatherings to grand celebrations, we ensure every moment is memorable.",
      link: "#weddings",
    },
    {
      icon: <Mic size={48} />,
      title: "Conferences",
      description:
        "Engaging and informative conferences that facilitate knowledge sharing and networking opportunities. We handle all aspects of conference planning, including venue selection, speaker coordination, registration management, audiovisual setup, and catering arrangements. Our team specializes in creating engaging conference experiences that facilitate knowledge sharing, networking, and professional development. We pay attention to every detail, from the layout of the space to the flow of the agenda, ensuring a seamless experience for all attendees.",
      link: "#conferences",
    },
    {
      icon: <PartyPopper size={48} />,
      title: "Social Events",
      description:
        "Birthdays, anniversaries, and celebrations of all kinds, designed to create lasting memories. Our social event planning services include theme development, decor design, entertainment coordination, and guest management. We believe that life's special moments deserve to be celebrated in style, which is why we put so much care into planning every detail of your social event. Whether you're celebrating a milestone birthday, anniversary, or any other special occasion, we'll create an event that reflects your personality and exceeds your expectations.",
      link: "#social-events",
    },
    {
      icon: <Calendar size={48} />,
      title: "Product Launches",
      description:
        "Strategic events that generate buzz and excitement around your new product or service. Our product launch planning services include concept development, venue selection, media coordination, and promotional strategy. We understand that a successful product launch can significantly impact your business's success, which is why we focus on creating events that capture attention, generate excitement, and drive engagement. From intimate media previews to large-scale public launches, we'll help you introduce your product to the world in a way that makes a lasting impression.",
      link: "#product-launches",
    },
    {
      icon: <GraduationCap size={48} />,
      title: "Educational Events",
      description:
        "Workshops, seminars, and training sessions that facilitate learning and development. Our educational event planning services include curriculum development, speaker coordination, materials preparation, and venue setup. We believe that well-planned educational events can transform individuals and organizations, which is why we focus on creating environments that are conducive to learning and growth. From small workshops to large seminars, we ensure that your educational event achieves its objectives and provides value to all participants.",
      link: "#educational-events",
    },
  ]

  // Corporate event services with expanded descriptions
  const corporateEventServices = [
    "Team building activities and retreats designed to strengthen relationships, improve communication, and boost morale among team members. We create engaging activities that align with your company's values and objectives.",
    "Annual meetings and shareholder events that effectively communicate company performance, future plans, and strategic initiatives. We ensure these events are professional, informative, and engaging for all attendees.",
    "Award ceremonies and recognition events that celebrate achievements and motivate employees. We create memorable experiences that make honorees feel valued and inspire others to strive for excellence.",
    "Corporate galas and holiday parties that provide opportunities for networking, celebration, and team bonding. We design these events to reflect your company culture and create a festive atmosphere.",
    "Client appreciation events that strengthen relationships and demonstrate your company's commitment to customer satisfaction. We create experiences that make your clients feel valued and reinforce their decision to do business with you.",
  ]

  // Wedding services with expanded descriptions
  const weddingServices = [
    "Full-service wedding planning that covers every aspect of your special day, from concept development to execution. We handle all the details so you can focus on enjoying this significant milestone.",
    "Day-of coordination to ensure your wedding day runs smoothly and according to plan. Our experienced coordinators manage the timeline, vendors, and any unexpected situations that may arise.",
    "Venue selection and management to find the perfect location for your ceremony and reception. We consider your vision, guest count, budget, and logistical requirements to recommend venues that meet your needs.",
    "Vendor coordination to assemble a team of professionals who will bring your wedding vision to life. We work with trusted vendors and manage all communications and contracts on your behalf.",
    "Design and decor planning to create a cohesive and beautiful aesthetic for your wedding. From color schemes to floral arrangements, we ensure every visual element reflects your personal style.",
  ]

  // Conference services with expanded descriptions
  const conferenceServices = [
    "Venue selection and logistics management to find the perfect location for your conference and handle all logistical details. We consider factors such as capacity, layout, accessibility, and technical requirements.",
    "Speaker coordination and management to secure and support presenters for your conference. We handle invitations, confirmations, technical requirements, and day-of logistics for all speakers.",
    "Registration and attendee management to create a seamless experience for conference participants. We set up registration systems, manage attendee communications, and provide on-site support.",
    "Audio-visual and technology setup to ensure all presentations and sessions run smoothly. We coordinate with technical teams to provide the necessary equipment and support for a professional conference experience.",
    "Networking events and breakout sessions to facilitate connections and in-depth discussions among attendees. We design these components to complement the main conference program and enhance the overall experience.",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Event Management",
            provider: {
              "@type": "Organization",
              name: "evenTrendz",
              url: "https://eventrendz.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Event Management Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Corporate Events",
                    description:
                      "Strategic planning and execution of corporate events including team building, annual meetings, and galas.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Weddings",
                    description: "Comprehensive wedding planning services from concept to execution.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Conferences",
                    description:
                      "Full-service conference planning including venue selection, speaker management, and logistics.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="evenTrendz Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl">
              Comprehensive event management solutions tailored to your unique needs. At evenTrendz, we offer a wide
              range of services designed to make your event exceptional, memorable, and stress-free. Our experienced
              team handles every detail with precision and creativity, ensuring that your vision becomes reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to large-scale productions, we provide end-to-end event management services that
              ensure your event is a success. Our comprehensive approach means you can rely on us for everything from
              initial concept development to day-of execution, with careful attention to every detail along the way. We
              believe that successful events require both creative vision and meticulous planning, which is why our
              services combine both elements to deliver exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-sm">
                <div className="mb-6 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={service.link} className="text-primary hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Events Section */}
      <section id="corporate-events" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Corporate Events</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that corporate events are not just gatherings—they're strategic opportunities to
                strengthen your brand, motivate your team, and build relationships with clients and partners. Our
                corporate event planning services are designed to align with your business objectives and company
                culture, creating experiences that deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With years of experience in corporate event planning, we understand the unique challenges and
                opportunities that come with organizing business events. From managing complex logistics to ensuring
                brand consistency, we handle every aspect with professionalism and attention to detail. Our goal is to
                create corporate events that not only meet but exceed your expectations and help you achieve your
                business objectives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">Our corporate event services include:</p>
              <ul className="space-y-3 mb-8">
                {corporateEventServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">Discuss Your Corporate Event</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Corporate event" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Weddings Section */}
      <section id="weddings" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Wedding event" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Weddings</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your wedding day should be as unique as your love story. We work closely with you to create a
                celebration that reflects your personality, style, and vision. Our wedding planning services are
                designed to make the planning process enjoyable and stress-free, allowing you to focus on the joy of
                your engagement and upcoming marriage.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that planning a wedding can be overwhelming, which is why we offer various levels of
                service to meet your specific needs. Whether you're looking for full-service planning from engagement to
                "I do," or simply need day-of coordination to ensure everything runs smoothly, our experienced team is
                here to help. We handle the details, timelines, and logistics so you can enjoy every moment of your
                special day.
              </p>
              <p className="text-lg text-muted-foreground mb-6">Our wedding services include:</p>
              <ul className="space-y-3 mb-8">
                {weddingServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">Plan Your Wedding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section id="conferences" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Conferences</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in creating engaging conference experiences that facilitate knowledge sharing, networking,
                and professional development. Our conference planning services are designed to handle the complex
                logistics involved in organizing successful conferences, allowing you to focus on content and
                participants.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From small industry gatherings to large international conferences, we have the expertise and resources
                to ensure your event runs smoothly and achieves its objectives. We pay attention to every detail, from
                the layout of the space to the flow of the agenda, creating an environment that encourages learning,
                collaboration, and connection. Our goal is to create conference experiences that leave a lasting
                impression on attendees and achieve your organizational objectives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">Our conference services include:</p>
              <ul className="space-y-3 mb-8">
                {conferenceServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">Plan Your Conference</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Conference event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure every event we manage is successful and stress-free for our
              clients. Our proven process has been refined through years of experience planning and executing events of
              all types and sizes. We believe that transparency and communication are key to successful event planning,
              which is why we keep you informed and involved throughout every step of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with a detailed consultation to understand your vision, objectives, and requirements. During this initial meeting, we'll discuss your event goals, budget considerations, timeline, and any specific ideas or preferences you have. This helps us create a solid foundation for planning your event and ensures we're aligned with your expectations from the start.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Our team develops a comprehensive plan, including timeline, budget, and logistics. We create detailed project plans that outline every aspect of your event, from venue selection and vendor coordination to design elements and guest management. Our meticulous planning process ensures that nothing is overlooked and that your event will run smoothly.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "We handle all aspects of event execution, from setup to coordination with vendors. On the day of your event, our experienced team will be on-site to oversee every detail, manage vendors, solve any unexpected issues, and ensure that everything happens according to plan. We coordinate all the moving parts so you can focus on enjoying the event.",
              },
              {
                number: "04",
                title: "Follow-up",
                description:
                  "After the event, we conduct a thorough evaluation and provide detailed reporting. We believe that the post-event phase is just as important as the planning and execution phases. We'll gather feedback, analyze the success of the event against your objectives, and provide insights that can inform future events. Our goal is to build long-term relationships with our clients.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Unforgettable Event?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to discuss how we can bring your vision to life. Whether you're planning a corporate
              event, wedding, conference, or any other special occasion, our team of experienced event planners is ready
              to help you create an exceptional experience that exceeds your expectations. Let's work together to make
              your next event a resounding success.
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

