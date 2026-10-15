export interface IProjectList {
    id: number;
    name: string;
    imageSrc ?: string;
    videoUrl ?: string;
    description: string;
    creationDate: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
}