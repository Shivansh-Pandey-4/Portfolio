import type { IProjectList } from "@/types/Project";



export const ProjectLists: IProjectList[] = [
    {
        id: 1,
        name: "Collab Canvas",
        description: "A real-time collaborative whiteboard where users draw, create, and chat together. Built with WebSockets for seamless live collaboration and Prisma + PostgreSQL to persist chat history.",
        githubLink: "",
        liveLink: "",
        creationDate: "2026 Aug",
        techStack: ["Next JS", "Node JS", "Express JS", "Typescript", "Websocket (ws)", "Postgresql", "Better Auth", "Turborepo", "Tailwindcss", "Docker", "CI/CD", "AWS-EC2"]
    },
    {
        id: 2,
        name: "Brainly",
        description: "A personal knowledge hub to save, organize, and manage useful content in one place. Features content management, CRUD operations, and shareable collections for easy access to your saved knowledge.",
        githubLink: "",
        liveLink: "",
        creationDate: "2026 may",
        techStack: ["React JS", "Node JS", "Express JS", "Mongoose", "MongoDB", "Docker", "Tailwindcss", "CI/CD", "AWS-EC2"]
    },
    {
        id: 3,
        name: "BrightPath",
        description: "A course marketplace where creators can publish, manage, and price their courses with ease. Designed to help authors manage their learning content and make educational resources accessible to learners.",
        githubLink: "",
        liveLink: "",
        creationDate: "2025 aug",
        techStack: ["React JS", "Node JS", "Express JS", "React Redux", "Mongoose", "MongoDB", "Docker", "Tailwindcss", "CI/CD"]
    }
]