import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../MiniWidgets";
import RevenueAnalytics from "../RevenueAnalytics";
import SalesAnalytics from "../SalesAnalytics";
import EarningReports from "../EarningReports";
import "../dashboard.scss";
import ShowTotalNumberOfOnboardingPartner from "./ShowTotalNumberOfOnboardingPartner";
import ShowTotalNumberOfPartner from "./ShowTotalNumberOfPartner";

class StarterPage extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          icon: "fas fa-user",
          title: "Total Partners",
          value: <ShowTotalNumberOfPartner />,
          rate: "2.4%",
          desc: "From previous period",
          route: "/total-partner",
        },
        {
          icon: "fas fa-user-tie",
          title: "Onboarding Partners",
          // value: <ShowTotalNumberOfOnboardingPartner />,
          value: "0",
          rate: "2.4%",
          desc: "From previous period",
          route: "/partner-approval",
        },
        {
          icon: "fas fa-users",
          title: "Partners Online",
          value: "171",
          rate: "2.4%",
          desc: "From previous period",
          route: "#",
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
                  <MiniWidgets  reports={this.state.reports} />
                </Row>

                {/* revenue Analytics */}
                <RevenueAnalytics />
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                <SalesAnalytics />

                {/* earning reports */}
                <EarningReports />
              </Col>
            </Row>

            {/* <Row>
              <Col xl={4}>
                <RecentlyActivity />
              </Col>
              <Col xl={8}>
                            <col xl={4}>
                <RecentlyActivity />
              </col>
                <RevenueAnalytics />
              </Col>
            </Row> */}
          </Container>
        </div>
      </>
    );
  }
}

export default StarterPage;
