import React, { Component } from "react";
import PartnerTableHeading from "./Table/PartnerTableHeading";
import PartnerTableRow from "./Table/PartnerTableRow";
import { Card, CardBody, Container, Table } from "reactstrap";
import "./partner.scss";
import "./Table/partnerTable.scss";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
// import Loader from "../../assets/static/loader-blue";
import lottie from "lottie-web";
//Actions
import ReactPaginate from "react-paginate";
import {
  getPartners,
  getApprovedPartners,
  searchOnboardingPartners,
} from "../../store/partners/actions";
import BackBtn from "../BackBtn";
import EmptySection from "../../components/EmptySection/EmptySection";

class Partner extends Component {
  constructor() {
    super();
    this.state = {
      searchPartner: "",
      partnerList: null,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    this.props.getPartners(this.state.pageNumber);
  }

  changePage = ({ selected }) => {
    const newSelect = selected + 1;
    this.setState({ pageNumber: newSelect });
    this.props.getPartners((this.state.pageNumber = newSelect));
  };

  handleSearch = (e) => {
    this.setState({
      searchPartner: e.target.value,
    });
    this.props.searchOnboardingPartners(this.state.searchPartner);
  };

  render() {
    const { partners } = this.props;

    let data;

    if (partners.loading === true) {
      data = (
        <div className="spinner-div">
          <ClipLoader color="#bbbbbb" loading={true} size={60} />
        </div>

        // <lottie-player
        //   src="https://assets3.lottiefiles.com/packages/lf20_w6xlywkv.json"
        //   background="transparent"
        //   speed="1"
        //   style="width: 300px; height: 300px;"
        //   loop
        //   controls
        //   autoplay
        // ></lottie-player>
      );
    } else if (
      partners.partners?.data !== null && 
      partners.partners?.data!==undefined &&
      partners.partners?.data.length > 0
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
              <PartnerTableHeading />
              {(this.state.searchPartner !== "" && partners.search !== undefined)
                ? partners.search
                    .map((item, index) => (
                      <PartnerTableRow
                        // key={index}
                        id={item.id}
                        profilePicture={item.businessProfilePicture}
                        brandName={item.businessName}
                        contact={item.contactNumber}
                        email={item.email}
                        type={item.partnerType?.type}
                        category={item.partnerCategory?.name}
                        plan={item.plan?.name}
                        status={item.status}
                      />
                    ))
                : partners.partners.data
                    .map((item, index) => {
                      return (
                        <PartnerTableRow
                          key={index}
                          id={item.id}
                          profilePicture={item.businessProfilePicture}
                          brandName={item.businessName}
                          contact={item.contactNumber}
                          email={item.email}
                          type={item.partnerType?.type}
                          category={item.partnerCategory?.name}
                          plan={item.plan?.name}
                          status={item.status}
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
                  pattern="[a-zA-Z0-9]+"
                  // minlength="4"
                  // maxlength="10"
                />
              </div>
            </div>

            {data}
            {partners.partners?.data.length > 0 &&
            this.state.searchPartner === "" ? (
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={this.props.partners.partners.pageCount}
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
  };
};

export default connect(mapStateToProps, {
  getPartners,
  searchOnboardingPartners,
})(Partner);
