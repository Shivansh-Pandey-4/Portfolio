import { ContactLists } from "@/lib/ContactList"
import { Button } from "../ui/button";
import Link from "next/link";

export default function SocialLinks() {

    return (
        <div className="mt-4 flex flex-wrap gap-x-1 ">
            {
                ContactLists.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className="relative group">
                            <Link href={item.url} target="_blank">
                                <Button variant={"ghost"} className="cursor-pointer px-1">
                                    <Icon />
                                </Button>
                            </Link>
                            <p className="invisible absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-4 py-1 text-sm capitalize text-white opacity-0 transition-opacity group-hover:visible ease-in-out group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-800">
                                {item.name}
                            </p>
                        </div >
                    )
                })
            }
        </div >
    )
}