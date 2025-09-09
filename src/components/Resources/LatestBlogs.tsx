import React from 'react';

const LatestFromBlog = () => {
  const blogPosts = [
    {
      image: 'photo-1516110833967-0b5716ca1387.avif',
      category: 'AI Technology',
      title: 'How AI is Revolutionizing Product Photography',
      description:
        'Discover how artificial intelligence is transforming the way brands create product images, saving time and money while maintaining quality.',
      date: 'May 10, 2023',
      readTime: '6 min read',
    },
    {
      image: 'freepik__the-style-is-candid-image-photography-with-natural__39556.png',
      category: 'Marketing Tips',
      title: '10 Tips for Creating Scroll-Stopping Product Content',
      description:
        'Learn the secrets to creating product content that makes users stop scrolling and start engaging with your brand.',
      date: 'April 22, 2023',
      readTime: '8 min read',
    },
    {
      image: 'photo-1611162616475-46b635cb6868.avif',
      category: 'Social Media',
      title: 'Platform-Specific Optimization: Why One Size Doesn\'t Fit All',
      description:
        'Why tailoring your content for each social platform is crucial for maximizing engagement and conversions.',
      date: 'March 17, 2023',
      readTime: '5 min read',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600">
            Insights, tips, and strategies for product marketers
          </p>
        </div>
        <a href="#" className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline transition duration-300">
          <span>View all articles</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-50 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-base text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestFromBlog;
