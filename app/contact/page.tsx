"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", data)
    setIsSubmitted(true)
    reset()

    // Reset the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your Mafia Island adventure? Get in touch with our team and we'll help you create the perfect
            itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Kilindoni Village
                      <br />
                      Mafia Island
                      <br />
                      Pwani Region, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+255 785 696 021</p>
                    <p className="text-gray-600">+255 776 986 840</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">mafiaislandauthentic@gmail.com</p>
                    <p className="text-gray-600">buccaphilox0104@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday
                      <br />
                      6:00 AM - 8:00 PM EAT
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                <p className="text-primary text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours. For urgent bookings,
                  please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Chinanda Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src="/chinanda.jpg"
                alt="Chinanda Salumu"
                className="w-32 h-32 rounded-full mb-4 border border-primary object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Chinanda Salumu</h2>
              <p className="text-primary font-medium mb-1">Cultural Tour Guide</p>
              <p className="text-gray-600 text-sm mb-1">12 years experience</p>
              <p className="text-gray-600 text-sm mb-4">Specialty: Village tours & traditions</p>
              <p className="text-gray-600 text-sm mb-6">WhatsApp: +255 785 696 021</p>
              <button
                onClick={() => {
                  const defaultMessage = "Hello Chinanda! I'm interested in a Mafia Island cultural tour. Please provide more details.";
                  const url = `https://wa.me/255785696021?text=${encodeURIComponent(defaultMessage)}`;
                  window.open(url, "_blank");
                }}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
              >
                Chat with Chinanda on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's the best time to visit Mafia Island?</h3>
              <p className="text-gray-600 mb-4">
                The best time for whale shark encounters is October to March. For diving and general activities, May to
                October offers the best weather conditions.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Do I need diving certification?</h3>
              <p className="text-gray-600 mb-4">
                Not for all activities! We offer snorkeling tours for non-divers, and we can arrange diving courses for
                beginners who want to explore deeper waters.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">How do I get to Mafia Island?</h3>
              <p className="text-gray-600">
                You can fly from Dar es Salaam (45 minutes) or take a ferry. We can help arrange transportation and
                provide detailed travel instructions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What should I bring?</h3>
              <p className="text-gray-600 mb-4">
                Sunscreen, hat, swimwear, and a camera! We provide all snorkeling and diving equipment. We'll send you a
                detailed packing list after booking.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Are your tours suitable for children?</h3>
              <p className="text-gray-600 mb-4">
                Yes! Many of our tours are family-friendly. We recommend a minimum age of 8 for snorkeling activities
                and 12 for diving.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">What's your cancellation policy?</h3>
              <p className="text-gray-600">
                We offer flexible cancellation up to 48 hours before your tour. Weather-related cancellations are fully
                refundable or can be rescheduled.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/255785696021"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </div>
  )
}
