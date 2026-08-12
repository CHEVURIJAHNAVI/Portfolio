import { ExperienceItem } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "calibo-ai",
    role: "AI Engineer Trainee",
    company: "Calibo AI Academy",
    period: "2023 - Present",
    type: "Trainee / Fellowship",
    location: "Remote / Hybrid",
    responsibilities: [
      "Designed and deployed enterprise-grade AI microservices utilizing FastAPI, LangChain, and state-of-the-art Large Language Models.",
      "Architected Retrieval-Augmented Generation (RAG) pipelines integrating custom vector databases to process complex unstructured enterprise documentation with sub-second querying latency.",
      "Leveraged Google Gemini API and OpenAI endpoints for intelligent data synthesis, automated classification, and conversational agent workflows.",
      "Containerized AI backend services using Docker and orchestrated cloud deployments on AWS EC2/ECS instances ensuring 99.9% availability.",
      "Implemented robust secure REST APIs with JWT token validation, rate-limiting, and comprehensive automated OpenAPI documentation."
    ],
    technologies: [
      "Enterprise AI",
      "FastAPI",
      "LangChain",
      "Gemini API",
      "RAG",
      "Docker",
      "AWS",
      "Vector DB",
      "Machine Learning",
      "REST APIs"
    ]
  },
  {
    id: "gaotek",
    role: "Web Developer Intern",
    company: "GAOTek Inc.",
    period: "Summer 2023",
    type: "Internship",
    location: "Remote",
    responsibilities: [
      "Optimized critical frontend workflows, achieving a 35% reduction in page load speeds across core web applications.",
      "Conducted thorough debugging and cross-browser UI/UX testing to resolve legacy rendering defects and responsive layout anomalies.",
      "Collaborated with senior software architects in daily stand-ups to maintain and upgrade production web applications serving global clients.",
      "Refactored monolithic UI components into modular, highly reusable components adhering to clean code and accessibility standards."
    ],
    technologies: [
      "Frontend optimization",
      "Debugging",
      "Testing",
      "Software Maintenance",
      "JavaScript",
      "HTML/CSS"
    ]
  }
];
