import React from 'react'

export default function Alert({ style, options, message, close }) {
    console.log(message);
    return (
        <div style={style}>
            {options.type === 'info' && (
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden" onClick={close}>
                    <div className="w-2 bg-cyan-800"></div>
                    <div className="flex items-center px-2 py-3">
                        <img className="w-12 h-12 object-cover rounded-full"
                             src={process.env.REACT_APP_UMPLE_STATICS + '/' + message.user_profile } alt="message" />
                        <div className="mx-3">
                            <h2 className="text-xl font-semibold text-gray-800">Notificación!</h2>
                            <p className="text-gray-600"><strong>{ message.user_name }</strong> {message.type}</p>
                        </div>
                    </div>
                </div>
            )}
            {options.type === 'success' && (
                <div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
                    <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>{message}</div>
                    <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
                </div>
            )}
            {options.type === 'error' && (
                <div className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
                    <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>{ message }</div>
                    <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
                </div>
            )}
            {options.type === 'warning' && (
                <div className="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                    <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>{ message }</div>
                    <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
                </div>
            )}
        </div>
    )
}