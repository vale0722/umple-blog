import React from 'react'
import { CardSection } from './PersonalCard.elements'
import { FaGithub } from 'react-icons/fa'
import { IconContext } from "react-icons";

const PersonalCard = ({ image, name, description, github }) => {
    return (

        <IconContext.Provider value={{ className: "w-full self-center mt-6" }}>
            <CardSection className="card hover:shadow-none relative flex z-20 flex-col mx-auto shadow-lg m-5 bg-white">
                <div className="h-20 w-full opacity-80 absolute z-1 top-0 bg-black"/>
                <div className="w-full flex m-3 text-gray-700">
                    <img className="max-w-28 max-h-28 p-1 bg-white rounded-full" src={image} alt=""/>
                    <div className="title mt-11 ml-3 font-bold flex flex-col">
                        <div className="name break-words text-white">{name}</div>
                        <div className="add font-semibold text-sm italic dark">{description}</div>
                    </div>
                </div>
                <div
                    className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                    <a className="text-center w-full mt-6" target="_blank" rel="noreferrer" href={github}>
                        <FaGithub></FaGithub>
                    </a>
                </div>
            </CardSection>
        </IconContext.Provider>
    )
}

export default PersonalCard