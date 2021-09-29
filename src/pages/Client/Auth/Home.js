import React, {useEffect, useState} from 'react'
import {Navbar} from "../../../components";
import {authRoutes} from "../../../components/Client/Navbar/NavItems";
import {postService} from "../../../services";
import Post from "../../../components/Client/Auth/Post/Post";

const AuthHome = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchApi = async () => {
        const response = await postService.all
        setPosts(response.data.posts)
        setLoading(false)
    }

    useEffect(() => {
        fetchApi()
    }, []);


    let postCards = posts.map((post, i) =>
        (<Post post={post} key={i}></Post>)
    );

    return (
        <div className="w-full overflow-scroll">
            <Navbar active={props.match.path} items={authRoutes}/>
            <div className="mx-auto flex flex-col justify-center items-center relative bg-gray-100 w-full h-full min-h-screen p-8 py-20">
                <div className={'w-full md:w-3/6 md:px-8' + (loading ? ' block' : ' hidden')}>
                    <div className="relative bg-white rounded-lg shadow-xl p-4 mt-4">
                        <div className="grid grid-cols-2 grid-flow-col w-full animate-pulse">
                            <div className="rounded-full bg-gray-300 h-20 w-20"/>
                            <div className="flex-1 w-full space-y-4 py-1">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="animate-pulse bg-gray-300 h-96 min-h-full w-full rounded-2xl mt-3"/>
                    </div>
                </div>
                {postCards}
            </div>
        </div>
    )
}

export default AuthHome
