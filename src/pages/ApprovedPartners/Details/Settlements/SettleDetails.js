import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";
import Settlements from "./Settlements";
import "../details.scss";
import DetailsNav from "../DetailsNav";
import BackBtn from "../BackBtn";

const Details = () => {
  const history = withRouter();

  const goToSettlementSettings = () => {
    history.push("/settlement-setting");
  };
  const [searchText,setSearchText]=useState("");
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
              <div>
                <select name="" id="">
                  <option>All Settlements</option>
                  <option>Completed Settlements</option>
                  <option>Refunded Settlements</option>
                  <option>Failed Settlements</option>
                </select>

                <i
                  className="ri-settings-2-line"
                  onClick={goToSettlementSettings}
                ></i>
              </div>
            </div>
            <Settlements 
            text={searchText}
            />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
