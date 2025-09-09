import React from 'react';

// Define the pricing plan data
const pricingPlans = [
    {
        name: 'Starter',
        price: '29',
        description: 'Perfect for small projects',
        features: [
            'Unlimited projects',
            'Up to 5 collaborators',
            'Advanced analytics',
            'Dedicated support',
            'Custom domains',
        ],
        buttonText: 'Try for free',
        isHighlighted: false,
    },
    {
        name: 'Professional',
        price: '79',
        description: 'Perfect for small projects',
        features: [
            'Unlimited projects',
            'Up to 5 collaborators',
            'Advanced analytics',
            'Dedicated support',
            'Custom domains',
        ],
        buttonText: 'Get started',
        isHighlighted: false,
    },
    {
        name: 'Enterprise',
        price: '199',
        description: 'Perfect for small projects',
        features: [
            'Unlimited projects',
            'Up to 5 collaborators',
            'Advanced analytics',
            'Dedicated support',
            'Custom domains',
        ],
        buttonText: 'Get started',
        isHighlighted: true,
    },
];

const PricingSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                    Our Pricing
                </h2>
                <p className="mb-12 text-lg text-gray-600">
                    Choose a plan that fits your needs.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col items-center justify-between rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 ${plan.isHighlighted ? 'bg-[#00ADB5] text-white' : 'bg-white'
                                }`}
                        >
                            {plan.isHighlighted && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold uppercase text-white">
                                    Most Popular
                                </span>
                            )}
                            <div className="flex w-full flex-col items-center">
                                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                                <p className={`mb-6 text-sm ${plan.isHighlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                                <div className="mb-8 flex items-end">
                                    <span className={`text-5xl font-bold ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                                        ${plan.price}
                                    </span>
                                    <span className={`text-lg font-medium ${plan.isHighlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
                                        /mo
                                    </span>
                                </div>
                                <ul className="mb-8 w-full space-y-4 text-left">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <svg
                                                className={`mr-2 h-5 w-5 flex-shrink-0 ${plan.isHighlighted ? 'text-white' : 'text-indigo-600'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className={`${plan.isHighlighted ? 'text-white' : 'text-gray-600'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className={`w-full rounded-full px-6 py-3 font-semibold transition-colors duration-300 ${plan.isHighlighted
                                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                                    : 'bg-[#00ADB5] text-white hover:bg-indigo-700'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center'>
                <p className="mt-12 text-gray-600">All plans include a 14-day free trial. No credit card required.</p>
                <a href="#" className="mt-2 text-indigo-600 hover:text-indigo-800">View full pricing details</a>
            </div>
        </section>

    );
};

export default PricingSection;
