import React, {useEffect, useState} from 'react';
import {Modal} from "../../../index";
import {useSelector} from "react-redux";
import {store} from "../../../../helpers";
import {refreshFollowed} from "../../../../services/reducers/followed.reducer";
import UserItems from "./UserItems";

const Followed = () => {
    const followed = useSelector(state => state.followed);
    let [isOpen, setIsOpen] = useState(false)

    async function fetchFollowed() {
        store.dispatch(refreshFollowed)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        fetchFollowed();
    }, [])

    return (
        <>
            <div onClick={openModal} className="flex bg-white rounded-lg shadow-xl p-4 max-h-96 post mt-4 lg:max-w-xs w-full cursor-pointer">
                <em className="fas fa-people-arrows text-yellow-600 text-xl text-center self-center" />
                <h1 className="font-bold text-center self-center w-full text-xl">{ followed.length } </h1>
                <h2 className="text-center self-center w-full text-lg">Seguidos</h2>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <UserItems title="Seguidos" followed="Dejar de Seguir" users={followed} notFound="Aún no sigues a ningún usuario... ¿Que estás esperando?" />
            </Modal>
        </>
    )
}

export default Followed
