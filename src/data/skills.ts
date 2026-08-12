import { TechCategory } from "@/types";

export const SKILLS_DATA: TechCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "LangChain", level: "Expert" },
      { name: "Gemini API", level: "Expert" },
      { name: "RAG", level: "Expert" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "LLMs", level: "Advanced" },
      { name: "AI Agents", level: "Advanced" },
      { name: "Vector Databases", level: "Advanced" },
    ]
  },
  {
    category: "Backend Engineering",
    skills: [
      { name: "Spring Boot", level: "Advanced" },
      { name: "FastAPI", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "JWT Authentication", level: "Advanced" },
      { name: "Hibernate / JPA", level: "Advanced" },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Advanced" },
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: "Certified" },
      { name: "Docker", level: "Advanced" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "CI/CD Pipelines", level: "Intermediate" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "ChromaDB / Pinecone", level: "Advanced" },
    ]
  },
  {
    category: "Core CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: "300+ Solved" },
      { name: "Object-Oriented Programming (OOP)", level: "Expert" },
      { name: "Database Management Systems (DBMS)", level: "Advanced" },
      { name: "Operating Systems", level: "Advanced" },
      { name: "Computer Networks", level: "Advanced" },
    ]
  }
];
