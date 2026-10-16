
import type { IProjectList } from "@/types/Project";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Globe } from "lucide-react";

interface IProps {
    data: IProjectList;
}

export default function ProjectCard(props: IProps) {
    const { id, name, description, githubLink, liveLink, creationDate, techStack, imageSrc, videoUrl } = props.data;


    return (
        <div className="flex h-full w-full flex-col rounded-md border border-gray-300 p-3 shadow dark:border-gray-700">
            <Image
                src={imageSrc ? imageSrc : "/vercel.svg"}
                alt="collab canvas project image"
                width={500}
                height={200}
                className="h-40 w-full rounded-md object-cover"
            />


            <h1 className="mt-2 font-semibold">{name}</h1>
            <p className="text-sm mt-0.5">{creationDate}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-sm">{description}</p>
            <div className="mt-3 flex items-center flex-wrap gap-0.5">
                {
                    techStack.map((item) => (
                        <Button className="px-1" variant={"secondary"} size={"xs"} key={item} >
                            {item}
                        </Button>
                    ))
                }
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                <Link href={liveLink}>
                    <Button variant={"opposite"} className="px-2" size={"sm"}>
                        <Globe />
                        Website
                    </Button>
                </Link>

                <Link href={githubLink}>
                    <Button variant={"opposite"} className="px-2" size={"sm"} >
                        < FaGithub />
                        Source
                    </Button>
                </Link>
            </div>
        </div>
    )
}