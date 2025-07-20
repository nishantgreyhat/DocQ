import React, { useState } from 'react';
import './DocTablePage.css'; // We'll create this next

const DocTablePage = () => {
  const [tokens, setTokens] = useState([
    { id: 1, name: "Patient A", time: "10:00 AM" },
    { id: 2, name: "Patient B", time: "10:30 AM" },
    { id: 3, name: "Patient C", time: "11:00 AM" },
  ]);

  const handleDelete = (id) => {
    setTokens(tokens.filter(token => token.id !== id));
  };

  return (
    <div className="doc-table-container">
      <h2>Doctor's Token List</h2>
      <table className="token-table">
        <thead>
          <tr>
            <th>Token ID</th>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.id}>
              <td>{token.id}</td>
              <td>{token.name}</td>
              <td>{token.time}</td>
              <td>
                <button onClick={() => handleDelete(token.id)} className="delete-btn">
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

export default DocTablePage;
