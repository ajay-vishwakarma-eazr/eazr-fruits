import React, { Component, useDebugValue, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import PartnerTypesHeading from "./PartnerTypesHeading";
import { useParams } from "react-router-dom";
// import "./PartnerTypes.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import BackBtn from "../../BackBtn";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../../components/EmptySection/EmptySection";
import ReactPaginate from "react-paginate";
import {
  getPartnerType,
  addPartnerType,
} from "../../../store/partners/PartnerType/actions/action";
import PartnerTypeTableRow from "./PartnerTypeTableRow";

const PartnerTypes = () => {
  const [type, setType] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const partnerType = useSelector((state) => state.partners.partnerType);
  const loading = useSelector((state) => state.partners.partnerType);
  useEffect(() => {
    dispatch(getPartnerType(pageNumber));
    // console.log(partnerType);
  }, [pageNumber]);

  let history = useHistory();
  const addNewPartnerType = () => {
    if (type === "") {
      alert("Please enter something");
    } else {
      const newType = { type };
      dispatch(addPartnerType(newType, pageNumber));
      setType("");
    }
    // history.push("/partner-type");
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
  } else if (partnerType !== null && partnerType.data?.length > 0) {
    data = (
      <Card style={{display: 'flex',width: "70%" }}>
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
                <PartnerTypesHeading />
                {partnerType.data.map((type) => {
                  return (
                    <PartnerTypeTableRow
                      key={type.id}
                      id={type.id}
                      typeName={type.type}
                      createdTime={type.createdTimestamp.slice(0, 10)}
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
    <div className="page-content approved-partners">
      <Container fluid>
        <BackBtn route="partner-type" />
        <Row xs={12}>
          <Col xs={12}>
            <Card style={{ width: "70%" }}>
              <CardBody>
                <div className="search-filter">
                  <div>
                    <h6>Add Partner Type</h6>
                    <input
                      type="text"
                      value={type}
                      placeholder="Enter partner type..."
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                  <div className="search-btn">
                    <button
                      style={{ minWidth: "70%" }}
                      onClick={addNewPartnerType}
                    >
                      Add Partner Type
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
            {data}
            <div style={{ width: "70%" }}>
              {partnerType.data?.length > 0 ? (
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={partnerType.pageCount}
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerTypes;
