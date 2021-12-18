import React from "react";

const LogTableRow = ({ name, phone, status, activity }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{status}</td>
      <td>{activity}</td>
    </tr>
  );
};

export default LogTableRow;
