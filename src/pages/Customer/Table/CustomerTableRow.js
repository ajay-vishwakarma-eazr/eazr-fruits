import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { UncontrolledTooltip } from "reactstrap";
import EditCustomer from "../EditCustomer/EditCustomer";
import { Link } from "react-router-dom";

const CustomerTableRow = ({
  id,
  name,
  email,
  contact,
  gender,
  creditLimit,
  totalOutstandingAmount,
}) => {
  const [sweetAlerts, setSweetAlerts] = useState({
    dynamic_title: "",
    dynamic_description: "",
    success_confirm: false,
    alert_confirm: false,
  });

  const [showModal, setShowModal] = useState(false);

  const [ban, setBan] = useState(false);
  return (
    <tr style={{ opacity: ban ? 0.5 : 1 }} className="customer-table-row">
      <td>{name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{gender}</td>
      <td>{creditLimit}</td>
      <td>{totalOutstandingAmount}</td>
      <td>
        <Link to={`/user-profile/${id}`}>
          <button className="view-customer-btn">View</button>
        </Link>
      </td>
      <td>
        <UncontrolledTooltip target={"edit"} placement="top">
          Edit
        </UncontrolledTooltip>

        <UncontrolledTooltip target={"ban"} placement="top">
          Ban / Unban
        </UncontrolledTooltip>
        {showModal && (
          <EditCustomer
            showModal={showModal}
            id={id}
            fullName={name}
            email={email}
            contactNumber={contact}
            gender={gender}
          />
        )}

        {/* <Link
          to={{
            pathname: `/user/${id}`,
          }}
        ></Link> */}
        <i
          className="mdi mdi-account-edit"
          id="edit"
          onClick={() => setShowModal(!showModal)}
        ></i>

        <i
          className="fas fa-ban"
          id="ban"
          style={{ color: ban && "green" }}
          onClick={() => setBan(!ban)}
        ></i>
        {/* onClick={() => { this.onClick(this.props.email) }} */}
        {sweetAlerts.success_confirm ? (
          <SweetAlert
            success
            title={sweetAlerts.dynamic_title}
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() =>
              setSweetAlerts({ success_confirm: false, alert_confirm: false })
            }
          >
            {sweetAlerts.dynamic_description}
          </SweetAlert>
        ) : null}
      </td>
    </tr>
  );
};

export default CustomerTableRow;
