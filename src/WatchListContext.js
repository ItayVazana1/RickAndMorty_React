import React, { createContext, useContext, useState } from 'react';

// Create a new context for managing the watch list
const WatchListContext = createContext();

// Custom hook to access the watch list and its functions
export function useWatchList() {
  return useContext(WatchListContext);
}

// Provider component for managing the watch list
export function WatchListProvider({ children }) {
  // Initialize the watchList state with an empty array
  const [watchList, setWatchList] = useState([]);

  // Function to add an item to the watch list
  const addToWatchList = (item) => {
    // Check if the item is not already in the watch list
    if (!watchList.some((watchItem) => watchItem.id === item.id)) {
      // If not, add it to the watch list
      setWatchList([...watchList, item]);
    } else {
      // If it's already in the watch list, show an alert
      alert('Item already in Watch list!');
    }
  };

  // Function to remove an item from the watch list
  const removeFromWatchList = (item) => {
    // Filter out the item with a matching id from the watch list
    const updatedWatchList = watchList.filter((watchItem) => watchItem.id !== item.id);
    // Update the watch list with the filtered list
    setWatchList(updatedWatchList);
  };

  // Provide the watch list and its functions to child components
  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList, removeFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
}