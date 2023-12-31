import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact page",
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna',
    openGraph: {
        title: 'Contact Page',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna'
    }
}

export default function contact() {
    return (
        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold md:text-5xl">Contact us</h2>
                <p className="mx-auto mb-12 mt-4 max-w-xl text-[#647084]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
            </div>

            <form className="mb-4 text-left sm:px-4 md:px-20" name="wf-form-name" method="get">

                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name-2" className="mb-1 font-medium">First Name</label>
                        <input type="text" className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]" placeholder="First Name" required={true} />
                    </div>
                    <div>
                        <label htmlFor="name-3" className="mb-1 font-medium">Last Name</label>
                        <input type="text" className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]" placeholder="Last Name" required={true} />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="field" className="mb-1 font-medium">Email</label>
                    <input type="text" className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]" placeholder="Email" required={true} />
                </div>

                <div className="mb-8">
                    <label htmlFor="field" className="mb-1 font-medium">Message</label>
                    <input type="text" className="h-auto min-h-[186px] w-full overflow-auto bg-[#f2f2f7] px-3 py-2 text-sm text-[#333333]" />
                </div>

                <Link href="#" className="mr-5 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8">
                    <p className="mr-6 font-bold">Submit</p>
                    <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none">
                        <title>Arrow Right</title>
                        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                    </svg>
                </Link>

            </form>

        </section>
    )
}