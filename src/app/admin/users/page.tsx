import React from 'react'

const Users = async () => {
  /**
   * SSR Fetch: Goes directly into the back-end and returns the data.
   * There's no need to use useState.
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>Users</div>
  )
}

export default Users