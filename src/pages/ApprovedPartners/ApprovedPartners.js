import React, { useDebugValue, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import "./approvedpartners.scss";
import SearchPartner from "./SearchPartner";
import { connect, useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";
import { fetchPartners } from "../../store/businessprofiles/actions/actions";
import ReactPaginate from "react-paginate";
const ApprovedPartners = ({ getApprovedPartners }) => {
  const [searchPartner, setSearchPartner] = useState(null);
  const [filteredPartner, setFilteredPartner] = useState(null);
   const [pageNumber, setPageNumber] = useState(0);
   const usersPerPage = 10;
   const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, []);

  const { modules } = useSelector((state) => state.partnerModules);
  const { partners } = useSelector((state) => state.businessPartner);
  const { loading } = useSelector((state) => state.businessPartner);
  const getSearchPartnerValue = (value) => {
    setSearchPartner(value);
  };
  const filterArray = () => {
    if (searchPartner !== null && searchPartner.length > 0) {
      const filter = partners.filter((partner) => {
        return (
          partner.businessName
            .toLowerCase()
            .includes(searchPartner.toLowerCase()) ||
          partner.email.toLowerCase().includes(searchPartner.toLowerCase()) ||
          partner.mobile.toLowerCase().includes(searchPartner.toLowerCase())
        );
      });
      setFilteredPartner(filter);
    }
  };

  let data;

  if (loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (partners !== null && partners.length > 0) {
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
                striped
                // bordered
                responsive
              >
                <TableHeading />

                {filteredPartner
                  ? filteredPartner.map((partner) => {
                      const { _id, businessName, email, mobile, address } =
                        partner;
                      return (
                        <TableRow
                          key={_id}
                          businessName={businessName}
                          email={email}
                          contact={mobile}
                          address={address.area}
                        />
                      );
                    })
                  : partners
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((partner) => {
                        const { _id, businessName, email, mobile, address } =
                          partner;
                        return (
                          <TableRow
                            key={_id}
                            businessName={businessName}
                            email={email}
                            contact={mobile}
                            address={address.area}
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
const pageCount = Math.ceil(partners?.length / usersPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
};
  return (
    <div className="page-content approved-partners">
      <Container fluid>
        <BackBtn route="partner-dashboard" />
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <SearchPartner
                  getSearchPartnerValue={getSearchPartnerValue}
                  filterArray={filterArray}
                />
              </CardBody>
            </Card>
            {data}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount?1:0}
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
  );
};
export default ApprovedPartners;
