import Link from "next/link";
import { ThemeToggle } from "../common/ThemeToggle";
import HomeLink from "../common/HomeLink";


export default function Header() {


    return (
        <header className="sticky top-0 z-50 px-4 h-15 py-2  backdrop-blur-sm  mx-auto max-w-3xl w-full">
            <nav className="flex items-center justify-between h-full">
                <ul className="flex items-center gap-x-7 text-gray-600 dark:text-gray-400">
                    <HomeLink />
                    <Link href="/blogs">
                        <li className="hover:text-black dark:hover:text-gray-200 cursor-pointer">Blogs</li>
                    </Link>
                    <Link href={"/resume"}>
                        <li className="hover:text-black dark:hover:text-gray-200 cursor-pointer">Resume</li>
                    </Link>
                </ul>
                <section className="group relative">
                    <ThemeToggle />
                </section>
            </nav>
        </header>
    )
}