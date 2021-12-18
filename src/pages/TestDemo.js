import React, { Component } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import "./Partner/partner.scss";
class TestDemo extends Component {
  
  render() {
  
    return (
      <div className="page-content partner">
        <Container fluid>
          <Card className="partner-table-approval">
            <CardBody>
    
              <div className="search-partner">
                <div>
                  <label htmlFor="">Search Partner: </label>
                  <input type="text" placeholder="Search..." />
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}


export default TestDemo;
