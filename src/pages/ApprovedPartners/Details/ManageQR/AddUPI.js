import React, { useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";

const AddUPI = ({ status, upiId, index, deleteUpi,saveUpi }) => {
  const [sweetAlerts, setSweetAlerts] = useState({
    dynamic_title: "",
    dynamic_description: "",
    success_confirm: false,
    alert_confirm: false,
  });
  const [isChecked, setIsChecked] = useState(status);

  const handleChange = () => {
    if (isChecked) {
      setSweetAlerts({
        alert_confirm: true,
      });
    }
  };

  const removeUpi = (index) => {
    deleteUpi(index);
  };
  
  return (
    <div className="upi-list">
      {sweetAlerts.success_confirm ? (
        <SweetAlert
          success
          title={sweetAlerts.dynamic_title}
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          onConfirm={() => {
            setSweetAlerts({ success_confirm: false, alert_confirm: false });
            setIsChecked(false);
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
              dynamic_title: "Disabled!",
              dynamic_description: "UPI has been disabled.",
            })
          }
          onCancel={() => {
            setSweetAlerts({
              alert_confirm: false,
            });
            setIsChecked(true);
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      ) : null}
      <h6>{upiId}</h6>
      <div>
        <FormControlLabel
          className="enable-disable"
          control={
            <Switch
              onChange={handleChange}
              checked={isChecked}
              color="none"
              style={{
                color: isChecked ? "green" : "#DD5C64",
              }}
            />
          }
        />
        <i className="mdi mdi-delete" onClick={()=>deleteUpi(upiId)}></i>
      </div>
    </div>
  );
};

export default AddUPI;
