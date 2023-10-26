import { load } from 'outstatic/server'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Home",
    description: 'A blog starter built with Outstatic.',
}
/*

allPosts.length > 0 && allPosts.map((post) =>{
    return <h1> post</h1>
})}
*/

export const revalidate = 3600

export default async function Index() {
    const { allPosts } = await getData()
    console.log(allPosts)
    return (
        <div className="max-w-6xl mx-auto px-5">
            <section className='mx-auto  w-[724px] mt-12'>
                <h1> My Blog </h1>
            </section>

            {
                allPosts.map((post) => {
                    return (
                        <div className='mx-auto bg-green-200 w-[724px] my-12 p-5' key={post?.slug}>
                            <h1 className='text-2xl mb-1'>{post?.title}</h1>
                            <p className='text-sm'>{post?.description} </p>
                        </div>
                    )
                })
            }
        </div>

    )
}

async function getData() {
    const db = await load()

    const allPosts = await db
        .find({ collection: 'posts' }, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags'
        ])
        .sort({ publishedAt: -1 })
        .toArray()

    return {
        allPosts
    }
}