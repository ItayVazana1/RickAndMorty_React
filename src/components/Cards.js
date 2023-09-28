import React from 'react';
import '../Style/DarkMode.css';


function Badge_color_status(status){
    let status_display;
    switch (status){
        case "Alive":
            status_display = "badge bg-success fw-normal fs-5";
            break;
        case "Dead":
            status_display = "badge bg-danger fw-normal fs-5";
            break;
        case "unknown":
            status_display = "badge bg-secondary fw-normal fs-5";
            break;
    }
    return status_display;
}

function Length_of_String(name){
    let name_suitble_size;
    if (name.length < 20){
        name_suitble_size = "fs-5 fw-bold m-1";
    }
    else{
        name_suitble_size = "fs-6 fw-bold m-1";
    }
    return name_suitble_size;
}

function gender_color(gender){
    let gender_display;
    switch (gender){
        case "Male":
            gender_display = {background: 'SteelBlue' , color: 'white'};
            break;
        case "Female":
            gender_display = {background: 'HotPink' , color: ' white'};
            break;
        default:
            gender_display = {background: 'Gray' , color: 'white'};
            break;
    }
    return gender_display;
}

function species_color(species){
    let species_display;
    switch (species){
        case "Human":
            species_display = {background: 'MistyRose' , color: 'black'};
            break;
        case "Animal":
            species_display = {background: 'OliveDrab' , color: 'white'};
            break;
        case "Alien":
            species_display = {background: 'SpringGreen' , color: 'black'};
            break;
        case "Humanoid":
            species_display = {background: 'RebeccaPurple' , color: 'white'};
            break;
        case "Robot":
            species_display = {background: 'RoyalBlue' , color: 'white'};
            break;
        case "Mythological Creature":
            species_display = {background: 'DarkGoldenRod' , color: 'white'};
            break;
        default:
            species_display = {background: 'DimGrey' , color: 'white'};
            break;
    }
    return species_display;
}



function Cards ({results}){
    let display;
    if(results){
        display = results.map(x=>{
            let {id , name , status ,  species , gender , origin , location , image ,episode , url , created } = x;
            return (
            <div key={id} className='col-3 text-light position-realtive' id='Character_Card'>
                <div className=''>
                    <img src={image} alt={id} className="img-fluid" id="CardImage"/>
                    <div id="Cardblur"></div>
                    <div className='content'>
                        <div className={Length_of_String(name)}>{name}<span></span> <span className={Badge_color_status(status)} id='status_badge'>{status}</span></div>
                        <div className="mb-4">
                            <div><span className="badge fw-normal fs-6 m-3" style={gender_color(gender)}>{gender}</span><span className={"badge fw-normal fs-6"} style={species_color(species)}>{species}</span></div>
                            <div className="fs-6 fw-light" >last seen in-<br></br><span className='fs-6 text-warning fw-normal'>{location.name}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            );
        });
    }else{
        display = "404 - Not Found :("
    }
    return <> {display} </>;
}


export default Cards