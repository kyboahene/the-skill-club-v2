import {
    Home,
    User,
    FileText,
    MessageSquare,
    BriefcaseBusiness,
} from "lucide-react";

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const categories = [
    "Leadership",
    "Mentorship",
    "Job",
    "Career Advice",
    "Skills",
];

export const years = [
    "No experience",
    "1+ year",
    "2+ years",
    "3+ years",
    "4+ years",
    "5+ years",
];

export const jobCategories = [
    "Writing",
    "Designer",
    "It & Development",
    "Web & Mobile Dev",
];

export const roles = [
    "Accountant",
    "Web Developer",
    "Graphic Designer",
    "Content Creator",
    "SEO Specialist",
    "Copywriter",
    "Web Designer",
    "Photographer",
    "Data Scientist",
    "Writer (Blogger)",
    "Mobile Developer",
    "Digital Marketer",
    "Virtual Assistant",
    "Social Media Content",
    "Product Designer (UI/UX)",
    "Technical Customer Support",
];
export const gender = ['Male', 'Female']
export const genders = ["Male", "Female"];
export const statuses = ['active', 'closed']
export const professions = ["Student", "Graduate"];
export const salaries = ["Monthly", "Weekly", "Yearly"];
export const modes = ["Entry Level", "Internship", "Contract"];
export const degrees = ["Bachelor's degree", "Master's degree"];
export const remotes = ["Onsite", "remote", "Onsite or remote"];
export const jobTypes = ["Full time", "Part time", "Contract", "Internship"];

export const sizes = [
    "11 - 50",
    "51 - 200",
    "201 - 1000",
    "1001 - 500",
    "Less than 10",
    "More than 5000",
];
export const types = [
    "Corporation",
    "Cryptocurrency",
    "Product Development",
    "Software Development",
    "Private Limited Company",
];

export const markets = [
    "NFT",
    "Bitcoin",
    "Genomics",
    "Web Design",
    "BlockChains",
    "Marketplaces",
    "Biotechnology",
    "Product Design",
    "Digital Health",
    "Graphic Design",
    "Personal Health",
    "Genetic Testing",
    "Personalization",
    "Consumer Lending",
    "Health and Wellness",
    "User Interface Design",
    "Application Platforms",
    "User Experience Design",
];

export const popularEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "proton.mail",
    "mailinator.com",
];

export const companyNavigation = [
    {
        menuItem: "Home",
        link: "/company",
        svg: Home,
    },
    {
        menuItem: "Profile",
        link: "/company/profile",
        svg: User,
    },
    {
        menuItem: "Job",
        link: '/company/jobs',
        svg: FileText,
    },
    {
        menuItem: "Messages",
        link: "/company/messages",
        svg: MessageSquare,
    },
];

export const talentDashboardNavigation = [
    {
        menuItem: "Home",
        link: "/dashboard",
        svg: Home,
    },
    {
        menuItem: "Profile",
        link: "/dashboard/profile",
        svg: User,
    },
    {
        menuItem: "Assessments",
        link: "/dashboard/assessments",
        svg: FileText
    },
    {
        menuItem: "Messages",
        link: "/dashboard/messages",
        svg: MessageSquare,
    },
    {
        menuItem: "Applied",
        link: "/dashboard/applied-jobs",
        svg: Home
    },
    {
        menuItem: "Jobs",
        link: "/dashboard/jobs",
        svg: BriefcaseBusiness,
    },
];

export const mainNavNavigation = [
    {
        menuItem: "Hire Talent",
        link: "/company/auth/sign-up",
    },
    {
        menuItem: "Contact Us",
        link: "/contact-us",
    },
    {
        menuItem: "Community",
        link: "/community",
    },
    {
        menuItem: "Resources",
        link: "/resources",
    }
]