import React, { useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";

const SingleModule = ({ moduleName, status }) => {
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
    } else {
      setIsChecked(true);
    }
  };

  return (
    <div className="module-card shadow">
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
              dynamic_description: "Module has been disabled.",
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
      <h6>{moduleName}</h6>
      <FormControlLabel
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
    </div>
  );
};

export default SingleModule;
