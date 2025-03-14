import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Clock, Heart, Lightbulb, Target, Users } from "lucide-react"

export const metadata = {
  title: "About Us | evenTrendz - Premier Event Management",
  description:
    "Learn about evenTrendz, founded in 2025, and our mission to create exceptional event experiences through creativity, precision, and innovation.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org markup for AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About evenTrendz",
            description:
              "Learn about evenTrendz, founded in 2025, and our mission to create exceptional event experiences through creativity, precision, and innovation.",
            publisher: {
              "@type": "Organization",
              name: "evenTrendz",
              logo: {
                "@type": "ImageObject",
                url: "https://eventrendz.com/logo.png",
              },
            },
            mainEntity: {
              "@type": "Organization",
              name: "evenTrendz",
              foundingDate: "2025",
              foundingLocation: "New York, NY",
              description:
                "evenTrendz is a premier event management company founded in 2025, specializing in corporate events, weddings, conferences, and more.",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About evenTrendz"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About evenTrendz</h1>
            <p className="text-lg md:text-xl">
              Founded in 2025, we're on a mission to transform how events are experienced. Our innovative approach to
              event management combines creative vision with meticulous execution, resulting in exceptional experiences
              that exceed expectations and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                evenTrendz was founded in 2025 by a team of passionate event professionals who saw an opportunity to
                elevate the standard of event management services. With a shared vision of creating exceptional event
                experiences, our founders combined their diverse backgrounds and expertise to establish a company that
                would redefine the industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With decades of combined experience in the industry, our founders set out to create a company that would
                blend creative vision with flawless execution, ensuring that every event not only meets but exceeds
                client expectations. They recognized that successful events require both artistic creativity and
                meticulous attention to detail, and built a team that excels in both areas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From our humble beginnings with a small team and a handful of clients, we've grown steadily by
                delivering exceptional results and building strong relationships. Our commitment to quality and
                innovation has earned us a reputation as a trusted partner for clients seeking memorable and impactful
                events.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, evenTrendz has grown into a leading event management company, known for our innovative approach,
                attention to detail, and commitment to creating memorable experiences for our clients and their guests.
                We continue to push boundaries, embrace new technologies, and refine our processes to deliver events
                that transform ideas into unforgettable experiences.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="evenTrendz team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At evenTrendz, we're guided by a clear mission and a set of core values that inform everything we do.
              These principles shape our approach to event management and reflect our commitment to excellence,
              creativity, and client satisfaction. They serve as the foundation for our company culture and guide our
              decision-making process at every level.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Target className="mr-3 text-primary" size={28} />
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground">
                To transform ideas into exceptional event experiences that create lasting memories, exceed expectations,
                and help our clients achieve their goals. We are committed to delivering events that not only meet the
                practical objectives of our clients but also create emotional connections and memorable moments for all
                participants. Through innovative design, meticulous planning, and flawless execution, we strive to
                elevate the standard of event management and set new benchmarks for excellence in our industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="text-primary" size={28} />,
                title: "Innovation",
                description:
                  "We constantly seek new ideas and approaches to create unique and memorable events. Innovation is at the heart of our approach to event management. We stay at the forefront of industry trends, embrace new technologies, and think creatively to develop fresh solutions that set our events apart. We're not content with the status quo and are always looking for ways to enhance the event experience.",
              },
              {
                icon: <Heart className="text-primary" size={28} />,
                title: "Passion",
                description:
                  "We're passionate about events and bring enthusiasm and energy to every project. Our team is genuinely excited about creating exceptional experiences, and this passion drives us to go above and beyond for our clients. We believe that when you love what you do, it shows in the quality of your work, and we channel our enthusiasm into creating events that inspire and delight.",
              },
              {
                icon: <Award className="text-primary" size={28} />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from planning to execution. We set high standards for ourselves and are committed to delivering the highest quality of service at every stage of the event planning process. We pay attention to the smallest details, continuously refine our processes, and measure our success by the satisfaction of our clients and the achievement of their objectives.",
              },
              {
                icon: <Users className="text-primary" size={28} />,
                title: "Collaboration",
                description:
                  "We work closely with our clients and partners to achieve shared goals. We believe that the best events are the result of true collaboration between our team, our clients, and our network of vendors and partners. We listen carefully to understand our clients' vision, communicate openly throughout the planning process, and foster strong relationships based on trust and mutual respect.",
              },
              {
                icon: <Calendar className="text-primary" size={28} />,
                title: "Reliability",
                description:
                  "We deliver on our promises and can be counted on when it matters most. Reliability is fundamental to our approach to client service. We understand that our clients are entrusting us with important events, and we take that responsibility seriously. We are dependable, consistent, and accountable, ensuring that we meet deadlines, stay within budget, and deliver the results we promise.",
              },
              {
                icon: <Clock className="text-primary" size={28} />,
                title: "Adaptability",
                description:
                  "We're flexible and responsive, adapting quickly to changing circumstances. In the dynamic world of event management, the ability to adapt is essential. We anticipate challenges, respond effectively to unexpected situations, and adjust our plans when necessary. Our agility allows us to navigate complexities and deliver successful events even when faced with changing requirements or unforeseen obstacles.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-semibold ml-3">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of event professionals brings diverse skills and experience to every project. Each
              member of our team contributes unique expertise and perspective, creating a collaborative environment
              where creativity flourishes and excellence is the standard. Together, we work seamlessly to transform your
              vision into reality and deliver exceptional event experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                bio: "With over 15 years in the event industry, Alex leads evenTrendz with vision and passion. His extensive experience includes managing high-profile corporate events, international conferences, and luxury weddings. Alex's strategic thinking, creative vision, and commitment to excellence set the standard for our company and inspire our team to deliver exceptional results for every client.",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Jamie Chen",
                role: "Creative Director",
                bio: "Jamie brings creative flair and innovative design concepts to every event we produce. With a background in fine arts and interior design, Jamie has a unique ability to transform spaces and create immersive environments that tell compelling stories. Her attention to aesthetic details, color theory, and spatial design ensures that our events are not only functional but also visually stunning and emotionally impactful.",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Taylor Williams",
                role: "Operations Manager",
                bio: "Taylor ensures flawless execution of events through meticulous planning and coordination. With a background in logistics and project management, Taylor excels at creating detailed timelines, managing complex logistics, and coordinating multiple vendors. Her organizational skills, attention to detail, and calm demeanor under pressure are invaluable assets that ensure our events run smoothly from setup to breakdown.",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Jordan Smith",
                role: "Client Relations",
                bio: "Jordan works closely with clients to understand their vision and exceed their expectations. With a background in hospitality and customer service, Jordan has a natural ability to build rapport with clients and understand their needs. Her excellent communication skills, empathetic approach, and commitment to client satisfaction ensure that every client feels heard, supported, and valued throughout the planning process.",
                image: "/placeholder.svg?height=500&width=500",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's create something amazing together. Contact us to discuss your next event. Whether you're planning a
              corporate gathering, wedding, conference, or any other special occasion, our team is ready to bring your
              vision to life. We'll work closely with you to understand your objectives, preferences, and budget, and
              develop a customized plan that meets your specific needs. Let's start the conversation today!
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

