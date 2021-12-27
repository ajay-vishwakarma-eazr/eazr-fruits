import EmptySection from "../../../components/EmptySection/EmptySection";
import React, { useEffect, useState } from "react";
import { Table, Container, Card, CardBody } from "reactstrap";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import CustomersNav from "../CustomerNav";
import TableSearch from "../TableSearch";
import TableHeading from "./TableHeading";
import "./Transaction.css";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { getTranscationById } from "../../../store/transactions/actions/action";
import ReactPaginate from "react-paginate";
const Transaction = () => {
  const [searchTranscation, setSearchTransaction] = useState(null);
  const [filteredTransaction, setFilteredTransaction] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id === "undefined") {
      <Redirect to="/dashboard" />;
    } else {
      dispatch(getTranscationById(id));
    }
  }, []);
  const { loading } = useSelector((state) => state.transactions);
  const { transactions } = useSelector((state) => state.transactions);
  console.log("all transcations", transactions);
  const getSearchTransactionValue = (value) => {
    setSearchTransaction(value);
  };
  const filterArray = () => {
    if (searchTranscation !== null && searchTranscation.length > 0) {
      const filter = transactions.filter((trans) => {
        return (
          trans?.amount?.includes(searchTranscation) ||
          trans?.businessPartner?.email
            ?.toLowerCase()
            .includes(searchTranscation.toLowerCase()) ||
          trans?.businessPartner?.contact
            ?.toLowerCase()
            .includes(searchTranscation.toLowerCase()) ||
          trans?.status?.status
            ?.toLowerCase()
            .includes(searchTranscation.toLowerCase())
        );
      });
      setFilteredTransaction(filter);
    }
  };

  let data;

  if (loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (transactions !== null && transactions.length > 0) {
    data = (
      <Card>
        <CardBody>
          <TableSearch
            getSearchTransactionValue={getSearchTransactionValue}
            filterArray={filterArray}
          />
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
                {filteredTransaction
                  ? filteredTransaction.map((trans) => {
                      return (
                        <TableRow
                          key={trans._id}
                          amount={trans?.amount}
                          email={trans?.businessPartner?.email}
                          contact={trans?.businessPartner?.mobile}
                          createdAt={trans?.createdAt}
                          status={trans.status.status}
                        />
                      );
                    })
                  : transactions
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((trans) => {
                        return (
                          <TableRow
                            key={trans._id}
                            amount={trans?.amount}
                            email={trans?.businessPartner?.email}
                            contact={trans?.businessPartner?.mobile}
                            createdAt={trans?.createdAt}
                            status={trans.status.status}
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
  const pageCount = Math.ceil(transactions.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="page-content  inner-user-page">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <Card>
          {data}
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
  );
};

export default Transaction;
