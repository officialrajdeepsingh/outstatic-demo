'use client'

import Link from "next/link"

export default function NotFound() {
    return (
        <section className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
                <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">{"Something went wrong!"}</p>
                <Link href="/" className="inline-block items-center bg-black px-8 py-4 text-center font-semibold text-white">Back Home</Link>
            </div>
        </section>
    )
}