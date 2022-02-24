import React, { Component } from "react";

import { Card, CardBody, Container, Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import "../../../partner.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
//Actions
import {
  getTranscationById,
  getPartnerTranscationSearch,
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
      pageNumber: 1,
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
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
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

// export default withRouter(connect(mapStateToProps, null)(App));

// import React, { Component } from "react";
// import { Card, CardBody, Container, Table } from "reactstrap";
// import { withRouter } from "react-router-dom";
// import "../../../partner.scss";
// import { connect } from "react-redux";
// import ClipLoader from "react-spinners/ClipLoader";
// //Actions
// import {
//   getTranscationById,
//   getTranscationSearch,
// } from "../../../../../store/transactions/actions/action";
// import ReactPaginate from "react-paginate";
// import EmptySection from "../../../../../components/EmptySection/EmptySection";
// import PartnerTrancationsRow from "./PartnerTrancationsRow";
// import PartnerTranscationsHeading from "./PartnerTranscationsHeading";
// import BackBtn from "../../../../BackBtn";
// import PartnerDetailsTab from "../PartnerDetailsTab/PartnerDetailsTab";

// class PartnerAllTransactions extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchTransactions: "",
//       transactionList: null,
//       pageNumber: 1,
//       // pageNumber: this.props.transactions.transactions.page,
//     };
//   }

//   componentDidMount(pageNumber) {
//     const id = this.props.match.params.id;
//     this.props.getTranscationById(id, this.state.pageNumber);
//   }
//   changePage = ({ selected }) => {
//     const newSelect = selected + 1;
//     this.setState({ pageNumber: newSelect });
//     const id = this.props.match.params.id;
//     this.props.getTranscationById(id, this.state.pageNumber);
//   };

//   handleSearch = (e) => {
//     this.setState({
//       searchTransactions: e.target.value,
//     });
//     const searchableTransactions = e.target.value;
//     const filtered = this.props.transactions.transactions.data.filter(
//       (filter) => {
//         return filter.user.fullName
//           .toLowerCase()
//           .split(" ")
//           .join("")
//           .includes(searchableTransactions.toLowerCase().split(" ").join(""));
//       }
//     );

//     this.setState({
//       transactionList: filtered,
//     });
//   };

//   render() {
//     const { transactions } = this.props;

//     let data;
//     if (transactions?.loading === true) {
//       data = (
//         <div className="spinner-div">
//           <ClipLoader color="#bbbbbb" loading={true} size={60} />
//         </div>
//       );
//     } else if (
//       transactions?.transactions.data &&
//       transactions?.transactions?.data.length > 0
//     ) {
//       data = (
//         <div className="table-rep-plugin">
//           <div
//             className="table-responsive mb-0"
//             data-pattern="priority-columns"
//           >
//             <Table
//               center
//               striped
//               // bordered
//               responsive
//               className="partner-approval-table"
//             >
//               <PartnerTranscationsHeading />
//               {this.state.searchTransactions
//                 ? this.state.transactionList.map((item, index) => (
//                     <PartnerTrancationsRow
//                       key={index}
//                       userName={item.user.fullName}
//                       amount={item?.amount}
//                       status={item?.status}
//                       debit={item?.debit}
//                       refund={item?.refund}
//                       settled={item?.settled}
//                     />
//                   ))
//                 : transactions.transactions?.data.map((item, index) => {
//                     return (
//                       <PartnerTrancationsRow
//                         key={index}
//                         userName={item.user.fullName}
//                         amount={item?.amount}
//                         status={item?.status}
//                         debit={item?.debit}
//                         refund={item?.refunded}
//                         settled={item?.settled}
//                       />
//                     );
//                   })}
//             </Table>
//           </div>
//         </div>
//       );
//     } else {
//       data = <EmptySection />;
//     }

//     return (
//       <>
//         <div className="page-content customer-page ">
//           <Container fluid>
//             <BackBtn route="approved-partner" />
//             <PartnerDetailsTab />
//           </Container>
//           <div className="partner">
//             <Container fluid>
//               <Card className="partner-table-approval">
//                 <div className="search-partner">
//                   <div>
//                     <label htmlFor="">Search transactions: </label>
//                     <input
//                       type="text"
//                       placeholder="Search by name..."
//                       name="search"
//                       onChange={this.handleSearch}
//                       value={this.state.searchTransactions}
//                     />
//                   </div>
//                 </div>
//                 <CardBody>{data}</CardBody>
//                 {transactions.transactions.data?.length > 0 ? (
//                   <ReactPaginate
//                     previousLabel={"Previous"}
//                     nextLabel={"Next"}
//                     pageCount={this.props.transactions.transactions.pageCount}
//                     onPageChange={this.changePage}
//                     containerClassName={"paginationBttns"}
//                     previousLinkClassName={"previousBttn"}
//                     nextLinkClassName={"nextBttn"}
//                     disabledClassName={"paginationDisabled"}
//                     activeClassName={"paginationActive"}
//                   />
//                 ) : (
//                   ""
//                 )}
//               </Card>
//             </Container>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     transactions: state.transactions,
//   };
// };

// export default withRouter(
//   connect(mapStateToProps, { getTranscationById, getTranscationSearch })(
//     PartnerAllTransactions
//   )
// );

// // export default withRouter(connect(mapStateToProps, null)(App));
