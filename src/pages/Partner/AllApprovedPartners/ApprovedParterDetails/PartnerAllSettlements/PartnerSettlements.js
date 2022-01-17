import React, { Component } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import "../../../partner.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
//Actions
import ReactPaginate from "react-paginate";
import EmptySection from "../../../../../components/EmptySection/EmptySection";
import PartnerSettlementsRow from "./PartnerSettlementsRow";
import PartnerSettlementsHeading from "./PartnerSettlementsHeading";
import BackBtn from "../../../../BackBtn";
import PartnerDetailsTab from "../PartnerDetailsTab/PartnerDetailsTab";
import { fetchSettlementsById } from "../../../../../store/settlement/actions/action";

class PartnerSettlements extends Component {
  constructor() {
    super();
    this.state = {
      searchSettlements: "",
      settlementsList: null,
      pageNumber: 0,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSettlementsById(id);
  }

  handleSearch = (e) => {
    this.setState({
      searchSettlements: e.target.value,
    });

    const searchableSettlements = e.target.value;
    const filtered = this.props.settlements.settlements.filter((filter) => filter.amount.includes(searchableSettlements));
    debugger;
    this.setState({
      settlementsList: filtered,
    });
  };

  render() {
    const { settlements } = this.props;

    const usersPerPage = 10;
    const pageVisited = this.state.pageNumber * usersPerPage;

    const pageCount = Math.ceil(
      this.props.settlements.settlements?.length / usersPerPage
    );

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };

    let data;
    if (settlements?.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (
      settlements?.settlements &&
      settlements?.settlements.length > 0
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
              className="partner-approval-table"
            >
              <PartnerSettlementsHeading />
              {this.state.searchSettlements
                ? this.state.settlementsList.map((settlement, index) => (
                    <PartnerSettlementsRow
                      key={index}
                      c
                      amount={settlement.amount}
                      partnerAmount={settlement.partnerAmount}
                      upi={settlement.partner.upi}
                      gst={settlement.gst}
                      createdAt={settlement.createdTimestamp.slice(0, 8)}
                    />
                  ))
                : settlements?.settlements
                    .slice(pageVisited, pageVisited + usersPerPage)
                    .map((settlement, index) => {
                      return (
                        <PartnerSettlementsRow
                          key={index}
                          partnerName={settlement.partner.businessName}
                          amount={settlement.amount}
                          partnerAmount={settlement.partnerAmount}
                          commision={settlement.commision}
                          gst={settlement.gst}
                          createdAt={settlement.createdTimestamp.slice(0, 10)}
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
      <>
        <div className="page-content customer-page ">
          <Container fluid>
            <BackBtn route="approved-partner" />
            <PartnerDetailsTab />
          </Container>
          <div className="partner">
            <Container fluid>
              <Card className="partner-table-approval">
                <div className="search-partner">
                  <div>
                    <label htmlFor="">Search settlements: </label>
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={this.handleSearch}
                      value={this.state.searchSettlements}
                    />
                  </div>
                </div>

                <CardBody>{data}</CardBody>

                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </Card>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settlements: state.settlement,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSettlementsById })(PartnerSettlements)
);

// export default withRouter(connect(mapStateToProps, null)(App));
