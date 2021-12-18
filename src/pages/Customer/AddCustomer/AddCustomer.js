import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddCustomer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="add-customer-toggler">
      <Button className="auth-modal-toggler" color="success" onClick={toggle}>
        Add Customer
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered
        className="add-customer-modal"
      >
        <ModalHeader toggle={toggle}>Add Customer</ModalHeader>

        <ModalBody className="auth-modal-body add-customer-modal-body ">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Contact</label>
          <input type="texst" placeholder="Enter contact" />
          <button className="partner-auth-btn" onClick={toggle}>
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddCustomer;
