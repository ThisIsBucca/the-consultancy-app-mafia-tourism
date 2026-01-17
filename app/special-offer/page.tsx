"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sparkles,
  Mail,
  Phone,
  Users,
  Calendar,
  DollarSign,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"
import { sendSpecialOfferEmail } from "@/app/actions/send-special-offer"

export default function SpecialOfferPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    numberOfPeople: 0,
    preferredDates: "",
    budget: "",
    additionalRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const result = await sendSpecialOfferEmail({...formData})

      if (result?.success) {
        
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          numberOfPeople: 0,
          preferredDates: "",
          budget: "",
          additionalRequests: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage(error.message || "Failed to send your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
        
            <span className="text-sm font-medium">Custom Experience</span>
          </div> */}
          <h1 className="mb-4 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">Request Your Special Offer</h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
            Tell us what you're looking for, and we'll create a personalized experience just for you. Whether it's a
            custom tour, special package, or unique adventure, we're here to make it happen.
          </p>
        </div>

        {submitStatus === "success" && (
          <Card className="mx-auto mb-6 max-w-3xl border-green-500 bg-green-50 dark:bg-green-950">
            <CardContent className="flex items-center gap-3 pt-6">
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100">Request Sent Successfully!</p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Thank you for your request. We'll get back to you within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {submitStatus === "error" && (
          <Card className="mx-auto mb-6 max-w-3xl border-red-500 bg-red-50 dark:bg-red-950">
            <CardContent className="flex items-center gap-3 pt-6">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">Failed to Send Request</p>
                <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Form Card */}
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Share Your Dream Experience</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Fill out the form below and our team will contact you within 24 hours with a customized offer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold sm:text-lg">Personal Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="text-base"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+255 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold sm:text-lg">Trip Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    What are you interested in? *
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                    <SelectTrigger id="interest" className="text-base">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whale-shark">Swimming with Whale Sharks</SelectItem>
                      <SelectItem value="camping">Beach Camping</SelectItem>
                      <SelectItem value="diving">Diving & Snorkeling</SelectItem>
                      <SelectItem value="village-tour">Village Cultural Tour</SelectItem>
                      <SelectItem value="day-trip">Zanzibar Day Trip</SelectItem>
                      <SelectItem value="package">Complete Package</SelectItem>
                      <SelectItem value="custom">Custom Experience</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPeople" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of People *
                    </Label>
                    <Input
                      id="numberOfPeople"
                      type="number"
                      min="1"
                      required
                      placeholder="e.g., 2"
                      value={formData.numberOfPeople}
                      onChange={(e) => handleChange("numberOfPeople", e.target.value)}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDates" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Dates
                    </Label>
                    <Input
                      id="preferredDates"
                      type="text"
                      placeholder="e.g., March 15-20, 2025"
                      value={formData.preferredDates}
                      onChange={(e) => handleChange("preferredDates", e.target.value)}
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Budget Range (USD)
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                    <SelectTrigger id="budget" className="text-base">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100">Under $100</SelectItem>
                      <SelectItem value="100-300">$100 - $300</SelectItem>
                      <SelectItem value="300-500">$300 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="over-1000">Over $1,000</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalRequests" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Additional Requests or Comments
                  </Label>
                  <Textarea
                    id="additionalRequests"
                    placeholder="Tell us more about what you're looking for, any special requirements, dietary restrictions, or anything else we should know..."
                    value={formData.additionalRequests}
                    onChange={(e) => handleChange("additionalRequests", e.target.value)}
                    className="min-h-[120px] resize-none text-base"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-base sm:text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Submit Request
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground sm:text-sm">
                By submitting this form, you agree to be contacted by our team regarding your request
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <h2 className="mb-6 text-center text-xl font-bold sm:text-2xl">Why Request a Special Offer?</h2>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Personalized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every experience is tailored to your preferences, schedule, and budget
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Best Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get competitive pricing and exclusive deals not available elsewhere
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our local team ensures authentic experiences and handles all the details
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
