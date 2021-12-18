import React, { useState } from "react";
import avatar from "../../../../assets/images/users/avatar-3.jpg";
import AuthModal from "../../../Partner/PartnerDetails/AuthModal";
import "./userprofile.scss";

const UserProfile = () => {
  const [edit, setEdit] = useState(true);

  const [formData, setFormData] = useState({
    name: "Govind Sharma",
    email: "govind.s@eazr.in",
    dob: "05/01/2000",
    contact: "9876787837",
    address: "3rd Floor, We Work, JVLR, Powai, Mumbai-400072",
    pan: "ABCDE1234E",
    aadhaarNo: "456398393893",
    profileImg: avatar,
  });

  const {
    name,
    email,
    dob,
    contact,
    address,
    pan,
    aadhaarNo,
    profileImg,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="user-profile-div shadow">
      {edit ? (
        <i className="fa fa-user-edit" onClick={() => setEdit(false)}></i>
      ) : (
        <AuthModal />
      )}

      <div className="user-img">
        <img src={profileImg} alt="" />
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
        name="name"
        className="name-input"
        value={name}
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
          name="contact"
          value={contact}
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
  );
};

export default UserProfile;
