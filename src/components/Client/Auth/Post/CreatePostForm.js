import React, {useRef, useState} from 'react';
import {postService} from "../../../../services";
import FormData from 'form-data';

const CreatePostForm = ({closeModal, fetchPost}) => {
    let [img, setImg] = useState();
    let [originalImg, setOriginalImg] = useState();
    let [content, setContent] = useState('');
    let imgValue = useRef();

    let handleChangeImage = (e) => {
        if (e.target.files.length) {
            setOriginalImg(e.target.files[0]);
            setImg(URL.createObjectURL(e.target.files[0]))
        }
    }

    let deleteImage = () => {
        imgValue.value = null;
        setImg(null);
    }

    const publish = async () => {
        let formData = new FormData();
        formData.append('photo', originalImg);
        formData.set('content', content);
        let response = await postService.store(formData, {headers: {'content-type': 'multipart/form-data'}});
        closeModal();
        console.log(response)
        fetchPost();
    }

    return (
        <>
            <h3 className="text-lg font-medium text-center leading-6 text-gray-900 font-bold">
                Escribe lo que sientes
            </h3>
            <h4 className="text-sm font-medium text-center leading-6 text-gray-400 font-bold">
                ¡Es tu momento de brillar!
            </h4>
            <div className="mt-2 p-4 text-sm flex flex-col">
                {img ?
                    <div className="flex">
                        <span className="relative inline-flex rounded-md shadow-sm my-4">
                         <img src={img} className="relative" alt="img"/>
                          <button className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1" onClick={deleteImage}>
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                            <span
                                className="relative inline-flex rounded-full h-4 w-4 leading-3 bg-red-600 justify-center text-white px-1 align-middle self-center text-sm">
                               <em className="fas fa-times fa-xs flex items-center"/>
                            </span>
                          </button>
                        </span>
                    </div>
                    : null}
                <textarea rows="5" onChange={e => setContent(e.target.value)}
                          className="w-full border-0 focus:border-gray-500 hover:border-gray-500 focus:ring-0 cursor-text p-2"
                          placeholder="Aquí va el texto"/>
                <div className="w-full flex justify-end">
                    <label
                        className={'text-end py-4 cursor-pointer w-2 transform hover:scale-110 focus:scale-125 duration-500' + (img ? ' hidden' : ' block')}>
                        <svg viewBox="0 0 17 15" width="20" height="20" fill="#61728d">
                            <path
                                d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z"/>
                        </svg>
                        <input id="file-upload" ref={ref => imgValue = ref} onChange={handleChangeImage}
                               name="file-upload" type="file" className="sr-only"/>
                    </label>
                </div>
            </div>
            <div className="mt-4">
                <button
                    className="bg-gray-700 p-2 text-white text-center w-full font-light tracking-wider hover:bg-gray-800 rounded"
                    onClick={publish}> Publicar
                </button>
            </div>
        </>
    )
}

export default CreatePostForm
