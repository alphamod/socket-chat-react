import React from 'react';

import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form input-group">
            <input
                type="text"
                className="input-group-prepend ip-field form-control rounded-bottom bg-light"
                placeholder="Enter message here..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => event.key === "Enter" ? sendMessage(event) : null}
            />
            <div className="input-group-append">

                <button className="btn btn-info ip-btn input-group-size-default" onClick={event => sendMessage(event)}>Send</button>
            </div>
        </form>
    )
}

export default Input;