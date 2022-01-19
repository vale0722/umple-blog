import React, {useEffect} from 'react'
import {CreatePost, Navbar} from "../../../components";
import {authRoutes} from "../../../components/Client/Navbar/NavItems";
import Post from "../../../components/Client/Auth/Post/Post";
import GlobalStyle from "../../../globalStyles";
import {useSelector} from 'react-redux'
import {refreshPosts} from '../../../services/reducers/post.reducer'
import echo from '../../../services/echos'
import {getUser, store} from "../../../helpers";
import Followed from "../../../components/Client/Auth/Followers/Followed";
import Followers from "../../../components/Client/Auth/Followers/Followers";
import NotFollowed from "../../../components/Client/Auth/Followers/NotFollowed";
import {useAlert} from "react-alert";
import {refreshFollowed} from "../../../services/reducers/followed.reducer";
import {refreshNotFollowed} from "../../../services/reducers/not_followed.reducer";
import {refreshFollowers} from "../../../services/reducers/followers.reducer";

const AuthHome = (props) => {
    const posts = useSelector(state => state.posts);
    const fetchPost = async () => store.dispatch(refreshPosts)
    async function fetchFollowed() {
        store.dispatch(refreshFollowed)
    }
    async function fetchNotFollowed() {
        store.dispatch(refreshNotFollowed)
    }

    async function fetchFollowers() {
        store.dispatch(refreshFollowers)
    }
    const user = getUser()
    const alert = useAlert();

    function topFunction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.getElementById('up')) {
            document.getElementById('up').style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 'flex' : 'none';
        }
    }

    function sendNotification(e) {
        if(e.user_id !== user.user.id) {
            alert.info(e);
        }
    }

    useEffect(() => {
        fetchPost();
        echo.private(`App.Models.Comments.${user.user.id}`).listen('.new-comment', (e) => {
            sendNotification(e);
            fetchPost();
        });
        echo.private(`App.Models.Interactions.${user.user.id}`).listen('.new-interaction', (e) => {
            sendNotification(e);
            fetchPost();
        });
        echo.private(`App.Models.Followed.${user.user.id}`).listen('.new-followed', (e) => {
            sendNotification(e);
            fetchFollowed();
            fetchFollowers();
            fetchNotFollowed();

        });
    }, [])

    let postCards = posts ? posts.map((post, i) => {
        return post.user_name ? (<Post post={post} key={i}/>) : ''
    }) : [];

    return (
        <div className="w-full">
            <Navbar active={props.match.path} items={authRoutes}/>
            <button id="up" onClick={topFunction}
                    className="hidden sticky animate-bounce m-4 h-8 w-8 p-2 focus:outline-none hover:bg-gray-300 border-none bg-gray-200 rounded-full cursor-pointer items-center align-middle flex justify-center">
                <em className="fa fa-angle-up"/>
            </button>
            <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full flex-grow flex-col">
                <GlobalStyle
                    background="'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'"/>
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 mx-4 my-4">
                    <div className="max-w-xl">
                        <CreatePost/>
                        <div
                            className={'relative bg-white rounded-lg shadow-xl p-4 max-w-xl post md:my-8 mt-4' + (!posts.length ? ' block' : ' hidden')}>
                            <div className="grid grid-cols-2 grid-flow-col w-full animate-pulse">
                                <div className="rounded-full bg-gray-300 h-20 w-20"/>
                                <div className="flex-1 w-full space-y-4 py-1">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"/>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-300 rounded"/>
                                        <div className="h-4 bg-gray-300 rounded w-5/6"/>
                                    </div>
                                </div>
                            </div>
                            <div className="animate-pulse bg-gray-300 h-96 min-h-full w-full rounded-2xl mt-3"/>
                        </div>
                        {postCards}
                    </div>
                    <div className="relative lg:top-4 max-h-screen post lg:sticky lg:max-w-xs w-full mt-28 md:mt-4">
                        <div className="bg-white rounded-lg shadow-xl p-4 max-h-96 mb-4 post lg:max-w-xs w-full flex gap-2 flex-col justify-center items-center text-center align-middle">
                            <img src={process.env.REACT_APP_UMPLE_STATICS + '/' + user.user.photo_uri}
                                 alt={user.user.name} className="w-32 h-32 rounded-full object-contain"/>
                            <h1 className="font-bold text-center w-full text-xl">
                                {user.user.name}
                            </h1>
                            <h2 className="text-center w-full text-sm">
                                {user.user.email}
                            </h2>
                        </div>
                        <NotFollowed/>
                        <Followers/>
                        <Followed/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthHome
