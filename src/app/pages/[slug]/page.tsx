import { notFound } from "next/navigation"
import { OstDocument } from "outstatic";
import { getDocumentSlugs, load } from 'outstatic/server'
import dayjs from 'dayjs';
import markdownToHtml from '@/lib/markdownToHtml'
import Image from "next/image";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils"

type Pages = {
    tags: { value: string; label: string }[]
} & OstDocument

interface Params {
    params: {
        slug: string
    }
}

export async function generateMetadata(params: Params): Promise<Metadata> {

    const pages = await getData(params)

    if (!pages) {
        return {}
    }

    return {
        title: pages.title,
        description: pages.description,
        openGraph: {
            title: pages.title,
            description: pages.description,
            type: 'article',
            url: absoluteUrl(`/pages/${pages.slug}`),
            images: [
                {
                    url: absoluteUrl(pages?.coverImage || '/images/og-image.png'),
                    width: 1200,
                    height: 630,
                    alt: pages.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pages.title,
            description: pages.description,
            images: absoluteUrl(pages?.coverImage || '/images/og-image.png')
        }
    }
}


export default async function Pages(params: Params) {

    const pages = await getData(params)

    return (
        <main className="container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">

            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <div className="mx-auto w-full max-w-4xl prose-p:my-3 prose lg:prose-2xl prose-blue dark:prose-invert">
                    <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl dark:text-white">{pages.title} </h1>
                    <p className="text-gray-400 my-1">{pages.description}</p>
                </div>
            </div>

            <article className="px-3 mx-auto w-full max-w-4xl prose lg:prose-xl prose-blue dark:prose-invert" dangerouslySetInnerHTML={{
                __html: pages.content
            }}>
            </article>
        </main>
    )
}


async function getData({ params }: Params) {
    const db = await load()

    const pages = await db
        .find<Pages>({ collection: 'pages', slug: params.slug }, [
            'title',
            'publishedAt',
            'description',
            'slug',
            'author',
            'content'
        ])
        .first()

    if (!pages) {
        notFound()
    }

    const content = await markdownToHtml(pages.content)

    return {
        ...pages,
        content
    }
}

export async function generateStaticParams() {
    const pages = getDocumentSlugs('pages')
    return pages.map((slug) => ({ slug }))
}
