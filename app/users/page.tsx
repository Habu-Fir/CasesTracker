import next from 'next';
import React, { use } from 'react';
interface user {
  id: string;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  const users: user[] = await res.json();

  return (
    <>
      <h1>List of users</h1>
      <table className=" table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
