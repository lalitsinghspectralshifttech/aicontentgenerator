import React from "react";

interface ChannelInfo {
  name: string;
  icon: React.ReactNode;
  color: string;
  connectText: string;
  cardBg: string;
  btnBg: string;
  features: string[];
  highlight?: boolean;
}

const channels: ChannelInfo[] = [
  {
    name: "Facebook",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.631.772-1.631 1.562v1.88h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 16.991 22 12"/>
      </svg>
    ),
    color: "bg-blue-600",
    connectText: "+ Connect",
    cardBg: "bg-white",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    features: [
      "Publish content directly",
      "Schedule posts in advance",
      "Track performance metrics"
    ]
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1" fill="currentColor"/>
      </svg>
    ),
    color: "bg-pink-500",
    connectText: "+ Connect",
    cardBg: "bg-pink-50",
    btnBg: "bg-pink-500 hover:bg-pink-600",
    features: [
      "Publish content directly",
      "Schedule posts in advance",
      "Track performance metrics"
    ],
    highlight: true
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.386-4.098 11.603-11.603 11.603-2.307 0-4.454-.678-6.259-1.85.323.038.646.063.97.063 1.916 0 3.68-.654 5.087-1.751a4.1 4.1 0 0 1-3.828-2.842c.254.038.484.063.749.063.353 0 .707-.05 1.035-.135a4.092 4.092 0 0 1-3.287-4.017v-.051a4.138 4.138 0 0 0 1.85.52 4.09 4.09 0 0 1-1.825-3.404c0-.749.202-1.445.56-2.046a11.618 11.618 0 0 0 8.428 4.284 4.62 4.62 0 0 1-.102-.937c0-2.287 1.859-4.146 4.146-4.146 1.194 0 2.272.504 3.03 1.32a8.26 8.26 0 0 0 2.605-.996 4.09 4.09 0 0 1-1.813 2.275 8.291 8.291 0 0 0 2.367-.634 8.802 8.802 0 0 1-2.041 2.115z"/>
      </svg>
    ),
    color: "bg-blue-500",
    connectText: "+ Connect",
    cardBg: "bg-white",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    features: [
      "Publish content directly",
      "Schedule posts in advance",
      "Track performance metrics"
    ]
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452H17.21V15.781c0-1.112-.023-2.546-1.552-2.546-1.553 0-1.79 1.215-1.79 2.469v4.748h-3.236V9h3.106v1.561h.045c.433-.817 1.491-1.679 3.065-1.679 3.279 0 3.882 2.159 3.882 4.971v6.599zM5.337 7.433a1.878 1.878 0 1 1 0-3.757 1.878 1.878 0 0 1 0 3.757zM7.119 20.452H3.554V9h3.565v11.452z"/>
      </svg>
    ),
    color: "bg-blue-800",
    connectText: "+ Connect",
    cardBg: "bg-white",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    features: [
      "Publish content directly",
      "Schedule posts in advance",
      "Track performance metrics"
    ]
  },
];

const SocialChannels: React.FC = () => (
  <div className="max-w-5xl mx-auto py-8 px-4 bg-gray-50 min-h-screen">
    <h2 className="text-2xl font-semibold">Social Channels</h2>
    <p className="text-gray-500 mb-7">Connect your social media accounts to create and publish content directly from SocialForge.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {channels.map((ch, idx) => (
        <div
          key={ch.name}
          className={`rounded-xl border transition shadow-sm mb-2 ${
            ch.highlight
              ? "border-pink-200 bg-pink-50"
              : "border-blue-200 bg-white"
          }`}
        >
          <div className="flex items-center px-5 pt-4 pb-2">
            <div className={`rounded-full p-2 ${ch.color} text-white mr-3`}>
              {ch.icon}
            </div>
            <div>
              <div className="font-semibold">{ch.name}</div>
              <div className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">
                  <svg className="w-3 h-3 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" className="text-gray-400"/>
                  </svg>
                </span>
                Not connected
              </div>
            </div>
            <button
              className={`ml-auto px-4 py-1.5 rounded-lg font-medium text-sm
                ${ch.highlight ? "bg-pink-500 text-white hover:bg-pink-600" : "bg-blue-600 text-white hover:bg-blue-700"}
              `}
            >
              {ch.connectText}
            </button>
          </div>
          <div
            className={`rounded-xl mx-3 mb-4 mt-2 p-5 flex flex-col items-center
              ${ch.highlight ? "bg-pink-100" : "bg-blue-50"}
            `}
          >
            <div className="flex flex-col items-center text-sm">
              {ch.name === "Facebook" && (
                <p className="mb-2">Connect your Facebook account to:</p>
              )}
              {ch.name === "Instagram" && (
                <p className="mb-2">Connect your Instagram account to:</p>
              )}
              {ch.name === "Twitter" && (
                <p className="mb-2">Connect your Twitter account to:</p>
              )}
              {ch.name === "LinkedIn" && (
                <p className="mb-2">Connect your LinkedIn account to:</p>
              )}
              <ul className="mb-3 space-y-1 text-gray-600">
                {ch.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`rounded px-4 py-1 text-sm font-medium ${
                  ch.highlight
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {`Connect ${ch.name}`}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SocialChannels;