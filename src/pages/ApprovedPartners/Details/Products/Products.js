import React, { useEffect, useState } from "react";
import { Container, Table, Card, CardBody } from "reactstrap";
import "./products.scss";
import BackBtn from "../BackBtn";
import DetailsNav from "../DetailsNav";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import img from "../../../../assets/images/npdrugs.png";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchProductRequest,
  FetchProductFailure,
  FetchProductSuccess,
  fetchProducts,
} from "../../../../store/products/actions/action";
import axios from "axios";
import { FormControlLabel, Switch } from "@material-ui/core";
import { ProductReducer } from "../../../../store/products/reducers/reducer";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

const Products = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const SearchTextFunc = (e) => {
    setSearchText(e.target.value);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  let today = new Date();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(partner);
  }, []);
  const { partner } = useSelector((state) => state.businessPartner);

  let Newdate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return (
    <div className="page-content products">
      <Container fluid>
        <BackBtn route="approved-partner-details" />
        <DetailsNav />
        <Card className="product-table-card">
          <CardBody>
            <div className="product-heading">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={SearchTextFunc}
              />
              <Link to="add-product">
                <button>Add Product</button>
              </Link>
            </div>
            <div className="table-rep-plugin">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table
                center
                  // striped
                  // bordered
                  responsive
                  className="product-table"
                >
                  <TableHeading />

                  {/*{products.map((product)=>
               
               <div>
               {product.R.map((e)=>
               <div>{e.name}</div>
               )}
                      </div>
                 
                  
               )}*/}

                  {products
                    .filter((product) => {
                      if (searchText !== "") {
                        return (
                          Object.values(product)
                            .join(" ")
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                          product.product_categories.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        );
                      } else {
                        return product;
                      }
                    })
                    .map((product) =>
                      product.businessPartner == partner.businessPartner ? (
                        <TableRow
                          photo={img}
                          name={product.name}
                          qty={product.quantity}
                          category={product.product_categories.name}
                          price={product.cost}
                          dateAndTime={product.createdAt.substr(0, 10)}
                          stock={product.quantity}
                          status={true}
                        />
                      ) : null
                    )}
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Products;
