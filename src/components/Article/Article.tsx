

export function Article({ content }: { content: string }) {
    return (
        <article className="px-3 md:px-0 mx-auto w-full max-w-4xl prose lg:prose-xl prose-blue dark:prose-invert" dangerouslySetInnerHTML={{
            __html: content
        }}>
        </article>
    )
}