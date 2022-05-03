import React from 'react';

function Popup({show, item, onClose}) {
    if(!show){
        return null
    }
    return (
        <div className="popup">
            <button className="closeBtn" onClick={onClose}>X</button>
            <div className="venuePopupInfo"><img src={item.image} alt=""/></div>
        </div>
    );
}

export default Popup;