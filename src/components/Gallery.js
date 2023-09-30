import React from 'react'
import Cards from './Cards.js';
import Pagination from './Pagination.js';




// Define the Cards_Gallery functional component
function Cards_Gallery({ results, setPageNumber, pageNumber }) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {/* Render the Cards component to display character cards */}
              <Cards results={results} />
            </div>
          </div>
        </div>
        
        {/* Render the Pagination component to handle page navigation */}
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={42} />
      </div>
    );
  }
  export default Cards_Gallery;
  