import React, { useState } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../../components/BreadCrumbs/BreadCrumb";
import "./editproduct.scss";
import ProductUpload from "./ProductUpload";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    productName: "Crocin",
    productQty: "200",
    category: "Medicine",
    productPrice: "500",
    productStock: "700",
    productDescription: "Provides Pain Relief",
  });

  console.log(productData);

  return (
    <div className="page-content edit-product">
      <Container fluid>
        <BreadCrumb route="products" sourcePage="Products" currentPage="Id" />

        <div className="edit-product-content">
          <div>
            <h6>Product Name</h6>
            <input
              name="productName"
              type="text"
              placeholder="Crocin"
              value={productData.productName}
              onChange={(e) =>
                setProductData({ ...productData, productName: e.target.value })
              }
            />
          </div>
          <div>
            <h6>Product QTY</h6>
            <input
              name="productQty"
              type="text"
              placeholder="200"
              value={productData.productQty}
              onChange={(e) =>
                setProductData({ ...productData, productQty: e.target.value })
              }
            />
          </div>
          <div>
            <h6>Select Category</h6>
            <select
              name="category"
              id=""
              value={productData.category}
              onChange={(e) =>
                setProductData({ ...productData, category: e.target.value })
              }
            >
              <option value="Medicine">Medicine</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Suppliment">Suppliment</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>
          <div>
            <h6>Product Price (₹)</h6>
            <input
              name="productPrice"
              type="text"
              placeholder="500"
              value={productData.productPrice}
              onChange={(e) =>
                setProductData({ ...productData, productPrice: e.target.value })
              }
            />
          </div>
          <div>
            <h6>Product Stock</h6>
            <input
              name="productStock"
              type="text"
              placeholder="700"
              value={productData.productStock}
              onChange={(e) =>
                setProductData({ ...productData, productStock: e.target.value })
              }
            />
          </div>
          <div>
            <h6>Product Description</h6>
            <textarea
              name="productDescription"
              id=""
              cols="30"
              rows="1"
              placeholder="Provides Pain Relief"
              value={productData.productDescription}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  productDescription: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <ProductUpload />
        <button className="edit-product-btn">Update</button>
      </Container>
    </div>
  );
};

export default EditProduct;
