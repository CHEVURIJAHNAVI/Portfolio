import { CertificateItem } from "@/types";

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued 2023",
    credentialUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "EC2 / S3 / IAM", "AWS Cloud Security", "Serverless Computing"]
  },
  {
    id: "aws-internship",
    title: "AWS AI & Cloud Virtual Internship",
    issuer: "Amazon Web Services & AICTE",
    date: "Issued 2023",
    credentialUrl: "https://aws.amazon.com",
    skills: ["Cloud Deployment", "AI Services", "Infrastructure as Code", "Distributed Systems"]
  },
  {
    id: "nptel-java",
    title: "NPTEL Elite Certification in Core Java",
    issuer: "IIT Bombay & NPTEL (MHRD)",
    date: "Issued 2023",
    credentialUrl: "https://nptel.ac.in",
    skills: ["Object-Oriented Programming", "Multi-threading", "Collections Framework", "JVM Architecture"]
  },
  {
    id: "freecodecamp-web",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "Issued 2022",
    credentialUrl: "https://freecodecamp.org",
    skills: ["Modern HTML5", "CSS3 Flexbox & Grid", "Accessibility (a11y)", "Responsive UI Layouts"]
  }
];
