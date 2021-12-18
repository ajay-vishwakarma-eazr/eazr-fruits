import React, { Component } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import "./partnerTableSattlements.scss";
import { connect } from "react-redux";
//import ClipLoader from "react-spinners/ClipLoader";
//Actions
//import { getPartners } from "../../../store/partners/actions";
//import BackBtn from "../../BackBtn";
//import EmptySection from "../../../components/EmptySection/EmptySection";
//import PartnerSattlementsHeading from "./PartnerSattlementsHeading";
import PartnerSattlementsRow from "./PartnerSattlementsRow";
class PartnerAllSattlements extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchPartner: "",
  //     partnerList: null,
  //   };
  // }
  // componentDidMount() {
  //   this.props.getPartners();
  // }

  // handleSearch = (e) => {
  //   this.setState({
  //     searchPartner: e.target.value,
  //   });

  //   const searchablePartner = e.target.value;

  //   const filtered = this.props.partners.partners.filter((filter) => {
  //     return (
  //       filter.businessName
  //         .toLowerCase()
  //         .split(" ")
  //         .join("")
  //         .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
  //       filter.businessEmail
  //         .toLowerCase()
  //         .split(" ")
  //         .join("")
  //         .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
  //       filter.serviceNumber
  //         .toLowerCase()
  //         .split(" ")
  //         .join("")
  //         .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
  //       filter.status.status
  //         .toLowerCase()
  //         .split(" ")
  //         .join("")
  //         .includes(searchablePartner.toLowerCase().split(" ").join("")) ||
  //       filter.phone.includes(searchablePartner) ||
  //       filter.serviceIds.some((sId) =>
  //         sId.serviceId.includes(searchablePartner)
  //       )
  //     );
  //   });

  //   this.setState({
  //     partnerList: filtered,
  //   });
  // };

  render() {
    // const { partners } = this.props;
    // let data;
    // if (partners.loading === true) {
    //   data = (
    //     <div className="spinner-div">
    //       <ClipLoader color="#bbbbbb" loading={true} size={60} />
    //     </div>
    //   );
    // } else if (partners.partners && partners.partners.length > 0) {
    //   data = (
    //     <div className="table-rep-plugin">
    //       <div
    //         className="table-responsive mb-0"
    //         data-pattern="priority-columns"
    //       >
    //         <Table
    //           center
    //           // striped
    //           // bordered
    //           responsive
    //           className="partner-approval-table"
    //         >
    //           <PartnerSattlementsHeading />
    //           {this.state.searchPartner
    //             ? this.state.partnerList.map((item, index) => (
    //                 <PartnerSattlementsRow
    //                   key={index}
    //                   id={item._id}
    //                   sattlements={item.sattlements}
    //                 />
    //               ))
    //             : partners.partners
    //                 .map((item, index) => {
    //                   return (
    //                     <PartnerSattlementsRow
    //                       key={index}
    //                       id="1"
    //                      // {item._id}
    //                       sattlements="700" 
    //                       //{item.sattlements}
    //                     />
    //                   );
    //                 })}
    //         </Table>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   data = <EmptySection />;
    // }

    return (
      <div className="page-content partner">
        <Container fluid>
          {/* <BackBtn route="partner-dashboard" /> */}
          <Card className="partner-table-approval">
            {/* <div className="search-partner">
              <div>
                <label htmlFor="">Search Partner: </label>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleSearch}
                  value={this.state.searchPartner}
                />
              </div>
            </div> */}

            <CardBody>
              <PartnerSattlementsRow
                //key={index}
                //id="1"
                // {item._id}
                //sattlements="700"
                //{item.sattlements}
              />
            </CardBody>
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

export default connect(mapStateToProps)(
  PartnerAllSattlements
);
