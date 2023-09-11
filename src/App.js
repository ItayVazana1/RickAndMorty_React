import React, { useState,useEffect } from 'react'
import Mtitle from './components/MainTitle.js';
import Navbar from './components/NavBar.js'
import Gallery from './components/Gallery.js';
import Clock from './components/Clock.js';
import './Style/Style.css';




function App() {


  
  // load all characters data
  let [pageNumber , setPageNumber] = useState(1);
  let [fetchedData , updateFetchedData] =useState([]);
  let { info , results } = fetchedData;
  let api =  `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
      (async function(){
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })()},[api]);

    
        // get single character data
        const handleClick = (id) => {
          if(id == null) return;
          fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
              }
              return response.json();
              
            })
            .then((characterData) => {
              
              alert(

                "\nname  :   " + characterData.name +
                "\nstatus  :   " +characterData.status + 
                "\ngender  :   " + characterData.gender +
                "\nspecies  :   " + characterData.species +
                "\nlocation  :   " + characterData.location.name 


                
                );}).catch((error) => {
              console.error('Error fetching character data:', error);
            });

        };

        // catching a click 
        useEffect(() => {
          const handleDocumentClick = (event) => {
            const id =  event.target.getAttribute('alt');
              handleClick(id);
            }
      
          document.addEventListener('click', handleDocumentClick);
          return () => {
            document.removeEventListener('click', handleDocumentClick);
          };
        }, []);
      


  return (
    <div className="app-container">
      <header>
        
        <Clock/>{}
        <Mtitle/>{}
        <Navbar/>{}
        <Gallery results={results} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      </header>
     
    </div>
  );
}

export default App;