import React, { useState } from "react";

export default function ApiKeysPage() {
  const [openAIKey, setOpenAIKey] = useState("");
  const [geminiKey, setGeminiKey] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">API Keys</h1>
        <p className="text-gray-500 mb-7">Manage your API keys for AI content generation</p>

        {/* API Keys Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow px-8 py-6 mb-8">
          <div className="flex items-center mb-5">
            <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 17v-3M12 7v3m9.2 1.35l-1.2-.7a4 4 0 0 0-1.6-.5L14.7 8.5a4 4 0 0 0-.6-1.6l.7-1.21A1 1 0 0 0 13.89 4L12 4l-1.89.01a1 1 0 0 0-.8 1.69l.7 1.21a4 4 0 0 0-.6 1.6l-2.2.65a4 4 0 0 0-1.6.5l-1.2.7A1 1 0 0 0 2 12l.01 1.89a1 1 0 0 0 1.69.8l1.21-.7a4 4 0 0 0 1.6.6l.65 2.2a4 4 0 0 0 .5 1.6l.7 1.2A1 1 0 0 0 12 22l1.89-.01a1 1 0 0 0 .8-1.69l-.7-1.21a4 4 0 0 0 .6-1.6l2.2-.65a4 4 0 0 0 1.6-.5l1.2-.7A1 1 0 0 0 22 12l-.01-1.89a1 1 0 0 0-1.69-.8ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
            </svg>
            <h2 className="text-lg font-semibold">LLM API Keys</h2>
          </div>
          <div className="bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded mb-4 text-sm flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Your API keys are encrypted and stored securely. We never share your keys with third parties.
          </div>
          {/* OpenAI Key */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">OpenAI API Key</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                placeholder="Enter your OpenAI API key"
                value={openAIKey}
                onChange={e => setOpenAIKey(e.target.value)}
              />
              <button
                type="button"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium border border-gray-200 hover:bg-gray-200"
              >
                Validate
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              You can find your OpenAI API key in your <a href="#" className="text-blue-600 hover:underline">OpenAI dashboard</a>
            </div>
          </div>
          {/* Google Gemini Key */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Google Gemini API Key</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                placeholder="Enter your Google Gemini API key"
                value={geminiKey}
                onChange={e => setGeminiKey(e.target.value)}
              />
              <button
                type="button"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium border border-gray-200 hover:bg-gray-200"
              >
                Validate
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              You can find your Google Gemini API key in the <a href="#" className="text-blue-600 hover:underline">Google AI Studio</a>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Save API Keys
            </button>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-white border border-gray-200 rounded-xl shadow px-8 py-6">
          <h3 className="font-semibold mb-2">API Usage Guidelines</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Rate Limits:</span> Be aware of the rate limits for each API provider. OpenAI and Google Gemini have different quotas based on your subscription level.
            </p>
            <p>
              <span className="font-semibold">Cost Management:</span> Monitor your API usage to avoid unexpected charges. You can set usage limits in your OpenAI and Google AI dashboards.
            </p>
            <p>
              <span className="font-semibold">Model Selection:</span> SocialForge will automatically select the most appropriate model based on your content needs, but you can customize this in your content generation settings.
            </p>
            <p>
              <span className="font-semibold">Security:</span> Never share your API keys. If you suspect your keys have been compromised, regenerate them immediately in your provider's dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
