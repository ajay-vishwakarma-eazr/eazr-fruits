import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { UncontrolledTooltip } from "reactstrap";
import EditCustomer from "../EditCustomer/EditCustomer";
import { Link } from "react-router-dom";

//Import Breadcrumb

const CustomerTableRow = ({ id, name, phone, email }) => {
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
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link
          to={{
            pathname: `/user/${id}`,
          }}
        >
          <button className="view-customer-btn">View</button>
        </Link>
      </td>
      <td>
        <UncontrolledTooltip target={"edit"} placement="top">
          Edit
        </UncontrolledTooltip>

        <UncontrolledTooltip target={"delete"} placement="top">
          Delete
        </UncontrolledTooltip>
        <UncontrolledTooltip target={"ban"} placement="top">
          Ban / Unban
        </UncontrolledTooltip>

        {showModal && <EditCustomer showModal={showModal} />}

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

        <i
          id="delete"
          className="mdi mdi-trash-can"
          onClick={() =>
            setSweetAlerts({
              // email,
              alert_confirm: true,
            })
          }
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
        {sweetAlerts.alert_confirm ? (
          <SweetAlert
            title="Are you sure?"
            warning
            showCancel
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() =>
              setSweetAlerts({
                success_confirm: true,
                alert_confirm: false,
                dynamic_title: "Deleted!",
                dynamic_description: "User has been deleted.",
              })
            }
            onCancel={() =>
              setSweetAlerts({
                alert_confirm: false,
              })
            }
          ></SweetAlert>
        ) : null}
      </td>
    </tr>
  );
};

export default CustomerTableRow;
