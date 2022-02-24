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
import {
  fetchSettlementsById,
  searchPartnerSettlements,
} from "../../../../../store/settlement/actions/action";

class PartnerSettlements extends Component {
  constructor() {
    super();
    this.state = {
      searchSettlements: "",
      settlementsList: null,
      pageNumber: 1,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSettlementsById(id, this.state.pageNumber);
    // this.props.searchPartnerSettlements(id,"W");
    console.log(this.state.pageNumber);
  }

  handleSearch = (e) => {
    this.setState({
      searchSettlements: e.target.value,
    });
    const id = this.props.match.params.id;
    this.props.searchPartnerSettlements(id, this.state.searchSettlements);
    console.log(this.state.searchSettlements);
  };

  changePage = ({ selected }) => {
    const newSelect = selected + 1;
    this.setState({ pageNumber: newSelect });
    const id = this.props.match.params.id;
    this.props.fetchSettlementsById(id, (this.state.pageNumber = newSelect));
  };

  render() {
    const { settlements } = this.props;
    let data;
    if (settlements.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (
      settlements.settlements?.data &&
      settlements.settlements.data.length > 0
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

              {this.state.searchSettlements !== ""
                ? settlements.search?.map((settlement, index) => (
                    <PartnerSettlementsRow
                      key={index}
                      partnerName={settlement.partner.businessName}
                      amount={settlement.amount}
                      partnerAmount={settlement.partnerAmount}
                      commision={settlement.commision}
                      gst={settlement.gst}
                      createdAt={settlement.createdTimestamp.slice(0, 10)}
                    />
                  ))
                : settlements.settlements?.data.map((settlement, index) => {
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
    // console.log(settlements.search);
    return (
      <>
        <div className="page-content customer-page ">
          <Container fluid>
            <BackBtn route="approved-partner" />
            <PartnerDetailsTab />
          </Container>
          <div className="partner">
            <Container fluid>
              {/* {data} */}
              <Card className="partner-table-approval">
                <div className="search-partner">
                  <div>
                    <label htmlFor="">Search settlements: </label>
                    <input
                      type="text"
                      placeholder="Search by name..."
                      value={this.state.searchSettlements}
                      onChange={this.handleSearch}
                    />
                  </div>
                </div>
                {data}
                {settlements.settlements?.data.length > 0 &&
                this.state.searchSettlements === "" ? (
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={this.props.settlements.settlements.pageCount}
                    onPageChange={this.changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                ) : (
                  ""
                )}
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
    settlements: state.settlements,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSettlementsById, searchPartnerSettlements })(
    PartnerSettlements
  )
);
