import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../store/partners/PartnerCategory/action";
import EditPartnerCategory from "./EditPartnerCategory";
const CategoryTableRow = ({ id, categoryName }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <tr>
      <td>{id}</td>
      <td>{categoryName}</td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showModal && (
          <EditPartnerCategory
            showModal={showModal}
            id={id}
            name={categoryName}
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
            dispatch(deleteCategory(id));
          }}
        ></i>
      </td>
    </tr>
  );
};
export default CategoryTableRow;
