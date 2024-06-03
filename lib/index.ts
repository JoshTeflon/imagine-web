import { Email, Facebook, Instagram, Linkedin } from "@/components/icons";
import { AboutDetails, NavItem, Service, Skill, SocialLinks, Training } from "@/types";

import ictBusinessEducation from "@/assets/ictBusinessEducation.png";
import databaseManagement from "@/assets/databaseManagement.png";
import devops from "@/assets/devops.png";
import projectManagement from "@/assets/projectManagement.png";
import networkConfiguration from "@/assets/networkConfiguration.png";
import programmingTraining from "@/assets/programmingTraining.png";
import agile from "@/assets/agile.png";
import businessAnalysis from "@/assets/businessAnalysis.png";
import trainingCertification from "@/assets/trainingCertification.png";
import trainingSkill from "@/assets/trainingSkill.png";
import mobileWebSkill from "@/assets/mobileWebSkill.png";
import consultingStrategySkill from "@/assets/consultingStrategySkill.png";
import virtualAugRealitySkill from "@/assets/virtualAugRealitySkill.png";
import cyberSecuritySkill from "@/assets/cyberSecuritySkill.png";
import machineLearningSkill from "@/assets/machineLearningSkill.png";
import hardwareSkill from "@/assets/hardwareSkill.png";
import projectManagementSkill from "@/assets/projectManagementSkill.png";
import customerSupportSkill from "@/assets/customerSupportSkill.png";
import dataAnalysisSkill from "@/assets/dataAnalysisSkill.png";
import digitalMarketingSkill from "@/assets/digitalMarketingSkill.png";
import enterpriseResourceSkill from "@/assets/enterpriseResourceSkill.png";
import dataScienceService from "@/assets/dataScienceService.png";
import businessAnalysisService from "@/assets/businessAnalysisService.png";
import projectManagementService from "@/assets/projectManagementService.png";
import isacaService from "@/assets/isacaService.png";
import cyberSecurityService from "@/assets/cyberSecurityService.png";
import ciscoService from "@/assets/ciscoService.png";
import fraudExaminerService from "@/assets/fraudExaminerService.png";
import webDevService from "@/assets/webDevService.png";
import softwareDevelopmentService from "@/assets/softwareDevelopmentService.png";
import ieltsService from "@/assets/ieltsService.png";
import programmingService from "@/assets/programmingService.png";
import microsoftService from "@/assets/microsoftService.png";
import compTiaService from "@/assets/compTiaService.png";
import riskInformationService from "@/assets/riskInformationService.png";
import advancedExcelService from "@/assets/advancedExcelService.png";
import dataAnalyticsService from "@/assets/dataAnalyticsService.png";
import redHatService from "@/assets/redHatService.png";
import hadoopService from "@/assets/hadoopService.png";
import ccbaPrepService from "@/assets/ccbaPrepService.png";
import awsArchitectureService from "@/assets/awsArchitectureService.png";
import cobitService from "@/assets/cobitService.png";
import awsDevelopmentService from "@/assets/awsDevelopmentService.png";
import leadershipManagementService from "@/assets/leadershipManagementService.png";
import digitalTransformationService from "@/assets/digitalTransformationService.png";
import businessPlanningService from "@/assets/businessPlanningService.png";
import leadAuditorService from "@/assets/leadAuditorService.png";
import leadImplementerService from "@/assets/leadImplementerService.png";
import ccbaTrainingService from "@/assets/ccbaTrainingService.png";

export const navItems: NavItem[] = [
  {
    label: 'home',
    url: '/'
  },
  {
    label: 'about us',
    url: '/about'
  },
  {
    label: 'services',
    url: '/services'
  },
];

export const aboutDetails: AboutDetails[] = [
  {
    header: "Purpose",
    paragraph: "We are passionate about empowering individuals and organizations with the IT skills and knowledge they need to thrive in today's ever-evolving digital landscape. Through engaging training, expert consultancy, and industry-recognized certifications, we bridge the skills gap and unlock career potential."
  },
  {
    header: "Performance",
    paragraph: "We stay ahead of the curve with the latest IT trends and best practices, ensuring our training and consulting services yield the best possible performance outcomes and we have a high certification pass rate, ensuring our students are well-equipped to succeed in their IT careers."
  },
];

export const socialLinks: SocialLinks[] = [
  {
    icon: Linkedin,
    url: "/linkedin-a"
  },
  {
    icon: Facebook,
    url: "/facebook-a"
  },
  {
    icon: Email,
    url: "/email-a"
  },
  {
    icon: Instagram,
    url: "/instagram-a"
  },
];

export const trainings: Training[] = [
  {
    src: ictBusinessEducation,
    title: "ICT & BUSINESS EDUCATION",
    body: "In today's digital age, success hinges on understanding both the power of technology (ICT) and the core principles of business. We offer a unique blend of training programs designed to empower you with ICT literacy",
  },
  {
    src: databaseManagement,
    title: "DATABASE MANAGEMENT",
    body: "Unleash the power of your data with our comprehensive database management education programs. We cater to all levels, from aspiring database administrators to seasoned professionals.",
  },
  {
    src: devops,
    title: "DEVOPS",
    body: "Embrace agility and efficiency with our comprehensive DevOps as a Service solutions. We bridge the gap between development and operations, helping you achieve faster deployments, and a more robust IT environment.",
  },
  {
    src: projectManagement,
    title: "PROJECT MANAGEMENT",
    body: "With our  Our project management services we help you define project goals, scope, and timelines, ensuring your IT projects are delivered on time, within budget, and meet all your objectives.",
  },
  {
    src: networkConfiguration,
    title: "NETWORK CONFIGURATION",
    body: "Our network configuration services ensure your network is running at its peak. We configure and manage routers, switches, firewalls, and other network devices to optimize data flow and enhance network security.",
  },
  {
    src: programmingTraining,
    title: "PROGRAMMING TRAINING",
    body: "With our comprehensive programming training programs. Whether you're a complete beginner or a seasoned developer looking to expand your skillset, we offer a variety of courses tailored to your needs.",
  },
  {
    src: agile,
    title: "AGILE",
    body: "Our comprehensive Agile services empower you to Implement Agile methodologies (e.g., Scrum, Kanban) to streamline workflows, accelerate project delivery, and adapt to changing market demands.",
  },
  {
    src: businessAnalysis,
    title: "BUSINESS ANALYSIS",
    body: "Our business analysis services bridge the critical gap between business needs and effective IT solutions. We offer a comprehensive suite of services to to clearly define and document business needs and requirements.",
  },
  {
    src: trainingCertification,
    title: "TRAINING AND CETIFICATION",
    body: "We empower individuals and companies to thrive in the dynamic IT field through our comprehensive training with extensive experience translating theory into practical skills. and certification programs.",
  },
];

export const skills: Skill[] = [
  {
    src: trainingSkill,
    skill: "Training and Certification",
  },
  {
    src: mobileWebSkill,
    skill: "Mobile and Web Development",
  },
  {
    src: consultingStrategySkill,
    skill: "IT Consulting & Strategy",
  },
  {
    src: virtualAugRealitySkill,
    skill: "Virtual & Augmented Reality Development",
  },
  {
    src: cyberSecuritySkill,
    skill: "Cyber Security",
  },
  {
    src: machineLearningSkill,
    skill: "Artificial Intelligence & Machine Learning",
  },
  {
    src: hardwareSkill,
    skill: "Hardware installation & maintenance",
  },
  {
    src: projectManagementSkill,
    skill: "Project Management",
  },
  {
    src: customerSupportSkill,
    skill: "Customer Support & Technical Assistance",
  },
  {
    src: dataAnalysisSkill,
    skill: "Data Analysis & Management",
  },
  {
    src: digitalMarketingSkill,
    skill: "Digital Marketing & SEO Optimization",
  },
  {
    src: enterpriseResourceSkill,
    skill: "Enterprise Resource Planning Implementaton",
  },
];

export const services: Service[] = [
  {
    src: dataScienceService,
    title: "Data Science",
  },
  {
    src: businessAnalysisService,
    title: "Business Analysis CBAP",
  },
  {
    src: projectManagementService,
    title: "Project Management PMP & PRINCE 2",
  },
  {
    src: isacaService,
    title: "ISACA, CISA, CISM",
  },
  {
    src: cyberSecurityService,
    title: "Cyber Security",
  },
  {
    src: ciscoService,
    title: "CISCO, CCNA, CCNP",
  },
  {
    src: fraudExaminerService,
    title: "Association Of Certified Fraud Examiner-Acfe",
  },
  {
    src: webDevService,
    title: "Websites And Web Apps Development",
  },
  {
    src: softwareDevelopmentService,
    title: "Software Development",
  },
  {
    src: ieltsService,
    title: "IELTS, GMAT, Duolingo",
  },
  {
    src: programmingService,
    title: "Programming Languages",
  },
  {
    src: microsoftService,
    title: "Microsoft MCSE, MCSA",
  },
  {
    src: compTiaService,
    title: "compTia A",
  },
  {
    src: riskInformationService,
    title: "Risk Information System Auditing",
  },
  {
    src: advancedExcelService,
    title: "Advanced Excel, Financial Modelling",
  },
  {
    src: dataAnalyticsService,
    title: "Data Analytics & Automation",
  },
  {
    src: redHatService,
    title: "Red Hat System",
  },
  {
    src: hadoopService,
    title: "Hadoop Architecture & Administration Training",
  },
  {
    src: ccbaPrepService,
    title: "CCBA Exam prep",
  },
  {
    src: awsArchitectureService,
    title: "Architecting on AWS (AWS-ARCH)",
  },
  {
    src: cobitService,
    title: "COBIT 5 Foundation",
  },
  {
    src: awsDevelopmentService,
    title: "Developing on AWS (AWS-DEV)",
  },
  {
    src: leadershipManagementService,
    title: "Leadership & Management Skill",
  },
  {
    src: digitalTransformationService,
    title: "Digital Transformation",
  },
  {
    src: businessPlanningService,
    title: "Business Planning & Management",
  },
  {
    src: leadAuditorService,
    title: "ISO 27001 Lead Auditor",
  },
  {
    src: leadImplementerService,
    title: "ISO 27001 Lead Implementer",
  },
  {
    src: ccbaTrainingService,
    title: "CCBA Training & Certification",
  },
];