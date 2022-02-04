import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { UncontrolledTooltip } from "reactstrap";
// import EditCustomer from "../EditCustomer/EditCustomer";
import { Link, withRouter } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteType, getPartnerType } from "../../../store/partners/PartnerType/actions/action";
import EditPartnerType from "./EditPartnerType";
const PartnerTypeTableRow = ({
  id,
  typeName,
  createdTime,
}) => {
  
  let history = useHistory();
  const dispatch = useDispatch();
  const  partnerType  = useSelector((state) => state.PartnerType);
  const [showModal, setShowModal] = useState(false);
console.log(id);
  return (
    <tr className="customer-table-row">
      <td>{id}</td>
      <td>{typeName}</td>
      <td>{createdTime}</td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showModal && (
          <EditPartnerType
            showModal={showModal}
            id={id}
            type={typeName}
            created Time={createdTime}
          />
        )}
        <i
          className="mdi mdi-account-edit"
          onClick={() => setShowModal(!showModal)}
          style={{ fontSize: "20px", marginRight: "15px" }}
        ></i>
        <i
          class="fas fa-trash-alt"
          style={{ color: "red", fontSize: "20px" }}
          onClick={() => {
            dispatch(deleteType(id));
          }}
        ></i>
      </td>
    </tr>
  );
};

const mapStatetoProps = (state) => {
  return {
    details: state.partners.partnerType,
  };
};

export default withRouter(
  connect(mapStatetoProps, { getPartnerType })(PartnerTypeTableRow)
);

// export default PartnerTypeTableRow;
