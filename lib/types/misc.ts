import { ApplicationStatus, EventCategory, Gender, Mode, Profession, ResourceType, Role, Talent, Year } from "@prisma/client";

export type FormInput = {
    password: string;
    email: string;
};

export type PaginatedResult<T> = {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export type User = {
    id?: string
    name: string
    email: string
    role: Role
    company?: Company
    talent?: Talent
    new?: boolean
}

export type TalentUser = {
    gender?: Gender
    linkedIn?: string
    gitPortWebsite?: string
    website?: string
    country?: string
    profession?: Profession
    university?: string
    year?: Year
    mode?: Mode
    skills?: ISkill[]
    phone?: string
    vetted?: boolean
    availability?: boolean
    certificates?: Certificate[]
    projects?: Project[]
    workHistories?: WorkHistory[]
    education?: Education[]
}

export type ISkill = {
    id?: string
    skill: string
    jobId: string
    talentId: string
    verified: boolean
}

export type Dispatch = {
    type: string,
    payload: object
}

export type WorkHistory = {
    jobTitle: string
    company: string
    companyLink?: string
    description?: string
    from?: string
    toDate?: boolean
    to?: string
    talentId: string
}

export interface Education {
    school: string,
    schoolLink?: string,
    degree?: Degree
    course: string,
    from?: string,
    toDate?: boolean,
    to?: string,
}

export type Project = {
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

export type Resource = {
    id?: string,
    link: string,
    title: string,
    description: string,
    type: ResourceType
    skillId: string,
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
    category: EventCategory
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
    status: ApplicationStatus
}

export interface ApplicationWithDetails extends Application {
    userDetails: User
    jobDetails: JobDetail
}

export type Message = {
    id?: string
    title: string
    description: string
    receiverId: string
    senderId: string
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