import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {store} from "../../../../helpers";
import {refreshNotFollowed} from "../../../../services/reducers/not_followed.reducer";
import UserItems from "./UserItems";

const NotFollowed = () => {
    const noFollowed = useSelector(state => state.not_followed);

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
