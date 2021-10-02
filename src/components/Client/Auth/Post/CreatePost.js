import React, {useState} from 'react';
import {Modal} from "../../../index";
import CreatePostForm from "./CreatePostForm";

const CreatePost = ({fetchPost}) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-xl post mt-4">
                <div className="w-full h-16 flex items-center flex justify-between px-5">
                    <h1 className="font-bold text-center w-full text-2xl"> Inspirate... ¡este espacio es para ti!</h1>
                </div>
                <ul className="flex justify-between p-4 w-full">
                    <li>
                        <button aria-label="Texto"
                                onClick={openModal}
                                className="transform hover:-translate-y-1 hover:scale-110 duration-500">
                            <svg viewBox="0 0 20.8 13" width="40" height="35"
                                 fill="rgb(255, 73, 47)">
                                <path
                                    d="M.1 13h2.8l.9-3h4.7l.8 3h2.9L7.7 0h-3L.1 13zm6-10.1l2 5.1H4.2l1.9-5.1zM20 10V6c0-1.1-.2-1.9-1-2.3-.7-.5-1.7-.7-2.7-.7-1.6 0-2.7.4-3.4 1.2-.4.5-.6 1.2-.7 2h2.4c.1-.4.2-.6.4-.8.2-.3.6-.4 1.2-.4.5 0 .9.1 1.2.2.3.1.4.4.4.8 0 .3-.2.5-.5.7-.2.1-.5.2-1 .2l-.9.1c-1 .1-1.7.3-2.2.6-.9.5-1.4 1.3-1.4 2.5 0 .9.3 1.6.8 2 .6.5 1.3.9 2.2.9.7 0 1.2-.3 1.7-.6.4-.2.8-.6 1.2-.9 0 .2 0 .4.1.6 0 .2.1.8.2 1h2.7v-.8c-.1-.1-.3-.2-.4-.3.1-.3-.3-1.7-.3-2zm-2.2-1.1c0 .8-.3 1.4-.7 1.7-.4.3-1 .5-1.5.5-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.9 0-.5.2-.8.6-1 .2-.1.6-.2 1.1-.3l.6-.1c.3-.1.5-.1.7-.2.2-.1.3-.1.5-.2v.8z"></path>
                            </svg>
                            Texto
                        </button>
                    </li>
                    <li>
                        <button
                            className="transform hover:-translate-y-1 hover:scale-110 duration-500"
                            onClick={openModal}
                            aria-label="Foto">
                            <svg viewBox="0 0 17 15" width="40" height="35"
                                 fill="rgb(0, 184, 255)">
                                <path
                                    d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z"></path>
                            </svg>
                            Foto
                        </button>
                    </li>
                    <li>
                        <button aria-label="Cita"
                                onClick={openModal}
                                className="transform hover:-translate-y-1 hover:scale-110 duration-500">
                            <svg viewBox="0 0 17 13" width="40" height="35" fill="rgb(0, 207, 53)">
                                <path
                                    d="M3.5 5.5C4 3.7 5.8 2.4 7.2 1.3L5.9 0C3 1.8 0 5 0 8.5 0 11 1.3 13 4 13c2 0 3.7-1.5 3.7-3.6C7.7 7 6 5.5 3.5 5.5zm9.3 0c.4-1.8 2.2-3.1 3.7-4.2L15.2 0c-2.8 1.8-5.9 5-5.9 8.5 0 2.4 1.3 4.5 4 4.5 2 0 3.7-1.5 3.7-3.6 0-2.4-1.7-3.9-4.2-3.9z"></path>
                            </svg>
                            Cita
                        </button>
                    </li>
                </ul>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <CreatePostForm fetchPost={fetchPost} closeModal={closeModal} />
            </Modal>
        </>
    )
}

export default CreatePost
