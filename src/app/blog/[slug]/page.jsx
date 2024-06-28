

async function getDataone(slug) {
    const res = await fetch(`https://sarkariresultportals.com/wp-json/wp/v2/posts?slug=${slug}`, { cache: 'no-store' })
    return res.json()
}

export default async function Page({ params }) {
    const post = await getDataone(params.slug);
    return (
        <div className="bg-black">
            <div className="ml-8 mr-8 text-justify mb-2 mt-4">
                <div className="text-blue-600 text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post[0]['title']['rendered'] }} />
                <div className="text-white" dangerouslySetInnerHTML={{ __html: post[0]['content']['rendered'] }} />
            </div>
        </div>

    )
}