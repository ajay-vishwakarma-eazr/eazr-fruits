import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../../store/adminusers/actions/actions";
import { useParams } from "react-router-dom";
const EditCustomer = ({ user, showModal }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modal, setModal] = useState(showModal);
  const toggle = () => setModal(!modal);
  const { users } = useSelector((state) => state.Users);
  const [formData, setFormData] = useState({
    name: users.fullName,
    email:users.email,
    contact: users.contactNumber,
    gender: users.gender,
    dob: users.dob,
  });
  
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, contact, gender, dob } = formData;
  return (
    <div className="">
      <Modal isOpen={modal} toggle={toggle} centered className="">
        <ModalHeader toggle={toggle}>Edit Customer</ModalHeader>

        <ModalBody className="auth-modal-body  ">
          return (
          <>
            <label>Name</label>
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => handleChange(e)}
            />
            <label>Email</label>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => handleChange(e)}
            />
            <label>Contact</label>
            <input
              value={contact}
              type="tel"
              name="contact"
              placeholder="Enter contact"
              onChange={(e) => handleChange(e)}
            />
            <label>Gender</label>
            <input
              value={gender}
              type="text"
              name="gender"
              placeholder="Enter Gender"
              onChange={(e) => handleChange(e)}
            />
            <label>Date of birth</label>
            <input
              value={dob}
              type="date"
              name="dob"
              placeholder="Enter DOB"
              onChange={(e) => handleChange(e)}
            />
          </>
          );
          <button className="partner-auth-btn" onClick={toggle}>
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditCustomer;
