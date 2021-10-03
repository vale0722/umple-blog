import React, {useEffect, useState} from 'react'
import {CreatePost, Navbar} from "../../../components";
import {authRoutes} from "../../../components/Client/Navbar/NavItems";
import Post from "../../../components/Client/Auth/Post/Post";
import GlobalStyle from "../../../globalStyles";
import { useSelector } from 'react-redux'
import { refreshPosts } from '../../../services/Slices/PostSlice'
import store from "../../../store";

const AuthHome = (props) => {
    const posts = useSelector( state => state.posts);

    const fetchPost = async () => store.dispatch(refreshPosts)

    useEffect(() => {
        fetchPost()
    }, [])

    let postCards = posts ? posts.map((post, i) =>
        (<Post post={post} key={i}></Post>)
    ) : [];

    return (
        <div className="w-full">
            <Navbar active={props.match.path} items={authRoutes}/>
            <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full flex-grow flex-col">
                <GlobalStyle background="'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'"/>
                <CreatePost></CreatePost>
                <div
                    className={'relative bg-white rounded-lg shadow-xl p-4 max-w-xl post md:my-8 mt-4' + (!posts.length ? ' block' : ' hidden')}>
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
                {postCards}
            </div>
        </div>
    )
}

export default AuthHome
