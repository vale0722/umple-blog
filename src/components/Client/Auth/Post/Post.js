import React from 'react'

const Post = ({post}) => {
    let postData = post.photo_url
        ? (<img src={post.photo_url} className="rounded-lg w-full h-full object-contain max-h-96"></img>)
        : null
    return (
        <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-xl md:my-8 mt-4">
            <div className="py-2 px-2">
                <div className="flex justify-between items-center py-2">
                    <div className="relative mt-1 flex">
                        <div className="mr-2">
                            <img src={post.user_profile} alt={post.user_name}
                                 className="w-10 h-10 rounded-full object-contain"></img>
                        </div>
                        <div className="ml-3 flex justify-start flex-col items-start">
                            <p className="text-gray-900 text-sm">
                                {post.user_name}
                            </p>
                            <p className="text-gray-600 text-xs">
                                {post.user_email}
                            </p>
                        </div>
                    </div>
                    <button type="button"
                            className="relative p-2 focus:outline-none hover:bg-gray-300 border-none bg-gray-100 rounded-full">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="relative w-full h-full">
                {postData}
            </div>

            <h1 className="my-4 text-2xl text-center">{post.content}</h1>

            <div className="flex justify-between items-start p-2 py-">
                <div className="flex space-x-2 items-center">
                    <button type="button" className="focus:outline-none Like">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                    <button type="button" className="focus:outline-none Comment">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="p-2 flex flex-col space-y-3">
                <div className="w-full">
                    <p className="font-bold text-sm text-gray-700">{post.likes} me gusta</p>
                </div>
                <div className="w-full">
                    <p className="font-normal text-xs text-gray-500">{post.date}</p>
                </div>
                <form>
                    <div className="flex justify-between items-center w-full">
                        <input type="text" name="comment" id="comment" placeholder="Escribe tu opinión..."
                               className="w-full text-sm py-4 px-3 rounded-xl focus:shadow-md hover:shadow-md focus:outline-none"/>
                        <div className="w-20 ml-2">
                            <button
                                className="border-1 rounded-2xl text-sm px-4 bg-gray-100 hover:bg-gray-300 transition delay-150 duration-200  py-4 text-gray-600 focus:outline-none">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Post
