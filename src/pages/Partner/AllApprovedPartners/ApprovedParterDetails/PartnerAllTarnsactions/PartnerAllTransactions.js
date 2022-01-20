import React, { Component } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import "../../../partner.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
//Actions
import {
  getTranscationById,
  getTranscationSearch,
} from "../../../../../store/transactions/actions/action";
import ReactPaginate from "react-paginate";
import EmptySection from "../../../../../components/EmptySection/EmptySection";
import PartnerTrancationsRow from "./PartnerTrancationsRow";
import PartnerTranscationsHeading from "./PartnerTranscationsHeading";
import BackBtn from "../../../../BackBtn";
import PartnerDetailsTab from "../PartnerDetailsTab/PartnerDetailsTab";

class PartnerAllTransactions extends Component {
  constructor() {
    super();
    this.state = {
      searchTransactions: "",
      transactionList: null,
      pageNumber: 0,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTranscationById(id);
  }

  handleSearch = (e) => {
    this.setState({
      searchTransactions: e.target.value,
    });
  
  this.filterdata();  
    
  };

  filterdata = () => {
    debugger;
    const searchedData = this.state.searchTransactions;
    this.setState({
      transactionList: this.props.getTranscationSearch(
        this.props.match.params.id,
        searchedData
      ),
    });
  };

  render() {
    const { transactions } = this.props;
    const usersPerPage = 10;
    const pageVisited = this.state.pageNumber * usersPerPage;

    const pageCount = Math.ceil(
      this.props.transactions.transactions?.length / usersPerPage
    );

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };

    let data;
    if (transactions?.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (
      transactions?.transactions &&
      transactions?.transactions?.length > 0
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
              <PartnerTranscationsHeading />
              {this.state.searchTransactions
                ? this.state.transactionList.map((item, index) => (
                    <PartnerTrancationsRow
                      key={index}
                      userName={item.user.fullName}
                      amount={item?.amount}
                      status={item?.status}
                      debit={item?.debit.toString()}
                      refund={item?.refund.toString()}
                      settled={item?.settled.toString()}
                    />
                  ))
                : transactions?.transactions
                    .slice(pageVisited, pageVisited + usersPerPage)
                    .map((item, index) => {
                      return (
                        <PartnerTrancationsRow
                          key={index}
                          userName={item.user.fullName}
                          amount={item?.amount}
                          status={item?.status}
                          debit={item?.debit.toString()}
                          refund={item?.refunded.toString()}
                          settled={item?.settled.toString()}
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
                    <label htmlFor="">Search transactions: </label>
                    <input
                      type="text"
                      placeholder="Search..."
                      name="search"
                      onChange={this.handleSearch}
                      value={this.state.searchTransactions}
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
    transactions: state.transactions,
  };
};

export default withRouter(
  connect(mapStateToProps, { getTranscationById, getTranscationSearch })(
    PartnerAllTransactions
  )
);

// export default withRouter(connect(mapStateToProps, null)(App));
