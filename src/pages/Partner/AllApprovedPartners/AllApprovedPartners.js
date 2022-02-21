import React, { Component } from "react";
import ApprovedPartnersHeading from "./ApprovedPartnersHeading";
import ApprovedPartnersRow from "./ApprovedPartnersRow";
import { Card, CardBody, Container, Table } from "reactstrap";
import "../partner.scss";
import "./partnerTable.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
//Actions
import ReactPaginate from "react-paginate";
import {
  getApprovedPartners,
  fetchSearchApprovedPartners,
} from "../../../store/partners/actions";
import BackBtn from "../../BackBtn";
import EmptySection from "../../../components/EmptySection/EmptySection";
class AllApprovedPartners extends Component {
  constructor() {
    super();
    this.state = {
      searchPartner: "",
      partnerList: null,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    this.props.getApprovedPartners(this.state.pageNumber);
  }

  handleSearch = (e) => {
    this.setState({
      searchPartner: e.target.value,
    });
    this.props.fetchSearchApprovedPartners(this.state.searchPartner);
  };

  changePage = ({ selected }) => {
    const newSelect = selected + 1;
    this.setState({ pageNumber: newSelect });
    this.props.getApprovedPartners((this.state.pageNumber = newSelect));
  };
  render() {
    const { partners } = this.props;
    let data;
    if (partners.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (
      partners.partners !== null &&
      partners.partners.data.length > 0
    ) {
      data = (
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
              className="partner-approval-table"
            >
              <ApprovedPartnersHeading />
              {this.state.searchPartner !== "" && partners.search !== undefined
                ? partners.search.map((item, index) => (
                    <ApprovedPartnersRow
                      key={index}
                      id={item.id}
                      profilePicture={item.businessProfilePicture}
                      name={item.businessName}
                      contact={item.contactNumber}
                      email={item.email}
                      description={item.businessDescription}
                      partnerType={item.partnerType.type}
                      plan={item.plan?.name}
                    />
                  ))
                : partners.partners.data.map((item, index) => {
                    return (
                      <ApprovedPartnersRow
                        key={index}
                        id={item.id}
                        profilePicture={item.businessProfilePicture}
                        name={item.businessName}
                        contact={item.contactNumber}
                        email={item.email}
                        description={item.businessDescription}
                        partnerType={item.partnerType.type}
                        plan={item.plan?.name}
                      />
                    );
                  })}
            </Table>
          </div>
        </div>
      );
    } else {
      data = <EmptySection />;
    }
    return (
      <div className="page-content partner">
        <Container fluid>
          <BackBtn route="partner-dashboard" />
          <Card className="partner-table-approval">
            <div className="search-partner">
              <div>
                <label htmlFor="">Search Partner: </label>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleSearch}
                  value={this.state.searchPartner}
                />
              </div>
            </div>
            {data}
            {partners.partners.data.length > 0 &&
            this.state.searchPartner === "" ? (
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={partners.partners.pageCount}
                onPageChange={this.changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            ) : (
              ""
            )}
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
    // search: state.search
  };
};

export default connect(mapStateToProps, {
  getApprovedPartners,
  fetchSearchApprovedPartners,
})(AllApprovedPartners);
