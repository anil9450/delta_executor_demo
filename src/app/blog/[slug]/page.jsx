

async function getDataone(slug) {
    const res = await fetch(`https://sarkariresultportals.com/wp-json/wp/v2/posts?slug=${slug}`, { cache: 'no-store' })
    return res.json()
}

export default async function Page({ params }) {
    const post = await getDataone(params.slug);
    return (
        <div className="bg-black">
            <div className="ml-8 mr-8 text-justify mb-2">
                <div className="text-blue-600 text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post[0]['title']['rendered'] }} />
                <div className="text-white mt-4" dangerouslySetInnerHTML={{ __html: post[0]['content']['rendered'] }} />
            </div>

            <div className="row">
                <div className="w-full mx-auto">
                    <div className="sm:grid grid-cols-4 gap-5 mx-auto px-16">
                        <div className="col-start-1 col-end-3 my-2">
                            <a href="#">
                                <div
                                    className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                                    <h3 className="text-2xl mb-3 font-semibold inline-flex">
                                        <svg className="mr-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                                fill="currentColor" /></svg>
                                        Prev
                                    </h3>
                                    <p className="text-lg">
                                        <div className="text-blue-600 text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post[0]['title']['rendered'] }} />
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="col-end-5 col-span-2 my-2">
                            <a href="#">
                                <div
                                    className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                                    <h3 className="text-2xl mb-3 font-semibold inline-flex ">
                                        Next
                                        <svg className="ml-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                                fill="currentColor" /></svg>
                                    </h3>
                                    <p className="text-lg">
                                        <div className="text-blue-600 text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post[0]['title']['rendered'] }} />
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}