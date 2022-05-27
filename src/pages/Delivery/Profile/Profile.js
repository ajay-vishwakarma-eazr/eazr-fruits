import React, { useState } from "react";
import { Container } from "reactstrap";
import BackBtn from "../BackBtn";
import DeliveryNav from "../DeliveryNav";
import avatar from "../../../assets/images/users/avatar-2.jpg";
import "./profile.scss";
import SweetAlert from "react-bootstrap-sweetalert";
import ProfileStatus from "./ProfileStatus";

const Profile = () => {
  //FormData

  const [formData, setFormData] = useState({
    name: "Govind Sharma",
    email: "govind.s@eazr.in",
    contact: "8786547645",
    location: "Powai",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, contact, location } = formData;

  // Alert on Actions
  const [sweetAlerts, setSweetAlerts] = useState({
    dynamic_title: "",
    dynamic_description: "",
    success_confirm: false,
    alert_confirm: false,
    update_confirm: false,
  });

  const handleAlert = () => {
    setSweetAlerts({
      alert_confirm: true,
    });
  };

  //Updating Form

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleUpdate = () => {
    setSweetAlerts({
      update_confirm: true,
    });
  };

  return (
    <div className="page-content inner-delivery-page">
      <Container fluid>
        {sweetAlerts.success_confirm ? (
          <SweetAlert
            success
            title={sweetAlerts.dynamic_title}
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => {
              setSweetAlerts({ success_confirm: false, alert_confirm: false });
            }}
          >
            {sweetAlerts.dynamic_description}
          </SweetAlert>
        ) : null}
        {sweetAlerts.alert_confirm ? (
          <SweetAlert
            title="Are you sure?"
            warning
            showCancel
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() =>
              setSweetAlerts({
                success_confirm: true,
                alert_confirm: false,
                dynamic_title: "Deleted!",
                dynamic_description: "Delivery Partner has been deleted.",
              })
            }
            onCancel={() => {
              setSweetAlerts({
                alert_confirm: false,
              });
            }}
          >
            You won't be able to revert this!
          </SweetAlert>
        ) : null}
        <BackBtn route="delivery" />
        <DeliveryNav />
        <div className="delivery-partner-profile">
          <div className="delivery-profile-pic-div">
            <img src={avatar} alt="" />
          </div>
          <div className="delivery-partner-details">
            <h6>{name}</h6> <br />{" "}
            <span className="delivery-partner-ratings">
              {" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i>{" "}
            </span>
            <br />
            <span className="number-of-reviews">Based on 23 reviews</span>
            <div className="delivery-partner-personal-details">
              <div>
                <i className="fas fa-phone-alt mr-2"></i>
                <p>{contact}</p>
              </div>
              <div>
                <i className=" fas fa-map-marker-alt mr-2"></i>
                <p>{location}</p>
              </div>
              <div>
                <i className="mdi mdi-email mr-2"></i>
                <p>{email}</p>
              </div>
            </div>
            <div className="delivery-profile-btn">
              <button className="edit-btn" onClick={handleEdit}>
                {" "}
                Edit
              </button>

              <button className="delete-btn" onClick={handleAlert}>
                Delete
              </button>
            </div>
          </div>
        </div>
        {/* <ProfileStatus /> */}
        <div
          className="update-delivery-partner-section"
          style={{ display: isEdit ? "grid" : "none" }}
        >
          <div>
            <h6 htmlFor="">Name</h6> <br />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Govind Sharma"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h6 htmlFor="">Email</h6> <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="govind.s@eazr.in"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h6 htmlFor="">Contact</h6> <br />
            <input
              type="text"
              name="contact"
              value={contact}
              placeholder="9XXXXXXXXX"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h6 htmlFor="">Location</h6> <br />
            <input
              type="text"
              name="location"
              value={location}
              placeholder="Powai"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="delivery-partner-update-btn">
            {sweetAlerts.update_confirm ? (
              <SweetAlert
                success
                title="Profile Updated"
                confirmBtnBsStyle="success"
                onConfirm={() => {
                  setSweetAlerts({
                    update_confirm: false,
                  });
                  setIsEdit(false);
                }}
              ></SweetAlert>
            ) : null}
            {""} <br />
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
