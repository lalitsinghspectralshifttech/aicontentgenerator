import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer:
        'You can use all features of our platform for 14 days without any charge. No credit card is required to start your trial. At the end of your trial period, you can contact our sales team to discuss a plan that works best for your needs.',
    },
    {
      question: 'How do I get pricing information for my business?',
      answer:
        'We offer customized pricing based on your specific business needs. Simply contact our sales team through the "Contact Us" button, and a representative will work with you to find the perfect plan and price point for your requirements.',
    },
    {
      question: 'What factors determine the pricing for my business?',
      answer:
        'Our pricing is based on several factors including the number of products in your catalog, content generation volume, number of social platforms, team size, and specific feature requirements. Our sales team will help you find the most cost-effective solution.',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can upgrade, downgrade, or cancel your plan at any time. Our flexible approach allows your plan to grow with your business. Contact our customer success team to discuss changing your plan.',
    },
    {
      question: 'What happens if I exceed my monthly content generation limit?',
      answer:
        "If you reach your monthly limit, you can contact us to adjust your plan or purchase additional generations as needed. We'll notify you when you're approaching your limit so you can plan accordingly.",
    },
    {
      question: 'Do you offer discounts for annual commitments?',
      answer:
        'Yes, we offer discounts for customers who commit to annual plans. The specific discount will be discussed during your consultation with our sales team.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our pricing and plans
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 cursor-pointer border border-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <span>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 transform rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </div>
            {openIndex === index && <p className="mt-4 text-gray-600 transition-all duration-300 ease-in-out">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-600 mb-6">Still have questions about our pricing?</p>
        <button className="inline-flex items-center space-x-2 bg-[#00ADB5] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-[#009da5] transition duration-300">
          <span>Contact Our Sales Team</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
