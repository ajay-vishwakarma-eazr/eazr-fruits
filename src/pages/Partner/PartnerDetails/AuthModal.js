import React, { useState } from "react";
import { Button, Modal, ModalBody,ModalHeader } from "reactstrap";
import { connect } from "react-redux";

//actions
import { clearErrors } from "../../../store/partners/actions";

const AuthModal = ({
  getDisableEdit,
  onSave,
  setPassword,
  errors,
  clearErrors,
}) => {
  const [modal, setModal] = useState(false);
  const [success_msg, setSuccess_Msg] = useState(false);
  const disableEdit = true;
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="auth-modal-toggler" color="success" onClick={toggle}>
        Save
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="auth-modal-body" style={{ padding: "3rem" }}>
          {/* <label>To make changes you need to enter your password</label> */}
          <label>Want to Save changes ?</label>
          {/* <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button
            className="partner-auth-btn"
            onClick={() => {
              onSave();
            }}
          >
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.partners.errors,
  };
};

export default connect(mapStateToProps, { clearErrors })(AuthModal);
