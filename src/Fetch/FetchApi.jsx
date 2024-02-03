import React, { useEffect, useState } from 'react';

const FetchApi = () => {
    const [myData, setMyData] = useState([]);
    const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setMyData(data.meals);
        } catch (error) {
          console.log(error.message);
        }
      };
  
      getData();
    }, []);
  
    return (
      <>
        <div className='mainBox'>
          {myData.map((item, index) => (
            <div key={index} className='mainWrapper'>
              <h2>idMeal : {item.idMeal}</h2>
              <h3>Meal Name: {item.strMeal}</h3>
              <p>Instructions: {item.strInstructions.slice(0, 150)}</p>
              {/* Add other meal properties you want to display */}
            </div>
          ))}
        </div>
      </>
    );
  };

export default FetchApi