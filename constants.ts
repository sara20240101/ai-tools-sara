import { ResourceItem, VideoResource, ToolResource } from './types';

const BASE_VIDEOS: VideoResource[] = [
  {
    type: 'video',
    id: "aircAruvnKk", 
    authorName: "3Blue1Brown",
    authorImg: "https://yt3.googleusercontent.com/ytc/AIdro_k2A0yTj8Qx9fA2F8kQ4X9x0s1q4qX8z5Z8z5Z8=s176-c-k-c0x00ffffff-no-rj",
    title: "But what is a Neural Network?",
    subtitle: "Deep Learning • Chapter 1",
    desc: "An elegant visual introduction to the core concepts of neural networks, explaining the math behind how computers learn.",
    tags: ["Neural Networks", "Math", "Visuals"]
  },
  {
    type: 'video',
    id: "zjkBMFhNj_g",
    authorName: "Andrej Karpathy",
    authorImg: "https://yt3.googleusercontent.com/ytc/AIdro_nK5X6X0X5X6X0X5X6X0X5X6X0X5X6X0X5X6X0=s176-c-k-c0x00ffffff-no-rj", 
    title: "Intro to Large Language Models",
    subtitle: "State of the Art • 2023",
    desc: "A comprehensive overview of LLMs, how they work, their history, and where the technology is heading in the near future.",
    tags: ["LLM", "GPT", "AI Theory"]
  },
  {
    type: 'video',
    id: "jKrjQ4bnLd4",
    authorName: "Two Minute Papers",
    authorImg: "https://yt3.googleusercontent.com/ytc/AIdro_i5X6X0X5X6X0X5X6X0X5X6X0X5X6X0X5X6X0=s176-c-k-c0x00ffffff-no-rj",
    title: "OpenAI Sora: AI Video is Here!",
    subtitle: "Generative Video • News",
    desc: "Exploring the groundbreaking capabilities of OpenAI's Sora model and what it means for the future of content creation.",
    tags: ["Generative AI", "Video", "Sora"]
  }
];

const TOOLS: ToolResource[] = [
  {
    type: 'tool',
    id: "tool-gpt",
    name: "ChatGPT",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    siteUrl: "https://chat.openai.com",
    category: "Chatbot"
  },
  {
    type: 'tool',
    id: "tool-mj",
    name: "Midjourney",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png",
    siteUrl: "https://www.midjourney.com",
    category: "Image Gen"
  },
  {
    type: 'tool',
    id: "tool-claude",
    name: "Claude",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Anthropic_logo.svg",
    siteUrl: "https://claude.ai",
    category: "Assistant"
  },
  {
    type: 'tool',
    id: "tool-runway",
    name: "Runway",
    iconUrl: "https://yt3.googleusercontent.com/Rk2P0s8N0E1-C-e8A-2z3YF8g9yF8x7w6v5u4t3s2q1p0o9n8m7l6k5j4h3g2f1d0s=s900-c-k-c0x00ffffff-no-rj",
    siteUrl: "https://runwayml.com",
    category: "Video Gen"
  },
  {
    type: 'tool',
    id: "tool-hf",
    name: "Hugging Face",
    iconUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    siteUrl: "https://huggingface.co",
    category: "Models"
  },
  {
    type: 'tool',
    id: "tool-pplx",
    name: "Perplexity",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg",
    siteUrl: "https://www.perplexity.ai",
    category: "Search"
  }
];

// Combine all resources
export const RESOURCES: ResourceItem[] = [
  ...BASE_VIDEOS,
  // Duplicating videos for pagination demo
  { ...BASE_VIDEOS[0], id: "IHZwWFHWa-w", title: "Gradient Descent, how neural networks learn" },
  { ...BASE_VIDEOS[1], id: "kCc8FmEb1nY", title: "Let's build GPT: from scratch, in code" },
  { ...BASE_VIDEOS[2], id: "H2N1a3e-1-0", title: "Google Gemini: The New King?" },
  { ...BASE_VIDEOS[0], id: "tIeHLnjs5U8", title: "Backpropagation calculus" },
  { ...BASE_VIDEOS[1], id: "VMj-3S1tku0", title: "The spelled-out intro to neural networks" },
  { ...BASE_VIDEOS[2], id: "FSyA6l1QeQ0", title: "NVIDIA's New AI: This Is Getting Scary" },
  // Add tools
  ...TOOLS
];