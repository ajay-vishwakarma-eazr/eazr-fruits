import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";
import Transaction from "./Transaction";
import DetailsNav from "../DetailsNav";
import BackBtn from "../BackBtn";
import "../details.scss";

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
              <input type="text" placeholder="Search..."  onChange={searchTextFunc} value={searchText} />
              <select  value={selectOption} onChange={selectOptionFunc}>
                <option value="All Transactions">All Transactions</option>
                <option value="Completed">Completed Transactions</option>
                <option value="Refunded">Refunded Transactions</option>
                <option value="Failed">Failed Transactions</option>
              </select>
            </div>
            <Transaction 
             text={searchText} 
             option={selectOption}
               />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
