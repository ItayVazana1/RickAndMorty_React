import React from 'react'
import Cards from './Cards.js';
import Pagination from './Pagination.js';




function Cards_Gallery({results , setPageNumber , pageNumber}) {


    return (
    <div className="container">
        <div className="row">
                <div className="col-12">
                    <div className="row">
                        <Cards results={results}/>
                    </div>                  
                </div> 
            </div>
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={42}/>
        </div>
    );
  }
  
  export default Cards_Gallery;
  