import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  
  const {userid} = useParams()
  
  return (
    <div className='bg-amber-600 text-3xl text-center py-5'>{ userid }</div>
  )
}

export default User