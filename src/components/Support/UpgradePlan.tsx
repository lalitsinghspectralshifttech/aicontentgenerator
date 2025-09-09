// import React, { useState } from "react";

// const plans = [
//   {
//     name: "Free",
//     description: "Basic features for small projects",
//     price: "Free",
//     button: "Current Plan",
//     buttonVariant: "disabled",
//     features: [
//       { text: "5 content generations per month", included: true },
//       { text: "Basic content types", included: true },
//       { text: "Standard quality", included: true },
//       { text: "Email support", included: true },
//       { text: "No brand kit", included: false },
//       { text: "No advanced dimensions", included: false },
//       { text: "Limited content formats", included: false },
//     ],
//     highlight: false,
//   },
//   {
//     name: "Pro",
//     description: "Everything you need for growing businesses",
//     price: "Contact us for pricing",
//     priceInfo: "Custom pricing based on your needs",
//     button: "Contact Us",
//     buttonVariant: "primary",
//     features: [
//       { text: "50 content generations per month", included: true },
//       { text: "All content types", included: true },
//       { text: "HD quality content", included: true },
//       { text: "Brand kit", included: true },
//       { text: "Priority support", included: true },
//       { text: "Content analytics", included: true },
//       { text: "Limited team members", included: true },
//     ],
//     highlight: true,
//   },
//   {
//     name: "Premium",
//     description: "Advanced features for teams and agencies",
//     price: "Contact us for pricing",
//     priceInfo: "Custom pricing based on your needs",
//     button: "Contact Us",
//     buttonVariant: "outline",
//     features: [
//       { text: "Unlimited content generations", included: true },
//       { text: "All content types and dimensions", included: true },
//       { text: "4K quality content", included: true },
//       { text: "Advanced brand kit", included: true },
//       { text: "Team collaboration", included: true },
//       { text: "API access", included: true },
//       { text: "Dedicated support", included: true },
//       { text: "White label exports", included: true },
//     ],
//     highlight: false,
//   },
// ];

// export default function UpgradePlan() {
//   const [period, setPeriod] = useState<"Monthly" | "Annually">("Monthly");

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <h1 className="text-2xl font-semibold text-center mb-1">Upgrade Your Plan</h1>
//       <p className="text-gray-500 text-center mb-7">
//         Choose the perfect plan for your needs. Unlock premium features to create better content, faster.
//       </p>

//       {/* Billing period toggle */}
//       <div className="flex justify-center mb-7">
//         <div className="bg-gray-100 rounded-xl inline-flex p-1">
//           <button
//             className={`px-5 py-1.5 rounded-xl transition font-medium text-sm ${period === "Monthly" ? "bg-white text-teal-700" : "text-gray-500"
//               }`}
//             onClick={() => setPeriod("Monthly")}
//           >
//             Monthly
//           </button>
//           <button
//             className={`px-5 py-1.5 rounded-xl transition font-medium text-sm flex items-center ${period === "Annually" ? "bg-white text-teal-700" : "text-gray-500"
//               }`}
//             onClick={() => setPeriod("Annually")}
//           >
//             Annually <span className="ml-2 bg-teal-700 text-white rounded px-2 py-0.5 text-xs">Save 15%</span>
//           </button>
//         </div>
//       </div>

//       {/* Plans grid */}
//       <div className="flex justify-center flex-col md:flex-row mb-10">
//   {plans.map((plan) => (
//     <div
//       key={plan.name}
//       className={`flex-1 bg-white rounded-2xl border ${
//         plan.highlight
//           ? "border-teal-500 shadow-lg relative"
//           : "border-gray-200 shadow"
//       } p-8 flex flex-col items-center max-w-sm mx-auto`}
//       style={{ minWidth: 320 }}
//     >
//             {/* Most Popular Badge */}
//             {plan.highlight && (
//               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold rounded-t-xl px-5 py-1 uppercase tracking-wider">
//                 Most Popular
//               </div>
//             )}
//             {/* Crown icon for Pro */}
//             {plan.name === "Pro" && (
//               <svg className="w-7 h-7 text-teal-500 mb-3 mt-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M5 21h14M17 21V7a2 2 0 0 0-4 0 2 2 0 0 1-4 0V21M7 21V7a2 2 0 0 1 4 0 2 2 0 0 0 4 0V21" />
//               </svg>
//             )}
//             <div className="font-bold text-lg mb-1">{plan.name}</div>
//             <div className="text-gray-500 text-sm mb-5 text-center">{plan.description}</div>
//             <div className="font-bold text-2xl mb-1">
//               {plan.price}
//             </div>
//             {plan.priceInfo && (
//               <div className="text-xs text-teal-700 mb-4">{plan.priceInfo}</div>
//             )}
//             {/* Button */}
//             {plan.buttonVariant === "primary" && (
//               <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded-lg mb-5 transition">
//                 {plan.button}
//               </button>
//             )}
//             {plan.buttonVariant === "disabled" && (
//               <div className="w-full bg-gray-100 text-gray-500 text-center font-bold py-2 rounded-lg mb-5 cursor-not-allowed select-none">
//                 {plan.button}
//               </div>
//             )}
//             {plan.buttonVariant === "outline" && (
//               <button className="w-full border border-teal-500 text-teal-700 font-bold py-2 rounded-lg mb-5 hover:bg-teal-50 transition">
//                 {plan.button}
//               </button>
//             )}
//             <div className="w-full text-left text-sm font-semibold mb-1">Includes:</div>
//             <ul className="w-full mb-1">
//               {plan.features.map((feat) => (
//                 <li key={feat.text} className="flex items-center text-sm my-1">
//                   {feat.included ? (
//                     <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   )}
//                   <span className={feat.included ? "text-gray-900" : "text-gray-400"}>{feat.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Help section */}
//       <div className="max-w-2xl mx-auto bg-teal-50 rounded-xl p-8 text-center shadow">
//         <div className="font-bold text-lg mb-1">
//           Need help choosing the right plan?
//         </div>
//         <div className="mb-5 text-gray-700">
//           Our team is ready to help you find the perfect plan for your business needs. Contact us for a personalized consultation and custom pricing options.
//         </div>
//         <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 font-semibold rounded-lg transition">
//           Contact Our Sales Team
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Basic features for small projects",
    price: "Free",
    button: "Current Plan",
    buttonVariant: "disabled",
    features: [
      "5 content generations per month",
      "Basic content types",
      "Standard quality",
      "Email support",
    ],
    excluded: ["No brand kit", "No advanced dimensions", "Limited content formats"],
    highlight: false,
  },
  {
    name: "Pro",
    description: "Everything you need for growing businesses",
    price: "Contact us for pricing",
    priceInfo: "Custom pricing based on your needs",
    button: "Contact Us",
    buttonVariant: "primary",
    features: [
      "50 content generations per month",
      "All content types",
      "HD quality content",
      "Brand kit",
      "Priority support",
      "Content analytics",
      "Limited team members",
    ],
    excluded: [],
    highlight: true,
  },
  {
    name: "Premium",
    description: "Advanced features for teams and agencies",
    price: "Contact us for pricing",
    priceInfo: "Custom pricing based on your needs",
    button: "Contact Us",
    buttonVariant: "outline",
    features: [
      "Unlimited content generations",
      "All content types and dimensions",
      "4K quality content",
      "Advanced brand kit",
      "Team collaboration",
      "API access",
      "Dedicated support",
      "White label exports",
    ],
    excluded: [],
    highlight: false,
  },
];

export default function UpgradePlan() {
  const [period, setPeriod] = useState<"Monthly" | "Annually">("Monthly");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-2xl font-semibold text-center mb-1">
        Upgrade Your Plan
      </h1>
      <p className="text-gray-500 text-center mb-7">
        Choose the perfect plan for your needs. Unlock premium features to
        create better content, faster.
      </p>

      {/* Billing period toggle */}
      <div className="flex justify-center mb-7">
        <div className="bg-gray-100 rounded-xl inline-flex p-1">
          <button
            className={`px-5 py-1.5 rounded-xl transition font-medium text-sm ${period === "Monthly" ? "bg-white text-teal-700" : "text-gray-500"
              }`}
            onClick={() => setPeriod("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-5 py-1.5 rounded-xl transition font-medium text-sm flex items-center ${period === "Annually" ? "bg-white text-teal-700" : "text-gray-500"
              }`}
            onClick={() => setPeriod("Annually")}
          >
            Annually{" "}
            <span className="ml-2 bg-teal-700 text-white rounded px-2 py-0.5 text-xs">
              Save 15%
            </span>
          </button>
        </div>
      </div>

      {/* Plans grid */}
      <div className="flex justify-center flex-col md:flex-row md:space-x-0 md:divide-x divide-gray-200 lg:gap-6 md:gap-4 sm:gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 bg-white border ${plan.highlight ? "border-teal-500 shadow-lg relative" : "border-gray-200 shadow"
              } p-8 flex flex-col items-center max-w-sm mx-auto md:mx-0 rounded-lg`}
            style={{ minWidth: 320 }}
          >
            {/* Badge */}
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold rounded-t-xl px-5 py-1 uppercase tracking-wider">
                Most Popular
              </div>
            )}

            {/* Title */}
            <div className="font-bold text-lg mb-1">{plan.name}</div>
            <div className="text-gray-500 text-sm mb-5 text-center">
              {plan.description}
            </div>

            {/* Price */}
            <div className="font-bold text-2xl mb-1">{plan.price}</div>
            {plan.priceInfo && (
              <div className="text-xs text-teal-700 mb-4">{plan.priceInfo}</div>
            )}

            {/* Button */}
            {plan.buttonVariant === "primary" && (
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded-lg mb-5 transition">
                {plan.button}
              </button>
            )}
            {plan.buttonVariant === "disabled" && (
              <div className="w-full bg-gray-100 text-gray-500 text-center font-bold py-2 rounded-lg mb-5 cursor-not-allowed select-none">
                {plan.button}
              </div>
            )}
            {plan.buttonVariant === "outline" && (
              <button className="w-full border border-teal-500 text-teal-700 font-bold py-2 rounded-lg mb-5 hover:bg-teal-50 transition">
                {plan.button}
              </button>
            )}

            {/* Features */}
            <div className="w-full text-left text-sm font-semibold mb-1">
              Includes:
            </div>
            <ul className="w-full mb-1">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center text-sm my-1">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-900">{feat}</span>
                </li>
              ))}
              {plan.excluded.map((feat) => (
                <li key={feat} className="flex items-center text-sm my-1">
                  <svg
                    className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-400">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Help section */}
      <div className="max-w-2xl mx-auto bg-teal-50 rounded-xl p-8 text-center shadow mt-10">
        <div className="font-bold text-lg mb-1">
          Need help choosing the right plan?
        </div>
        <div className="mb-5 text-gray-700">
          Our team is ready to help you find the perfect plan for your business
          needs. Contact us for a personalized consultation and custom pricing
          options.
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 font-semibold rounded-lg transition">
          Contact Our Sales Team
        </button>
      </div>
    </div>
  );
}
