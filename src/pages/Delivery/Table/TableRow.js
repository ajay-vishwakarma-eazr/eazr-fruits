import React from "react";
import { withRouter} from "react-router-dom";

const TableRow = ({ name, email, address }) => {
  const history = withRouter();

  const handleClick = () => {
    history.push("/delivery-orders");
  };

  return (
    <tr onClick={handleClick}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
    </tr>
  );
};

export default TableRow;
