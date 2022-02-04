import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../Dashboard/MiniWidgets";
import RevenueAnalytics from "../Dashboard/RevenueAnalytics";
import SalesAnalytics from "../Dashboard/SalesAnalytics";
import EarningReports from "../Dashboard/EarningReports";
import RecentlyActivity from "../Dashboard/RecentlyActivity";
import "./Style.scss";
import TotalPartnerTypes from "./TotalPartnerTypes";
import TotalPartnerCategories from "./TotalPartnerCategories";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          icon: "fas fa-users",
          title: "Partner Types",
          value: <TotalPartnerTypes/>,
          route: "partner-types",
          rate: "2.4%",
          desc: "From previous period",
        },

        {
          icon: "fas fa-users",
          title: "Partner Categories",
          value: <TotalPartnerCategories/>,
          rate: "2.4%",
          route: "partner-category",
          desc: "From previous period",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="page-content dashboard">
          <Container fluid>
            <Row>
              <Col xl={8}>
                <Row>
                  <MiniWidgets reports={this.state.reports} />
                </Row>
                <RevenueAnalytics />
              </Col>

              <Col xl={4}>
                <SalesAnalytics />
                <EarningReports />
              </Col>
            </Row>
            {/* <Row>
              <Col xl={4}>
                <RecentlyActivity />
              </Col>
              <Col xl={8}>
                <RevenueAnalytics />
              </Col>
            </Row> */}
          </Container>
        </div>
      </>
    );
  }
}

export default Index;