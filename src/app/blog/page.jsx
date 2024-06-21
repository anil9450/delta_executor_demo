import Link from "next/link";

async function getData() {
    const res = await fetch('http://blog-headless.local/wp-json/wp/v2/posts?_embed', { cache: 'no-store' })
    return res.json()
}

export default async function Blog() {
    const data = await getData()

    return (
        <main className="bg-black">
            <div className="max-w-6xl mx-auto py-20 px-4 md:px-8">
                <title>Heading Blog</title>
                <h1 className="text-6xl mb-10 font-bold text-blue-600">
                    The Blog
                </h1>
                <div className="grid grid-cols-3 gap-5 w-full">
                    {data.map((post, index) => {
                        return (
                            <Link key={index} href={`/blog/${post['slug']}`}>
                                <div className="cursor-pointer mb-10 text-white">
                                    <h3 className="font-medium mb-3 text-xl text-blue-600">
                                        {post['title']['rendered']}
                                    </h3>
                                    <div className="text-white">
                                        <div dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }} />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main >
    );
}
