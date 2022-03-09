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
  console.log("image", img);
  return (
    <>
      <div>
        {fileExtension === "pdf" || fileExtension === "PDF" ? (<div>
          <embed src={pdfimg} onClick={downloadImg}></embed>
          <p>{docName.slice(0, 16)}</p></div>
        ) : (
          <>
            <img
              style={{ height: "100%", width: "100%", padding: "5px" }}
              src={img === "" ? nodata : img}
              onClick={img?toggle:!toggle}
              // onClick={toggle}
            ></img>
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{docName}</p>
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
