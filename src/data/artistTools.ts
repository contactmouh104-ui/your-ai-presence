import type { Tool } from "@/components/ToolCard";

const artistTools: Tool[] = [
  {
    id: 101, name: "Midjourney", category: "Image Generator", description: "أداة ذكاء اصطناعي تولد صوراً مذهلة من أوصاف نصية، مشهورة بين المصممين والرسامين.", pricing: "Paid", featured: true, color: "linear-gradient(135deg, hsl(200 40% 18%), hsl(220 40% 24%))", initial: "MJ", rating: 4.8,
  },
  {
    id: 102, name: "DALL·E 3", category: "Image Generator", description: "نموذج توليد صور من OpenAI يحول النصوص إلى أعمال فنية رقمية عالية الجودة.", pricing: "Freemium", featured: true, color: "linear-gradient(135deg, hsl(160 50% 16%), hsl(180 50% 22%))", initial: "DE", rating: 4.6,
  },
  {
    id: 103, name: "Stable Diffusion", category: "Image Generator", description: "نموذج مفتوح المصدر لتوليد الصور بالذكاء الاصطناعي مع إمكانية التخصيص الكامل.", pricing: "Free", featured: true, color: "linear-gradient(135deg, hsl(270 40% 18%), hsl(290 40% 24%))", initial: "SD", rating: 4.5,
  },
  {
    id: 104, name: "Leonardo AI", category: "Design", description: "منصة إبداعية تستخدم الذكاء الاصطناعي لإنشاء أصول فنية للألعاب والتصميم.", pricing: "Freemium", featured: false, color: "linear-gradient(135deg, hsl(30 50% 18%), hsl(50 50% 22%))", initial: "LA", rating: 4.4,
  },
];

export default artistTools;
