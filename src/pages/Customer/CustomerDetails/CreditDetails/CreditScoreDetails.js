import React, { useEffect, useState, useCallback, PureComponent } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import CreditTableHeading from "./CreditTableHeading";
import CreditTableRow from "./CreditTableRow";
import "./credit.scss";
import { useDispatch, connect, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import ReactPaginate from "react-paginate";
// import EmptySection from "../../../components/EmptySection/EmptySection";
import { useParams, withRouter } from "react-router-dom";
import BackBtn from "../../BackBtn";
import { calculateCreditScore } from "../../../../store/adminusers/actions/actions";
import Loader from "../../../Loader/Loader";
import NoCredit from "../../../Loader/NoCredit";
import CustomersNav from "../../CustomerNav";

class CreditScoreDetails extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const contact = this.props.match.params.contact;
    const calScore = { phone: contact };
    this.props.calculateCreditScore(calScore);
  }

  render() {
    let data;

    if (this.props.credit.loading === true) {
      data = (
        <Loader />
        // <div className="spinner-div">
        // </div>
      );
    } else if (
      this.props.credit.credit !== "null" &&
      this.props.credit.credit !== undefined
    ) {
      data = (
        <div className="table-rep-plugin">
          <div
            className="table-responsive mb-0"
            data-pattern="priority-columns"
          >
            <Table
              center
              striped
              // bordered
              responsive
              // className="search-partner"
            >
              <CreditTableHeading />
              {[this.props.credit.credit].map((creditData, index) => {
                return (
                  <CreditTableRow 
                    key={index}
                    contactScore={creditData[`Contact score`]}
                    deviceScore={creditData.Device_Score}
                    Location_Score={creditData.Location_Score}
                    numberOfFinapps={creditData[`Number of financial apps`]}
                    financialapp_score={creditData.financialapp_score}
                    finAppList={this.props.credit.credit[
                      "financial app list"
                    ]?.map((data) => {
                      return <p>{data}</p>;
                    })}
                    contacts={Object.entries(
                      this.props.credit.credit["Top_5_contacts"]
                    ).map((key) => {
                      return <p>{key}</p>;
                    })}
                  />
                );
              })}
            </Table>
          </div>
        </div>
      );
    } else {
      data = (
        <div>
          <div style={{ marginTop: "70px" }}>
            <NoCredit />
          </div>

          <h4 style={{ textAlign: "center", marginTop: "50px" }}>
            No credit score given !!
          </h4>
        </div>
      );
    }
    return (
      <div className="page-content partner">
        <Container fluid>
          <BackBtn route="users" />
          <CustomersNav />
          <Card >
            {/* <div className="search-partner"></div> */}
          <Row >
            <Col  xs={12}>{data}</Col>
          </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credit: state.Users,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    calculateCreditScore,
  })(CreditScoreDetails)
);
