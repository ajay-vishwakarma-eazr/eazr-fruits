import React from "react";

const TableRow = ({
  creditScore,
  availableCreditLimit,
  currentOutstandingAmount,
  dueAmount,
  dueDate,
  lastBillGenerationDate,
  nextBillDate,
  fineAmount,
}) => {
  const statusColor = () => {
    
  };

  return (
    <tr>
      <td>{creditScore}</td>
      <td>{availableCreditLimit}</td>
      <td>{currentOutstandingAmount}</td>
      <td>{dueAmount}</td>
      <td>{dueDate}</td>
      <td>{lastBillGenerationDate}</td>
      <td>{nextBillDate}</td>
      <td>{fineAmount}</td>
    </tr>
  );
};

export default TableRow;
