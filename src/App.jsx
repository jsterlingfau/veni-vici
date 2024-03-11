import './App.css'

import React, { useState, useEffect } from 'react';

const App = () => {
  const [item, setItem] = useState(null);
  const [banList, setBanList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiKey = '3b6694e9120fff48e6175fb55bf29c49';
    const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=3b6694e9120fff48e6175fb55bf29c49`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data)
      setItem(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleNext = () => {
    fetchData();
  };

  const handleBan = (attribute) => {
    setBanList([...banList, attribute]);
  };

  const filterItems = (item) => {
    return !banList.some((banned) => item.includes(banned));
  };

  return (
    <div>
     
      <h1>Welcome to CineScope!</h1> 
    
      <button onClick={handleNext}>Next</button>
      {item && (
        <div>
          <img src={item.image} alt="Item" />
          <p>{item.attribute1}</p>
          <p>{item.attribute2}</p>
          <p>{item.attribute3}</p>
          <button onClick={() => handleBan(item.attribute1)}>Ban {item.attribute1}</button>
          <button onClick={() => handleBan(item.attribute2)}>Ban {item.attribute2}</button>
          <button onClick={() => handleBan(item.attribute3)}>Ban {item.attribute3}</button>
        </div>
      )}
    </div>
  );
};

export default App;
