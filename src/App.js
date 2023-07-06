import React, { useEffect, useState } from 'react'

import axios from 'axios';

const App = () => {
  const [data , setData] = useState([]);
    useEffect(() =>{
      axios.get(`https://randomuser.me/api/?results=1`).then(
        response => console.log(response.data)
      )
    },[])
  return (
    <div>
      <center>
       {
      data.map(item  => <li key={item.results.id}>{item.results.name}</li>)
       }
      </center>
    </div>
  )
}

export default App