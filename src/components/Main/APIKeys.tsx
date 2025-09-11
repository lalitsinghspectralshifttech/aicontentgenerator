// import React, { useState } from "react";

// export default function ApiKeysPage() {
//   const [openAIKey, setOpenAIKey] = useState("");
//   const [geminiKey, setGeminiKey] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-6">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-2xl font-semibold">API Keys</h1>
//         <p className="text-gray-500 mb-7">Manage your API keys for AI content generation</p>

//         {/* API Keys Card */}
//         <div className="bg-white border border-gray-200 rounded-xl shadow px-8 py-6 mb-8">
//           <div className="flex items-center mb-5">
//             <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M12 17v-3M12 7v3m9.2 1.35l-1.2-.7a4 4 0 0 0-1.6-.5L14.7 8.5a4 4 0 0 0-.6-1.6l.7-1.21A1 1 0 0 0 13.89 4L12 4l-1.89.01a1 1 0 0 0-.8 1.69l.7 1.21a4 4 0 0 0-.6 1.6l-2.2.65a4 4 0 0 0-1.6.5l-1.2.7A1 1 0 0 0 2 12l.01 1.89a1 1 0 0 0 1.69.8l1.21-.7a4 4 0 0 0 1.6.6l.65 2.2a4 4 0 0 0 .5 1.6l.7 1.2A1 1 0 0 0 12 22l1.89-.01a1 1 0 0 0 .8-1.69l-.7-1.21a4 4 0 0 0 .6-1.6l2.2-.65a4 4 0 0 0 1.6-.5l1.2-.7A1 1 0 0 0 22 12l-.01-1.89a1 1 0 0 0-1.69-.8ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
//             </svg>
//             <h2 className="text-lg font-semibold">LLM API Keys</h2>
//           </div>
//           <div className="bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded mb-4 text-sm flex items-center">
//             <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <circle cx="12" cy="12" r="10" />
//               <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Your API keys are encrypted and stored securely. We never share your keys with third parties.
//           </div>
//           {/* OpenAI Key */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">OpenAI API Key</label>
//             <div className="flex items-center gap-3">
//               <input
//                 type="text"
//                 className="flex-1 border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
//                 placeholder="Enter your OpenAI API key"
//                 value={openAIKey}
//                 onChange={e => setOpenAIKey(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium border border-gray-200 hover:bg-gray-200"
//               >
//                 Validate
//               </button>
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               You can find your OpenAI API key in your <a href="#" className="text-blue-600 hover:underline">OpenAI dashboard</a>
//             </div>
//           </div>
//           {/* Google Gemini Key */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Google Gemini API Key</label>
//             <div className="flex items-center gap-3">
//               <input
//                 type="text"
//                 className="flex-1 border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
//                 placeholder="Enter your Google Gemini API key"
//                 value={geminiKey}
//                 onChange={e => setGeminiKey(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium border border-gray-200 hover:bg-gray-200"
//               >
//                 Validate
//               </button>
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               You can find your Google Gemini API key in the <a href="#" className="text-blue-600 hover:underline">Google AI Studio</a>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
//               Save API Keys
//             </button>
//           </div>
//         </div>

//         {/* Guidelines */}
//         <div className="bg-white border border-gray-200 rounded-xl shadow px-8 py-6">
//           <h3 className="font-semibold mb-2">API Usage Guidelines</h3>
//           <div className="text-sm text-gray-700 space-y-2">
//             <p>
//               <span className="font-semibold">Rate Limits:</span> Be aware of the rate limits for each API provider. OpenAI and Google Gemini have different quotas based on your subscription level.
//             </p>
//             <p>
//               <span className="font-semibold">Cost Management:</span> Monitor your API usage to avoid unexpected charges. You can set usage limits in your OpenAI and Google AI dashboards.
//             </p>
//             <p>
//               <span className="font-semibold">Model Selection:</span> SocialForge will automatically select the most appropriate model based on your content needs, but you can customize this in your content generation settings.
//             </p>
//             <p>
//               <span className="font-semibold">Security:</span> Never share your API keys. If you suspect your keys have been compromised, regenerate them immediately in your provider's dashboard.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { Image as ImageIcon, Film, Wand2, Download, Loader2, Trash2, Copy, KeyRound, Settings2, AlertTriangle, Play, Pause, RotateCw } from "lucide-react";

// // ===============================
// // 🔧 QUICK CONFIG (EDIT THESE)
// // ===============================
// // 1) Put your provider's REST base URL here OR leave empty to type it in the UI.
// const DEFAULT_BASE_URL = ""; // e.g. "https://api.myprovider.com/v1"

// // 2) If you prefer an env var at build-time, read from import.meta.env:
// // const DEFAULT_BASE_URL = import.meta.env.VITE_AI_BASE_URL || "";
// // const DEFAULT_API_KEY  = import.meta.env.VITE_AI_API_KEY  || "";
// const DEFAULT_API_KEY = "";

// // 3) Adjust these adapter functions to match your provider's API shapes.
// //    They should return a list of direct media URLs.
// async function callImageAPI(args: {
//   baseUrl: string;
//   apiKey: string;
//   prompt: string;
//   negativePrompt?: string;
//   count: number;
//   size: string; // e.g. "1024x1024"
//   guidance: number; // cfg or guidance scale
//   steps: number;
//   seed?: number | null;
//   extra?: Record<string, unknown>;
// }): Promise<string[]> {
//   const { baseUrl, apiKey, prompt, negativePrompt, count, size, guidance, steps, seed, extra } = args;

//   // --- EXAMPLE payload (generic) ---
//   const body = {
//     prompt,
//     negative_prompt: negativePrompt || undefined,
//     num_outputs: count,
//     size, // "1024x1024"
//     guidance,
//     steps,
//     seed: seed ?? undefined,
//     ...extra,
//   };

//   // *** Replace endpoint path to match your provider ***
//   const endpoint = baseUrl.replace(/\/$/, "") + "/generate/image";

//   const res = await fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(body),
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(`Image API failed: ${res.status} ${text}`);
//   }

//   // --- Normalize response ---
//   // Expecting something like { images: ["https://...", "https://..."] }
//   const data = await res.json();
//   const urls: string[] = data.images || data.output || data.data?.images || [];
//   if (!Array.isArray(urls) || urls.length === 0) {
//     throw new Error("No image URLs returned by API. Adapt the parser in callImageAPI().");
//   }
//   return urls;
// }

// // For video, many providers are async: you kick off a job and poll until ready.
// // We'll support both synchronous (direct URL) and async (job -> status) flows.
// async function callVideoAPI(args: {
//   baseUrl: string;
//   apiKey: string;
//   prompt: string;
//   negativePrompt?: string;
//   duration: number; // seconds
//   size: string; // e.g. "768x768" or "1280x720"
//   guidance: number;
//   steps: number;
//   seed?: number | null;
//   extra?: Record<string, unknown>;
//   onProgress?: (msg: string) => void;
// }): Promise<string[]> {
//   const { baseUrl, apiKey, prompt, negativePrompt, duration, size, guidance, steps, seed, extra, onProgress } = args;

//   const startEndpoint = baseUrl.replace(/\/$/, "") + "/generate/video"; // EDIT
//   const statusEndpoint = (id: string) => baseUrl.replace(/\/$/, "") + `/generate/video/${id}`; // EDIT

//   const payload = {
//     prompt,
//     negative_prompt: negativePrompt || undefined,
//     duration,
//     size,
//     guidance,
//     steps,
//     seed: seed ?? undefined,
//     ...extra,
//   };

//   const start = await fetch(startEndpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!start.ok) {
//     const text = await start.text();
//     throw new Error(`Video API failed: ${start.status} ${text}`);
//   }

//   const startJson = await start.json();

//   // If your API returns a direct URL immediately:
//   if (startJson.video_url) {
//     return [startJson.video_url];
//   }

//   // Otherwise assume async job flow with an id and poll:
//   const jobId: string | undefined = startJson.id || startJson.job_id || startJson.task_id;
//   if (!jobId) {
//     // Some APIs return an array of URLs even for video
//     const urls: string[] = startJson.videos || startJson.output || [];
//     if (urls?.length) return urls;
//     throw new Error("Video API: no job id or URLs found. Adapt callVideoAPI() parser.");
//   }

//   // Polling loop
//   const startedAt = Date.now();
//   const timeoutMs = 1000 * 60 * 5; // 5 minutes
//   const intervalMs = 1500;

//   while (Date.now() - startedAt < timeoutMs) {
//     onProgress?.("Generating video…");
//     await new Promise((r) => setTimeout(r, intervalMs));

//     const statusRes = await fetch(statusEndpoint(jobId), {
//       headers: { Authorization: `Bearer ${apiKey}` },
//     });
//     if (!statusRes.ok) {
//       const t = await statusRes.text();
//       throw new Error(`Video status failed: ${statusRes.status} ${t}`);
//     }
//     const statusJson = await statusRes.json();

//     // Normalize various shapes
//     const state = statusJson.status || statusJson.state || statusJson.job_status;
//     const progress = statusJson.progress || statusJson.percent || 0;
//     onProgress?.(`Status: ${state ?? "unknown"} (${progress}%)`);

//     // Completed
//     const url = statusJson.video_url || statusJson.output_url || statusJson.result?.video_url;
//     const urls = statusJson.videos || statusJson.output || (url ? [url] : []);
//     if (urls?.length) return urls;

//     // Still running?
//     if (["succeeded", "completed", "finished"].includes(String(state || "").toLowerCase())) {
//       throw new Error("Video job finished without a URL. Update parser to match your provider.");
//     }
//   }
//   throw new Error("Video generation timed out. Increase timeout or verify provider endpoints.");
// }

// // =========================================
// // 🖼️ UI COMPONENT
// // =========================================

// type Tab = "image" | "video";

// const sizes = [
//   { label: "Square 1024", value: "1024x1024" },
//   { label: "Portrait 768×1024", value: "768x1024" },
//   { label: "Landscape 1280×720", value: "1280x720" },
//   { label: "Square 512", value: "512x512" },
// ];

// export default function AIGenStudio() {
//   const [tab, setTab] = useState<Tab>("image");
//   const [prompt, setPrompt] = useState("");
//   const [negativePrompt, setNegativePrompt] = useState("");

//   const [baseUrl, setBaseUrl] = useState<string>(DEFAULT_BASE_URL || localStorage.getItem("ai_base_url") || "");
//   const [apiKey, setApiKey] = useState<string>(DEFAULT_API_KEY || localStorage.getItem("ai_api_key") || "");
//   const [remember, setRemember] = useState<boolean>(!!(localStorage.getItem("ai_api_key") || localStorage.getItem("ai_base_url")));

//   const [count, setCount] = useState(1);
//   const [size, setSize] = useState("1024x1024");
//   const [guidance, setGuidance] = useState(7);
//   const [steps, setSteps] = useState(28);
//   const [seed, setSeed] = useState<string>("");

//   const [duration, setDuration] = useState(5); // seconds for video

//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const [images, setImages] = useState<string[]>([]);
//   const [videos, setVideos] = useState<string[]>([]);

//   const controllerRef = useRef<AbortController | null>(null);

//   useEffect(() => {
//     if (remember) {
//       if (baseUrl) localStorage.setItem("ai_base_url", baseUrl);
//       if (apiKey) localStorage.setItem("ai_api_key", apiKey);
//     } else {
//       localStorage.removeItem("ai_base_url");
//       localStorage.removeItem("ai_api_key");
//     }
//   }, [remember, baseUrl, apiKey]);

//   const canGenerate = useMemo(() => {
//     return !!prompt.trim() && !!apiKey.trim() && !!baseUrl.trim();
//   }, [prompt, apiKey, baseUrl]);

//   const handleGenerate = async () => {
//     setError("");
//     if (!canGenerate) {
//       setError("Please fill Base URL, API Key and Prompt.");
//       return;
//     }

//     setLoading(true);
//     setProgress("");
//     controllerRef.current?.abort();
//     controllerRef.current = new AbortController();

//     try {
//       if (tab === "image") {
//         const urls = await callImageAPI({
//           baseUrl,
//           apiKey,
//           prompt,
//           negativePrompt,
//           count,
//           size,
//           guidance,
//           steps,
//           seed: seed ? Number(seed) : null,
//         });
//         setImages((prev) => [...urls, ...prev]);
//       } else {
//         const urls = await callVideoAPI({
//           baseUrl,
//           apiKey,
//           prompt,
//           negativePrompt,
//           duration,
//           size,
//           guidance,
//           steps,
//           seed: seed ? Number(seed) : null,
//           onProgress: (msg) => setProgress(msg),
//         });
//         setVideos((prev) => [...urls, ...prev]);
//       }
//     } catch (e: any) {
//       setError(e?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//       setProgress("");
//     }
//   };

//   const handleClear = () => {
//     if (tab === "image") setImages([]);
//     else setVideos([]);
//   };

//   const handleDownload = async (url: string, filename: string) => {
//     const res = await fetch(url);
//     const blob = await res.blob();
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(a.href);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white p-4 sm:p-8">
//       <div className="mx-auto max-w-6xl">
//         {/* Header */}
//         <header className="mb-6 flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
//               <Wand2 className="h-7 w-7" /> Prompt → Media Studio
//             </h1>
//             <p className="text-slate-600 mt-1">Generate images and videos from your text prompts using your own API key.</p>
//           </div>
//         </header>

//         {/* API + Provider Settings */}
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-6 mb-6">
//           <div className="sm:col-span-2">
//             <label className="text-xs font-medium text-slate-600">Base URL</label>
//             <input
//               className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//               placeholder="https://api.provider.com/v1"
//               value={baseUrl}
//               onChange={(e) => setBaseUrl(e.target.value)}
//             />
//           </div>
//           <div className="sm:col-span-3">
//             <label className="text-xs font-medium text-slate-600 flex items-center gap-1"><KeyRound className="h-3.5 w-3.5"/> API Key</label>
//             <input
//               className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//               placeholder="sk-..."
//               value={apiKey}
//               onChange={(e) => setApiKey(e.target.value)}
//               type="password"
//             />
//           </div>
//           <div className="sm:col-span-1 flex items-end">
//             <label className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm">
//               <input type="checkbox" className="accent-black" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
//               Remember
//             </label>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mb-4 flex w-full items-center gap-2">
//           <button
//             onClick={() => setTab("image")}
//             className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition ${
//               tab === "image" ? "bg-black text-white" : "bg-white text-slate-700 border border-slate-200"
//             }`}
//           >
//             <ImageIcon className="h-4 w-4" /> Images
//           </button>
//           <button
//             onClick={() => setTab("video")}
//             className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition ${
//               tab === "video" ? "bg-black text-white" : "bg-white text-slate-700 border border-slate-200"
//             }`}
//           >
//             <Film className="h-4 w-4" /> Videos
//           </button>
//           <div className="ml-auto flex items-center gap-2">
//             <button
//               onClick={handleClear}
//               className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2"
//             >
//               <Trash2 className="h-4 w-4"/> Clear {tab === "image" ? "Images" : "Videos"}
//             </button>
//           </div>
//         </div>

//         {/* Prompt Card */}
//         <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
//           <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
//             <label className="text-xs font-medium text-slate-600">Prompt</label>
//             <textarea
//               className="mt-2 w-full min-h-[120px] rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//               placeholder="e.g., a cinematic photo of a snow leopard leaping across a canyon, golden hour, ultra-detailed"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//             />
//             <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
//               <div>
//                 <label className="text-xs font-medium text-slate-600">Negative Prompt (optional)</label>
//                 <input
//                   className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                   placeholder="blurry, low quality, artifacts"
//                   value={negativePrompt}
//                   onChange={(e) => setNegativePrompt(e.target.value)}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Outputs</label>
//                   <input type="number" min={1} max={6}
//                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                          value={count}
//                          onChange={(e) => setCount(Math.min(6, Math.max(1, Number(e.target.value) || 1)))} />
//                 </div>
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Size</label>
//                   <select
//                     className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                     value={size}
//                     onChange={(e) => setSize(e.target.value)}
//                   >
//                     {sizes.map((s) => (
//                       <option key={s.value} value={s.value}>{s.label}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-3">
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Guidance</label>
//                   <input type="number" step={0.5} min={0} max={20}
//                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                          value={guidance}
//                          onChange={(e) => setGuidance(Number(e.target.value))} />
//                 </div>
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Steps</label>
//                   <input type="number" min={1} max={100}
//                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                          value={steps}
//                          onChange={(e) => setSteps(Number(e.target.value))} />
//                 </div>
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Seed (optional)</label>
//                   <input
//                     className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                     placeholder="random if empty"
//                     value={seed}
//                     onChange={(e) => setSeed(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {tab === "video" && (
//                 <div>
//                   <label className="text-xs font-medium text-slate-600">Duration (seconds)</label>
//                   <input type="number" min={1} max={30}
//                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
//                          value={duration}
//                          onChange={(e) => setDuration(Math.min(30, Math.max(1, Number(e.target.value) || 5)))} />
//                 </div>
//               )}
//             </div>

//             <div className="mt-4 flex items-center gap-3">
//               <button
//                 onClick={handleGenerate}
//                 disabled={!canGenerate || loading}
//                 className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium transition shadow-sm ${
//                   canGenerate && !loading ? "bg-black text-white hover:opacity-90" : "bg-slate-200 text-slate-500"
//                 }`}
//               >
//                 <Wand2 className="h-4 w-4"/>
//                 {loading ? (tab === "image" ? "Generating images…" : "Generating video…") : `Generate ${tab}`}
//               </button>

//               <AnimatePresence>{progress && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -4 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -4 }}
//                   className="text-sm text-slate-600"
//                 >{progress}</motion.div>
//               )}</AnimatePresence>

//               {error && (
//                 <div className="ml-auto inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
//                   <AlertTriangle className="h-4 w-4"/> {error}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Tips / Help */}
//           <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
//             <div className="flex items-center gap-2 font-semibold"><Settings2 className="h-4 w-4"/> How to wire your API</div>
//             <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
//               <li>Enter your <span className="font-semibold">Base URL</span> and <span className="font-semibold">API Key</span> above. Toggle <em>Remember</em> to store locally.</li>
//               <li>Open <code className="rounded bg-slate-100 px-1">callImageAPI()</code> and <code className="rounded bg-slate-100 px-1">callVideoAPI()</code> (top of file) and update endpoint paths and response parsing for your provider.</li>
//               <li>Common header: <code className="rounded bg-slate-100 px-1">Authorization: Bearer &lt;api-key&gt;</code>. Adjust if your provider differs.</li>
//               <li>If your video API is async, keep the built-in polling. If it returns direct URL, return it immediately.</li>
//               <li>You can also set <code className="rounded bg-slate-100 px-1">DEFAULT_BASE_URL</code> and <code className="rounded bg-slate-100 px-1">DEFAULT_API_KEY</code> from env.</li>
//             </ol>
//           </div>
//         </div>

//         {/* Output Gallery */}
//         <div className="mt-6">
//           <div className="mb-3 flex items-center justify-between">
//             <h2 className="text-lg font-semibold">Results</h2>
//             <p className="text-sm text-slate-600">Newest appear first. Click download to save.</p>
//           </div>

//           {tab === "image" ? (
//             <ImageGrid
//               items={images}
//               onDownload={(url, i) => handleDownload(url, `image_${i + 1}.png`)}
//               onCopyPrompt={() => navigator.clipboard.writeText(prompt)}
//             />
//           ) : (
//             <VideoGrid
//               items={videos}
//               onDownload={(url, i) => handleDownload(url, `video_${i + 1}.mp4`)}
//               onCopyPrompt={() => navigator.clipboard.writeText(prompt)}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ImageGrid({ items, onDownload, onCopyPrompt }: { items: string[]; onDownload: (url: string, index: number) => void; onCopyPrompt: () => void; }) {
//   if (!items.length) return (
//     <EmptyState kind="image" />
//   );
//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {items.map((url, i) => (
//         <motion.div key={url + i} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//           <div className="aspect-square overflow-hidden bg-slate-100">
//             <img src={url} alt={`gen-${i}`} className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
//           </div>
//           <div className="flex items-center justify-between p-3">
//             <div className="flex gap-2">
//               <button onClick={() => onDownload(url, i)} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"><Download className="h-3.5 w-3.5"/> Download</button>
//               <button onClick={onCopyPrompt} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"><Copy className="h-3.5 w-3.5"/> Copy prompt</button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function VideoGrid({ items, onDownload, onCopyPrompt }: { items: string[]; onDownload: (url: string, index: number) => void; onCopyPrompt: () => void; }) {
//   if (!items.length) return <EmptyState kind="video"/>;
//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {items.map((url, i) => (
//         <motion.div key={url + i} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//           <div className="aspect-video overflow-hidden bg-slate-100">
//             <VideoPlayer src={url} />
//           </div>
//           <div className="flex items-center justify-between p-3">
//             <div className="flex gap-2">
//               <button onClick={() => onDownload(url, i)} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"><Download className="h-3.5 w-3.5"/> Download</button>
//               <button onClick={onCopyPrompt} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"><Copy className="h-3.5 w-3.5"/> Copy prompt</button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function VideoPlayer({ src }: { src: string }) {
//   const ref = useRef<HTMLVideoElement | null>(null);
//   const [playing, setPlaying] = useState(false);
//   const [reloading, setReloading] = useState(false);

//   const toggle = () => {
//     const v = ref.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
//   };

//   return (
//     <div className="relative h-full w-full">
//       <video ref={ref} src={src} className="h-full w-full" controls playsInline preload="metadata" />
//       <div className="absolute bottom-2 left-2 flex gap-2">
//         <button onClick={toggle} className="rounded-xl border border-slate-200 bg-white/90 px-3 py-1.5 text-xs backdrop-blur hover:bg-white">
//           {playing ? (<span className="inline-flex items-center gap-1"><Pause className="h-3.5 w-3.5"/> Pause</span>) : (<span className="inline-flex items-center gap-1"><Play className="h-3.5 w-3.5"/> Play</span>)}
//         </button>
//         <button onClick={() => { setReloading(true); const v = ref.current; if (v) { const t = v.currentTime; v.load(); v.currentTime = t; } setTimeout(() => setReloading(false), 300); }} className="rounded-xl border border-slate-200 bg-white/90 px-3 py-1.5 text-xs backdrop-blur hover:bg-white inline-flex items-center gap-1">
//           <RotateCw className={`h-3.5 w-3.5 ${reloading ? "animate-spin" : ""}`}/> Reload
//         </button>
//       </div>
//     </div>
//   );
// }

// function EmptyState({ kind }: { kind: "image" | "video" }) {
//   return (
//     <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
//       <div className="mb-3 rounded-2xl bg-slate-100 p-3">
//         {kind === "image" ? <ImageIcon className="h-6 w-6 text-slate-600"/> : <Film className="h-6 w-6 text-slate-600"/>}
//       </div>
//       <div className="text-slate-700 font-medium">No {kind}s yet</div>
//       <div className="text-slate-500 text-sm">Enter a prompt above and click Generate to see results here.</div>
//     </div>
//   );
// }









import React, { useState } from "react";

const API_KEY = "AIzaSyC_A0_Mu6EZIX25F5SAz4gkdAgYdo7aFT8"; // ⚠️ Ye public frontend me visible hoga

const GeminiTextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) {
      setError("⚠️ Please enter a prompt!");
      return;
    }

    setError(null);
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const textResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
      setResponse(textResponse);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gemini Text Generator</h1>

      <textarea
        className="w-full border rounded-lg p-2 mb-3"
        rows={4}
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      {response && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 whitespace-pre-line">
          {response}
        </div>
      )}
    </div>
  );
};

export default GeminiTextGenerator;





























// import React, { useState } from "react";

// const API_KEY = "AIzaSyC_A0_Mu6EZIX25F5SAz4gkdAgYdo7aFT8";

// const ImageGenerator: React.FC = () => {
//   const [prompt, setPrompt] = useState("");
//   const [imageBase64, setImageBase64] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const generateImage = async () => {
//     if (!prompt) return;
//     setLoading(true);
//     setImageBase64(null);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/imagegeneration:generate?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             prompt, // user input se image generate hogi
//             size: "1024x1024",
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log("API Response:", data);

//       // API response format check
//       const base64 =
//         data?.candidates?.[0]?.content?.parts?.[0]?.inline_data?.data;

//       if (base64) {
//         setImageBase64(base64);
//       } else {
//         console.error("Invalid API response:", data);
//         alert("Image generate नहीं हो पाई!");
//       }
//     } catch (error) {
//       console.error("Error generating image:", error);
//       alert("कुछ error आया है!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4">AI Image Generator</h1>

//       <textarea
//         className="w-full max-w-lg p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
//         rows={3}
//         placeholder="Enter your prompt here..."
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />

//       <button
//         onClick={generateImage}
//         disabled={loading}
//         className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Generating..." : "Generate Image"}
//       </button>

//       {imageBase64 && (
//         <div className="mt-6">
//           <img
//             src={`data:image/png;base64,${imageBase64}`}
//             alt="Generated"
//             className="rounded-xl shadow-lg max-w-md"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGenerator;
