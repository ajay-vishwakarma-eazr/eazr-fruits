import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  OnClickItem,
  setPartner,
} from "../../store/businessprofiles/actions/actions";

//const TableRow = ({ brandName, enrollmentId, email, phone,key,partner }) => {
const TableRow = ({id, name, email, phone, password, partner }) => {
  //const history = withRouter();
  const dispatch = useDispatch();

  const showDetails = (e) => {
    // history.push('/approved-partner-details');
    const val = e.target.value;
    // dispatch(OnClickItem(val))
    dispatch(setPartner(partner));
  };
  return (
    <tr onClick={showDetails}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{password}</td>
      <td className="approval-view-btn">
        <Link
          to={{
            pathname: `/user/${id}`,
          }}
        >
          <button>View</button>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
