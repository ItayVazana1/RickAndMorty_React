import React from 'react';


// Function to determine badge color based on character status
function Badge_color_status(status) {
    switch (status) {
        case "Alive":
            return {
                backgroundColor: 'LightGreen',
                color: 'black'
            };
        case "Dead":
            return {
                backgroundColor: 'IndianRed',
                color: 'white'
            };
        case "unknown":
            return {
                backgroundColor: 'DarkSlateGray',
                color: 'white'
            };
    }
}

// Function to determine the suitable size of the character's name
function Length_of_String(name) {
    let name_suitble_size;
    if (name.length < 20) {
        name_suitble_size = "fs-5 fw-bold m-1";
    } else {
        name_suitble_size = "fs-6 fw-bold m-1";
    }
    return name_suitble_size;
}

// Function to determine badge color based on character gender
function gender_color(gender) {
    switch (gender) {
        case "Male":
            return {
                background: 'RoyalBlue',
                color: 'white'
            };
        case "Female":
            return {
                background: 'Pink',
                color: 'black'
            };
        default:
            return {
                background: 'SandyBrown',
                color: 'black'
            };
    }
}

// Function to determine badge color based on character species
function species_color(species) {
    switch (species) {
        case "Human":
            return {
                background: 'PeachPuff',
                color: 'black'
            };
        case "Animal":
            return {
                background: 'YellowGreen',
                color: 'black'
            };
        case "Alien":
            return {
                background: 'MediumSlateBlue',
                color: 'white'
            };
        case "Humanoid":
            return {
                background: 'SeaGreen',
                color: 'white'
            };
        case "Robot":
            return {
                background: 'SlateGray',
                color: 'white'
            };
        case "Mythological Creature":
            return {
                background: 'PaleVioletRed',
                color: 'white'
            };
        default:
            return {
                background: 'Orange',
                color: 'black'
            };
    }
}

// Component to display character cards
function Cards({ results }) {
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, status, species, gender, location, image } = x;
            return (
                <div key={id} className='col-3 text-light position-realtive' id='Character_Card'>
                    <div className=''>
                        <img src={image} alt={id} className="img-fluid" id="CardImage" />
                        <div id="Cardblur"></div>
                        <div className='content'>
                            <div className={Length_of_String(name)}>{name}<span></span> <span className='badge fw-normal fs-5' style={Badge_color_status(status)} id='status_badge'>{status}</span></div>
                            <div className="mb-4">
                                <div><span className="badge fw-normal fs-6 m-3" style={gender_color(gender)}>{gender}</span><span className={"badge fw-normal fs-6"} style={species_color(species)}>{species}</span></div>
                                <div className="fs-6 fw-light">last seen in-<br></br><span className='fs-6 text-warning fw-normal'>{location.name}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        display = "404 - Not Found :("
    }
    return <>{display}</>;
}


export default Cards