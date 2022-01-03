import React, { Component } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import "../../../partner.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
//Actions
import { getTranscationById } from "../../../../../store/transactions/actions/action";
import EmptySection from "../../../../../components/EmptySection/EmptySection";
import PartnerTrancationsRow from "./PartnerTrancationsRow";
import PartnerTranscationsHeading from "./PartnerTranscationsHeading";
class PartnerAllTransactions extends Component {
  constructor() {
    super();
    this.state = {
      searchPartner: "",
      partnerList: null,
    };
  }
  componentDidMount() {
    this.props.getTranscationById();
  }

  handleSearch = (e) => {
    this.setState({
      searchPartner: e.target.value,
    });

    const searchablePartner = e.target.value;

    const filtered = this.props.partners.partners.filter((filter) => {
      return (
        filter.businessName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.businessEmail
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.serviceNumber
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.status.status
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.phone.includes(searchablePartner) ||
        filter.serviceIds.some((sId) =>
          sId.serviceId.includes(searchablePartner)
        )
      );
    });

    this.setState({
      partnerList: filtered,
    });
  };

  render() {
    const { partners } = this.props;
    let data;
    if (partners.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (partners.partners && partners.partners.length > 0) {
      data = (
        <div className="table-rep-plugin">
          <div
            className="table-responsive mb-0"
            data-pattern="priority-columns"
          >
            <Table
              center
              // striped
              // bordered
              responsive
              className="partner-approval-table"
            >
              <PartnerTranscationsHeading />
              {this.state.searchPartner
                ? this.state.partnerList.map((item, index) => (
                    <PartnerTrancationsRow
                      key={index}
                      id={item._id}
                      // transactions={item.transactions}
                    />
                  ))
                : partners.partners.map((item, index) => {
                    return (
                      <PartnerTrancationsRow
                        key={index}
                        id={item._id}
                        transactions={item.transactions}
                      />
                    );
                  })}
            </Table>
          </div>
        </div>
      );
    } else {
      data = <EmptySection />;
    }

    return (
      <div className="partner">
        <Container fluid>
          <Card className="partner-table-approval">
            <div className="search-partner">
              <div>
                <label htmlFor="">Search Partner: </label>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleSearch}
                  value={this.state.searchPartner}
                />
              </div>
            </div>

            <CardBody>{data}</CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, { getTranscationById })(
  PartnerAllTransactions
);
