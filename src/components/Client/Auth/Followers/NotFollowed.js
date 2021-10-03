import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import store from "../../../../store";
import notFound from "../../../../images/svgs/not_found.svg";
import {followUser, refreshNotFollowed} from "../../../../services/Slices/NotFollowedSlice";

const NotFollowed = () => {
    const noFollowed = useSelector(state => state.noFollowed);

    async function fetchNotFollowed() {
        store.dispatch(refreshNotFollowed)
    }

    async function followUserDispatch(user) {
        store.dispatch(followUser(user))
    }

    useEffect(() => {
        fetchNotFollowed();
    }, [])

    let noFollowedCard = noFollowed.length ? noFollowed.map((user, i) =>
        (<div className="flex justify-between items-center p-2" key={i}>
            <div className="relative mt-1 flex">
                <div className="mr-2">
                    <img src={user.photo_uri} alt={user.name}
                         className="w-10 h-10 rounded-full object-contain"/>
                </div>
                <div className="ml-3 flex justify-start flex-col items-start break-all max-w-xs">
                    <p className="text-gray-900 text-sm">
                        {user.name}
                    </p>
                    <p className="text-gray-600 text-xs">
                        {user.email}
                    </p>
                </div>
            </div>
            <button
                onClick={() => followUserDispatch(user.id)}
                className="relative p-1 px-3 text-sm focus:outline-none hover:bg-up-100 transform duration-300 border-none bg-gray-100 rounded-full">
                Seguir
                <em className="fas fa-plus-circle ml-3"/>
            </button>
        </div>)
    ) : (
        <div className="flex flex-col justify-center align-middle items-center p-2 gap-2 h-full">
            <img alt="no disponible" className="object-contain h-48" src={notFound}/>
            <h2 className="font-bold text-center w-full text-sm text-gray-500">
                No se han encontrado nuevos usuarios
            </h2>
        </div>
    );

    return (
        <>
            <div className="bg-white rounded-lg shadow-xl p-4 max-h-96 post lg:max-w-xs w-full">
                <h1 className="font-bold text-center w-full text-xl"> Personas que quizás conozcas </h1>

                <div className="mt-2 h-full">
                    {noFollowedCard}
                </div>
            </div>
        </>
    )
}

export default NotFollowed
