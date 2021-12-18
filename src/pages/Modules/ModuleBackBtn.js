import React from "react";
import { Link } from "react-router-dom";

const ModuleBackBtn = ({ route }) => {
  return (
    <div className="approved-back-btn">
      <Link to={`/${route}`}>
        <i class="mdi mdi-arrow-left-circle "></i> <h6>Go back</h6>
      </Link>
    </div>
  );
};

export default ModuleBackBtn;
