import { notFound } from "next/navigation"
import { OstDocument } from "outstatic";
import { getDocumentSlugs, load } from 'outstatic/server'
import dayjs from 'dayjs';
import markdownToHtml from '@/lib/markdownToHtml'
import Image from "next/image";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils"

type Post = {
    tags: { value: string; label: string }[]
} & OstDocument

interface Params {
    params: {
        slug: string
    }
}

export async function generateMetadata(params: Params): Promise<Metadata> {

    const post = await getData(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: absoluteUrl(`/posts/${post.slug}`),
            images: [
                {
                    url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: absoluteUrl(post?.coverImage || '/images/og-image.png')
        }
    }
}


export default async function Post(params: Params) {

    const post = await getData(params)

    const getDate = dayjs(post.publishedAt).format('MMM DD, YYYY')

    return (
        <main className="container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">

            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <div className="mx-auto w-full max-w-4xl prose-p:my-3 prose lg:prose-2xl prose-blue dark:prose-invert">
                    <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl dark:text-white">{post.title} </h1>
                    <p className="text-gray-400 my-1">{post.description}</p>
                    <header className="mb-4 lg:mb-6 not-prose">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">

                                {post.author?.picture && <Image height={32} width={32} className="mr-4 w-8 h-8 rounded-full" src={post.author?.picture} alt={post.author?.name || post.title} />}

                                <div className="flex flex-row items-center">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">{post.author?.name}</p>
                                    <p className="text-xl mx-2 font-bold text-gray-900 dark:text-white">.</p>
                                    <p className="text-xl font-bold text-gray-500 dark:text-gray-400"><time dateTime={getDate} title={getDate}>{getDate}</time></p>
                                    <p className="text-xl mx-2 font-bold text-gray-900 dark:text-white">.</p>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">{post?.tags[0].label}</p>
                                </div>
                            </div>
                        </address>
                    </header>
                </div>
            </div>

            <article className="px-3 mx-auto w-full max-w-4xl prose lg:prose-xl prose-blue dark:prose-invert" dangerouslySetInnerHTML={{
                __html: post.content
            }}>
            </article>

        </main>
    )
}


async function getData({ params }: Params) {
    const db = await load()

    const post = await db
        .find<Post>({ collection: 'posts', slug: params.slug }, [
            'title',
            'publishedAt',
            'description',
            'slug',
            'author',
            'content',
            'coverImage',
            'tags'
        ])
        .first()

    if (!post) {
        notFound()
    }

    const content = await markdownToHtml(post.content)

    return {
        ...post,
        content
    }
}

export async function generateStaticParams() {
    const posts = getDocumentSlugs('posts')
    return posts.map((slug) => ({ slug }))
}
