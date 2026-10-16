import { ContactLists } from "@/lib/ContactList"
import { Button } from "../ui/button";
import HomeLink from "../common/HomeLink";
import Link from "next/link";

const Navigate = ["Home", "Work", "Blogs", "Resume"] as const;

export default function Contact() {

    return (
        <div className="mt-10 p-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 container mx-auto max-w-3xl">
            <div>
                <h1 className="text-black dark:text-gray-200 font-semibold text-xl">Navigate</h1>
                <ul className="py-3 flex items-center flex-wrap gap-x-3 dark:text-gray-500 text-gray-600">
                    {
                        Navigate.map((item, index) => {
                            return (item === "Home" ? <HomeLink key={index} /> :
                                <li className="cursor-pointer dark:hover:text-gray-300 hover:text-gray-900" key={index}>
                                    <Link href={`/${item.toLowerCase()}`}>
                                        {item}
                                    </Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
            <div>
                <h1 className="text-black dark:text-gray-200 font-semibold text-xl">Connect</h1>
                <div className="py-3 flex items-center flex-wrap gap-x-3 dark:text-gray-500">
                    {
                        ContactLists.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.id} className="relative group">
                                    <Button variant={"outline"} className="cursor-pointer dark:hover:text-gray-300">
                                        <Icon />
                                    </Button>
                                    <p className="invisible absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-4 py-1 text-md capitalize text-white opacity-0 transition-opacity duration-200 delay-200 group-hover:visible group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-800">
                                        {item.name}
                                    </p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}