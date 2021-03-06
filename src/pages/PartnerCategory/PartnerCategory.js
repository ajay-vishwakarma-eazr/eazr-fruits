

import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardBody, Row, Col, Container, Table } from "reactstrap";
import BackBtn from "../BackBtn";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  getPartnerCategory,
  addPartnerCategory,
} from "../../store/PartnerCategory/action";
import EmptySection from "../../components/EmptySection/EmptySection";
import CategoryTableHeading from "./CategoryTableHeading";
import CategoryTableRow from "./CategoryTableRow";
import Loader from "../Loader/Loader";
const PartnerCategory = () => {
  const partnerCategory = useSelector((state) => state.Category);
  const loading = useSelector((state) => state.category);
  const [name, setName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    {
      pageNumber === undefined
        ? dispatch(getPartnerCategory(1))
        : dispatch(getPartnerCategory(pageNumber));
    }
  }, [pageNumber]);

  const addNewPartnerCategory = () => {
    if (name === "" || undefined) {
      alert("Enter Partner Category");
    } else {
      const newCategory = { name };
      {
        pageNumber === undefined
          ? dispatch(addPartnerCategory(1))
          : dispatch(addPartnerCategory(newCategory, pageNumber));
      }
      setName("");
    }
  };

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  };

  let data;
  if (loading === false) {
    data = (
      <Loader />
    );
  } else if (
    partnerCategory.partnerCategory.data !== null &&
    partnerCategory.partnerCategory.data?.length > 0
  ) {
    data = (
      <Card style={{ width: "100%" }}>
        <CardBody>
          <div className="table-rep-plugin">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
              // className="approved-partners-table"
            >
              <Table
                // center
                CustomerTableHeading // bordered
                responsive
              >
                <CategoryTableHeading />
                {partnerCategory.partnerCategory.data.map((category) => {
                  return (
                    <CategoryTableRow
                      key={category.id}
                      id={category.id}
                      categoryName={category.name}
                      createdTime={category.createdTimestamp.slice(0, 10)}
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
        <Row className="approved-partners-row">
          <Col xs={12}>
            <Card>
              <CardBody>
                <div className="search-filter">
                  <div>
                    <h6>Add Partner Category</h6>
                    <input
                      type="text"
                      value={name}
                      placeholder="Enter partner category..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="search-btn">
                    <button onClick={addNewPartnerCategory}>
                      Add Partner Category
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
            {data}
            <div style={{ width: "100%" }}>
              {partnerCategory.partnerCategory.data?.length > 0 ? (
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={partnerCategory.partnerCategory.pageCount}
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

export default PartnerCategory;
