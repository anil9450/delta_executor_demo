import Link from "next/link";
import { Date } from "date-fns";

async function getData() {
    const res = await fetch('https://sarkariresultportals.com/wp-json/wp/v2/posts', { cache: 'no-store' })
    return res.json()
}

export default async function Blog() {
    const data = await getData()

    return (
        <main className="bg-black">
            <div className="max-w-4xl mx-auto ml-8 mr-8">
                <title>Heading Blog</title>
                <h1 className="text-4xl mb-2 font-bold text-blue-600">
                    The Blog
                </h1>
                <div className="">
                    {data.map((post, index) => {
                        return (
                            <Link key={index} href={`/blog/${post['slug']}`}>
                                <div className="cursor-pointer mb-2 text-white">
                                    <h3 className="font-medium mb-3 text-xl text-blue-600">
                                        {post['title']['rendered']}
                                    </h3>
                                    <span className="text-green-500">
                                        <Date dateString={post.date} />
                                    </span>
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
