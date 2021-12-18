import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, Table } from "reactstrap";
import SearchDelivery from "./SearchDelivery";
import { connect } from "react-redux";
import { getDeliveryPartners } from "../../store/deliveryPartner/action";
import TableHeading from "./Table/TableHeading";
import TableRow from "./Table/TableRow";
import "./delivery.scss";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySection from "../../components/EmptySection/EmptySection";

const Delivery = ({ deliveryPartners, getDeliveryPartners }) => {
  const [searchDelivery, setSearchDelivery] = useState(null);
  const [filteredDeliveryPartner, setFilteredDeliveryPartner] = useState(null);

  const getSearchDelivery = (value) => {
    setSearchDelivery(value);
  };

  useEffect(() => {
    getDeliveryPartners();
  }, []);

  const handleSearch = (value) => {
    
    const filtered =deliveryPartners?.deliveryPartners?.filter(
      
      (deliveryPartner) => {
        return (
          deliveryPartner.name
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(value.toLowerCase().split(" ").join("")) ||
          deliveryPartner.email
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(value.toLowerCase().split(" ").join("")) ||
          deliveryPartner.address
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(value.toLowerCase().split(" ").join(""))
        );
      }
    );

    setFilteredDeliveryPartner(filtered);
  };

  console.log(filteredDeliveryPartner);

  let data;

  if (deliveryPartners.loading === true) {
    data = (
      <div className="spinner-div">
        <ClipLoader color="#bbbbbb" loading={true} size={60} />
      </div>
    );
  } else if (filteredDeliveryPartner && filteredDeliveryPartner.length > 0) {
    data = (
      <Card>
        {searchDelivery ? (
          <CardBody>
            <div className="table-rep-plugin">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table
                  className="delivery-partner-table"
                  // striped
                  // bordered

                  responsive
                >
                  <TableHeading />
                  {filteredDeliveryPartner != null
                    ? filteredDeliveryPartner.map((deliveryPartner) => {
                        return (
                          <TableRow
                            name={deliveryPartner.name}
                            email={deliveryPartner.email}
                            address={deliveryPartner.address}
                          />
                        );
                      })
                    : "No data"}
                </Table>
              </div>
            </div>
          </CardBody>
        ) : (
          <EmptySection />
        )}
      </Card>
    );
  } else {
    data = <EmptySection />;
  }
  return (
    <div className="page-content">
      <Container fluid>
        <Card>
          <CardBody>
            <SearchDelivery
              getSearchDelivery={getSearchDelivery}
              handleSearch={handleSearch}
            />
          </CardBody>
        </Card>
        {data}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deliveryPartners: state.deliveryPartners,
  };
};

export default connect(mapStateToProps, { getDeliveryPartners })(Delivery);
