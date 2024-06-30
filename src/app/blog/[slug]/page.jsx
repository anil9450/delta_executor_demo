import Link from "next/link";

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

            {/* <div className="row">
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
            </div> */}

            <Link className="bg-blue-600 p-1 font-bold text-white flex rounded mb-2" href="/blog/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                    <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
                </svg>
                <span className="pl-2">Blog / Home</span>
            </Link>
        </div>
    )
}