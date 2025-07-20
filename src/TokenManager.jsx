// src/components/TokenManager.jsx
import React, { useState } from "react";
import "./TokenManager.css";

const TokenManager = () => {
  const [name, setName] = useState("");
  const [entries, setEntries] = useState([]);
  const [tokenCounter, setTokenCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const newEntry = {
      token: tokenCounter,
      name: name.trim()
    };

    setEntries([...entries, newEntry]);
    setTokenCounter(tokenCounter + 1);
    setName("");
  };

  const handleDelete = (token) => {
    const updated = entries.filter((entry) => entry.token !== token);
    setEntries(updated);
  };

  return (
    <div className="container">
      <h1>Token Entry System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Generate Token</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Token Number</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ token, name }) => (
            <tr key={token}>
              <td>{token}</td>
              <td>{name}</td>
              <td>
                <button
                  className="action-btn"
                  onClick={() => handleDelete(token)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenManager;
