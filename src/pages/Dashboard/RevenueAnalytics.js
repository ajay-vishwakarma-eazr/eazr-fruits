import React, { Component } from "react";
import { Row, Col, Card, CardBody, ButtonGroup, Button } from "reactstrap";
import { connect } from "react-redux";
//Import Charts
import ReactApexChart from "react-apexcharts";
import { getTranscations } from "../../store/transactions/actions/action";

class RevenueAnalytics extends Component {
  state = {
    series: [
      {
        name: "2022",
        type: "column",
        data: [7, 5, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "2021",
        type: "line",
        data: [7, 5, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 3],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      colors: ["#0371e3", "#1cbb8c"],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  componentDidMount() {
    this.props.getTranscations();
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="float-right d-none d-md-inline-block">
              <ButtonGroup className="mb-2">
                <Button size="sm" color="light" type="button">
                  Today
                </Button>
                <Button size="sm" color="light" active type="button">
                  Weekly
                </Button>
                <Button size="sm" color="light" type="button">
                  Monthly
                </Button>
              </ButtonGroup>
            </div>
            <h4 className="card-title mb-4">Revenue Analytics</h4>
            <div>
              <div id="line-column-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  height="280"
                />
              </div>
            </div>
          </CardBody>

          <CardBody className="border-top text-center">
            <Row>
              {/* <Col sm={4}>
                <p className="text-muted text-truncate mb-0">This month</p>
                <div className="d-inline-flex">
                  <h5 className="mr-2">??? 12,253</h5>
                  <div className="text-success">
                    <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                  </div>
                </div>
              </Col> */}

              <Col sm={6}>
                <div className="mt-4 mt-sm-0">
                  <p className="mb-2 text-muted text-truncate">
                    <i className="mdi mdi-circle text-primary font-size-10 mr-1"></i>{" "}
                    This Year :
                  </p>
                  <div className="d-inline-flex">
                    <h5 className="mb-0 mr-2">
                      ???
                      {Array.isArray(this.props.transactions.transactions)
                        ? this.props.transactions.transactions
                            ?.map((item) => item?.amount)
                            .reduce((prev, curr) => prev + curr, 0)
                        : "0"}
                    </h5>
                    <div className="text-success">
                      <i className="mdi mdi-menu-up font-size-14"> </i>2.1 %
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="mt-4 mt-sm-0">
                  <p className="mb-2 text-muted text-truncate">
                    <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{" "}
                    Previous Year :
                  </p>
                  <div className="d-inline-flex">
                    <h5 className="mb-0">??? 0</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};
export default connect(mapStateToProps, { getTranscations })(RevenueAnalytics);
