import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/users/avatar-2.jpg";
import AuthModal from "../Partner/PartnerDetails/AuthModal";
import "./adminProfile.scss";
import "../Customer/CustomerDetails/UserProfile/userprofile.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { FetchAdminProfile } from "../../store/adminprofile/actions/action";
import { useParams } from "react-router-dom";
const AdminProfile = () => {
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAdminProfile());
  }, []);
  const admin = useSelector((state) => state.AdminProfile);

  const [formData, setFormData] = useState({
    name: admin.admin.fullName,
    email: admin.admin.email,
    contact: admin.admin.contactNumber,
    profileImg: admin.admin.profilePhoto,
    adminsRole: admin.admin.adminsRole?.name,
  });

  const { name, email, contact, adminsRole, profileImg } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="user-profile-div shadow">
      {/* {edit ? (
        <i className="fa fa-user-edit" onClick={() => setEdit(false)}></i>
      ) : (
        <AuthModal />
      )} */}

      <div className="user-img">
        <img src={profileImg ? profileImg : avatar} alt="" />
        {/* <label htmlFor="profileImg">
          <i className="fa fa-edit"></i>
        </label> */}

        <input
          type="file"
          id="profileImg"
          style={{ display: "none" }}
          onChange={(e) =>
            setFormData({
              profileImg: URL.createObjectURL(e.target.files[0]),
            })
          }
        />
      </div>

      <input
        // disabled={edit}
        type="text"
        name="name"
        className="name-input"
        value={name}
        onChange={(e) => handleChange(e)}
      />

      <input
        // disabled={edit}
        type="email"
        name="email"
        className="email-input"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <div className="input-div">
        <h6>Contact</h6>
        <input
          // disabled={edit}
          type="text"
          name="contact"
          value={contact}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-div">
        <h6>AdminRole</h6>
        <input
          // disabled={edit}
          type="text"
          name="adminsRole"
          value={adminsRole}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* <div className="input-div">
        <h6>Aadhaar No</h6>
        <input
          disabled={edit}
          type="text"
          name="aadhaarNo"
          value={aadhaarNo}
          onChange={(e) => handleChange(e)}
        />
      </div> */}
    </div>
  );
};

export default AdminProfile;
