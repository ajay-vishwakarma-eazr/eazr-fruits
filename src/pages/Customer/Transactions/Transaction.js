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
import { getUsersTranscationById } from "../../../store/transactions/actions/action";
import ReactPaginate from "react-paginate";
const Transaction = () => {
  const [searchTranscation, setSearchTransaction] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  // const [data, setData] = useState(null);

  const { transactions, loading } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    debugger;
    dispatch(getUsersTranscationById(id, pageNumber));
    console.log(transactions);
  }, [pageNumber]);

  const getSearchTransactionValue = (value) => {
    setSearchTransaction(value);
  };
  const filterArray = () => {
    if (searchTranscation.data !== null && searchTranscation.data?.length > 0) {
      const filter = transactions.filter((trans) => {
        return trans.partner.businessName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchTranscation.toLowerCase().split(" ").join(""));
      });
      setFilteredTransaction(filter);
    }
  };

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  };

  let data;

  if (loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (transactions.data !== null && transactions.data?.length > 0) {
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
                  ? filteredTransaction.data.map((trans) => {
                    debugger;
                      return (
                        <TableRow
                          className="transaction-table"
                          key={trans.id}
                          amount={trans?.amount}
                          status={trans.status}
                          partnerName={trans?.partner.businessName}
                          debit={trans.debit.toString()}
                          createAt={trans.createdTimestamp}
                        />
                      );
                    })
                  : transactions.data
                      // .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((trans) => {
                        debugger;
                        return (
                          <TableRow
                            className="transaction-table"
                            key={trans.id}
                            amount={trans?.amount}
                            status={trans.status}
                            partnerName={trans?.partner.businessName}
                            debit={trans.debit.toString()}
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
          {data}
          {transactions.data?.length > 0 ?
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
            /> : (
            ""
          ) }
        </Card>
      </Container>
    </div>
  );
};

export default Transaction;
