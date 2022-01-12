import React, { useDebugValue, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import CustomerTableHeading from "./Table/CustomerTableHeading";
import CustomerTableRow from "./Table/CustomerTableRow";
import { useParams } from "react-router-dom";
import "./Table/customertable.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";
import SearchUsers from "./SearchUsers";
import ReactPaginate from "react-paginate";
import {
  fetchUserById,
  fetchUsers,
} from "../../store/adminusers/actions/actions";
const Customer = () => {
 
  const { loading } = useSelector((state) => state.Users);
  const { users } = useSelector((state) => state.Users);
  const [searchUser, setSearchUser] = useState(null);
  const [filteredUser, setFilteredUser] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [users]);

  const getSearchUserValue = (value) => {
    setSearchUser(value);
  };
  const filterArray = () => {
    if (searchUser !== null && searchUser.length > 0) {
      const filter = users.filter((filterUserData) => {
        return (
          filterUserData?.fullName
            ?.toLowerCase()
            ?.includes(searchUser?.toLowerCase()) ||
          filterUserData?.email
            ?.toLowerCase()
            ?.includes(searchUser?.toLowerCase()) ||
          filterUserData?.contactNumber?.includes(searchUser)
        );
      });
      setFilteredUser(filter);
    }
  };
  let data;

  if (loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (users !== null && users.length > 0) {
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
                sttomCustomerTableHeading // bordered
                responsive
              >
                <CustomerTableHeading />
                {filteredUser
                  ? filteredUser.map((users) => {
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
                        />
                      );
                    })
                  : users
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((users) => {
                        return (
                          <CustomerTableRow
                            key={users.id}
                            id={users.id}
                            name={users.fullName}
                            email={users.email}
                            contact={users.contactNumber}
                            gender={users.gender}
                            creditLimit={users.creditLimit}
                            totalOutstandingAmount={users.totalOutstandingAmount
                            }
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

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="page-content approved-partners">
        <Container fluid>
          <BackBtn route="dashboard" />
          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <SearchUsers
                    getSearchUserValue={getSearchUserValue}
                    filterArray={filterArray}
                  />
                </CardBody>
              </Card>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Customer;
/*const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};*/

/*export default connect(mapStateToProps, { getApprovedPartners })(
  ApprovedPartners
);*/
