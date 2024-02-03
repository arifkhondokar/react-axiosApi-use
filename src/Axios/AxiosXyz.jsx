import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosXyz = () => {
    const [myData, setMyData] = useState([])
    const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

    useEffect(()=> {
        const getData = async () => {
            try {
              const response = await axios.get(URL);
              setMyData(response.data.meals);
            } catch (error) {
              console.log(error.message);
            }
          };
      
          getData();
        }, []);

  return (
    <>
    {console.log(myData)}
    <div className='mainBox'>
        {myData.map((item, index)=> (
                <div key={index} className='userId'>
                    <h2>idMeal : {item.idMeal}</h2>
                    <h3>Meal Name: {item.strMeal}</h3>
                    <p>Instructions: {item.strInstructions.slice(0, 100)}</p>
                    <span>strYoutube: {item.strYoutube}</span>
                </div>
            ))}
    </div>
    </>
  )
}

export default AxiosXyz