import React from "react";
import { Link } from "react-router-dom";
import NoImg from "../../../assets/images/NoImg.png";

//Import Breadcrumb

const ApprovedPartnersRow = ({
  id,
  profilePicture,
  name,
  contact,
  email,
  description,
  partnerType,
  plan,
}) => {
  const statusColor = () => {};
  return (
    <tbody>
      <tr>
        <td>
          <img
            src={profilePicture === null ? NoImg : profilePicture}
            alt="img"
            height="40"
            width="40"
            text-align="center"
            border-radius="25"
          ></img>
        </td>
        <td>{name}</td>
        <td>{contact}</td>
        <td>{email}</td>
        {/* <td>{description}</td> */}
        <td>{partnerType}</td>
        {/* <td>{plan}</td> */}
        <td className="approval-view-btn">
          <Link to={`/partner-transactions/${id}`}>
            <button>Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ApprovedPartnersRow;
