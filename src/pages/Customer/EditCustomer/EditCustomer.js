import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const AddCustomer = ({ showModal }) => {
  const [modal, setModal] = useState(showModal);

  const toggle = () => setModal(!modal);

  const [formData, setFormData] = useState({
    name: "Govind",
    email: "govind@gmail.com",
    contact: "9897767363"
    // contact: "9839839878/",
  });

  // const [formData, setFormData] = useState({
  //   name: "Kiran",
  //   email: "kiran@gmail.com",
  //   contact: "9897767363",
  //   // contact: "9839839878/",
  // });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, contact } = formData;

  return (
    <div className="">
      <Modal isOpen={modal} toggle={toggle} centered className="">
        <ModalHeader toggle={toggle}>Edit Customer</ModalHeader>

        <ModalBody className="auth-modal-body  ">
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
            type="text"
            name="contact"
            placeholder="Enter contact"
            onChange={(e) => handleChange(e)}
          />
          <button className="partner-auth-btn" onClick={toggle}>
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddCustomer;
