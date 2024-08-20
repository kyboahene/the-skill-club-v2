export interface FormInput {
    password: string;
    email: string;
};

export interface CustomUser {
    id?: string | undefined,
    name?: string | undefined,
    description?: string | null | undefined,
    email?: string | null | undefined,
    role?: string,
    gender?: "Male" | "Female" | undefined,
    linkedIn?: string,
    gitPortWebsite?: string,
    website?: string
    country?: string,
    profession?: "Student" | "Graduate",
    university?: string,
    year?: "First" | "Second" | "Third" | "Fourth",
    mode?: ["Contract" | "Internship" | "Entry Level"],
    skills?: ISkill[],
    resume?: string,
    profile?: string,
    workHistory?: WorkHistory[] | [],
    education?: PersonalEducation[] | [],
    personalProject?: PersonalProject[] | [],
    certificate?: Certificate[] | [],
    vetted?: boolean,
    phone?: string
    availability?: boolean
    new?: boolean
    timestamp?: Timestamp

}

export interface ISkill {
    id?: string;
    skill: string;
    verified: boolean;
}

export interface CustomAdminUser {
    id?: string,
    name?: string,
    email?: string,
}

export interface State {
    studentUser: CustomUser | null,
    isAuthenticated: boolean
}



export interface AdminState {
    adminUser: CustomAdminUser | null,
    isAuthenticated: boolean
}

export interface Dispatch {
    type: string,
    payload: object
}

export interface WorkHistory {
    jobTitle: string,
    company: string,
    companyLink?: string,
    description?: string | undefined,
    from?: string,
    toDate?: boolean,
    to?: string
}

export interface PersonalEducation {
    school: string,
    schoolLink?: string,
    degree?: "High school diploma" |
    "Bachelor's degree" |
    "Master's degree" |
    "Doctor's degree" |
    "MBA",
    course: string,
    from?: string,
    toDate?: boolean,
    to?: string,
}

export interface PersonalProject {
    projectTitle: string,
    projectLink: string,
    description: string,
    year: string
}

export interface Certificate {
    title: string,
    company: string,
    month: string,
    year: string
}

export interface Assessment {
    id?: string,
    question: string,
    alternatives: string[],
    answer?: string,
    skill?: string
}

export interface Resource {
    id?: string,
    link: string,
    title: string,
    description: string,
    type: "Video" | "Article"
    skill: {
        id: string,
        skill: string,
        image: string,
    },
}

export interface ResourceBySkill {
    id: string;
    image: string;
    skill: string;
}

export interface Event {
    id?: string,
    title: string,
    image: string,
    link: string,
    date: string,
    description: string,
    category?: "Leadership" | "Mentorship" | "Job" | "Career Advice" | "Skills",
    createdAt?: string
}

export interface Company {
    Name: string,
    Email: string,
    Company: string,
    When?: string,
    City: string,
    ModeOfOperation: 'Onsite' | 'Remote',
    Duration: Duration,
    SoughtAfters: string[]
}

export interface ICompany {
    id?: string
    name: string
    email: string
    logo?: string
    type?: string
    market?: string
    country?: string
    timestamp?: string
    totalRaised?: string
    website?: string
    overview?: string
    address?: string
    linkedIn?: string
    twitter?: string
    foundedDate?: string
    companySize?: string
    remotePolicy?: string
    new?: string
}

export interface Job {
    id?: string
    jobTitle: string
    status: Status
    jobCategory?: string
    workLocation: string
    skills: ISkill[]
    requirements: string
    responsibilities: string
    education: string
    pay?: string
    minPay?: string
    maxPay?: string
    jobType: string
    about: string
    salary: string
    experience: string
    timestamp: Timestamp
    company?: ICompany
    companyId?: string
}


export interface JobDetail extends Job {
    company: ICompany
}
// export interface ApplicationWithDetails {
//     userDetails: CustomUser
//     jobDetails: JobDetail
// }

export interface Application {
    id?: string;
    talentId: string;
    jobId: string;
    timestamp: Timestamp;
    status: 'Pending' | 'Accepted' | 'Rejected';
}

export interface ApplicationWithDetails extends Application {
    userDetails: CustomUser
    jobDetails: JobDetail
}

export interface Message {
    id?: string
    title: string
    description: string
    receiverId: string
    senderId: string
    senderDetails?: ICompany | CustomUser
    receiverDetails?: ICompany | CustomUser
    timestamp: Timestamp
    senderType: "User" | "Company"
    read: boolean
}

export interface CompanyState {
    companyUser: ICompany | null
    isAuthenticated: boolean
}

export enum ModeOfOperation {
    Onsite = "Onsite",
    Remote = "Remote"
}

export enum Duration {
    Year = "A year",
    Week_2 = '1 Week',
    Month_1 = "1 Month",
    Month_3 = '3 months',
    Month_6 = "6 months",
}

export enum Experience {
    NO_EXPERIENCE = 'No experience',
    ONE = '1 year',
    TWO = "2 years",
    THREE = "3 years",
    FOUR = "4 years",
    FIVE_OR_MORE = "5+ years"
}

export enum Salary {
    MONTHLY = "Monthly",
    WEEKLY = "Weekly",
    YEARLY = "Yearly"
}

export enum Degree {
    DIPLOMA = "High school diploma",
    ASSOCIATE = "Associate degree",
    BACHELORS = "Bachelor's degree",
    MASTERS = "Master's degree",
    MBA = "MBA"
}

export enum Remote {
    ONSITE = "Onsite",
    REMOTE = "Remote",
    ONSITE_REMOTE = "Onsite or Remote"
}

export enum JobType {
    FULL = "Full Time",
    PART = "Part Time",
    CONTRACT = "Contract",
    INTERNSHIP = "Internship"
}

export enum JobCategory {
    DEV = "Web & Mobile Dev",
    DESIGN = "Designer",
    WRITING = "Writing",
    MARKETING = "Marketing",
    OTHER = "Other"
}

export enum Status {
    ACTIVE = "Active",
    CLOSED = "Closed"
}