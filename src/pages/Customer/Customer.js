import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import CustomerTableHeading from "./Table/CustomerTableHeading";
import CustomerTableRow from "./Table/CustomerTableRow";
import "./Table/customertable.scss";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";
import ReactPaginate from "react-paginate";
import { fetchUsers } from "../../store/adminusers/actions/actions";
const Customer = () => {
  const { loading } = useSelector((state) => state.Users);
  const { users } = useSelector((state) => state.Users);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(fetchUsers(pageNumber));
  }, [pageNumber]);

  const handleSearch = (e) => {
    setSearchUser(e.target.value);
    const searchablePartner = e.target.value;
    const filter = users.data.filter((filterUserData) => {
      return (
        filterUserData?.fullName
          ?.toLowerCase()
          ?.includes(searchablePartner?.toLowerCase()) ||
        filterUserData?.email
          ?.toLowerCase()
          ?.includes(searchablePartner?.toLowerCase()) ||
        filterUserData?.contactNumber?.includes(searchablePartner)
      );
    });
    setFilteredUser(filter);
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
  } else if (users.data !== null && users.data?.length > 0) {
    data = (
      <Card>
        <CardBody>
          <div className="table-rep-plugin">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
              className="approved-partners-table"
            >
              <Table
                // center
                CustomerTableHeading // bordered
                responsive
              >
                <CustomerTableHeading />
                {searchUser
                  ? filteredUser.map((users) => {
                      debugger;
                      return (
                        <CustomerTableRow
                          key={users.id}
                          id={users.id}
                          name={users.fullName}
                          email={users.email}
                          contact={users.contactNumber}
                          gender={users.gender}
                          creditLimit={users.creditLimit}
                          totalOutstandingAmount={users.totalOutstandingAmount}
                          enabled={users.enabled}
                          kycVerified={users.kycVerified}
                        />
                      );
                    })
                  : users.data.map((users) => {
                      return (
                        <CustomerTableRow
                          key={users.id}
                          id={users.id}
                          name={users.fullName}
                          email={users.email}
                          contact={users.contactNumber}
                          gender={users.gender}
                          creditLimit={users.creditLimit}
                          totalOutstandingAmount={users.totalOutstandingAmount}
                          enabled={users.enabled}
                          kycVerified={users.kycVerified}
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
    <>
      <div className="page-content approved-partners">
        <Container fluid>
          <BackBtn route="dashboard" />
          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <div className="search-filter">
                    <div>
                      <h6>Search Users</h6>
                      <input
                        type="text"
                        value={searchUser}
                        placeholder="Search for ..."
                        onChange={handleSearch}
                      />
                      <i className="fa fa-search"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
              {data}
              {data ? (
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={users.pageCount}
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Customer;
