import React from 'react';
import ReactEmoji from 'react-emoji';
import './message.css';

const Message = ({ message, name }) => {
    const { user, text } = message;
    let isSentByCurrentUser = false;
    const trimmedUserName = name.trim().toLowerCase();

    isSentByCurrentUser= (user === trimmedUserName) ? true : null;

    return (
        isSentByCurrentUser
            ? (
                <div className=" my-1 d-flex justify-content-end shadow-md">
                    <div className="rounded-pill m-1 bg-info chat-message">
                    <h6 className="text-white text-capitalize mt-auto mb-0 text-right mr-4 font-weight-bold">Me</h6>
                        <p className="mb-1 text-white px-4 text-right">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className=" my-1 d-flex justify-content-start shadow-md">
                    <div className={`${user==='admin'?"bg-secondary":"bg-success"} rounded-pill m-1 chat-message`}>
                        <span className={` ${user==='admin'?"text-warning":"text-white"} text-capitalize mt-auto mb-0 ml-4 font-weight-bold`}>{user}</span>
                        <p className={`${user==='admin'?"text-white":"text-dark"} mb-1 px-4`}>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
    )
}

export default Message;
