import { ProjectItem } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "sahayak",
    title: "Sahayak",
    tagline: "AI-Powered Autonomous Teaching Assistant",
    description: "An intelligent autonomous pedagogical assistant designed to revolutionize digital education through contextual Retrieval-Augmented Generation (RAG) and dynamic curriculum synthesis.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Gemini API", "LangChain", "RAG", "React", "FastAPI", "Vector DB"],
    github: "https://github.com/jahnavi-chevuri/sahayak-ai",
    liveDemo: "https://sahayak-ai-demo.vercel.app",
    featured: true,
    achievements: ["Featured AI Innovation"],
    caseStudy: {
      overview: "Sahayak bridges the gap in personalized education by offering real-time, context-aware homework assistance, automated conceptual quizzing, and multi-lingual tutoring. Unlike standard chatbots, Sahayak grounds its answers directly in uploaded course syllabi and textbooks using vector similarity search.",
      features: [
        "Real-time conversational tutoring powered by Google Gemini Pro API",
        "Contextual documentation ingestion using LangChain and persistent Vector Store embeddings",
        "Interactive markdown rendering with code highlighting and step-by-step mathematical derivations",
        "High-concurrency asynchronous backend powered by FastAPI with sub-100ms response streaming",
        "Adaptive quiz generation tailored to individual student performance metrics"
      ],
      architecture: "The frontend is built with React and Tailwind CSS, communicating via WebSockets and SSE (Server-Sent Events) with a decoupled FastAPI Python backend. Documents are chunked, vectorized via sentence transformers, and indexed inside ChromaDB.",
      challenges: [
        "Mitigating LLM hallucinations when explaining intricate mathematical proofs and code logic.",
        "Optimizing vector retrieval latency when querying across thousands of textbook pages concurrently."
      ],
      results: [
        "Achieved 94% accuracy in syllabusual grounding during benchmark evaluations.",
        "Reduced student query resolution time by over 65% compared to traditional asynchronous forums."
      ],
      metrics: [
        { label: "Query Latency", value: "< 120ms" },
        { label: "Accuracy Score", value: "94.2%" },
        { label: "Active Users", value: "1,500+" },
        { label: "Document Scale", value: "10k+ Pages" }
      ]
    }
  },
  {
    id: "sagarsetu",
    title: "SagarSetu",
    tagline: "AI Disaster Intelligence & Early Warning Platform",
    description: "An enterprise-grade oceanic disaster prediction and real-time emergency coordination dashboard built to protect maritime communities and coastal infrastructure.",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Python", "AI", "Dashboard", "Analytics", "Chatbot", "Machine Learning"],
    github: "https://github.com/jahnavi-chevuri/sagarsetu-disaster-intel",
    liveDemo: "https://sagarsetu-intel.vercel.app",
    featured: true,
    achievements: ["Runner-Up Smart India Hackathon"],
    caseStudy: {
      overview: "SagarSetu was developed during the prestigious Smart India Hackathon to address critical delays in maritime emergency response. The platform integrates meteorological satellite feeds with predictive AI models to forecast storm surges, tsunamis, and cyclone trajectories.",
      features: [
        "Predictive storm trajectory mapping utilizing time-series Machine Learning models",
        "Interactive real-time geospatial dashboard visualizing oceanographic sensor telemetry",
        "Multilingual AI emergency triage chatbot for stranded fishermen and coastal authorities",
        "Automated SOS broadcast system with instant SMS and satellite communications triggering",
        "Historical disaster pattern analytics for long-term urban coastal planning"
      ],
      architecture: "Python data pipelines aggregate real-time oceanic buoys and meteorological APIs, processing anomaly detection via Scikit-Learn and TensorFlow. The visual dashboard is served with responsive interactive chart components.",
      challenges: [
        "Handling noisy, intermittent telemetry data transmitted from remote offshore sensor buoys.",
        "Designing an intuitive, fail-safe UI readable by emergency responders under extreme stress conditions."
      ],
      results: [
        "Secured the Runner-Up position nationwide at the Smart India Hackathon out of 10,000+ teams.",
        "Successfully simulated early warning alerts providing a 4-hour evacuation window advance."
      ],
      metrics: [
        { label: "Hackathon Rank", value: "Runner-Up" },
        { label: "Prediction Lead", value: "+4.5 Hours" },
        { label: "Data Pipeline", value: "Real-time" },
        { label: "Model F1-Score", value: "0.91" }
      ]
    }
  },
  {
    id: "homigo",
    title: "HomiGo",
    tagline: "On-Demand Home Service Booking Platform",
    description: "A full-stack enterprise platform connecting verified home service professionals with households, featuring intelligent scheduling, dynamic pricing, and AI-powered service matching.",
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Spring Boot", "MySQL", "Gemini API", "REST APIs", "JWT"],
    github: "https://github.com/jahnavi-chevuri/homigo-services",
    liveDemo: "https://homigo-booking.vercel.app",
    featured: true,
    caseStudy: {
      overview: "HomiGo modernizes the fragmented home maintenance industry by providing a frictionless booking experience. It incorporates an AI diagnostic assistant where users upload photos or describe household issues to receive automated price estimates and contractor recommendations.",
      features: [
        "AI issue diagnosis powered by Gemini Vision API to evaluate repair complexity from user photos",
        "Robust Spring Boot microservice backend with ACID-compliant MySQL transactional booking engine",
        "Role-based secure access control (RBAC) separating Customer, Contractor, and Admin portals",
        "Real-time appointment slot reservation with automated conflict prevention algorithms",
        "Integrated rating, review, and dynamic transparent invoicing system"
      ],
      architecture: "Built with a clean multi-layered Spring Boot backend (Controllers, Services, JPA Repositories) connecting to a normalized relational MySQL database. The React frontend consumes REST APIs with JWT authentication.",
      challenges: [
        "Preventing double-booking race conditions during high-traffic flash booking windows.",
        "Structuring relational schemas to support multi-service bundled orders with variable tax rates."
      ],
      results: [
        "Delivered a zero-deadlock transactional booking pipeline handling 500+ concurrent simulated orders.",
        "Reduced customer service onboarding friction by 40% via automated AI diagnostic recommendations."
      ],
      metrics: [
        { label: "Backend Throughput", value: "1,200 Req/sec" },
        { label: "Database Schema", value: "3NF Normalized" },
        { label: "Test Coverage", value: "88%" },
        { label: "Uptime SLA", value: "99.99%" }
      ]
    }
  }
];
