import { useState , useEffect} from 'react';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundImage: `url("https://i.pinimg.com/564x/62/97/71/629771374d3a362cbff3eb3eb21d7995.jpg")`,
    backgroundSize: 'cover' ,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width:'550px',
    height: '550px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingBottom: '50px',
    paddingTop:'75px',
    zIndex: 1000,
    color:'#482a4a',
    border: '4px solid white',
    borderBottomLeftRadius: '400px',
    borderBottomRightRadius: '400px',
    borderTopLeftRadius: '400px',
    borderTopRightRadius: '400px',
    fontFamily: 'Acme'
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
    position: 'relative',
    bottom:-25,
    width:'150px',
    fontSize: 25
}

const PIC_Style = {

    border: '2px',
    width: '220px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
}

const LABLE_Style = {
        backgroundColor: 'GhostWhite',
        color: 'indigo',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        fontFamily: 'Oswald',
        fontSize: 16
        
    };
    

function Modal({Open,onClose,Cdata}) {
    if(Open == false) return null;

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };


    const LINK_STYLE = {
        position:'relative',
        backgroundColor: isHover ? 'Tomato' : 'indigo',
        color: isHover ? 'Snow' : 'SpringGreen',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '6px',
        paddingBottom: '6px',
        bottom: -30,
        fontSize: 20
        
    };    

    const [FEdata, setFEdata] = useState([]);
    useEffect(() => {
       fetch(Cdata.episode[0])
          .then((response) => response.json())
          .then((data) => {
             setFEdata(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return (
        
        <>
        <div style={OVERLAY_STYLE}/>
        <div style={MODAL_STYLES} className='container'>
        <div className='row p-4' ></div>
            <div className='row'>
                <div className='col' align='center'>
                <span style={LABLE_Style} ><b>ID:</b><text style={{paddingLeft: '10px'}}>#{Cdata.id}</text></span><br></br><br></br>
                <span style={LABLE_Style} ><b>Current Status:</b><text style={{paddingLeft: '10px'}}>{Cdata.status}</text></span><br></br><br></br>
                <span style={LABLE_Style} ><b>Gender:</b><text style={{paddingLeft: '10px'}}>{Cdata.gender}</text></span><br></br><br></br>
                <span style={LABLE_Style} ><b>Species:</b><text style={{paddingLeft: '10px'}}>{Cdata.species}</text></span><br></br><br></br>
                <span style={LABLE_Style} ><b>Origin:</b><text style={{paddingLeft: '10px'}}>{Cdata.origin.name}</text></span><br></br><br></br>
                <span style={LABLE_Style} ><b>First Appearance:</b><text style={{paddingLeft: '10px'}}>{FEdata.episode}</text></span><br></br><br></br>
               
                </div>
                <div className='col'>
                    <img src={Cdata.image} style={PIC_Style}/>
                    <button className='btn btn-danger btn-lg' style={CLOSE_BTN_STYLE} onClick={onClose}><b>Close</b></button>

                </div>
                
            </div>
            <a href={Cdata.url} style={LINK_STYLE} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><b>Character API</b></a>

        </div>
        </>
    );
}

export default Modal;