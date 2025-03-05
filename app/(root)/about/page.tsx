import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about EventTrendz - Your premier destination for movie and event tickets.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About EventTrendz</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded in 2024, eventTrendz has grown to become one of the leading entertainment ticketing platforms. We
            connect millions of fans to their favorite movies, shows, and events, making entertainment accessible to
            everyone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To provide seamless access to entertainment by connecting fans with the best movies, events, and experiences
            while delivering exceptional service and innovative solutions.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">1+</h3>
            <p className="text-muted-foreground">Partner Venues</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">1+</h3>
            <p className="text-muted-foreground">Cities Covered</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and strive to provide the best possible experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">We continuously improve our platform with the latest technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">We ensure secure and dependable service for all transactions.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">We make entertainment accessible to everyone, everywhere.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

