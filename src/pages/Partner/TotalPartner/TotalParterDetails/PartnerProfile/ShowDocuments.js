import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import pdfimg from "../../../../../assets/pdfimg.png";
import { ip } from "../../../../../config/config";
import FileSaver from "file-saver";

const ShowDocuments = ({ img }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let fileExtension = img.split(".").pop();

  const downloadImg = () => {
    FileSaver.saveAs(`${ip}/partners/${img}`, img);
  };

  return (
    <>
      <div>
        {fileExtension === "pdf" || fileExtension === "PDF" ? (
          <embed src={pdfimg} onClick={toggle}></embed>
        ) : (
          <embed src={`${ip}/partners/${img}`} onClick={toggle}></embed>
        )}
      </div>

      <Modal className="img-modal" isOpen={modal} centered toggle={toggle}>
        <ModalBody className="img-modal-body">
          <embed src={`${ip}/partners/${img}`} onClick={toggle}></embed>
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
