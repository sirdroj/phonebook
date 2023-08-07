import React from 'react'

const User = ({username}) => {
  return (
    <div>Hellow {username.length>0?username:"User"} </div>
  )
}

export default User