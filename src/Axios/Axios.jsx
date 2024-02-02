import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const Axios = () => {

    let [user, setUser] = useState([])
    const [ isError, setIsError] = useState("")

// using Assync Await---------------    
    
    let getMyData = async ()=>{
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setUser(response.data);
      } catch (error) {
        setIsError (error.message);
      }  
    }
    useEffect(()=>{
      getMyData()
    },[])

  return (
    <>
    <div className="main">
    {
      isError !== "" && <h2>{isError}</h2>
    }

    {user && user.length > 0
    ?
    user.slice(0,8).map((userId,index)=>(
      <div key={index} className='userId'>
        <h3>ID : {userId.id}</h3>
        <h4>Title : {userId.title}</h4>
        <p>Body : {userId.body.slice(0, 70)}</p>
      </div>
    ))
    :
    <h1>Loading......</h1>
    }
     </div>
    </>
  )
}

export default Axios