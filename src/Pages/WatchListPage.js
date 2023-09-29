import React, { useState,useEffect } from 'react'
import Pagination from '../components/Pagination.js';

function WatchListPage() {

   let [pageNumber , setPageNumber] = useState(1);
   let [fetchedData , updateFetchedData] =useState([]);
   let {results} = fetchedData;
   let api =  `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;
 
    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
          })()},[api]);
          
          console.log(results);
         return(
                <div>
                    <div class="container">
                        <div class="row p-4">
                        <div class="col-7">
                            <table class="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" style={{color: 'GreenYellow'}}>Episode Code</th>
                                <th scope="col" style={{color: 'GreenYellow'}}>Episode Name</th>
                                <th scope="col" style={{color: 'GreenYellow'}}>Air Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" value="" id="CheckBox"></input></th>
                            <td>Its</td>
                            <td>On</td>
                            <td>My TaskList..</td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                        <div class="col-5">
                        <h1>Column 2</h1>
                        </div>
                    </div>
                    </div>
                    <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={3}/>
                </div>

         )
    }

export default WatchListPage;