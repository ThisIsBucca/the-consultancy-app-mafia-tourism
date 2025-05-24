-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tours table
CREATE TABLE tours (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  season VARCHAR(100),
  location VARCHAR(255),
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  highlights TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  travel_date DATE NOT NULL,
  number_of_people INTEGER NOT NULL CHECK (number_of_people > 0),
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  tour_id UUID REFERENCES tours(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample tours
INSERT INTO tours (title, description, price, duration, category, image_url, slug, highlights) VALUES
('Whale Shark Safari', 'Experience swimming with gentle giants in their natural habitat. Early morning departure ensures best sighting chances.', 60.00, '3-4 hours', 'Marine', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5', 'whale-shark-safari', ARRAY['Traditional boat tour', 'Breakfast & briefing', 'Local ex-fisherman guides']),
('Marine Park Diving', 'Explore protected coral reefs with diverse marine life in pristine conditions.', 110.00, 'Full day', 'Marine', 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0', 'marine-park-diving', ARRAY['Healthy coral reefs', 'Diverse marine species', 'Professional guides']),
('Cultural Village Tour', 'Explore mangrove forests, baobab trees, and traditional village life.', 25.00, '4 hours', 'Cultural', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', 'cultural-village-tour', ARRAY['Village tours', 'Mangrove forests', 'Cultural interaction']);

-- Insert sample testimonials
INSERT INTO testimonials (name, location, content, rating) VALUES
('Sarah Johnson', 'London, UK', 'Swimming with whale sharks was absolutely incredible! The guides were knowledgeable and made sure we had a safe, unforgettable experience.', 5),
('Marco Rodriguez', 'Barcelona, Spain', 'The coral reefs around Mafia Island are pristine. Best diving experience I have ever had!', 5),
('Emma Thompson', 'Sydney, Australia', 'The cultural tour gave us amazing insights into local life. Highly recommend for anyone wanting authentic experiences.', 4);

-- Enable Row Level Security
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Tours are viewable by everyone" ON tours FOR SELECT USING (true);
CREATE POLICY "Testimonials are viewable by everyone" ON testimonials FOR SELECT USING (true);

-- Create policies for bookings (users can insert their own bookings)
CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (true);
