import React from 'react';
import notFoundImg from "../../../../images/svgs/not_found.svg";

const UserItems = ({users, title, notFound}) => {
    let usersCards = users.length ? users.map((user, i) =>
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
