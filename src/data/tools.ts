import type { Tool } from "@/components/ToolCard";

const tools: Tool[] = [
  {
    id: 1, name: "ex.plo.re", category: "Sales", description: "An AI powered marketing operating system designed to help business owners manage and scale their digital marketing efforts.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(230 30% 18%), hsl(260 30% 22%))", initial: "EX",
  },
  {
    id: 2, name: "Napkin AI", category: "Design", description: "An AI-powered visual communication platform that turns written text into clear, professional-looking diagrams and infographics.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(0 0% 15%), hsl(0 0% 20%))", initial: "NA",
  },
  {
    id: 3, name: "Easymeety.ai", category: "Transcriber", description: "An AI-powered meeting notes assistant that simplifies capturing and organizing meeting discussions automatically.", pricing: "Free", featured: true, color: "linear-gradient(135deg, hsl(270 40% 18%), hsl(280 40% 24%))", initial: "EM",
  },
  {
    id: 4, name: "ChatGPT", category: "Chatbot", description: "A conversational AI model by OpenAI that generates human-like text responses for a variety of tasks including writing, analysis, and coding.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(160 40% 18%), hsl(170 40% 22%))", initial: "CG",
  },
  {
    id: 5, name: "Midjourney", category: "Image Generator", description: "An AI-powered tool that generates stunning images from text descriptions, popular among designers and creatives.", pricing: "Paid", featured: false, color: "linear-gradient(135deg, hsl(200 40% 18%), hsl(220 40% 24%))", initial: "MJ",
  },
  {
    id: 6, name: "Jasper", category: "Copywriting", description: "An AI writing assistant that helps create marketing copy, blog posts, and social media content at scale.", pricing: "Paid", featured: false, color: "linear-gradient(135deg, hsl(30 50% 18%), hsl(40 50% 22%))", initial: "JA",
  },
  {
    id: 7, name: "Runway ML", category: "Video Editing", description: "An AI-powered creative suite that offers tools for video editing, image generation, and real-time collaboration.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(300 30% 18%), hsl(320 30% 22%))", initial: "RM",
  },
  {
    id: 8, name: "Copy.ai", category: "Marketing", description: "An AI-powered copywriting tool that generates marketing copy, email templates, and social media posts in seconds.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(180 40% 16%), hsl(190 40% 22%))", initial: "CA",
  },
  {
    id: 9, name: "Synthesia", category: "Video Generator", description: "An AI video creation platform that generates professional videos with AI avatars, eliminating the need for cameras or studios.", pricing: "Paid", featured: true, color: "linear-gradient(135deg, hsl(250 50% 20%), hsl(270 50% 26%))", initial: "SY",
  },
  {
    id: 10, name: "Grammarly", category: "Writing", description: "An AI writing assistant that checks grammar, spelling, style, and tone to help you write clear and effective content.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(140 50% 16%), hsl(150 50% 22%))", initial: "GR",
  },
  {
    id: 11, name: "Notion AI", category: "Productivity", description: "An AI integration within Notion that helps with writing, summarizing, brainstorming, and organizing information.", pricing: "Paid", featured: false, color: "linear-gradient(135deg, hsl(0 0% 14%), hsl(0 0% 20%))", initial: "NO",
  },
  {
    id: 12, name: "Descript", category: "Audio Editing", description: "An all-in-one audio and video editor that uses AI transcription and lets you edit media by editing text.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(210 40% 16%), hsl(220 40% 22%))", initial: "DE",
  },
];

export default tools;
