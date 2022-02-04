import React, { useState, useEffect, useCallback } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePartnerCategory } from "../../store/partners/PartnerCategory/action";

const EditPartnerCategory = ({ showModal, id, name }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [modal, setModal] = useState(showModal);
  const toggle = () => {
    dispatch(updatePartnerCategory(id, formData));
    setModal(!modal);
  };
  const [formData, setFormData] = useState({
    name,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      <Modal isOpen={modal} toggle={toggle} centered className="">
        <ModalHeader toggle={toggle}>Edit Customer</ModalHeader>
        <ModalBody className="auth-modal-body  ">
          <>
            <label>Name</label>
            <input
              value={formData.name}
              type="text"
              name="name"
              placeholder="Update Partner Category"
              onChange={(e) => handleChange(e)}
            />
          </>

          <button className="partner-auth-btn" onClick={toggle}>
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditPartnerCategory;
