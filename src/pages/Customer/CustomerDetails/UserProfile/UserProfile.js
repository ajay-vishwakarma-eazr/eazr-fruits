import React, { useState, useEffect } from "react";
import avatar from "../../../../assets/images/users/avatar-3.jpg";
import AuthModal from "../../../Partner/PartnerDetails/AuthModal";
import nouser from "../../../../assets/images/nouser.png";
import "./userprofile.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchUserById,
  imageUpload,
  updateUserProfile,
} from "../../../../store/adminusers/actions/actions";

import { useParams, useHistory } from "react-router-dom";
import CustomersNav from "../../CustomerNav";
import BackBtn from "../../../BackBtn";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import CreditDetails from "../CreditDetails/CreditDetails";
import axios from "axios";
import { ip } from "../../../../config/config";
const UserProfile = () => {
  const { users, imageUpload } = useSelector((state) => state.Users);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [previewImage, setPreviewImage] = useState(null);
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect((data) => {
    dispatch(fetchUserById(id));
    // dispatch(imageUpload(id));
  }, []);

  // bodyFormData.append('image', imageFile);
  const [formData, setFormData] = useState({
    fullName: users.fullName,
    email: users.email,
    dob: users.dob,
    contactNumber: users.contactNumber,
    // address: users.address,
    pin: users.pincode,
    pan: users.pan,
    aadhaarNo: users.aadhar,
    selfie: users.selfie,
  });

  const {
    fullName,
    email,
    dob,
    contactNumber,
    // address,
    pin,
    pan,
    aadhaarNo,
    selfie,
  } = formData;

  // const selectFile = (e) => {
  //   this.setState({
  //     currentFile: e.target.files[0],
  //     previewImage: URL.createObjectURL(e.target.files[0]),
  //     progress: 0,
  //     message: ""
  //   });
  // }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // dispatch(imageUpload(selfie));
    // setFormData({
    //   selfie: selfie,
    // });
  };

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    dispatch(updateUserProfile(id, formData));
    setEdit(!edit);
  };
  // console.log("selfie", selfie);
  return (
    <>
      <div className="page-content customer-page ">
        <Container fluid>
          <BackBtn route="users" />
          <CustomersNav />
          <div className="userprofile-div shadow">
            {edit ? (
              <i className="fa fa-user-edit" onClick={() => setEdit(!edit)}></i>
            ) : (
              <AuthModal getDisableEdit={getDisableEdit} onSave={onSave} />
            )}

            <div className="user-img">
              <img src={selfie == null ? nouser : selfie} alt="img" />
              {/* <img src={ selfie } alt="img" /> */}
              <label htmlFor="selfie">
                {!edit ? <i className="fa fa-edit"></i> : ""}
              </label>

              <input
                type="file"
                id="selfie"
                style={{ display: "none" }}
                // value={selfie}
                name="selfie"
                onChange={(e) =>
                  setFormData({
                    selfie: URL.createObjectURL(e.target.files[0]),
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
                type="dob"
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

            {/* <div className="input-div">
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
            </div> */}

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
        </Container>
      </div>

      <CreditDetails
        creditLimit={users.creditLimit}
        dueDate={users.dueDate}
        availableCreditLimit={users.availableCreditLimit}
        fineAmount={users.fineAmount}
        id={users.id}
      />
    </>
  );
};

export default UserProfile;
