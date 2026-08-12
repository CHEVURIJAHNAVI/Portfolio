import { BlogPostItem } from "@/types";

export const BLOGS_DATA: BlogPostItem[] = [
  {
    id: "coming-soon-1",
    title: "Architecting High-Throughput RAG Pipelines with LangChain & FastAPI",
    excerpt: "An deep dive into vector database index strategies, embedding caching mechanisms, and sub-100ms streaming responses for enterprise AI microservices.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["AI Engineering", "LangChain", "FastAPI"],
    slug: "architecting-rag-pipelines",
    comingSoon: true
  },
  {
    id: "coming-soon-2",
    title: "Why Concurrency Control Matters: Lessons from HomiGo Booking Engine",
    excerpt: "How we prevented double-booking race conditions during high-traffic flash booking windows using ACID transactions and optimistic locking in Spring Boot.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Backend", "Spring Boot", "MySQL", "Concurrency"],
    slug: "concurrency-control-homigo",
    comingSoon: true
  },
  {
    id: "coming-soon-3",
    title: "Mastering Dynamic Programming: Patterns from Solving 300+ DSA Problems",
    excerpt: "Breaking down complex algorithmic challenges into intuitive subproblems. A practical framework for cracking technical coding interviews at top tier tech giants.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["Algorithms", "LeetCode", "Problem Solving"],
    slug: "mastering-dynamic-programming",
    comingSoon: true
  }
];
