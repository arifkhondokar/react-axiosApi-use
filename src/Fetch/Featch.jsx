import React, { useEffect, useState } from 'react'

const Featch = () => {
    
    const [myData, setMyData] = useState([])
    const URL = "https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        fetch(URL)
            .then((res)=>res.json())
            .then((result)=>setMyData(result))
    }, []);

  return (
    <>
    <div className="main">
    {myData && myData.length > 0
    ?
    myData.slice(0,12).map((userId,index)=>(
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

export default Featch