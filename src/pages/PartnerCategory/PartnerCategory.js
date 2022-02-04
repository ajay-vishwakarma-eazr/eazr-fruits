import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardBody, Row, Col, Container, Table } from "reactstrap";
import BackBtn from "../BackBtn";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPartnerCategory,
  addPartnerCategory,
} from "../../store/partners/PartnerCategory/action";
import EmptySection from "../../components/EmptySection/EmptySection";
import ReactPaginate from "react-paginate";
import ClipLoader from "react-spinners/ClipLoader";
import CategoryTableHeading from "./CategoryTableHeading";
import CategoryTableRow from "./CategoryTableRow";
const PartnerCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const { partnerCategory, loading } = useSelector((state) => state.category);
  useEffect(() => {
    debugger;
    dispatch(getPartnerCategory(pageNumber));
  }, [pageNumber]);

  let history = useHistory();
  const addNewPartnerCategory = () => {
    const newCategory = { name };
    dispatch(addPartnerCategory(newCategory));
    setName("");
    // history.push("/partner-category");
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
  } else if (partnerCategory.data !== null && partnerCategory.length > 0) {
    data = (
      <Card style={{width:"70%"}}>
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
                <CategoryTableHeading />
                {partnerCategory.map((category) => {
                  debugger;
                  return (
                    <CategoryTableRow
                      key={category.id}
                      id={category.id}
                      categoryName={category.name}
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
        <Row>
          <Col xs={12}>
            <Card style={{ width: "70%" }}>
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
                    <button
                      style={{ minWidth: "70%" }}
                      onClick={addNewPartnerCategory}
                    >
                      Add Partner Category
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
            {data}
            {/* {partnerCategory.data ? ( */}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={4}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
            {/* ) : (
              ""
            )} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerCategory;
