import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../MiniWidgets";
import RevenueAnalytics from "../RevenueAnalytics";
import SalesAnalytics from "../SalesAnalytics";
import EarningReports from "../EarningReports";
import RecentlyActivity from "../RecentlyActivity";
import "../dashboard.scss";
import ShowTotalNumberOfUsers from "./ShowTotalNumberOfUsers";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          icon: "fas fa-user",
          title: "Total Users",
          value: <ShowTotalNumberOfUsers/>,
          route: "users",
          rate: "2.4%",
          desc: "From previous period",
        },
        // {
        //   icon: "fas fa-user-tie",
        //   title: "New Users",
        //   value: "300",
        //   rate: "2.4%",
        //   route: "/users",
        //   desc: "From previous period",
        // },

        // {
        //   icon: "fas fa-users",
        //   title: "Users Online",
        //   value: "0",
        //   rate: "2.4%",
        //   route: "#",
        //   desc: "From previous period",
        // },
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
                <RevenueAnalytics />
              </Col>

              <Col xl={4}>
                <SalesAnalytics />
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

export default UserDashboard;
