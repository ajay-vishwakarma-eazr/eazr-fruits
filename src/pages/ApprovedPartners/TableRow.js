import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { OnClickItem,setPartner } from "../../store/businessprofiles/actions/actions";


//const TableRow = ({ brandName, enrollmentId, email, phone,key,partner }) => {
const TableRow = ({ srNo, businessName, registeredId, email, contact,address ,partner}) => {
  //const history = withRouter();
  const dispatch=useDispatch();
  
  const showDetails = (e) => {
  
    // history.push('/approved-partner-details');
    const val=e.target.value;
 // dispatch(OnClickItem(val))
   dispatch(setPartner(partner)) 
  };
  return (
    <tr onClick={showDetails}>
      <td>{businessName}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{address}</td>
    </tr>
  );
};

export default TableRow;
