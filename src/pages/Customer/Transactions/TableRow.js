import React from "react";

const TableRow = ({
  amount,status,partnerName,debit,createAt
}) => {
  const statusColor = () => {
    
  };

  return (
    <tr>
      <td>{partnerName}</td>
      <td>{amount}</td>
      <td>{status === 0 ? "Initiated" : status === 1 ? "Failed" : "Succes"}</td>
      <td>{debit ==="true"? "Yes":"No"}</td>
      <td>{createAt.slice(0, 10)}</td>
    </tr>
  );
};

export default TableRow;
