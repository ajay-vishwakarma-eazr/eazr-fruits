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
              className="document-pdf"
              style={{ borderRadius: "15px", width: "auto" }}
              src={pdfimg}
              onClick={downloadImg}
            ></embed>
            <p className="document-title">{docName}</p>
          </>
        ) : (
          <>
            {img === "" || img === null? (
              <img src={nodata} className="document-images" />
            ) : (
              <img
                className="document-images"
                
                src={img}
                onClick={toggle}
              ></img>
            )}
            <p className="document-title">{docName}</p>
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
