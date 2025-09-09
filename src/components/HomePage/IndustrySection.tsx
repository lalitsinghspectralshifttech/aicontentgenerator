import React from 'react';

interface IndustryCardProps {
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// These are placeholder icons. You would replace these with your actual icon components.
const SkincareIcon = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 8a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H6a1 1 0 01-1-1V8zm3 0a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1H9a1 1 0 01-1-1V8zm3 0a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 01-1 1h-.5a1 1 0 01-1-1V8z" clipRule="evenodd" />
    </svg>
  </div>
);

const EcommerceIcon = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 2a1 1 0 100 2h.01a1 1 0 100-2H11zm-5 4a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm6 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" />
      <path fillRule="evenodd" d="M16 18H4a2 2 0 01-2-2V7a2 2 0 012-2h4v1a1 1 0 002 0V5h4a2 2 0 012 2v9a2 2 0 01-2 2z" clipRule="evenodd" />
    </svg>
  </div>
);

const MarketingIcon = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7z" />
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v5a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  </div>
);

const IndustryCard: React.FC<IndustryCardProps> = ({ imageSrc, icon, title, description }) => {
  return (
    <div className="flex-1 min-w-[300px] max-w-sm rounded-lg overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="flex items-center text-teal-500 hover:text-teal-600 font-semibold">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12h-15M13 16.5l4.5-4.5L13 7.5" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const IndustrySection: React.FC = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-4">
          Perfect For Your Industry
        </h2>
        <p className="text-lg text-gray-600">
          See how our AI-powered content creation tool works for different industries.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <IndustryCard
          imageSrc="71EzNUU4m5L._UF1000,1000_QL80_.jpg"
          icon={<SkincareIcon />}
          title="Skincare Brands"
          description="Create product showcases, ingredient education, and before/after content for your skincare line."
        />
        <IndustryCard
          imageSrc="freepik__ai-career-roadmap-shown-as-a-complex-circuit-board__28285.png"
          icon={<EcommerceIcon />}
          title="E-commerce"
          description="Generate consistent content for large product catalogs quickly and efficiently."
        />
        <IndustryCard
          imageSrc="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          icon={<MarketingIcon />}
          title="Marketing Teams"
          description="Scale your content production and maintain consistent brand messaging across channels."
        />
      </div>
    </div>
  );
};

export default IndustrySection;