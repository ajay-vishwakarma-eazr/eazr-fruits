import React from "react";
import { Link } from "react-router-dom";
const PartnerTableRow = ({
  brandName,
  contact,
  email,
  type,
  category,
  plan,
  status,
  id,
}) => {
  const statusColor = () => {
    if (status === 0) {
      return "#0371e3";
    }
    if (status === 1) {
      return "#eed202";
    }
    if (status === 2) {
      return "#df4759";
    }
    if (status === 3) {
      return "#4bb543";
    }
  };

  return (
    <tbody>
      <tr>
        <td>{brandName}</td>
        <td>{contact}</td>
        <td>{email}</td>
        <td>{type}</td>
        <td>{category}</td>
        <td>{plan}</td>
        <td className="approval-status-btn">
          <button
            style={{
              color: statusColor(),
              borderColor: statusColor(),
            }}
          >
            {status}
          </button>
        </td>
        <td className="approval-view-btn">
          <Link
            to={{
              pathname: "/partner-details",
              partnerId: id,
            }}
          >
            <button>Details</button>
          </Link>
        </td>
        {/* <td>
          <button className="view-customer-btn">View</button>
        </td> */}
        {/* <td>
          {serviceIds != undefined &&  serviceIds.length != 0
            ? sIds.map((obj, i) => {
                if (i === lastIndex) {
                  return <Link to={`/onhold-details/${obj}`}>{obj}</Link>;
                } else {
                  return (
                    <Link to={`/onhold-details/${obj}`}>{obj + ", "}</Link>
                    );
                  }
              })
            : null}
        </td> */}
      </tr>
    </tbody>
  );
};

export default PartnerTableRow;
