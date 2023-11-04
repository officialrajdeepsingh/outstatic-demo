import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About page",
    description: ' About page',
    openGraph: {
        title: 'About Page',
        description: 'About page'
    }
}

export default function about() {
    return (
        <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">

            <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>

            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci. Dui faucibus in ornare quam viverra orci sagittis eu. Viverra nam libero justo laoreet sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. A lacus vestibulum sed arcu non odio euismod. Feugiat pretium nibh ipsum consequat. Cum sociis natoque penatibus et. Leo in vitae turpis massa sed. Neque aliquam vestibulum morbi blandit cursus. Facilisis sed odio morbi quis. A pellentesque sit amet porttitor eget.</p>

            <button className="block w-36 my-5 rounded-md bg-black px-6 py-3 text-center font-semibold text-white">Learn More</button>

        </section>
    )
}