import React, { Component } from "react";
import { Row, Col, Card, Form } from "reactstrap";
import Dropzone from "react-dropzone";

// Breadcrumb

import { Link } from "react-router-dom";

class ProductUpload extends Component {
  constructor(props) {
    super(props);
    this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    this.state = {
      selectedFiles: [],
    };
  }

  handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    );

    this.setState({ selectedFiles: files });
  };

  /**
   * Formats the size
   */
  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  removeFile = (i) => {
    let fileArray = this.state.selectedFiles.filter((file, index) => {
      return index != i;
    });

    this.setState({ selectedFiles: fileArray });
  };

  render() {
    return (
      <Form>
        <Dropzone
          onDrop={(acceptedFiles) => this.handleAcceptedFiles(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone">
              <div className="dz-message needsclick mt-2" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="mb-3">
                  <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                </div>
                <h4>Drop files here or click to upload.</h4>
              </div>
            </div>
          )}
        </Dropzone>
        <div className="dropzone-previews mt-3" id="file-previews">
          {this.state.selectedFiles.map((f, i) => {
            return (
              <Card
                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                key={i + "-file"}
              >
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={f.name}
                        src={f.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {f.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{f.formattedSize}</strong>
                      </p>
                    </Col>
                    <i
                      style={{
                        position: "absolute",
                        right: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => this.removeFile(i)}
                      className="far far fa-times-circle"
                    ></i>
                  </Row>
                </div>
              </Card>
            );
          })}
        </div>
      </Form>
    );
  }
}

export default ProductUpload;
