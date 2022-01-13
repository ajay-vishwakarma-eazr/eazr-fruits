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
import { getPartners } from "../../../store/partners/actions";
import BackBtn from "../../BackBtn";
import EmptySection from "../../../components/EmptySection/EmptySection";
class AllApprovedPartners extends Component {
  constructor() {
    super();
    this.state = {
      searchPartner: "",
      partnerList: null,
      pageNumber: 0,
    };
  }
  componentDidMount() {
    const test = this.props.getPartners();
  }

  handleSearch = (e) => {
    this.setState({
      searchPartner: e.target.value,
    });

    const searchablePartner = e.target.value;

    const filtered = this.props.partners.partners.filter((filter) => {
      return (
        filter.businessName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.email
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
        filter.contactNumber
          .split(" ")
          .join("")
          .includes(searchablePartner.split(" ").join("")) ||
        filter.plan?.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchablePartner.toLowerCase().split(" ").join(""))
      );
    });

    this.setState({
      partnerList: filtered,
    });
  };

  render() {
    const { partners } = this.props;
    const usersPerPage = 10;
    const pageVisited = this.state.pageNumber * usersPerPage;

    const pageCount = Math.ceil(
      this.props.partners.partners.length / usersPerPage
    );

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };

    let data;
    if (partners.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>
      );
    } else if (partners.partners && partners.partners.length > 0) {
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
              {this.state.searchPartner
                ? this.state.partnerList
                    .filter((item) => item.status === 1)
                    .map((item, index) => (
                      <ApprovedPartnersRow
                        key={index}
                        id={item.id}
                        name={item.businessName}
                        contact={item.contactNumber}
                        email={item.email}
                        description={item.businessDescription}
                        partnerType={item.partnerType.type}
                        plan={item.plan?.name}
                      />
                    ))
                : partners.partners
                    .filter((item) => item.status === 1)
                    .slice(pageVisited, pageVisited + usersPerPage)
                    .map((item, index) => {
                      return (
                        <ApprovedPartnersRow
                          key={index}
                          id={item.id}
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

              {/* <select name="" id="">
                <option value="On Hold">All</option>
                <option value="On Hold">On Hold</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted">Accepted</option>
                <option value="Pending">Pending</option>
              </select> */}
            </div>

            <CardBody>{data}</CardBody>
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
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

export default connect(mapStateToProps, { getPartners })(AllApprovedPartners);
