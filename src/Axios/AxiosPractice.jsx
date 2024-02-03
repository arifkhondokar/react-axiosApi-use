import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosPractice = () => {

    const [myData, setMyData] = useState([])
    const URL = "https://fakestoreapi.com/users"

    useEffect(()=> {
        const getData = async () => {
            try {
              const response = await axios.get(URL);
              setMyData(response.data);
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
        {
            myData.map((item, index)=> (
                <div key={index} className='userId'>
                    <h2>id : {item.id}</h2>
                    <h3>name :  
                        {item.name.firstname}-
                        {item.name.lastname}
                    </h3>
                    <p>email : {item.email}</p>
                    <p>address : 
                        {item.address.street}, 
                        {item.address.city}, 
                        {item.address.zipcode}
                    </p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default AxiosPractice