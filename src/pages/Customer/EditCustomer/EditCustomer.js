import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchUserById,
  updateUserDetails,
} from "../../../store/adminusers/actions/actions";
const EditCustomer = ({ userDetails, showModal }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(showModal);
  const toggle = () => setModal(!modal);
  const { adminusers } = useSelector((state) => state.adminUsers);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const id = adminusers[1]._id;
  console.log("user_id", id);
  useEffect(() => {
    // dispatch(fetchUserById(id))
  }, []);
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
          {adminusers.slice(1,2).map((details) => {
            return (
              <>
                <label>Name</label>
                <input
                  value={details?.user?.name}
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onChange={(e) => handleChange(e)}
                />
                <label>Email</label>
                <input
                  value={details?.user?.email}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange(e)}
                />
                <label>Contact</label>
                <input
                  value={details?.user?.phone}
                  type="text"
                  name="contact"
                  placeholder="Enter contact"
                  onChange={(e) => handleChange(e)}
                />
              </>
            );
          })}

          <button className="partner-auth-btn" onClick={toggle}>
            Save
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditCustomer;
