import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import type { Metadata } from "next"

type BlogPostParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  // In a real app, you would fetch the blog post data based on params.id
  return {
    title: "10 Corporate Event Trends to Watch in 2025 | evenTrendz Blog",
    description:
      "Discover the latest trends shaping corporate events in 2025, from immersive technologies to sustainable practices.",
  }
}

// This would typically come from a CMS or database
const blogPost = {
  id: 1,
  title: "10 Corporate Event Trends to Watch in 2025",
  content: `
    <h2>Introduction</h2>
    <p>Corporate events continue to evolve as technology advances, sustainability becomes more important, and attendee expectations change. As we look ahead to 2025, several emerging trends are set to transform how companies plan and execute their events. Understanding these trends can help event planners and businesses create more engaging, effective, and memorable corporate gatherings.</p>
    
    <p>In this comprehensive guide, we'll explore the top 10 corporate event trends that are expected to dominate in 2025. From innovative technologies to sustainable practices, these trends reflect the changing landscape of corporate events and provide insights into how businesses can stay ahead of the curve.</p>
    
    <h2>1. Hybrid Events Become the Standard</h2>
    <p>While in-person events have made a strong comeback, the hybrid model is here to stay. In 2025, we expect to see more sophisticated hybrid events that offer equally engaging experiences for both in-person and virtual attendees. This includes:</p>
    
    <ul>
      <li>Advanced streaming technologies that provide high-quality, immersive experiences for remote participants</li>
      <li>Interactive elements that allow virtual attendees to engage with speakers and other participants in real-time</li>
      <li>Dedicated content and networking opportunities specifically designed for virtual attendees</li>
      <li>Seamless integration between physical and digital components of the event</li>
    </ul>
    
    <p>Companies are recognizing that hybrid events allow them to reach a wider audience, reduce travel costs, and decrease their carbon footprint while still providing valuable face-to-face interactions for those who attend in person.</p>
    
    <h2>2. AI-Powered Personalization</h2>
    <p>Artificial intelligence is revolutionizing how corporate events are planned and experienced. In 2025, AI will play an even more significant role in creating personalized experiences for attendees. This includes:</p>
    
    <ul>
      <li>Customized agendas based on attendees' interests, roles, and past behavior</li>
      <li>AI-powered networking tools that match attendees with relevant connections</li>
      <li>Personalized content recommendations throughout the event</li>
      <li>Real-time translation services for international events</li>
      <li>Chatbots that provide instant, personalized assistance to attendees</li>
    </ul>
    
    <p>By leveraging AI, event planners can create more relevant and engaging experiences that meet the specific needs and interests of each attendee.</p>
    
    <h2>3. Sustainability Takes Center Stage</h2>
    <p>Environmental consciousness is no longer optional for corporate events. In 2025, sustainability will be a central consideration in event planning, with companies implementing various strategies to reduce their environmental impact:</p>
    
    <ul>
      <li>Zero-waste events with comprehensive recycling and composting programs</li>
      <li>Plant-based and locally sourced catering options</li>
      <li>Digital materials replacing printed handouts and signage</li>
      <li>Carbon offset programs for unavoidable emissions</li>
      <li>Venues powered by renewable energy</li>
      <li>Sustainable transportation options for attendees</li>
    </ul>
    
    <p>Companies will not only implement these practices but also communicate their sustainability efforts to attendees, recognizing that environmental responsibility is increasingly important to stakeholders.</p>
    
    <h2>4. Immersive Technologies Enhance Experiences</h2>
    <p>Virtual reality (VR), augmented reality (AR), and mixed reality (MR) are transforming corporate events by creating immersive, interactive experiences. In 2025, we expect to see more innovative applications of these technologies:</p>
    
    <ul>
      <li>VR product demonstrations that allow attendees to experience products in virtual environments</li>
      <li>AR wayfinding to help attendees navigate large venues</li>
      <li>Mixed reality presentations that combine physical and digital elements</li>
      <li>Virtual venues that replicate physical spaces for remote attendees</li>
      <li>Interactive 3D visualizations of complex data or concepts</li>
    </ul>
    
    <p>These technologies not only create memorable experiences but also provide new ways to communicate information and engage attendees.</p>
    
    <h2>5. Wellness Integration</h2>
    <p>As awareness of mental and physical health continues to grow, corporate events in 2025 will increasingly incorporate wellness elements. This trend reflects the understanding that well-being is essential for productivity and engagement:</p>
    
    <ul>
      <li>Mindfulness and meditation sessions between presentations</li>
      <li>Healthy food and beverage options that support cognitive function</li>
      <li>Physical activities such as yoga or walking meetings</li>
      <li>Quiet spaces for relaxation and reflection</li>
      <li>Wellness workshops on topics like stress management and work-life balance</li>
    </ul>
    
    <p>By prioritizing attendee well-being, companies can create more positive and productive event experiences.</p>
    
    <h2>6. Micro-Events and Targeted Gatherings</h2>
    <p>Rather than hosting large, one-size-fits-all events, many companies are shifting toward smaller, more focused gatherings. In 2025, we expect to see more micro-events that target specific audiences or objectives:</p>
    
    <ul>
      <li>Industry-specific or role-specific workshops</li>
      <li>Regional events that reduce travel requirements</li>
      <li>Exclusive executive roundtables</li>
      <li>Product-focused user groups</li>
      <li>Department or team-specific training sessions</li>
    </ul>
    
    <p>These smaller events allow for more meaningful interactions, targeted content, and personalized experiences that address the specific needs and interests of attendees.</p>
    
    <h2>7. Data-Driven Event Planning and Evaluation</h2>
    <p>Advanced analytics will play a crucial role in corporate events in 2025, informing both planning decisions and post-event evaluation. Event planners will leverage data to:</p>
    
    <ul>
      <li>Predict attendance and engagement based on historical data</li>
      <li>Track attendee behavior and preferences in real-time</li>
      <li>Measure ROI through comprehensive metrics</li>
      <li>Optimize event layouts and schedules based on traffic patterns</li>
      <li>Personalize follow-up communications based on individual attendee engagement</li>
    </ul>
    
    <p>By taking a data-driven approach, companies can continuously improve their events and demonstrate their value to stakeholders.</p>
    
    <h2>8. Interactive and Participatory Formats</h2>
    <p>Passive presentations are giving way to more interactive and participatory formats that actively engage attendees. In 2025, corporate events will feature:</p>
    
    <ul>
      <li>Collaborative problem-solving sessions</li>
      <li>Interactive workshops that encourage hands-on learning</li>
      <li>Audience-driven content through live polling and Q&A</li>
      <li>Gamified elements that make learning and networking more engaging</li>
      <li>Peer-to-peer learning opportunities</li>
    </ul>
    
    <p>These formats recognize that active participation leads to better retention of information and more meaningful connections among attendees.</p>
    
    <h2>9. Authentic and Purpose-Driven Experiences</h2>
    <p>Corporate events in 2025 will increasingly reflect companies' values and purpose, moving beyond product promotion to create authentic connections with attendees. This includes:</p>
    
    <ul>
      <li>Storytelling that communicates the company's mission and impact</li>
      <li>Community service components that allow attendees to give back</li>
      <li>Transparent discussions about challenges and solutions</li>
      <li>Diverse speakers and perspectives that reflect inclusive values</li>
      <li>Alignment between event practices and company values</li>
    </ul>
    
    <p>By creating purpose-driven events, companies can strengthen relationships with stakeholders and build brand loyalty based on shared values.</p>
    
    <h2>10. Enhanced Networking Opportunities</h2>
    <p>While content remains important, networking is often cited as the most valuable aspect of corporate events. In 2025, events will feature more sophisticated networking opportunities:</p>
    
    <ul>
      <li>AI-powered matchmaking that connects attendees with similar interests or complementary goals</li>
      <li>Structured networking sessions with specific objectives</li>
      <li>Virtual networking lounges for remote attendees</li>
      <li>Industry-specific or topic-specific networking groups</li>
      <li>Follow-up systems that help attendees maintain connections after the event</li>
    </ul>
    
    <p>By facilitating meaningful connections, corporate events can provide lasting value that extends beyond the event itself.</p>
    
    <h2>Conclusion</h2>
    <p>As we look ahead to 2025, corporate events are evolving to become more personalized, sustainable, technology-enhanced, and purpose-driven. By embracing these trends, companies can create more effective and memorable events that achieve their business objectives while providing valuable experiences for attendees.</p>
    
    <p>At evenTrendz, we're committed to staying at the forefront of these trends and helping our clients create innovative corporate events that drive results. Whether you're planning a conference, product launch, team-building retreat, or any other corporate event, our experienced team can help you incorporate these trends in ways that align with your specific goals and audience.</p>
    
    <p>Contact us today to discuss how we can help you plan your next exceptional corporate event.</p>
  `,
  excerpt:
    "Discover the latest trends shaping corporate events in 2025, from immersive technologies to sustainable practices.",
  image: "/placeholder.svg?height=600&width=1200",
  date: "March 15, 2025",
  author: "Alex Morgan",
  authorTitle: "Founder & CEO",
  authorImage: "/placeholder.svg?height=200&width=200",
  readTime: "8 min read",
  category: "Corporate Events",
  tags: ["Corporate Events", "Event Planning", "Technology", "Sustainability", "2025 Trends"],
}

// Related posts would typically be fetched from a database
const relatedPosts = [
  {
    id: 2,
    title: "How to Choose the Perfect Venue for Your Event",
    excerpt:
      "A comprehensive guide to selecting the ideal venue that meets your event's requirements and enhances the attendee experience.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 28, 2025",
    author: "Jamie Chen",
  },
  {
    id: 5,
    title: "Leveraging Technology to Enhance Event Engagement",
    excerpt:
      "Explore how the latest technologies can be used to create more interactive and engaging event experiences.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 18, 2025",
    author: "Alex Morgan",
  },
  {
    id: 7,
    title: "5 Ways to Maximize ROI on Your Corporate Events",
    excerpt:
      "Learn how to measure and maximize the return on investment for your corporate events with these proven strategies.",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 20, 2024",
    author: "Taylor Williams",
  },
]

export default function BlogPostPage({ params }: BlogPostParams) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org markup for BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogPost.title,
            image: `https://eventrendz.com${blogPost.image}`,
            datePublished: blogPost.date,
            dateModified: blogPost.date,
            author: {
              "@type": "Person",
              name: blogPost.author,
            },
            publisher: {
              "@type": "Organization",
              name: "evenTrendz",
              logo: {
                "@type": "ImageObject",
                url: "https://eventrendz.com/logo.png",
              },
            },
            description: blogPost.excerpt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://eventrendz.com/blog/${params.id}`,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <Link href="/blog" className="flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPost.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {blogPost.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-muted hover:bg-muted/80 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Share This Post</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-card rounded-lg p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{blogPost.author}</h3>
                    <p className="text-primary mb-4">{blogPost.authorTitle}</p>
                    <p className="text-muted-foreground">
                      Alex is the founder and CEO of evenTrendz with over 15 years of experience in the event management
                      industry. He is passionate about creating exceptional event experiences and staying at the
                      forefront of industry trends and innovations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                <div className="space-y-6">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 mb-1">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[
                    "All Posts",
                    "Corporate Events",
                    "Weddings",
                    "Conferences",
                    "Planning Tips",
                    "Technology",
                    "Sustainability",
                  ].map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block p-2 rounded-md hover:bg-muted transition-colors ${
                          category === blogPost.category ? "bg-muted font-medium" : ""
                        }`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4 text-primary-foreground/90">
                  Get the latest event planning tips and industry insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/70 mb-4"
                />
                <Button variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Posts Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Articles You Might Enjoy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore more of our insights and tips on event planning and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div key={post.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                    Read More
                  </Link>
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

