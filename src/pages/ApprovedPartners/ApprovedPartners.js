import React, { useDebugValue, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import "./approvedpartners.scss";
import SearchPartner from "./SearchPartner";
import { getApprovedPartners } from "../../store/partners/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import BackBtn from "../BackBtn";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";
import { fetchPartners } from "../../store/businessprofiles/actions/actions";
import { fetchOrders } from "../../store/orders/actions/actions";
import axios from "axios";
import { ip } from "./../../config/config";
const ApprovedPartners = ({ getApprovedPartners }) => {
  //const partnersList = partners.approvedPartners;
  const [searchPartner, setSearchPartner] = useState(null);
  const [filteredPartner, setFilteredPartner] = useState(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, []);

  const { modules } = useSelector((state) => state.partnerModules);
  const { partners } = useSelector((state) => state.businessPartner);
  const { loading } = useSelector((state) => state.businessPartner);
  console.log(modules);
  console.log("All patners", partners);
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
                  : partners.map((partner) => {
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ApprovedPartners;
/*const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};*/

/*export default connect(mapStateToProps, { getApprovedPartners })(
  ApprovedPartners
);*/
