import React from 'react';

const Pagination = ({ setPageNumber, pageNumber, maxPages }) => {
  
    // Function to handle moving to the next page
    const next = () => {
      if (pageNumber < maxPages) {
        setPageNumber((x) => x + 1);
      } else {
        setPageNumber(maxPages);
      }
    };
  
    // Function to handle moving to the previous page
    const prev = () => {
      if (pageNumber > 1) {
        setPageNumber((x) => x - 1);
      } else {
        setPageNumber(1);
      }
    };
  
    // Function to style the button for the last page
    function end_of_pages(pageNumber) {
      let style_props_button;
      if (pageNumber === maxPages) {
        style_props_button = "btn btn-light my-5 fs-5 fw-bold";
      } else {
        style_props_button = "btn btn-warning text-dark my-5 fs-5 fw-bold";
      }
      return style_props_button;
    }
  
    // Function to style the button for the first page
    function start_of_pages(pageNumber) {
      let style_props_button;
      if (pageNumber === 1) {
        style_props_button = "btn btn-light my-5 fs-5 fw-bold";
      } else {
        style_props_button = "btn btn-warning text-dark my-5 fs-5 fw-bold";
      }
      return style_props_button;
    }
  
    return (
      <div className='container d-flex justify-content-center gap-5'>
        {/* Button to go to the previous page */}
        <button className={start_of_pages(pageNumber)} onClick={prev}>
          &#60;&#60; prev
        </button>
        {/* Button to go to the next page */}
        <button className={end_of_pages(pageNumber)} onClick={next}>
          next &#62;&#62;
        </button>
      </div>
    );
  };

export default Pagination;