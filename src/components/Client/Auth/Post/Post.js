import React, {useEffect, useState} from 'react'
import Dropdown from "../../../Dropdown";
import {Menu} from '@headlessui/react'
import {useDispatch} from "react-redux";
import {deletePost, interaction, refreshPosts} from "../../../../services/reducers/post.reducer";
import {Modal} from "../../../index";
import Comments from "./Comments";
import {followUser} from "../../../../services/reducers/not_followed.reducer";
import {useAlert} from "react-alert";
import {getUser, store} from "../../../../helpers";
import echo from "../../../../services/echos";

const Post = ({post}) => {
    let dispatch = useDispatch();
    const alert = useAlert();
    const user = getUser();
    const fetchPost = async () => store.dispatch(refreshPosts)
    let postData = post.photo_url
        ? (<img alt="img" src={process.env.REACT_APP_UMPLE_STATICS + '/' + post.photo_url}
                className="rounded-lg w-full h-full object-contain max-h-96"/>)
        : null

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        echo.private(`App.Models.Comments.${post.user_id}`).listen('.new-comment', (e) => {
            fetchPost();
        });
        echo.private(`App.Models.Interactions.${post.user_id}`).listen('.new-interaction', (e) => {
            fetchPost();
        });
    }, [])

    function deleteAPost() {
        dispatch(deletePost(post.id)).then(() => {
            alert.success('Publicación eliminada exítosamente')
        }).catch(() => {
            alert.error('La publicación no pudo ser eliminada')
        })
    }

    let like = () => {
        dispatch(interaction(post.id))
    }

    return (
        <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-xl post md:my-8 mt-4">
            <div className="py-2 px-2">
                <div className="flex justify-between items-center py-2">
                    <div className="relative mt-1 flex">
                        <div className="mr-2">
                            <img src={process.env.REACT_APP_UMPLE_STATICS + '/' + post.user_profile} alt={post.user_name} className="w-10 h-10 rounded-full object-contain" />
                        </div>
                        <div className="ml-3 flex justify-start flex-col items-start">
                            <p className="text-gray-900 text-sm">{post.user_name}</p>
                            <p className="text-gray-600 text-xs">{post.user_email}</p>
                        </div>
                    </div>
                    <Dropdown bottom={
                        <Menu.Button
                            className="relative p-2 focus:outline-none hover:bg-gray-300 border-none bg-gray-100 rounded-full">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                </path>
                            </svg>
                        </Menu.Button>
                    }>
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({active}) => post.user_id === user.user.id ?
                                    (<button
                                        onClick={deleteAPost}
                                        className={`${active ? 'bg-gray-300' : ''} transform duration-500 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                        <em className="fas fa-trash fa-xs flex items-center mr-3"/>
                                        Eliminar
                                    </button>)
                                    : (<button
                                        onClick={() => dispatch(followUser(post.user_id))}
                                        className={`${active ? 'bg-gray-300' : ''} transform duration-500 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                        <em className="fas fa-minus-circle fa-xs flex items-center mr-3"/>
                                        Dejar de seguir
                                    </button>)
                                }
                            </Menu.Item>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div className="relative w-full h-full">{postData}</div>

            <h1 className="my-4 text-2xl text-center">{post.content}</h1>

            <div className="flex items-start p-2">
                <button type="button" className="focus:outline-none Like flex align-middle items-center">
                    <svg className="w-8 h-8 text-gray-600 hover:text-red-700 hover:fill-current mr-3" onClick={like}
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </button>
                <button type="button" className="focus:outline-none" onClick={openModal}>
                    <svg className="w-8 h-8 text-gray-600 hover:text-gray-900 mr-3" fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                </button>
            </div>
            <div className="p-2 flex flex-col space-y-3">
                <p className="font-bold text-sm text-gray-700">{post.likes} me gusta</p>
                <div className="w-full">
                    <p className="font-normal text-xs text-gray-500">{post.date}</p>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <Comments closeModal={closeModal}
                          post={post.id}
                          comments={post.comments ? JSON.parse('[' + post.comments + ']') : []}/>
            </Modal>
        </div>
    )
}

export default Post
