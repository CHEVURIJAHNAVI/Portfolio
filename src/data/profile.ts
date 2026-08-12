import { ProfileData, EducationItem } from "@/types";

export const PROFILE_DATA: ProfileData = {
  name: "CHEVURI JAHNAVI",
  title: "Software Engineer | AI Engineer | Full Stack Developer",
  tagline: "Building scalable AI-powered applications and enterprise software that solve real-world problems.",
  about: [
    "I'm a Computer Science Engineering student with a stellar CGPA of 9.83/10 and extensive hands-on experience in AI Engineering, Full Stack Development, Backend Engineering, Cloud Computing, and Software Engineering.",
    "I thrive at the intersection of enterprise software architecture and cutting-edge artificial intelligence. My technical journey involves designing resilient backend microservices with Python, Java, Spring Boot, and FastAPI, while seamlessly orchestrating Large Language Models using LangChain, RAG frameworks, and vector databases.",
    "I am deeply passionate about solving complex engineering bottlenecks through distributed cloud architectures on AWS, intelligent AI agents, and uncompromising clean code practices. Whether developing autonomous AI assistants or high-concurrency booking platforms, I deliver production-ready software built for high availability and scale."
  ],
  cgpa: "9.83 / 10.00",
  currentGoal: "Software Engineer / AI Engineer / Backend Engineer roles at top product companies.",
  location: "India",
  email: "jahnavichevuri@gmail.com",
  phone: "+91 XXXXXXXXXX",
  highlights: [
    { label: "Academic CGPA", value: "9.83 / 10", icon: "GraduationCap" },
    { label: "Cloud Certification", value: "AWS Certified", icon: "Cloud" },
    { label: "Hackathon Standing", value: "Runner-Up SIH", icon: "Trophy" },
    { label: "Problem Solving", value: "300+ DSA Solved", icon: "Code2" },
  ],
  funFacts: [
    "⚡ Can debug complex asynchronous concurrency race conditions faster than making a cup of coffee.",
    "🤖 Built custom Retrieval-Augmented Generation (RAG) pipelines to digest technical documentation autonomously.",
    "🚀 Obsessed with keeping latency under 50ms and Lighthouse performance scores strictly above 98.",
    "🎯 Solved 300+ algorithmic puzzles across LeetCode, CodeChef, and GeeksforGeeks maintaining a daily streak."
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Premier Institute of Technology",
    period: "2021 - Present",
    score: "CGPA: 9.83 / 10.00 (Top 1% of Cohort)",
    description: "Specialized in Artificial Intelligence, Distributed Systems, Advanced Data Structures & Algorithms, Database Management Systems, and Cloud Computing Architecture."
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "State Board of Secondary Education",
    period: "2019 - 2021",
    score: "Percentage: 98.6%",
    description: "Major in Mathematics, Physics, and Chemistry. Consistently ranked at the top of the academic merit list."
  }
];
