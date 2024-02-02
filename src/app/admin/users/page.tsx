import React from 'react'

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  /**
   * SSR Fetch: Goes directly into the back-end and returns the data.
   * There's no need to use useState.
   */
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
    /** Fetch configuration:S
    {
      cache: 'no-store', // disbale cache saving
      next: { // Next specific configuration
        revalidate: 10 // Re-run fetch
      }
    }
    */
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users