import React, { useState } from "react";
import { Link ,withRouter} from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";
import Orders from "./Orders";
import "../details.scss";
import DetailsNav from "../DetailsNav";
import BackBtn from "../BackBtn";

const Details = (props) => {
  const[selectOption,setSelectOption]=useState("");
const [searchText,setSearchText]=useState("");

const selectOptionFunc=(e)=>{
  setSelectOption(e.target.value);
}
const searchTextFunc=(e)=>{
  setSearchText(e.target.value);
}


  return (
    <div className="page-content approved-partners-details ">
      <Container fluid>
        <BackBtn route="partners" />
        <DetailsNav />
        <Card>
          <CardBody>
            <div className="detail-heading">
              <input type="text" placeholder="Search..." onChange={searchTextFunc} value={searchText} />
              <select value={selectOption} onChange={selectOptionFunc}>
                <option value="All Orders">All Orders</option>
                <option value="Pending">Pending</option>
                <option value="Preparing">Preparing</option>
                <option value="Completed">Completed</option>
                <option value="Ready To Dispatch">Ready To Dispatch</option>
                <option value="Dispatched">Dispatched</option>
              </select>
            </div>
            <Orders 
             text={searchText} 
             option={selectOption}/>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
