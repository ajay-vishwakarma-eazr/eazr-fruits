import EmptySection from "../../../components/EmptySection/EmptySection";
import React, { useEffect, useState } from "react";
import { Table, Container, Card, CardBody } from "reactstrap";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import CustomersNav from "../CustomerNav";
// import DateTimeForm from "../../../pages/calendar/DateTimeForm";
// import TableSearch from "../TableSearch";
import TableHeading from "./TableHeading";
import "./Transaction.css";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import {
  getUsersTranscationById,
  getUsersSearchTranscation,
} from "../../../store/transactions/actions/action";
import ReactPaginate from "react-paginate";
import Loader from "../../Loader/Loader";
const Transaction = () => {
  const [searchTranscation, setSearchTransaction] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { transactions, loading, search } = useSelector(
    (state) => state.transactions
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    // console.log(search);
    dispatch(getUsersTranscationById(id, pageNumber));
  }, [pageNumber]);

  const handleSearch = (e) => {
    setSearchTransaction(e.target.value);
    dispatch(getUsersSearchTranscation(id, searchTranscation, pageNumber));
  };

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  };

  let data;
  if (loading === true) {
    data = (
      <Loader />
      // <div className="spinner-div">
      //   <ClipLoader color="#bbbbbb" loading={true} size={60} />
      // </div>
    );
  } else if (transactions.data !== null && transactions.data?.length > 0) {
    data = (
      <Card>
        <CardBody>
          {/* <TableSearch
            getSearchTransactionValue={getSearchTransactionValue}
            filterArray={filterArray}
          /> */}
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
                className="transaction-table"
              >
                <TableHeading />
                {searchTranscation !== ""
                  ? search.data.map((trans) => {
                      return (
                        <TableRow
                          className="transaction-table"
                          key={trans.id}
                          amount={trans?.amount}
                          status={trans.status}
                          partnerName={trans?.partner.businessName}
                          debit={trans.debit}
                          createAt={trans.createdTimestamp}
                        />
                      );
                    })
                  : transactions.data
                      // .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((trans) => {
                        return (
                          <TableRow
                            className="transaction-table"
                            key={trans.id}
                            amount={trans?.amount}
                            status={trans.status}
                            partnerName={trans.partner?.businessName}
                            debit={trans.debit}
                            createAt={trans.createdTimestamp}
                          />
                        );
                      })}
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  } else {
    data = <EmptySection />;
  }

  return (
    <div className="page-content  inner-user-page">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <Card>
          <CardBody>
            <div className="search-filter">
              <div>
                <h6>Search Transactions</h6>
                {/* <div style={{display: 'flex', flexDirection: 'row'}}> */}
                <input
                  type="text"
                  value={searchTranscation}
                  placeholder="Search for ..."
                  onChange={handleSearch}
                />
                <i className="fa fa-search"></i>
                {/* </div> */}
              </div>

              
            </div>
          </CardBody>
          {data}
          {transactions.data?.length > 0 && searchTranscation === "" ? (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={transactions.pageCount}
              onPageChange={changePage}
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
  );
};

export default Transaction;
