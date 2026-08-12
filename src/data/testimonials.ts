import { TestimonialItem } from "@/types";

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Rajeshwar Rao",
    role: "Head of Artificial Intelligence",
    company: "Calibo AI Academy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    content: "Jahnavi demonstrated extraordinary aptitude during her AI Engineering fellowship. Her ability to quickly grasp complex LLM architectures and build resilient RAG microservices using FastAPI and LangChain put her on par with seasoned backend engineers.",
    relationship: "Direct Mentor & Technical Lead"
  },
  {
    id: "test-2",
    name: "Michael Chen",
    role: "Senior Engineering Manager",
    company: "GAOTek Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    content: "During her internship, Jahnavi tackled our frontend rendering bottlenecks with analytical precision. She reduced page load latencies by 35% and introduced modern code modularity that our team continues to rely on today. Truly outstanding engineer.",
    relationship: "Internship Supervisor"
  },
  {
    id: "test-3",
    name: "Ananya Sharma",
    role: "Hackathon Team Lead & Peer Engineer",
    company: "Smart India Hackathon Cohort",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    content: "Working alongside Jahnavi during the 36-hour Smart India Hackathon was incredible. When our oceanographic telemetry APIs started dropping packets under stress, she wrote an asynchronous python queue and predictive anomaly filler that won us the Runner-Up trophy!",
    relationship: "Hackathon Collaborator"
  }
];
