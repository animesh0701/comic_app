import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <ul>
      <h1>Users List</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
