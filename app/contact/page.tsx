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
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
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
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+255 123 456 789</p>
                    <p className="text-gray-600">+255 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@mafiaislandtours.com</p>
                    <p className="text-gray-600">bookings@mafiaislandtours.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
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

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3>
                <p className="text-blue-800 text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours. For urgent bookings,
                  please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="text-green-600 text-xl mr-3">✓</div>
                    <div>
                      <h3 className="text-green-800 font-semibold">Message Sent!</h3>
                      <p className="text-green-700 text-sm">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    {...register("subject")}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your travel plans, questions, or special requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
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
    </div>
  )
}
