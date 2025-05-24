"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCreateBooking } from "../../lib/queries"
import { Calendar, Users, Mail, Phone, User, Info } from "lucide-react"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  travel_date: z.string().min(1, "Please select a travel date"),
  number_of_people: z.number().min(1, "At least 1 person required").max(20, "Maximum 20 people"),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingFormProps {
  tourId: string
  tourTitle: string
  tourPrice: number
}

export const BookingForm = ({ tourId, tourTitle, tourPrice }: BookingFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const createBooking = useCreateBooking()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    try {
      await createBooking.mutateAsync({
        ...data,
        tour_id: tourId,
      })
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error("Booking error:", error)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Booking Request Submitted!</h3>
        <p className="text-green-700">
          Thank you for your interest in {tourTitle}. Your booking has been logged in demo mode. Check the browser
          console to see the booking details.
        </p>
        <button onClick={() => setIsSubmitted(false)} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Submit Another Booking
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Tour</h3>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <Info className="h-5 w-5 text-blue-600 mr-2" />
          <div>
            <h4 className="text-blue-800 font-semibold">Demo Mode</h4>
            <p className="text-blue-700 text-sm">
              This is a demonstration. Bookings will be logged to the browser console.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Travel Date *
            </label>
            <input
              {...register("travel_date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.travel_date && <p className="text-red-500 text-sm mt-1">{errors.travel_date.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Number of People *
            </label>
            <select
              {...register("number_of_people", { valueAsNumber: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "Person" : "People"}
                </option>
              ))}
            </select>
            {errors.number_of_people && <p className="text-red-500 text-sm mt-1">{errors.number_of_people.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Questions</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any special requirements, dietary restrictions, or questions..."
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total Estimated Cost:</span>
            <span className="text-blue-600">${tourPrice} per person</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Final pricing will be confirmed based on your specific requirements and travel dates.
          </p>
        </div>

        <button
          type="submit"
          disabled={createBooking.isPending}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {createBooking.isPending ? "Submitting..." : "Submit Booking Request"}
        </button>
      </form>
    </div>
  )
}
