import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read about EventTrendz's terms of service and conditions of use.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using eventTrendz's website and services, you accept and agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>You must be at least 18 years old to create an account</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for all activities under your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Booking and Payments</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>All bookings are subject to availability</li>
            <li>Prices are inclusive of applicable taxes</li>
            <li>Payment must be made at the time of booking</li>
            <li>We use stripe as the formal payment backend for the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Cancellation Policy</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Cancellations must be made at least 4 hors before show time</li>
            <li>Cancellation charges may apply</li>
            <li>Refunds are processed within 5-7 business days</li>
            <li>No refunds for missed shows or late arrivals</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Using the service for unlawful purposes</li>
            <li>Attempting to gain unauthorized access</li>
            <li>Interfering with the service's functionality</li>
            <li>Sharing account credentials</li>
            <li>Reselling tickets without authorization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on the website, including text, graphics, logos, and software, is the property of eventTrendz
            and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            eventTrendz is not liable for any indirect, incidental, special, consequential, or punitive damages arising
            from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            on the website. Your continued use of our services constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
          <p className="text-muted-foreground">
            For questions about these Terms of Service, please contact us at the details provided at the contact us.
          </p>
        </section>
      </div>
    </div>
  )
}

