import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../MiniWidgets";
import RevenueAnalytics from "../RevenueAnalytics";
import SalesAnalytics from "../SalesAnalytics";
import EarningReports from "../EarningReports";
import RecentlyActivity from "../RecentlyActivity";
import "../dashboard.scss";
import ShowTotalNumberOfPartner from "../PartnerDashboard/ShowTotalNumberOfPartner";
import ShowTotalNumberOfUsers from "../UserDashboard/ShowTotalNumberOfUsers";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          icon: "fas fa-user",
          title: "Total Customers",
          value: <ShowTotalNumberOfUsers/>,
          rate: "2.4%",
          route: "/users",
          desc: "From previous period",
        },
        {
          icon: "fas fa-user-tie",
          title: "Total Partners",
          value: <ShowTotalNumberOfPartner/>,
          rate: "2.4%",
          route: "/partner-dashboard",
          desc: "From previous period",
        },

        {
          icon: "fas fa-users",
          title: "People Online",
          value: "171",
          rate: "2.4%",
          route: "#",
          desc: "From previous period",
        },

      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-content dashboard">
          <Container fluid>
            <Row>
              <Col xl={8}>
                <Row>
                  <MiniWidgets reports={this.state.reports} />
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
            <Row>
              <Col xl={4}>
                <RecentlyActivity />
              </Col>
              <Col xl={8}>
                <RevenueAnalytics />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
