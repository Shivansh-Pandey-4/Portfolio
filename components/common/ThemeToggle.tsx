"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"




export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                <span className="sr-only">Toggle theme</span>
            </Button>

            <p className="invisible absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-4 py-1 text-xs capitalize text-white opacity-0 transition-opacity duration-200 delay-200 group-hover:visible group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-800">
                Toggle Mode
            </p>
        </>
    );
}

