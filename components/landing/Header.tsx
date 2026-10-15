import { ThemeToggle } from "../common/ThemeToggle";


export default function Header() {


    return (
        <header>
            <nav className="flex items-center justify-between">
                <ul className="flex items-center gap-x-3 md:gap-x-7 text-gray-600 dark:text-gray-400">
                    <li className="hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer">Blog</li>
                    <li className="hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer">Resume</li>
                </ul>
                <section className="group relative">
                    <ThemeToggle />
                </section>
            </nav>
        </header>
    )
}