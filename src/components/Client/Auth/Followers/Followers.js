import React, {useEffect, useState} from 'react';
import {Modal} from "../../../index";
import {useSelector} from "react-redux";
import {store} from "../../../../helpers";
import {refreshFollowers} from "../../../../services/reducers/followers.reducer";
import UserItems from "./UserItems";

const Followers = () => {
    const followers = useSelector(state => state.followers);
    let [isOpen, setIsOpen] = useState(false)

    async function fetchFollowers() {
        store.dispatch(refreshFollowers)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        fetchFollowers();
    }, [])

    return (
        <>
            <div onClick={openModal} className="flex bg-white rounded-lg shadow-xl p-4 max-h-96 post mt-4 lg:max-w-xs w-full cursor-pointer">
                <em className="fas fa-users text-green-700 text-xl text-center self-center" />
                <h1 className="font-bold text-center self-center w-full text-xl">{ followers.length } </h1>
                <h2 className="text-center self-center w-full text-lg">Seguidores</h2>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <UserItems title="Mis Seguidores" notFound="Rayos! Ten paciencia pronto te seguirán" users={followers} />
            </Modal>
        </>
    )
}

export default Followers
