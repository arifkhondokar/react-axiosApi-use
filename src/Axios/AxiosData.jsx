import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosData = () => {
    let [myData, setMyData] = useState([])
    const [isError, setIsError] = useState("")

// using promises
    useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((response)=> setMyData(response.data))
    .catch((error)=> setIsError(error.message));
    },[])

  return (
    <>
    {
        isError !=="" && <h2>{isError}</h2>
    }
    <div>
        {
            myData.slice(0, 10).map((post)=> {
                const {id, title, description} = post
                return(
                    <div key={id} className='mydata'>
                        <h2>{title}</h2>
                        <p>{description.slice(0, 100)}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default AxiosData