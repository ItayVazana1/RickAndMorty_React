import React from 'react';

const Pagination = ({setPageNumber,pageNumber,maxPages}) => { 

    let x = 0;
    let next = () => {
        if(pageNumber<maxPages){
            setPageNumber((x) => x+1);
        }else{
            setPageNumber(maxPages);
        }
    };
    let prev = () => {
        if(pageNumber>1){
            setPageNumber((x) => x-1);
        }else{
            setPageNumber((1)); 
        }
    };


    function end_of_pages(pageNumber){
        let style_props_button;
        if(pageNumber == maxPages){
            style_props_button = "btn btn-light my-5 fs-5 fw-bold";
        }else{
            style_props_button = "btn btn-dark text-success my-5 fs-5 fw-bold";
        }
        return style_props_button;
    }

    function start_of_pages(pageNumber){
        let style_props_button;
        if(pageNumber == 1){
            style_props_button = "btn btn-light my-5 fs-5 fw-bold";
        }else{
            style_props_button = "btn btn-dark text-success my-5 fs-5 fw-bold";
        }
        return style_props_button;
    }

    return(
        <div className='container d-flex justify-content-center gap-5'>
            <button className={start_of_pages(pageNumber)} onClick={prev}> &#60;&#60; prev </button>
            <button className={end_of_pages(pageNumber)} onClick={next}> next &#62;&#62; </button>
        </div>
    );
};

export default Pagination;