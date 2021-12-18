import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../../../components/BreadCrumbs/BreadCrumb";
import img from "../../../../../assets/images/npdrugs.png";
import "./innerproduct.scss";

const InnerProduct = () => {
  return (
    <div className="page-content inner-product">
      <Container fluid>
        <BreadCrumb route="products" sourcePage="Products" currentPage="Id" />
        <div className="product-detail-container">
          <div className="product-img">
            <img src={img} alt="" />
          </div>
          <div className="product-details">
            <div className="first-row">
              <h5>Product Description</h5>
              <Link to="/edit-product">
                {" "}
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
            <h6 className="second-row"> Product Name : Medicine XYZ</h6>
            <div className="third-row">
              <h6>QTY : 150 ml</h6>
              <h6>Price : ₹ 200</h6>
            </div>
            <h6 className="fourth-row">Product Specification</h6>
            <div className="fifth-row">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                pariatur sapiente fuga error blanditiis suscipit, possimus
                nesciunt mollitia id deserunt temporibus cumque ducimus odio
                dolor autem consequuntur? Minus, incidunt optio. nesciunt
                mollitia id deserunt temporibus cumque ducimus odio dolor autem
                consequuntur? Minus, incidunt optio.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InnerProduct;
