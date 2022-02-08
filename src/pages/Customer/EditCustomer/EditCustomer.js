import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchUsers,
  updateUserDetails,
} from "../../../store/adminusers/actions/actions";
const EditCustomer = ({ showModal, id, fullName, email, contactNumber, gender, pageNumber }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [modal, setModal] = useState(showModal);
  const toggle = () => {
    dispatch(updateUserDetails(id, formData, pageNumber));
    setModal(!modal);
  };
  const [formData, setFormData] = useState({
    fullName,
    email,
    contactNumber,
    gender,
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
              value={formData.fullName}
              type="text"
              name="fullName"
              placeholder="Enter name"
              onChange={(e) => handleChange(e)}
            />
            <label>Email</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => handleChange(e)}
            />
            <label>Contact</label>
            <input
              value={formData.contactNumber}
              type="tel"
              name="contactNumber"
              placeholder="Enter contact"
              onChange={(e) => handleChange(e)}
            />
            <label>Gender</label>
            <input
              value={formData.gender}
              type="text"
              name="gender"
              placeholder="Enter Gender"
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

export default EditCustomer;
