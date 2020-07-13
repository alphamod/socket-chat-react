import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="container-fluid container-bg">
            <div className="container">
                <div className="row vh-100">
                    <div className="col-md-4 loginComponent shadow-lg bg-info p-2 rounded m-auto">
                        <h1 className="text-center text-white">Join Chat</h1>
                        <hr />
                        <input className="form-control" type="text" placeholder="Enter Name" onChange={event => { setName(event.target.value) }} />
                        <input className="form-control mt-2" type="text" placeholder="Enter Room" onChange={event => { setRoom(event.target.value) }} />
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className="btn btn-warning mt-2 text-dark" type="submit">Start Chatting</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;
