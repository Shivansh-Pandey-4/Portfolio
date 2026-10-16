import Image from "next/image"
import CopyEmail from "../common/CopyEmail"


export default function Hero() {

    return (
        <div id="home" className="py-5 mt-5 scroll-my-20">
            <div className="flex items-center gap-x-5 md:gap-x-10">

                <Image
                    src={"/vercel.svg"}
                    alt="hero"
                    width={100}
                    height={100}
                    className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
                />

                <div className="flex flex-col gap-x-2 gap-y-2 md:gap-y-0">
                    <h1 className="text-xl md:text-3xl font-bold">
                        <span className="dark:text-white text-black">Shivansh Pandey</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-1.5 whitespace-pre-wrap text-neutral-500 text-sm md:text-lg">
                        <h2>Engineer</h2>
                        <h2>|</h2>
                        <h2>Problem Solver</h2>
                        <h2>|</h2>
                        <CopyEmail />
                    </div>
                </div>
            </div>
        </div>
    )
}


