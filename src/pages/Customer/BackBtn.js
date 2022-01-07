import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../ApprovedPartners/Details/details.scss";
import avatar from "../../assets/images/users/avatar-3.jpg";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchUserById } from "../../store/adminusers/actions/actions";


const BackBtn = ({ route }) => {
  const { users } = useSelector((state) => state.Users);

  const dispatch = useDispatch();
  // let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  const [formData, setFormData] = useState({
    name: users.fullName,
    selfie: users.selfie,
  });

  const {
    name,
    selfie,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="approved-back-btn">
      <Link to={`/${route}`}>
        <i className="mdi mdi-arrow-left-circle "></i> <h6>Go back</h6>
      </Link>
      <Link to="user-profile">
        <div className="partner-profile">
          <div className="profile-pic">
            <img src={selfie} alt="" />
          </div>
          <h5>{name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default BackBtn;
