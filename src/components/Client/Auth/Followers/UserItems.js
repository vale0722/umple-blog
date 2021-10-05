import React from 'react';
import notFoundImg from "../../../../images/svgs/not_found.svg";
import {store} from "../../../../helpers";
import {followUser} from "../../../../services/reducers/not_followed.reducer";

const UserItems = ({users, title, notFound, followed}) => {
    async function followUserDispatch(user) {
        store.dispatch(followUser(user))
    }

    let usersCards = users && users.length ? users.map((user, i) =>
        (<div className="flex justify-between items-center p-2" key={i}>
            <div className="relative mt-1 flex">
                <div className="mr-2">
                    <img src={process.env.REACT_APP_UMPLE_STATICS + '/' + user.photo_uri} alt={user.name}
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
            { followed ? (
                <button
                    onClick={() => followUserDispatch(user.id)}
                    className="relative p-1 px-3 text-sm focus:outline-none hover:bg-up-100 transform duration-300 border-none bg-gray-100 rounded-full">
                    { followed }
                    <em className="fas fa-plus-circle ml-3"/>
                </button>
            ) : '' }
        </div>)
    ) : (
        <div className="flex flex-col justify-center align-middle items-center p-2 gap-2 h-full">
            <img alt="no disponible" className="object-contain h-48" src={notFoundImg}/>
            <h2 className="font-bold text-center w-full text-sm text-gray-500">
                {notFound}
            </h2>
        </div>
    );

    return (
        <>
            <h1 className="font-bold text-center w-full text-xl"> {title} </h1>
            <div className="mt-2 h-full">{usersCards}</div>
        </>
    )
}

export default UserItems
