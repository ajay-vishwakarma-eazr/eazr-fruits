import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../MiniWidgets";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../store/supportTickets/actions/action";
import ReactPaginate from "react-paginate";
import SingleTicket from "../../HelpAndSupport/Tickets/SingleTicket";
import profile from "../../.././assets/images/nouser.png";
import RevenueAnalytics from "../RevenueAnalytics";
import SalesAnalytics from "../SalesAnalytics";
import EarningReports from "../EarningReports";
import RecentlyActivity from "../RecentlyActivity";
import "../dashboard.scss";
import NumberofpartnerTickets from './TotalPartnerTickets'

class SupportDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          icon: "fas fa-user",
          title: "Total Partner Tickets",
          value: <NumberofpartnerTickets />,
          route: "support-tickets",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "fas fa-user-tie",
          title: "Total User Tickets",
          value: "0",
          rate: "2.4%",
          desc: "From previous period",
        },
      ]
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
                {/* <RevenueAnalytics /> */}
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                {/* <SalesAnalytics /> */}

                {/* earning reports */}
                {/* <EarningReports /> */}
              </Col>
            </Row>
            <Row>
              <Col xl={4}>
                {/* <RecentlyActivity /> */}
              </Col>
              <Col xl={8}>
                {/* <RevenueAnalytics /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default SupportDashboard;
