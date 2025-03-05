import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read about EventTrendz's privacy policy and how we handle your data.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            This Privacy Policy explains how EventTrendz ("we," "us," or "our") collects, uses, shares, and protects
            your personal information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Personal Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Booking history</li>
            </ul>

            <h3 className="text-xl font-bold">Usage Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Process your bookings and transactions</li>
            <li>Send booking confirmations and updates</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Email: privacy@eventtrendz.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Entertainment Ave, Suite 456, New York, NY 10001
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last revised" date and the updated version will be effective as soon as it is accessible.
          </p>
        </section>
      </div>
    </div>
  )
}

