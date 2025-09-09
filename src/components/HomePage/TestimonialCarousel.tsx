import React, { useState } from 'react';

// A simple star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  return <div className="flex">{stars}</div>;
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "This platform has transformed our content strategy. We've increased engagement by 230% and saved 15 hours per week on content creation.",
    rating: 5,
    name: 'Sarah Johnson',
    title: 'Social Media Manager, BeautyGlow',
    avatar: 'photo-1494790108377-be9c29b29330.avif',
  },
  {
    id: 2,
    quote:
      'I love how easy it is to schedule and publish content. The analytics dashboard gives me all the insights I need to grow our audience.',
    rating: 5,
    name: 'Michael Chen',
    title: 'Founder, NextGen Marketing',
    avatar: 'photo-1507003211169-0a1dd7228f2d.avif',
  },
  {
    id: 3,
    quote:
      'The AI-powered captions are a game-changer. They save me so much time and help me write more compelling posts that resonate with my followers.',
    rating: 5,
    name: 'Jessica Lee',
    title: 'Content Creator',
    avatar: 'photo-1573497019940-1c28c88b4f3e.avif',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">Loved by Content Creators</h2>
        <p className="mb-12 text-lg text-gray-600">See what our customers are saying about their experience</p>

        {/* Testimonial Card */}
        <div className="relative mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl lg:p-12">
          <div className="flex flex-col items-center gap-6 text-left md:flex-row md:items-start md:gap-8">
            {/* Avatar and Info Block */}
            <div className="flex-shrink-0">
              <img
                src={currentTestimonial.avatar}
                alt={`Avatar of ${currentTestimonial.name}`}
                className="h-20 w-20 rounded-full object-cover shadow-md"
              />
            </div>

            {/* Quote and Details */}
            <div className="flex-grow">
              <StarRating rating={currentTestimonial.rating} />
              <p className="mt-4 text-lg italic text-gray-700 md:text-xl">"{currentTestimonial.quote}"</p>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-500">{currentTestimonial.title}</p>
                </div>
                {/* Placeholder for the small avatar image on the right */}
                <div className="h-8 w-8 rounded-full bg-gray-200">
                  <img src="OIP (2).webp" alt="small avatar" className="h-full w-full rounded-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
