import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MiniWidgets from "../MiniWidgets";
import RevenueAnalytics from "../RevenueAnalytics";
import SalesAnalytics from "../SalesAnalytics";
import EarningReports from "../EarningReports";
import RecentlyActivity from "../RecentlyActivity";
import { connect } from "react-redux";
import "../dashboard.scss";
import { getPartners } from "../../../store/partners/actions";
class ShowTotalNumberOfOnboardingPartner extends Component {
  componentDidMount() {
    this.props.getPartners();
  }

  render() {
    const { partners } = this.props;
    return (
      <>
        <div>{partners?.length}</div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  partners: state.partners.partners,
});


export default connect(mapStateToProps, { getPartners })(ShowTotalNumberOfOnboardingPartner);
