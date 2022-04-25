import React, { Component } from "react";

import { Card, CardBody, Container, Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import "../../../partner.scss";
import { connect } from "react-redux";
//Actions
import {
  getTranscationById,
  getPartnerTranscationSearch,
} from "../../../../../store/transactions/actions/action";
import ReactPaginate from "react-paginate";
import EmptySection from "../../../../../components/EmptySection/EmptySection";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PartnerTrancationsRow from "./PartnerTrancationsRow";
import PartnerTranscationsHeading from "./PartnerTranscationsHeading";
import BackBtn from "../../../../BackBtn";
import PartnerDetailsTab from "../PartnerDetailsTab/PartnerDetailsTab";
import Loader from "../../../../Loader/Loader";

class PartnerAllTransactions extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      searchTransactions: "",
      transactionList: null,
      pageNumber: 1,
      dropdownOpen: false,
      // this.props.transactions.transactions.page,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTranscationById(id, this.state.pageNumber);
  }

  handleSearch = (e) => {
    this.setState({
      searchTransactions: e.target.value,
    });
    const id = this.props.match.params.id;
    this.props.getPartnerTranscationSearch(id, this.state.searchTransactions);
  };
  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  changePage = ({ selected }) => {
    const newSelect = selected + 1;
    this.setState({ pageNumber: newSelect });
    const id = this.props.match.params.id;
    this.props.getTranscationById(id, (this.state.pageNumber = newSelect));
    console.log("newSelect", newSelect);
    console.log("pageNumber", this.state.pageNumber);
  };

  render() {
    const { transactions } = this.props;

    let data;
    if (transactions?.loading === true) {
      data = <Loader />;
    } else if (
      transactions.transactions?.data &&
      transactions.transactions.data?.length > 0
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
              {this.state.searchTransactions !== ""
                ? transactions.search.map((item, index) => (
                    <PartnerTrancationsRow
                      key={index}
                      userName={item.user.fullName}
                      amount={item?.amount}
                      status={item?.status}
                      debit={item?.debit}
                      refund={item?.refund}
                      settled={item?.settled}
                    />
                  ))
                : transactions.transactions.data.map((item, index) => {
                    return (
                      <PartnerTrancationsRow
                        key={index}
                        userName={item.user.fullName}
                        amount={item?.amount}
                        status={item?.status}
                        debit={item?.debit}
                        refund={item?.refunded}
                        settled={item?.settled}
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

    // <Button onClick{() =>
    //  setState={state}
    // }}

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
                      placeholder="Search by name..."
                      name="search"
                      onChange={this.handleSearch}
                      value={this.state.searchTransactions}
                    />
                  </div>

                  {/* <select>
                    <option value="All transactions">All transactions</option>
                    <option value="Initiated transactions">Initiated transactions</option>
                    <option value="Failed transactions">Failed transactions</option>
                  </select> */}

                  {/* <Dropdown
                    isOpen={this.state.dropdownOpen} 
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret>Transactions</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem> Failed transactions </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem> Initiated transaction </DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown> */}

                  {/* <select
                    value={""}
                    onChange={(e) =>
                      setSelectMonthFilter(e.currentTarget.value)
                    } */}
                  {/* > */}
                  {/* <option value="">0</option> */}
                  {/* <div>
                      <label>
                        Select Amount {" "}
                      <select>
                        <option value="01">All</option>
                        <option value="02">0-100</option>
                        <option value="03">100-200</option>
                        <option value="04">200-300</option>
                        <option value="06">300-400</option>
                        <option value="07">400-500</option>
                      </select>
                    </label>
                  </div> */}
                </div>
                <CardBody>{data}</CardBody>
                {transactions.transactions?.data?.length > 0 &&
                this.state.searchTransactions === "" ? (
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={this.props.transactions.transactions?.pageCount}
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
    transactions: state.transactions,
  };
};

export default withRouter(
  connect(mapStateToProps, { getTranscationById, getPartnerTranscationSearch })(
    PartnerAllTransactions
  )
);
