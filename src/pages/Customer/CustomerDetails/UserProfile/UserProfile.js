import React, { useState, useEffect } from "react";
import avatar from "../../../../assets/images/users/avatar-3.jpg";
import AuthModal from "../../../Partner/PartnerDetails/AuthModal";
import "./userprofile.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchUserById,
  updateUserDetails,
} from "../../../../store/adminusers/actions/actions";

import { useParams, useHistory } from "react-router-dom";
import CustomersNav from "../../CustomerNav";
import CustomerDetails from "../CustomerDetails";
import BackBtn from "../../../BackBtn";
import { Container } from "reactstrap";
const UserProfile = () => {
  const { users } = useSelector((state) => state.Users);
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  const [formData, setFormData] = useState({
    fullName: users.fullName,
    email: users.email,
    dob: users.dob,
    contactNumber: users.contactNumber,
    address: users.address,
    pin: users.pincode,
    pan: users.pan,
    aadhaarNo: users.aadhar,
    profileImg: avatar,
    selfie: users.selfie,
  });

  const {
    fullName,
    email,
    dob,
    contactNumber,
    address,
    pin,
    pan,
    aadhaarNo,
    profileImg,
    selfie,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    dispatch(updateUserDetails(id, formData));
  };

  return (
    <>
      <div>
        <div className="page-content customer-page ">
          <Container fluid>
            <BackBtn route="users" />
            <CustomersNav id={id} />
          </Container>
        </div>
        <div className="user-profile-div shadow">
          {edit ? (
            <i className="fa fa-user-edit" onClick={() => setEdit(!edit)}></i>
          ) : (
            <AuthModal getDisableEdit={getDisableEdit} onSave={onSave} />
          )}

          <div className="user-img">
            <img src={selfie} alt="" />
            <label htmlFor="profileImg">
              <i className="fa fa-edit"></i>
            </label>

            <input
              type="file"
              id="profileImg"
              style={{ display: " none" }}
              onChange={(e) =>
                setFormData({
                  profileImg: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </div>

          <input
            disabled={edit}
            type="text"
            name="fullName"
            className="name-input"
            value={fullName}
            onChange={(e) => handleChange(e)}
          />

          <input
            disabled={edit}
            type="email"
            name="email"
            className="email-input"
            value={email}
            onChange={(e) => handleChange(e)}
          />

          <div className="input-div">
            <h6>Date Of Birth</h6>
            <input
              disabled={edit}
              type="email"
              name="dob"
              value={dob}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-div">
            <h6>Contact</h6>
            <input
              disabled={edit}
              type="text"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-div">
            <h6>Address</h6>
            <textarea
              disabled={edit}
              name="address"
              id=""
              cols="30"
              rows="2"
              value={address}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <div className="input-div">
            <h6>Pin</h6>
            <textarea
              disabled={edit}
              name="pin"
              id=""
              cols="30"
              rows="1"
              value={pin}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <div className="input-div">
            <h6>PAN</h6>
            <input
              disabled={edit}
              type="text"
              name="pan"
              value={pan}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-div">
            <h6>Aadhaar No</h6>
            <input
              disabled={edit}
              type="text"
              name="aadhaarNo"
              value={aadhaarNo}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
