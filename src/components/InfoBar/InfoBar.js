import React from 'react';

import './infobar.css';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12 m-0 p-0">
                    <div className="d-flex bg-info rounded-top">
                        <img className="mr-auto my-auto pl-2 onlineIcon" alt="online" src={onlineIcon} />
                        <h4 className="text-center text-white m-auto">{room}</h4>
                        <a className="ml-auto my-auto close btn" href="/"><span aria-hidden="true">&times;</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBar;
