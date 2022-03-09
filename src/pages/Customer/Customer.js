import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import CustomerTableHeading from "./Table/CustomerTableHeading";
import CustomerTableRow from "./Table/CustomerTableRow";
import "./Table/customertable.scss";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
// import Lottie from 'react-lottie';
// import Loader from "../../assets/static/loader.json";
import EmptySection from "../../components/EmptySection/EmptySection";
import ReactPaginate from "react-paginate";
import {
  fetchSearchUsers,
  fetchUsers,
  updateSearchUserDetails,
} from "../../store/adminusers/actions/actions";
import Lottie from "lottie-web";
const Customer = () => {
  const { loading } = useSelector((state) => state.Users);
  const { users, search } = useSelector((state) => state.Users);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [stopped, setStopped] = useState(false);
  // const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("users", users);
    {
      pageNumber === undefined
        ? dispatch(fetchUsers(1))
        : dispatch(fetchUsers(pageNumber));
    }
  }, [pageNumber]);

  const handleSearch = (e) => {
    setSearchUser(e.target.value);
    dispatch(fetchSearchUsers(searchUser, pageNumber));
    // dispatch(updateSearchUserDetails(search.id,searchUser, pageNumber));
  };

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  };

  //   const options = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: Loader,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  // const handleStart = () => {
  //   setStopped(false);
  //   setCompleted(false);
  // };
  // const handleAnimationComplete = () => {
  //   setCompleted(true);
  //   setStopped(true);
  // };

  let data;
  if (loading === true) {
    data = (
      // <div>
      //   <Lottie
      //     options={options}
      //     height="80%"
      //     width="80%"
      //     isStopped={stopped}
      //     speed={4}
      //     eventListeners={[
      //       {
      //         eventName: "complete",
      //         callback: handleAnimationComplete,
      //       },
      //     ]}
      //   />

      //   {!completed ? (
      //     <p>Running...</p>
      //   ) : (
      //     <button className="button" onClick={handleStart}>
      //       Restart
      //     </button>
      //   )}
      // </div>
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
              >
              <Table
               className="approved-partners-table"
                // center
                CustomerTableHeading // bordered
                responsive
              >
                <CustomerTableHeading />
                {searchUser !== ""
                  ? search.data.map((users) => {
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
                          pageNumber={pageNumber}
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
                          pageNumber={pageNumber}
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
                  <form className="search-filter">
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

                    {/* <div className="search-btn">
                      <button type="submit" 
                      onClick={ setSearchUser }
                      >
                        Search
                      </button>
                    </div> */}
                  </form>
                </CardBody>
              </Card>
              {data}
              {/* {users || search.data === "" ? ( */}
              {users.data && searchUser === "" ? (
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
