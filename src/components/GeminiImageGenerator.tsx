import React, { useState } from "react";

const GeminiImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [model, setModel] = useState("imagen-3.0-generate-001");

 const handleGenerate = async () => {
  if (!prompt.trim()) {
    setError("⚠️ Please enter a prompt!");
    return;
  }

  setError("");
  setLoading(true);
  setImageDataUrl(null);

  try {
    const response = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    console.log("Backend response:", data);

    if (data.base64) {
      // Convert base64 string to image URL for <img>
      setImageDataUrl(`data:image/png;base64,${data.base64}`);
    } else {
      setError(data.error || "⚠️ No image data received.");
    }
  } catch (err: any) {
    setError("Error: " + (err.message || "Something went wrong!"));
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gemini Image Generator</h1>

      {/* Prompt box */}
      <textarea
        className="w-full border rounded-lg p-2 mb-3 resize-none"
        rows={4}
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* Model selector */}
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="border rounded-lg p-2 mb-3"
      >
        <option value="imagen-3.0-generate-001">High Quality</option>
        <option value="imagen-3.0-fast-generate-001">Fast (lower quality)</option>
      </select>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      {imageDataUrl && (
        <div className="mt-6">
          <img
            src={imageDataUrl}
            alt="Generated"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default GeminiImageGenerator;
