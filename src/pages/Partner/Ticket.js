import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import { ip } from "../../config/config";
import ClipLoader from "react-spinners/ClipLoader";

class Ticket extends React.Component {
  state = {
    loading: false,
    fields: null,
    errors: null,
  };


  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`${ip}/admin/partners/getticketfields`, {
        params: {
          serviceId: this.props.match.params.serviceId,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({ fields: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errors: err.message, loading: false });
      });
  }

  render() {
    let data;

    if (this.state.loading === true) {
      data = (
        <ClipLoader
          color="#fff"
          loading={true}
          // css={override}
          size={60}
        />
      );
    } else if (this.state.fields && this.state.fields.length > 0) {
      data = <h1>Ticket page</h1>;
    } else if (this.state.errors) {
      data = <h1>Server error</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>{data}</Container>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Ticket;
