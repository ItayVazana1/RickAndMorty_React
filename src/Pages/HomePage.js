import React, { useState,useEffect } from 'react'
import Gallery from '../components/Gallery.js';
import Modal from '../components/Modal.js';

function HomePage(addData) {

  const [ModalData , setModalData] = useState(' ');
  const [isOpen , setIsOpen] = useState(false);
  // load all characters data
  let [pageNumber , setPageNumber] = useState(1);
  let [fetchedData , updateFetchedData] =useState([]);
  let {results} = fetchedData;
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
              setModalData(characterData);
              setIsOpen(true);
              }).catch((error) => {
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

        return(
          <div>
            <Modal Open={isOpen} onClose={()=>setIsOpen(false)} Cdata={ModalData}></Modal>
            <Gallery results={results} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
            </div>
        )  
}
export default HomePage;