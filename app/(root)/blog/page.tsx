import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Tag, User } from "lucide-react"

export const metadata = {
  title: "Blog | evenTrendz - Premier Event Management",
  description:
    "Explore our blog for event planning tips, industry insights, and the latest trends in event management.",
}

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "10 Corporate Event Trends to Watch in 2025",
      excerpt:
        "Discover the latest trends shaping corporate events in 2025, from immersive technologies to sustainable practices.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 15, 2025",
      author: "Alex Morgan",
      readTime: "8 min read",
      category: "Corporate Events",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue for Your Event",
      excerpt:
        "A comprehensive guide to selecting the ideal venue that meets your event's requirements and enhances the attendee experience.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 28, 2025",
      author: "Jamie Chen",
      readTime: "6 min read",
      category: "Planning Tips",
    },
    {
      id: 3,
      title: "The Art of Creating Memorable Wedding Experiences",
      excerpt:
        "Learn how to incorporate personal touches and unique elements that will make your wedding truly unforgettable.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 12, 2025",
      author: "Taylor Williams",
      readTime: "7 min read",
      category: "Weddings",
    },
    {
      id: 4,
      title: "Sustainable Event Planning: Reducing Your Environmental Footprint",
      excerpt:
        "Practical strategies for planning eco-friendly events that minimize environmental impact without compromising on quality.",
      image: "/placeholder.svg?height=600&width=800",
      date: "January 30, 2025",
      author: "Jordan Smith",
      readTime: "5 min read",
      category: "Sustainability",
    },
    {
      id: 5,
      title: "Leveraging Technology to Enhance Event Engagement",
      excerpt:
        "Explore how the latest technologies can be used to create more interactive and engaging event experiences.",
      image: "/placeholder.svg?height=600&width=800",
      date: "January 18, 2025",
      author: "Alex Morgan",
      readTime: "9 min read",
      category: "Technology",
    },
    {
      id: 6,
      title: "The Psychology of Event Design: Creating Impactful Experiences",
      excerpt:
        "Understanding how design elements influence attendee behavior and emotions to create more effective events.",
      image: "/placeholder.svg?height=600&width=800",
      date: "January 5, 2025",
      author: "Jamie Chen",
      readTime: "7 min read",
      category: "Event Design",
    },
  ]

  // Categories for sidebar
  const categories = [
    "All Posts",
    "Corporate Events",
    "Weddings",
    "Conferences",
    "Planning Tips",
    "Technology",
    "Sustainability",
    "Event Design",
  ]

  // Popular posts for sidebar
  const popularPosts = [
    {
      id: 7,
      title: "5 Ways to Maximize ROI on Your Corporate Events",
      date: "December 20, 2024",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      title: "Event Budgeting 101: Tips for Staying on Track",
      date: "December 5, 2024",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 9,
      title: "Creating Inclusive Events: A Comprehensive Guide",
      date: "November 22, 2024",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="evenTrendz Blog"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Planning Insights</h1>
            <p className="text-lg md:text-xl">
              Expert tips, industry trends, and creative ideas for successful events.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div key={post.id} className="mb-16">
                    <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {post.category}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                    <Button asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                ))}

              {/* Regular Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <div key={post.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <div className="relative h-48 overflow-hidden">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
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

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="default" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block p-2 rounded-md hover:bg-muted transition-colors ${
                          index === 0 ? "bg-muted font-medium" : ""
                        }`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
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

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Planning Your Next Event?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Our team of experienced event planners is ready to bring your vision to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

