import React, { useState } from "react";
const CreditTableRow = ({
  contactScore,
  deviceScore,
  Location_Score,
  numberOfFinapps,
  financialapp_score,
  contacts,
  finAppList,
}) => {
  return (
    <tr style={{ textAlign: "center" }}>
      <td>{contactScore}</td>
      <td>{deviceScore}</td>
      <td>{Location_Score}</td>
      <td>{numberOfFinapps}</td>
      <td>{financialapp_score}</td>
      <td>{finAppList}</td>
      <td style={{ textAlign: "left" }}>{contacts}</td>
    </tr>
  );
};

export default CreditTableRow;
