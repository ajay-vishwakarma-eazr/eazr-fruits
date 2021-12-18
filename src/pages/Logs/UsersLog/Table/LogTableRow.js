import React from "react";

const LogTableRow = ({ name, phone, activity }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>

      <td>{activity}</td>
    </tr>
  );
};

export default LogTableRow;
