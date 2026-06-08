"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Image from "next/image"
import PageCover from "@/components/ui/PageCover"
import PageSEO from "@/components/ui/PageSEO"

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
    console.log("Contact form submitted:", data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      <PageCover
        src="/sunsetcruise1.jpg"
        alt="Sunset cruise on the Indian Ocean"
        label="Contact"
        title="Get in Touch"
        subtitle="Ready to plan your Mafia Island adventure? We're here to help create the perfect itinerary for you."
      />

      {/* Main Content */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 font-montserrat mb-5">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-gray-700">
                      Kilindoni Village
                      <br />
                      Mafia Island
                      <br />
                      Pwani Region, Tanzania
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm text-gray-700">+255 785 696 021</p>
                    <p className="text-sm text-gray-700">+255 776 986 840</p>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm text-gray-700">mafiaislandauthentic@gmail.com</p>
                    <p className="text-sm text-gray-700">buccaphilox0104@gmail.com</p>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Office Hours</p>
                    <p className="text-sm text-gray-700">
                      Monday - Sunday
                      <br />
                      6:00 AM - 8:00 PM EAT
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="font-semibold text-primary text-sm mb-1">Quick Response</p>
                  <p className="text-primary/70 text-xs">
                    We typically respond within 2-4 hours during business hours. For urgent bookings, please call.
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Prefer WhatsApp?</p>
                <p className="text-xs text-gray-500 mb-4">
                  Get a faster response by messaging us directly
                </p>
                <a
                  href="https://wa.me/255785696021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Profile + Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Chinanda Profile */}
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    className="rounded-full object-cover border-2 border-gray-200"
                    src="/Chinanda.jpg"
                    alt="Chinanda Salumu"
                    fill
                    priority
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-bold text-gray-900 font-montserrat">
                    Chinanda Salumu
                  </h2>
                  <p className="text-sm text-primary font-medium mt-0.5">
                    Co-CEO &amp; Diving Instructor
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    4 years experience &middot; Specialty: coral reef diving
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    WhatsApp: +255 785 696 021
                  </p>
                  <button
                    onClick={() => {
                      const defaultMessage =
                        "Hello Chinanda! I'm interested in a Mafia Island cultural tour. Please provide more details."
                      const url = `https://wa.me/255785696021?text=${encodeURIComponent(defaultMessage)}`
                      window.open(url, "_blank")
                    }}
                    className="mt-4 bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Chat with Chinanda
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 font-montserrat mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                    <p className="text-emerald-800 font-medium">Message sent successfully!</p>
                    <p className="text-emerald-600 text-sm mt-1">We&apos;ll get back to you within 2-4 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        {...register("subject")}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your plans..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  What&apos;s the best time to visit Mafia Island?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The best time for whale shark encounters is October to March. For diving and general activities, May to October offers the best weather conditions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  Do I need diving certification?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Not for all activities. We offer snorkeling tours for non-divers, and can arrange diving courses for beginners.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  How do I get to Mafia Island?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  You can fly from Dar es Salaam (45 minutes) or take a ferry. We can help arrange transportation.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  What should I bring?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Sunscreen, hat, swimwear, and a camera. We provide all snorkeling and diving equipment. We&apos;ll send a packing list after booking.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  Are tours suitable for children?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Yes. Many tours are family-friendly. We recommend minimum age 8 for snorkeling and 12 for diving.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  What&apos;s your cancellation policy?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We offer flexible cancellation up to 48 hours before your tour. Weather-related cancellations are fully refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contact us today and let&apos;s create your perfect Mafia Island itinerary
          </p>
          <a
            href="https://wa.me/255785696021"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
