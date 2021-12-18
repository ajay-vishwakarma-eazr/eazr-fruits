import React, { useState } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../../components/BreadCrumbs/BreadCrumb";

import ProductUpload from "../EditProduct/ProductUpload";

const AddProduct = () => {
  return (
    <div className="page-content edit-product">
      <Container fluid>
        <BreadCrumb route="products" sourcePage="Products" currentPage="Id" />

        <div className="edit-product-content">
          <div>
            <h6>Product Name</h6>
            <input type="text" placeholder="Crocin" />
          </div>
          <div>
            <h6>Product QTY</h6>
            <input type="text" placeholder="200" />
          </div>
          <div>
            <h6>Select Category</h6>
            <select name="" id="">
              <option value="">Medicine</option>
              <option value="">Personal Care</option>
              <option value="">Suppliment</option>
              <option value="">Equipment</option>
            </select>
          </div>
          <div>
            <h6>Product Price</h6>
            <input type="text" placeholder="₹ 500" />
          </div>
          <div>
            <h6>Product Stock</h6>
            <input type="text" placeholder="700" />
          </div>
          <div>
            <h6>Product Description</h6>
            <textarea
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Provides Pain Relief"
            ></textarea>
          </div>
        </div>
        <ProductUpload />
        <button className="edit-product-btn">ADD</button>
      </Container>
    </div>
  );
};

export default AddProduct;
