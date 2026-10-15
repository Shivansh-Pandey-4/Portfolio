"use client"

import playTickSound from "@/lib/playTickSound";
import { Copy, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const EMAIL = "shivanshofficial8750@gmail.com";


export default function CopyEmail() {

    const [isCopied, setIsCopied] = useState(false);
    const countRef = useRef<NodeJS.Timeout>(null);


    async function handleCopyText() {
        try {
            await window.navigator.clipboard.writeText(EMAIL);

            playTickSound();
            setIsCopied(true);

            if (countRef.current) {
                clearTimeout(countRef.current);
            }

            countRef.current = setTimeout(() => {
                setIsCopied(false);
            }, 1000);

        } catch (error) {
            console.log("failed to copy email : ", error)
        }
    }

    useEffect(() => {
        return () => {
            if (countRef.current) {
                clearTimeout(countRef.current);
            }
        }
    }, []);


    return (
        <div
            className="flex items-center text-neutral-500 text-sm md:text-lg space-x-2 md:space-x-2.5 dark:hover:text-white hover:text-black cursor-pointer"
            onClick={handleCopyText}
        >
            <h2 className="hidden md:block">shivanshofficial8750@gmail.com</h2>
            <h2 className="block md:hidden">Email</h2>
            {
                isCopied ? <Check className="md:size-4 size-3" /> : <Copy className="md:size-4 size-3" />
            }

        </div>

    )
}