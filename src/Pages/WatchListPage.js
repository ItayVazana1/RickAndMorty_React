import React, { useState,useEffect } from 'react'
import Pagination from '../components/Pagination.js';




function WatchListPage() {
   // load all characters data
   let [pageNumber , setPageNumber] = useState(1);
   let [fetchedData , updateFetchedData] =useState([]);
   let { info , results } = fetchedData;
   let api =  `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;
 
   useEffect(()=>{
       (async function(){
           let data = await fetch(api).then((res) => res.json());
           console.log(data.results);
           updateFetchedData(data);
         })()},[api]);

         let display;
         if(results){
             display = results.map(x=>{
                 let {id , name , status ,  species , gender , origin , location , image ,episode , url , created } = x;
                 return (
                 <div>
                  <p>{x.episode}  -  "{x.name}"    -   {x.air_date}</p>
                 </div>
                 );
             });
         }else{
             display = "404 - Not Found :("
         }
         return <div>
         
            <>{display}</>
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={3}/>
          </div>


    }

export default WatchListPage;