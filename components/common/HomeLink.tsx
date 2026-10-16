"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function HomeLink() {
    const pathname = usePathname();

    return (
        <>
            <li>
                {pathname === "/" ? (
                    <a
                        href="#home"
                        className="cursor-pointer hover:text-black dark:hover:text-gray-100"
                    >
                        Home
                    </a>
                ) : (
                    <Link
                        href="/"
                        className="cursor-pointer hover:text-black dark:hover:text-gray-100"
                    >
                        Home
                    </Link>
                )}
            </li>

        </>
    )
}