import React, { useState,useEffect } from 'react'
import Gallery from '../components/Gallery.js';
import Modal from '../components/Modal.js';

// Define the HomePage component
function HomePage(addData) {
  // State variables for handling modal data and its visibility
  const [ModalData, setModalData] = useState(' ');
  const [isOpen, setIsOpen] = useState(false);

  // State variables for loading characters data
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // useEffect to fetch and update characters data when the page number changes
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  // Function to handle a click event on a character
  const handleClick = (id) => {
    if (id == null) return;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((characterData) => {
        setModalData(characterData);
        setIsOpen(true);
      })
      .catch((error) => {
        console.error('Error fetching character data:', error);
      });
  };

  // useEffect to add and remove a document click event listener
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const id = event.target.getAttribute('alt');
      handleClick(id);
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Render the HomePage component
  return (
    <div>
      {/* Modal component for displaying character details */}
      <Modal Open={isOpen} onClose={() => setIsOpen(false)} Cdata={ModalData}></Modal>

      {/* Gallery component for displaying character images */}
      <Gallery results={results} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default HomePage;