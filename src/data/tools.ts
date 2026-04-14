import type { Tool } from "@/components/ToolCard";

const tools: Tool[] = [
  {
    id: 1, name: "ChatGPT", category: "Chatbot", description: "OpenAI's advanced conversational AI for writing, coding, research, and creative tasks — now with GPT-5 multimodal capabilities.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(160 40% 18%), hsl(170 40% 22%))", initial: "CG",
  },
  {
    id: 2, name: "7-Figure Accelerator Payment Plan", category: "Money Making", description: "This structure helps reduce wasted effort, shorten sales cycles, and support revenue milestones from $100,000 to $1,500,000 per month.", pricing: "Paid", featured: true, color: "linear-gradient(135deg, hsl(25 60% 18%), hsl(35 50% 24%))", initial: "7F", link: "https://jvz4.com/c/3468163/423307",
  },
  {
    id: 3, name: "Gemini", category: "AI Assistant", description: "Google's natively multimodal AI that seamlessly processes text, images, audio, and video for powerful cross-modal reasoning.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(210 50% 18%), hsl(230 50% 24%))", initial: "GE",
  },
  {
    id: 4, name: "Midjourney", category: "Image Generator", description: "Industry-leading AI image generator creating stunning, photorealistic and artistic visuals from text prompts.", pricing: "Paid", featured: true, color: "linear-gradient(135deg, hsl(200 40% 18%), hsl(220 40% 24%))", initial: "MJ",
  },
  {
    id: 5, name: "Runway Gen-4", category: "Video Generator", description: "Next-generation AI video creation suite for filmmakers and creators — generate, edit, and transform videos with cinematic quality.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(300 30% 18%), hsl(320 30% 22%))", initial: "RW",
  },
  {
    id: 6, name: "Sora", category: "Video Generator", description: "OpenAI's text-to-video model producing realistic, high-definition videos up to one minute from simple text descriptions.", pricing: "Paid", featured: false, color: "linear-gradient(135deg, hsl(250 50% 20%), hsl(270 50% 26%))", initial: "SO",
  },
  {
    id: 7, name: "Perplexity AI", category: "Research", description: "AI-powered answer engine that provides accurate, cited responses by searching the web in real time.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(180 40% 16%), hsl(200 40% 22%))", initial: "PA",
  },
  {
    id: 8, name: "Cursor", category: "Coding", description: "AI-first code editor that supercharges development with intelligent autocomplete, multi-file editing, and codebase-aware chat.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(270 40% 18%), hsl(290 40% 24%))", initial: "CU",
  },
  {
    id: 9, name: "ElevenLabs", category: "Audio", description: "State-of-the-art AI voice synthesis platform for realistic text-to-speech, voice cloning, and multilingual dubbing.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(0 0% 15%), hsl(0 0% 20%))", initial: "EL",
  },
  {
    id: 10, name: "Lovable", category: "Coding", description: "AI-powered full-stack app builder that turns natural language prompts into production-ready web applications in minutes.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(340 60% 20%), hsl(360 50% 26%))", initial: "LV",
  },
  {
    id: 11, name: "Notion AI", category: "Productivity", description: "Integrated AI assistant within Notion for writing, summarizing, brainstorming, and automating workflows across your workspace.", pricing: "Paid", featured: false, color: "linear-gradient(135deg, hsl(0 0% 14%), hsl(0 0% 20%))", initial: "NO",
  },
  {
    id: 12, name: "Gamma", category: "Presentations", description: "AI-powered tool that instantly creates beautiful presentations, documents, and websites from simple text prompts.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(260 50% 18%), hsl(280 40% 24%))", initial: "GA",
  },
];

export default tools;
