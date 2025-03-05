import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to commonly asked questions about EventTrendz services, bookings, and policies.",
}

const faqs = [
  {
    question: "How do I book movie tickets?",
    answer:
      "Booking movie tickets is easy! Simply select your city, choose your preferred movie, select the show timing and cinema, pick your seats, and proceed to payment. Once payment is complete, you'll receive your booking confirmation via email and SMS.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking up to 4 hours before the show time. The refund will be processed according to our refund policy and the cancellation charges may apply.",
  },
  {
    question: "How can I get a refund for cancelled shows?",
    answer:
      "For cancelled shows, refunds are automatically processed to the original payment method within 5-7 business days. You'll receive an email notification once the refund is initiated.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all payment methods provide to us by our secure payment gateway of stripe.",
  },
  {
    question: "How do I get my tickets?",
    answer:
      "After successful booking, it will be reflected in your profile. You can also download them from your profile section on our website or app.",
  },
  {
    question: "What if I don't receive my booking confirmation?",
    answer:
      "If you don't receive your booking confirmation within 15 minutes, please check your spam folder. You can also check your booking status in your profile section or contact our customer support.",
  },
  {
    question: "Can I book tickets for a group?",
    answer:
      "Yes, you can book up to 10 tickets per transaction. For larger group bookings, please contact our customer support or use our corporate booking service.",
  },
  {
    question: "How do I use promo codes?",
    answer:
      "Enter your promo code in the designated field during checkout before making the payment. The discount will be automatically applied if the code is valid and applicable.",
  },
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 border rounded-lg bg-muted">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <a href="/contact" className="text-primary hover:underline font-medium">
            Contact Support →
          </a>
        </div>
      </div>
    </div>
  )
}

