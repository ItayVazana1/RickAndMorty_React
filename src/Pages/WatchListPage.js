import React, { useState,useEffect } from 'react'
import Pagination from '../components/Pagination.js';
import { useWatchList } from '../WatchListContext.js';


// Define the WatchListPage component
function WatchListPage() {
  // Access the watchList state and its functions from the context
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();

  // State variables for managing episode data and page number
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState({ results: [] });
  const { results } = fetchedData;
  
  // API endpoint for fetching episode data
  const api = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;

  // useEffect to fetch episode data when the page number changes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api);
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [api]);

  // Mapping episode data to table rows
  const tb_data = results.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <button
            className='btn btn-sm btn-success'
            style={{ fontFamily: 'Acme', fontSize: '13px', height: '40px' }}
            onClick={() => addToWatchList(item)}>Add</button>
        </td>
        <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.episode}</td>
        <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.name}</td>
        <td style={{ fontFamily: 'Acme', fontSize: '13px' }}>{item.air_date}</td>
      </tr>
    );
  });

  // Render the WatchListPage component
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
                  <th scope="col" className='bg-warning'></th>
                  <th scope="col" className='bg-warning'>
                    <h2>
                      <b>My Watch List</b>
                    </h2>
                  </th>
                  <th scope="col"  className='bg-warning'></th>
                  <th scope="col"  className='bg-warning'></th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping watchList data to table rows */}
                {watchList.map((watchItem) => (
                  <tr key={watchItem.id}>
                    <td scope="col">
                      <button
                        className='btn btn-sm btn-danger'
                        style={{ fontFamily: 'Acme', fontSize: '13px', height: '40px' }}
                        onClick={() => removeFromWatchList(watchItem)}>Remove</button>
                    </td>
                    <td scope="col">{watchItem.name}</td>
                    <td scope="col" className='bg-dark text-light'>{watchItem.episode}</td>
                    <td scope="col" className='text-primary'>
                      <a href={watchItem.url} target="_blank"><b>Link</b></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pagination component */}
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPages={3}/>
    </div>
  );
}

export default WatchListPage;