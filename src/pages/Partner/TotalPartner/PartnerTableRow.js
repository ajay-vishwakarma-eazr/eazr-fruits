import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTableRow = ({
  id,
  name,
  contact,
  email,
  description,
  partnerType,
  plan
}) => {
  const statusColor = () => {
    // if (status._id === "607d530bf896e32250192195") {
    //   return "#0371e3";
    // }
    // if (status._id === "607d534de36c5111dc63fe4f") {
    //   return "#eed202";
    // }
    // if (status._id === "607d535ce36c5111dc63fe50") {
    //   return "#df4759";
    // }
    // if (status._id === "607fcc9c6e04510a48a07767") {
    //   return "#4bb543";
    // }
  };

  // const sIds = serviceIds.map((obj) => obj.serviceId);
  // const lastIndex = sIds.length - 1;

  // const sIds =
  //   serviceIds != undefined && serviceIds.length != 0
  //     ? serviceIds.map((obj) => obj.serviceId)
  //     : null;
  // const lastIndex =
  //   serviceIds != undefined && serviceIds.length != 0
  //     ? (sIds.length = 0)
  //     : null;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{contact}</td>
        <td>{email}</td>
        <td>{description}</td>
        <td>{partnerType}</td>
        <td>{plan}</td>
        <td className="approval-view-btn">
          {/* <Link to="/partner-details-tab/${id}"> */}
            <Link to={`/partner-details-tab/${id}`}>
            <button>Details</button>
          </Link>
        </td>
        {/* <td className="approval-status-btn">
          <button
            style={{
              color: statusColor(),
              borderColor: statusColor(),
            }}
          >
            Details
          </button>
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
