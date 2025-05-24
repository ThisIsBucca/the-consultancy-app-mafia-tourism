// Supabase types and configuration - kept for future use
export type Database = {
  public: {
    Tables: {
      tours: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          duration: string
          season?: string
          location?: string
          category: string
          image_url: string
          slug: string
          highlights: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          duration: string
          season?: string
          location?: string
          category: string
          image_url: string
          slug: string
          highlights: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          duration?: string
          season?: string
          location?: string
          category?: string
          image_url?: string
          slug?: string
          highlights?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          name: string
          email: string
          phone?: string
          tour_id: string
          travel_date: string
          number_of_people: number
          message?: string
          status: "pending" | "confirmed" | "cancelled"
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string
          tour_id: string
          travel_date: string
          number_of_people: number
          message?: string
          status?: "pending" | "confirmed" | "cancelled"
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          tour_id?: string
          travel_date?: string
          number_of_people?: number
          message?: string
          status?: "pending" | "confirmed" | "cancelled"
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          location: string
          content: string
          rating: number
          tour_id?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          content: string
          rating: number
          tour_id?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          location?: string
          content?: string
          rating?: number
          tour_id?: string
          created_at?: string
        }
      }
    }
  }
}

// Mock Supabase client for demo mode
const mockSupabaseClient = {
  from: (table: string) => ({
    select: (columns?: string) => ({
      order: (column: string, options?: any) => ({
        then: (callback: (result: { data: any[]; error: null }) => void) => {
          callback({ data: [], error: null })
        },
      }),
      eq: (column: string, value: any) => ({
        single: () => ({
          then: (callback: (result: { data: null; error: { message: string } }) => void) => {
            callback({ data: null, error: { message: "Demo mode - no data" } })
          },
        }),
      }),
    }),
    insert: (data: any) => ({
      select: () => ({
        single: () => ({
          then: (callback: (result: { data: any; error: null }) => void) => {
            callback({ data: { id: "demo-" + Date.now(), ...data }, error: null })
          },
        }),
      }),
    }),
  }),
}

// Always use demo mode - no Supabase dependency
export const supabase = mockSupabaseClient
export const isSupabaseEnabled = false

// When you're ready to use Supabase, replace the above with:
// import { createClient } from "@supabase/supabase-js"
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// export const isSupabaseEnabled = true
