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
  const { users } = useSelector((state) => state.Users);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    dob: ""
  });
  const id = users[1]._id;
  useEffect(() => {
    dispatch(fetchUserById(id))
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
          {users.slice(1,2).map((details) => {
            return (
              <>
                <label>Name</label>
                <input
                  value={details?.name}
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onChange={(e) => handleChange(e)}
                />
                <label>Email</label>
                <input
                  value={details}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange(e)}
                />
                <label>Contact</label>
                <input
                  value={details?.contact}
                  type="tel"
                  name="contact"
                  placeholder="Enter contact"
                  onChange={(e) => handleChange(e)}
                />
                <label>Gender</label>
                <input
                  value={details?.gender}
                  type="text"
                  name="gender"
                  placeholder="Enter Gender"
                  onChange={(e) => handleChange(e)}
                />
                <label>Date of birth</label>
                <input
                  value={details?.phone}
                  type="date"
                  name="dob"
                  placeholder="Enter DOB"
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
