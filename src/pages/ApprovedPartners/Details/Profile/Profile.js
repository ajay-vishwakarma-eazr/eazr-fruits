import React, { useEffect, useState } from "react";
import BackBtn from "../BackBtn";
import DetailsNav from "../DetailsNav";
import { Container } from "reactstrap";
import avatar from "../../../../assets/images/users/avatar-2.jpg";
import avatar1 from "../../../../assets/images/users/avatar-3.jpg";
import "./profile.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ip } from "../../../../config/config";
import { updateProfile } from "../../../../store/businessprofiles/actions/actions";
import setAuthToken from "../../../../utils/setAuthToken";

const Profile = () => {
  const { partner } = useSelector((state) => state.businessPartner);
  
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  // console.log(partner);
  console.log(setAuthToken);

  // console.log("flatNumber >>", partner.address.flatNumber);

  let flatNumber = partner.address.flatNumber;
  let buildingName = partner.address.buildingName;
  let streetName = partner.address.streetName;
  let state = partner.address.state;
  let country = partner.address.country;
  let area = partner.address.area;
  let landmark = partner.address.landmark;


  const [profileData, setProfileData] = useState({
    name: partner.businessName,
    email: partner.email,
    contact: partner.mobile,
    shortBio: partner.shortBio,
    address:
      flatNumber +
      "," +
      buildingName +
      "," +
      streetName +
      "," +
      area +
      "," +
      landmark +
      "," +
      state +
      "," +
      country,

    city: partner.address.city,
    state: partner.address.state,
    pincode: partner.address.pincode,
    profileImg: partner.address.profileDp,
    flatNumber: partner.address.flatNumber,
    buildingName: partner.baddress.uildingName,
    landmark: partner.address.landmark,
    streetName: partner.address.streetName,
    area: partner.address.area,
    country: partner.address.country,
  });

  const [isEdit, setIsEdit] = useState(false);

  const updateButtonFunc = () => {
    setIsEdit(!isEdit);
    const formData = new FormData();

    formData.append("id", partner.businessPartner);
    formData.append("name", profileData.name);
    formData.append("email", profileData.email);
    formData.append("contact", profileData.contact);
    formData.append("city", profileData.city);
    formData.append("state", profileData.state);
    formData.append("pincode", profileData.pincode);
    formData.append("country", profileData.country);
    formData.append("flatNumber", profileData.flatNumber);
    formData.append("buildingName", profileData.buildingName);
    formData.append("landmark", profileData.landmark);
    formData.append("streetName", profileData.streetName);
    formData.append("area", profileData.area);
    formData.append("address", profileData.address);
    formData.append("shortBio", profileData.shortBio);
    formData.append("profileDp", file);

    dispatch(updateProfile(formData));

    /*axios
    .post(`${ip}/admin/businessprofiles/updatebusinessprofile`,formData
    
    ,  {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/
  };
  /*
  useEffect(() => {
    axios
      .post(`${ip}/admin/businessprofiles/updatebusinessprofile`, {
        id: partner.businessPartner,
        name: profileData.name,
        email: profileData.email,
        mobile: profileData.contact,
        city: profileData.city,
        state: profileData.state,
        pincode: profileData.pincode,
      
        /*country:"India",
    flatNumber:"B/72",
     buildingName:"Aroma Chs",
     landmark:"Near Powai Plaza",
     streetName:"Sv Road",
      area:"Powai",
        country: profileData.country,
        flatNumber: profileData.flatNumber,
        buildingName: profileData.buildingName,
        landmark: profileData.landmark,
        streetName: profileData.streetName,
        area: profileData.area,
        address: profileData.address,
        shortBio: profileData.shortBio,
        profileDp: file,
        // area:profileData.address
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [profileData]);*/
  const ChangeImage = (e) => {
    if (e.target.files.length !== 0) {
      setFile(e.target.files[0]);
      /* setProfileData({
  
     profileImg: URL.createObjectURL(e.target.files[0]),
   })*/
    }
  };
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  //console.log(file)
  console.log(profileData);
  console.log(profileData.profileImg);

  return (
    <>
      <div className="page-content profile-page">
        <Container fluid>
          <BackBtn route="partners" />

          <DetailsNav />
          <div className="profile-content-container">
            <div className="profile-img-div">
              <img
                src={
                  partner.profileDp
                    ? `${ip}/business/images/profile/${partner.profileDp}`
                    : avatar
                }
                alt=""
              />

              {isEdit && (
                <>
                  <label htmlFor="file">
                    <i className="fas fa-edit"></i>
                  </label>
                  <input
                    style={{ display: "none" }}
                    type={isEdit ? "file" : "image"}
                    id="file"
                    onChange={ChangeImage}
                  />{" "}
                </>
              )}
            </div>

            <div className="profile-content">
              <div>
                <h6>Name</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="name"
                  value={profileData.name}
                  placeholder="Eazr"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Contact</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="contact"
                  value={profileData.contact}
                  placeholder="98XXXXXXXX"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Email</h6>
                <input
                  disabled={!isEdit}
                  type="email"
                  name="email"
                  value={profileData.email}
                  placeholder="eazr@eazr.in"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Short Bio</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="shortBio"
                  value={profileData.shortBio}
                  placeholder="Entreprenuer"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Flat No</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="flatNumber"
                  value={profileData.flatNumber}
                  placeholder="Flat Number"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Building Name</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="buildingName"
                  value={profileData.buildingName}
                  placeholder="Building Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Street Name</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="streetName"
                  value={profileData.streetName}
                  placeholder="Street Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Landmark</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="landmark"
                  value={profileData.landmark}
                  placeholder="Landmark"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Area</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="area"
                  value={profileData.area}
                  placeholder="Area"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Country</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="country"
                  value={profileData.country}
                  placeholder="Country"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <h6>City</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="city"
                  value={profileData.city}
                  placeholder="Mumbai"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>State</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="state"
                  value={profileData.state}
                  placeholder="Maharashtra"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h6>Pincode</h6>
                <input
                  disabled={!isEdit}
                  type="text"
                  name="pincode"
                  value={profileData.pincode}
                  placeholder="4XXXX76"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="edit-btn-div">
                <br />
                {isEdit ? (
                  <button
                    className="profile-edit-btn"
                    onClick={
                      // () => setIsEdit(!isEdit)
                      updateButtonFunc
                    }
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="profile-edit-btn"
                    onClick={() => setIsEdit(!isEdit)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
