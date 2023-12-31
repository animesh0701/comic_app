import React, { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import userServices, { User } from "../services/user-services";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userServices.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  //Deleting data
  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((item) => item.id !== user.id));

    userServices.deleteUsers(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  //Adding Data
  const addUser = () => {
    const originalUsers = [...users];

    const newuser = { id: 0, name: "Animesh" };
    setUsers([newuser, ...users]);

    userServices
      .addUser(newuser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  //Updating Data
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userServices.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        <h1>Users List</h1>
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
