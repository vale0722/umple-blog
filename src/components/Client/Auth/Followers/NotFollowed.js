import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import store from "../../../../store";
import {refreshNotFollowed} from "../../../../services/Slices/NotFollowedSlice";
import UserItems from "./UserItems";

const NotFollowed = () => {
    const noFollowed = useSelector(state => state.noFollowed);

    async function fetchNotFollowed() {
        store.dispatch(refreshNotFollowed)
    }

    useEffect(() => {
        fetchNotFollowed();
    }, [])

    return (
        <div className="bg-white rounded-lg shadow-xl p-4 max-h-96 post lg:max-w-xs w-full">
            <UserItems title="Personas que quizás conozcas" followed="Seguir" users={noFollowed}
                       notFound="No se han encontrado nuevos usuarios"/>
        </div>
    )
}

export default NotFollowed
