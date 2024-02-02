import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const Axios = () => {

    let [user, setUser] = useState()

    useEffect(()=>{
    let data = async ()=>{
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setUser(response.data);
      }
      data()
      console.log(data);
    },[])

  return (
    <>
    <div className="main">
    {user && user.length > 0
    ?
    user.map((userId,index)=>(
      <div key={index} className='userId'>
        <h3>ID : {userId.id}</h3>
        <h4>Title : {userId.title}</h4>
        <p>Body : {userId.body}</p>
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