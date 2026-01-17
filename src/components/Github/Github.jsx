import React, { useEffect } from 'react'
import { useState } from 'react'


function Github() {
  
  const [data, setData] = useState([])
  useEffect(() => {
  fetch("https://api.github.com/users/mohammad01ahmad")
  .then((response) => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      }
    )  
  }, [])
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-3xl'>
      <div>
        <span>Github followers: {data.followers}</span>
      </div>
    </div>
  )
}

export default Github