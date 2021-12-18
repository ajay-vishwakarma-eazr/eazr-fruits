import React, { useDebugValue, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import CustomerTableHeading from "./Table/CustomerTableHeading";
import CustomerTableRow from "./Table/CustomerTableRow";
import "./Table/customertable.scss"
import { connect, useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";
import { fetchAdminUsers } from "../../store/adminusers/actions/actions";
import SearchAdminUsers from "./SearchAdminUsers";
const Customer = () => {
  const [searchAdminUser, setSearchAdminUser] = useState(null);
  const [filteredAdminUser, setFilteredAdminUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdminUsers());
  }, []);
  const { loading } = useSelector((state) => state.adminUsers);
  const { adminusers } = useSelector((state) => state.adminUsers);
  console.log("all admin users", adminusers);
  const getSearchAdminUserValue = (value) => {
    setSearchAdminUser(value);
  };
  const filterArray = () => {
    if (searchAdminUser !== null && searchAdminUser.length > 0) {
      const filter = adminusers.filter((users) => {
        return (
          users.user?.name
            ?.toLowerCase()
            .includes(searchAdminUser.toLowerCase()) ||
          users.user?.email
            ?.toLowerCase()
            .includes(searchAdminUser.toLowerCase()) ||
          users.user?.phone
            ?.toLowerCase()
            .includes(searchAdminUser.toLowerCase())
        );
      });
      setFilteredAdminUser(filter);
      console.log(filteredAdminUser);
      debugger;
    }
  };
  let data;

  if (loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (adminusers !== null && adminusers.length > 0) {
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
                {filteredAdminUser
                  ? filteredAdminUser.map((users) => {
                      return (
                        <CustomerTableRow
                          key={users._id}
                          id={users.user?._id}
                          name={users.user?.name}
                          email={users.user?.email}
                          phone={users.user?.phone}
                          password={users.user?.password}
                        />
                      );
                    })
                  : adminusers.map((users) => {
                      return (
                        <CustomerTableRow
                          key={users._id}
                          id={users.user?._id}
                          name={users.user?.name}
                          email={users.user?.email}
                          phone={users.user?.phone}
                          password={users.user?.password}
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
                  <SearchAdminUsers
                    getSearchAdminUserValue={getSearchAdminUserValue}
                    filterArray={filterArray}
                  />
                </CardBody>
              </Card>
              {data}
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
