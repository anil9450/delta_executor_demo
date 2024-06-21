// http://blog-headless.local/wp-json/wp/v2/posts?slug=delta-executor-roblox-upgrade-error-fix-june-2024

async function getDataone(slug) {
    const res = await fetch(`http://blog-headless.local/wp-json/wp/v2/posts?slug=${slug}`, { cache: 'no-store' })
    return res.json()
}

export default async function Page({ params }) {
    const post = await getDataone(params.slug);
    var today = new Date(post['date']).toLocalDateString();
    return (
        <div className="bg-black ml-8 mr-8 text-justify mb-2">
            <div className="text-blue-600 text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post[0]['title']['rendered'] }} />
            <div className="text-white" dangerouslySetInnerHTML={{ __html: post[0]['content']['rendered'] }} />
        </div>
    )
}