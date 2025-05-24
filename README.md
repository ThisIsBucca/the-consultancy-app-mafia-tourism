# Mafia Island Tours - Full-Stack Travel Web App

A modern, responsive web application for a travel consultancy business focused on Mafia Island, Tanzania. Built with Next.js, Supabase, and TanStack Query.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, Open Graph, structured data

## 📱 Pages

- **Homepage**: Hero section, features, testimonials
- **Tours**: Dynamic tour listings with filtering
- **Tour Details**: Individual tour pages with booking forms
- **About**: Company story, team, values
- **Gallery**: Image gallery with categories
- **Contact**: Contact form with FAQ section

## 🛠️ Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <repository-url>
cd mafia-island-tours
npm install
\`\`\`

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
3. Copy your project URL and anon key

### 3. Environment Variables

Create a `.env.local` file:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

- **tours**: Tour information and details
- **bookings**: Customer booking requests
- **testimonials**: Customer reviews and ratings

## 🎨 Key Components

- **Responsive Navigation**: Mobile hamburger menu + desktop tabs
- **Tour Cards**: Reusable tour display components
- **Booking Forms**: Validated forms with React Hook Form
- **Image Handling**: Next.js Image with fallbacks
- **Loading States**: Skeleton loaders and error handling

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: TanStack Query for server state caching
- **SEO**: Meta tags and Open Graph optimization

## 🔧 Customization

- **Styling**: Modify `tailwind.config.js` for design system
- **Data**: Update `supabase/schema.sql` for database changes
- **Components**: All components are modular and reusable
- **Content**: Update tour data directly in Supabase

## 📝 License

This project is licensed under the MIT License.
\`\`\`

I've created a complete full-stack travel consultancy web application for Mafia Island that incorporates all the features from your specification. Here's what I've built:

## 🏗️ **Complete Application Structure**

### **Frontend Features:**
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Modern Navigation**: Sticky navbar with mobile hamburger menu
- **Hero Section**: Full-width with call-to-action buttons
- **Tour Management**: Dynamic tour listings with filtering
- **Booking System**: Complete booking forms with validation
- **Gallery**: Image gallery with category filtering
- **Contact Forms**: Contact page with FAQ section

### **Backend Integration:**
- **Supabase Database**: PostgreSQL with tours, bookings, testimonials tables
- **TanStack Query**: For all server state management and caching
- **Form Validation**: React Hook Form with Zod schemas
- **Real-time Data**: Live updates from Supabase

### **Key Pages:**
1. **Homepage** - Hero, features, testimonials, CTA sections
2. **Tours** - Dynamic tour listings with category filters
3. **Tour Details** - Individual tour pages with booking forms
4. **About** - Company story, team, values
5. **Gallery** - Image gallery with categories
6. **Contact** - Contact form with FAQ

### **Technical Features:**
- **TypeScript** throughout for type safety
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Next.js Image and code splitting
- **Error Handling** and loading states
- **Responsive Design** for all screen sizes

### **Setup Instructions:**
1. Install dependencies: `npm install`
2. Set up Supabase project and run the provided SQL schema
3. Add environment variables for Supabase
4. Run development server: `npm run dev`

The application is production-ready and can be deployed to Vercel with one click. All components are modular and reusable, making it easy to customize and extend.
