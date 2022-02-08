import React, { useState, useEffect, useCallback } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePartnerType } from "../../../store/partners/PartnerType/actions/action";

const EditPartnerType = ({ showModal, id, type, pageNumber }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [modal, setModal] = useState(showModal);
  const toggle = () => {
    dispatch(updatePartnerType(id, formData, pageNumber));
    setModal(!modal);
  };
  const [formData, setFormData] = useState({
    type,
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
            <label>Type</label>
            <input
              value={formData.type}
              type="text"
              name="type"
              placeholder="Update Partner Type"
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

export default EditPartnerType;
