import React from 'react';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    paddingLeft: '200px',
    paddingRight: '200px',
    paddingTop: '100px',
    paddingBottom: '100px',
    zIndex: 1000,
    color:'#482a4a',
    border: '4px solid purple',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px'
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}

const CLOSE_BTN_STYLE = {
    position: 'fixed',
    bottom:15,
    left:20
}


function Modal({Open,children,onClose,Cdata}) {
    if(Open == false) return null;
    return (
        <>
        <div style={OVERLAY_STYLE}/>
        <div style={MODAL_STYLES}>
        <img src={Cdata.image}/>
            {Cdata.id}<br></br>
            {Cdata.name}<br></br>
            {Cdata.status}<br></br>
            {Cdata.gender}<br></br>
            {Cdata.species}<br></br>
            {Cdata.location.name}<br></br>
            {Cdata.origin.name}<br></br>
            <a href={Cdata.url}><b>Character unique API url</b></a>
            <button className='btn btn-danger' style={CLOSE_BTN_STYLE} onClick={onClose}><b>Close</b></button>
        </div>
        </>
    );
}

export default Modal;