import React, {useState} from 'react';
import {comment} from "../../../../services/reducers/post.reducer";
import {useDispatch} from "react-redux";

const Comments = ({post, comments}) => {
    const dispatch = useDispatch()
    let [text, setText] = useState()

    const publish = async () => {
        await dispatch(comment(post, {
            comment: text
        }));
    }

    let commentPosts = comments.map((comment, key) => (
        <div className="relative mt-1 mb-3 pt-2 flex" key={key}>
            <div className="mr-2">
                <img src={process.env.REACT_APP_UMPLE_STATICS + '/' + comment.user_profile} alt={comment.user_name}
                     className="w-8 h-8 rounded-full object-cover"/>
            </div>
            <div className="ml-2 w-full">
                <p className="text-gray-600 md:text-sm text-xs w-full">
                    <span className="font-bold text-gray-900 mr-4">{comment.user_name}</span>
                    {comment.text}
                </p>
                <div className="flex space-x-4">
                    <div className="time mt-1 text-gray-400 text-xs">
                        <p>{comment.date}</p>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="overflow-auto max-h-96 bg-scroll" id="comments" >
                {commentPosts}
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center w-full">
                    <input type="text" name="comment" id="comment" placeholder="Escribe tu opinión..."
                           onChange={e => setText(e.target.value)}
                           className="w-full text-sm py-4 px-3 rounded-xl focus:shadow-md hover:shadow-md focus:outline-none"/>
                    <div className="w-20 ml-2">
                        <button
                            onClick={publish}
                            className="border-1 rounded-2xl text-sm px-4 bg-gray-100 hover:bg-gray-300 transition delay-150 duration-200  py-4 text-gray-600 focus:outline-none">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
