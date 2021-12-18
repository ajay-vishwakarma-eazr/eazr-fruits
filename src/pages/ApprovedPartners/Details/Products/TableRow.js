import React, { useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { UncontrolledTooltip } from "reactstrap";
import { withRouter, Link } from "react-router-dom";

const TableRow = ({
  photo,
  name,
  qty,
  category,
  price,
  dateAndTime,
  stock,
  status,
  edit,
}) => {
  const [isChecked, setIsChecked] = useState(status);
  const history = withRouter();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRedirect = () => {
    history.push("/product/id");
  };
  return (
    <tr style={{ opacity: isChecked ? 1 : 0.2 }}>
      <td className="product-img">
        <img src={photo} alt="" />
      </td>
      <td onClick={handleRedirect}>{name}</td>
      <td onClick={handleRedirect}>{qty}</td>
      <td onClick={handleRedirect}>{category}</td>
      <td onClick={handleRedirect}>₹{price}</td>
      <td onClick={handleRedirect}>{dateAndTime}</td>
      <td onClick={handleRedirect}>{stock}</td>
      <td>
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
      </td>
      <td>
        <UncontrolledTooltip target={"edit"} placement="top">
          Edit
        </UncontrolledTooltip>
        <Link to="/edit-product">
          <i className="ri-pencil-fill" id="edit"></i>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
