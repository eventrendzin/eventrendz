import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a CMS or database
const blogPost = {
  id: 1,
  title: "10 Corporate Event Trends to Watch in 2025",
  content: `
    <h2>Introduction</h2>
    <p>Corporate events continue to evolve as technology advances...</p>
    <!-- The rest of the content remains unchanged -->
  `,
  excerpt: "Discover the latest trends shaping corporate events in 2025...",
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
    excerpt: "A comprehensive guide to selecting the ideal venue...",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 28, 2025",
    author: "Jamie Chen",
  },
  {
    id: 5,
    title: "Leveraging Technology to Enhance Event Engagement",
    excerpt: "Explore how the latest technologies can be used...",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 18, 2025",
    author: "Alex Morgan",
  },
  {
    id: 7,
    title: "5 Ways to Maximize ROI on Your Corporate Events",
    excerpt: "Learn how to measure and maximize the return...",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 20, 2024",
    author: "Taylor Williams",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = params.id;  // Make sure to retrieve the id properly

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
              "@id": `https://eventrendz.com/blog/${postId}`,
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
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
