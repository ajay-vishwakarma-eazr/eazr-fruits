import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import pdfimg from "../../../assets/pdfimg.png";
import nodata from "../../../assets/images/NoImg.png";
import FileSaver from "file-saver";

const ShowDocuments = ({ img, docName }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let fileExtension = img?.split(".").pop();
  // let fileExtension = img.split(".").pop();

  const downloadImg = () => {
    FileSaver.saveAs(`${img}`, img);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        {fileExtension === "pdf" || fileExtension === "PDF" ? (
          <>
            <embed
              style={{ borderRadius: "15px" }}
              src={pdfimg}
              onClick={downloadImg}
            ></embed>
            <p className="document-title">
              {docName}
            </p>
          </>
        ) : (
          <>
            <img
              style={{
                height: "100%",
                width: "100%",
                padding: "5px",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
              src={img === "" ? nodata : img}
              onClick={img ? toggle : !toggle}
              // onClick={toggle}
            ></img>
            <p className="document-title">
             {docName}
            </p>
          </>
        )}
      </div>

      <Modal className="img-modal" isOpen={modal} centered toggle={toggle}>
        <ModalBody className="img-modal-body">
          <img src={`${img} `} onClick={toggle}></img>
          {fileExtension !== "pdf" && fileExtension !== "PDF" && (
            <>
              <button onClick={downloadImg}>Download</button>
              <button className="cancel-btn" onClick={toggle}>
                Cancel
              </button>
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ShowDocuments;
