import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
            <h1 className="text-6xl font-bold">404</h1>

            <h2 className="mt-4 text-2xl font-semibold">
                Page not found
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-5"
            >
                <Button size={"lg"} className="cursor-pointer">
                    Back to Home
                </Button>
            </Link>
        </main>
    );
}