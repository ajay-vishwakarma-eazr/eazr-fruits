import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={12}>
              <div className="text-sm-right d-none d-sm-block">
                {new Date().getFullYear()} © Eazr Digipayments Private Limited
              </div>
            </Col>
            {/* <Col sm={6}>
                <div className="text-sm-right d-none d-sm-block">
                    Crafted with <i className="mdi mdi-heart text-danger"></i> by
                    Themesdesign
                </div>
                </Col> */}
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
