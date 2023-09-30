import React, { useState,useEffect } from 'react'
import Pagination from '../components/Pagination.js';



function Add_to_WatchList(item){


}

function Remove_from_WatchList(){
    
}

function WatchListPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchedData, updateFetchedData] = useState({ results: [] }); // Initialize results as an empty array
    const { results } = fetchedData;
    const api = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(api);
          const data = await response.json();
          updateFetchedData(data);
        } catch (error) {
          // Handle fetch errors here
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [api]);
  
    
    const tb_data = results.map((item) => {
      return (
        <tr key={item.id}> {/* Make sure to add a unique key */}
          <td>
            <button className='btn btn-sm btn-success' style={{ fontFamily: 'Acme', fontSize: '13px', height: '40px'}} onClick={Add_to_WatchList(item)}>
              Add
            </button>
          </td>
          <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.episode}</td>
          <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.name}</td>
          <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.air_date}</td>
        </tr>
      );
    });
  
    return (
      <div>
        <div className="container">
          <div className="row p-4">
            <div className="col-7">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" style={{ color: 'GreenYellow' }}>
                      Episode Code
                    </th>
                    <th scope="col" style={{ color: 'GreenYellow' }}>
                      Episode Name
                    </th>
                    <th scope="col" style={{ color: 'GreenYellow' }}>
                      Air Date
                    </th>
                  </tr>
                </thead>
                <tbody>{tb_data}</tbody>
              </table>
            </div>
            <div className="col-5">
              <table className="table" id='WatchList'>
                <thead className="thead">
                  <tr>
                    <th scope="col"></th>
                    <th scope="row"><h2><b>My Watch List</b></h2></th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col"><button className='btn btn-sm btn-danger' style={{fontFamily: 'Acme', fontSize: '13px', height: '40px'}}>
                           Remove</button></td>
                        <td scope="col">name of somthing</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={3}/>
    </div>

         )
    }

export default WatchListPage;