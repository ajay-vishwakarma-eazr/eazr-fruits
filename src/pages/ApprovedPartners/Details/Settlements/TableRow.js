import React from "react";
import { withRouter} from "react-router-dom";

const TableRow = ({ setttlementId, amount,partnerAmount, fees, tax, date, createdAt, status }) => {
  const statusColor = () => {
    if (status === "Completed") {
      return "#4bb543";
    }
    if (status === "Refunded") {
      return "#df4759";
    }
    if (status === "Pending") {
      return "#0371e3";
    }
  };

  // const history = withRouter();

  // const handleClick = () => {
  //   history.push("/settlement/id");
  // };

  return (
    // <tr onClick={handleClick}>
    <tr onClick={""}>
      <td>{setttlementId}</td>
      <td>{amount}</td>
      <td>{partnerAmount}</td>
      <td>{fees}</td>
      <td>{tax}</td>
      <td>{createdAt}</td>
      <td>
        <p
          className="status"
          style={{ borderColor: statusColor(), color: statusColor() }}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
