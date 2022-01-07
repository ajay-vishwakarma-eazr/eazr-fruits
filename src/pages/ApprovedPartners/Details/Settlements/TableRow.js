import React from "react";
import { withRouter} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const TableRow = ({ setttlementId, partnerId, amount,partnerAmount, upi, gst, date, createdAt, status }) => {
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

  const { partner } = useSelector((state) => state.businessPartner);

  // const history = withRouter();

  // const handleClick = () => {
  //   history.push("/settlement/id");
  // };

  return (
    // <tr onClick={handleClick}>
    <tr onClick={""}>
      <td>{setttlementId}</td>
      <td>{partnerId}</td>
      <td>₹ {amount}</td>
      <td>₹ {partnerAmount}</td>
      <td>{partner.upi}</td>
      <td>{gst}</td>
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
