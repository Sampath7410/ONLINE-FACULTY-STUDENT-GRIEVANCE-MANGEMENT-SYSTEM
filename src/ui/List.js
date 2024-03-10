import React from "react";

const List = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((data, index) => (
          <tr key={index}>
            <td>{data.username}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
