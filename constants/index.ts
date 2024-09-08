import { BriefcaseBusiness, FileText, Home, MessageSquare, User } from "lucide-react";

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
export const statuses = ['active', 'closed']
export const salaries = ["Monthly", "Weekly", "Yearly"];
export const degrees = ["Bachelor's degree", "Master's degree"];
export const remotes = ["Onsite", "remote", "Onsite or remote"];
export const jobTypes = ["Full time", "Part time", "Contract", "Internship"];

export const popularEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "proton.mail",
    "mailinator.com",
];


// export const companyNavigation = [
//     {
//         menuItem: "Home",
//         link: companyDashboardRoutes[0],
//         svg: Home,
//     },
//     {
//         menuItem: "Profile",
//         link: companyDashboardRoutes[1],
//         svg: User,
//     },
//     {
//         menuItem: "Job",
//         link: companyDashboardRoutes[2],
//         svg: Document,
//     },
//     {
//         menuItem: "Messages",
//         link: companyDashboardRoutes[3],
//         svg: Message,
//     },
// ];

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