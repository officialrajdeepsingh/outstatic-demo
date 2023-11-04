import { load } from 'outstatic/server'
import { Metadata } from 'next';
import dayjs from 'dayjs';
import Image from 'next/image';
import { OstDocument } from 'outstatic';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Home",
    description: 'A blog starter built with Outstatic.',
}

export const revalidate = 60

type Post = {
    tags: { value: string; label: string }[]
} & OstDocument

export default async function Index() {
    const { allPosts } = await getData()
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">All Posts</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">

                    {
                        allPosts.map((post) => {
                            const getDate = dayjs(post.publishedAt).format('MMM DD, YYYY')

                            return (
                                <article key={post.slug} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        
                                        {

                                        post?.tags !== undefined &&

                                        <span className="uppercase bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                            
                                            <svg className="mr-1 w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z"/>
                                            </svg>

                                            {post?.tags[0].label}
                                        </span>
                        }

                                        <span className="text-sm">{getDate}</span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={`read/${post.slug}`} >{post.title}</Link></h2>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{post.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            
                                           { post.author?.picture && <Image width={28} height={28}  className="w-7 h-7 rounded-full" src={post.author?.picture} alt={post.author?.name || post.title} />}
                                            
                                            <span className="font-medium dark:text-white">
                                                {post.author?.name}
                                            </span>

                                        </div>
                                        <a href={`read/${post.slug}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                            Read more
                                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

async function getData() {
    
    const db = await load()

    const allPosts = await db
        .find<Post>({ collection: 'posts' }, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags',
            'author'
        ])
        .sort({ publishedAt: -1 })
        .toArray()

    return {
        allPosts
    }
}