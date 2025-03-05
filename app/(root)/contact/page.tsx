import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with EventTrendz support team for any queries or assistance.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">prashant.kumarjha2024@vitstudent.ac.in</p>
                  <p className="text-sm text-muted-foreground">eventrendzin@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Prashant Kumar Jha
                    <br />
                    Vit Chennai
                    <br />
                    Vandalur-Kelambakkam road
                    <br />
                    Chennai-600 127, Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

