import React, { useEffect, useState } from "react";
import Container from "reactstrap/lib/Container";
import DetailsNav from "../DetailsNav";
import BackBtn from "../BackBtn";
import qrImg from "../../../../assets/images/qr.png";
import eazrLogo from "../../../../assets/images/logo-light1.png";
import "./manageqr.scss";
import AddUPI from "./AddUPI";
import { useSelector } from "react-redux";
import { UPDATE_PARTNER_FAILED } from "../../../../store/partners/types";
import QRCode from "react-qr-code";
import axios from "axios";
import { saveAs } from "file-saver";
import FileSaver from "file-saver";
import { ip } from "../../../../config/config";
const ManageQR = () => {
  const [upiItem, setUpiItem] = useState();
  const [profile, setProfile] = useState();
  const { partners } = useSelector((state) => state.businessPartner);
  const { partner } = useSelector((state) => state.businessPartner);

  const [upiData, setUpiData] = useState([]);
  useEffect(() => {
    axios
      .get(`${ip}/admin/businessprofiles/getPartnersById`, {
        params: {
          businessPartner: partner.businessPartner,
        },
      })
      .then(function (response) {
        // console.log(response.data);
        // setUpiList([response.data])
        setProfile(response.data);
        setUpiData(response.data.upi);
        //console.log(upiData)
        //setUpiData(partners)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [upiData]);

  const [qrName, setQrName] = useState([partner.businessName]);

  const [displayName, setDisplayName] = useState("Apollo Pharmacy");

  const [newQrName, setNewQrName] = useState(null);

  const addNewQrName = () => {
    setQrName([newQrName, ...qrName]);
  };

  const Id = partner._id;
  const phone = partner.mobile;
  //const Id=partner._id.substr(20);

  const emailString = "@eazr.in";
  const concatedUpi = Id + "-" + phone + emailString;
  const qrData = {
    eazrId: profile ? profile.mobile + "eazr.in" : "Test Id",
    userId: profile ? profile.businessPartner : "Test Id",
  };
  var res = JSON.stringify(qrData);

  //const upiData=partner.upi;

  const [upiList, setUpiList] = useState(partner.upi);
  const [upi, setUpi] = useState(null);

  const downloadUpi = () => {
    axios
      .get(`${ip}/admin/businessprofiles/downloadqr`, {
        params: {
          profileId: partner._id,
        },
      })
      .then((res) => {
        FileSaver.saveAs(`${ip}/qr/` + partner.businessPartner + "/EazrQr.jpg");
      })
      .catch((err) => {
        console.log(err);
      });
    //  FileSaver.saveAs(
    //   `${ip}/qr/` + partner.businessPartner + "/EazrQr.jpg"
    // );
  };

  const addUpi = () => {
    if (upi !== null) {
      axios
        .post(`${ip}/admin/businessprofiles/addupi`, {
          id: partner._id,
          upi: upi,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      //setUpiList([upi, ...partner.upi]);
      // console.log(partner.upi[upi])

      //console.log(upiList)
      console.log(res);
    } else {
      return false;
    }
  };

  //=============================
  //     Deleting UPI Logic
  //============================

  const deleteUpi = (value) => {
    axios
      .delete(`${ip}/admin/businessprofiles/deleteupi`, {
        data: { id: partner._id, upi: value },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    /* const filteredUpi = upiList.filter((list, index) => {
      return index != value;
    });*/

    //setUpiList(filteredUpi);
  };
  {
    /*console.log(profile);*/
  }
  //console.log(upiData)
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="approved-partner-details" />
        <DetailsNav />
        <div className="qr-content">
          <div className="qr-image">
            <img className="eazr-logo" src={eazrLogo} alt="" />
            <h6>Scan & Pay</h6>
            <QRCode value={res} size={200} />
            <h6 className="qr-name">{partner.businessName}</h6>
            <button>Share</button>
          </div>
          <div className="qr-details">
            <div className="qr-download">
              <div className="select-qr-name">
                <h6>QR Display Name</h6>
                <select
                  name="qr-name"
                  id=""
                  onChange={(e) => setDisplayName(e.target.value)}
                >
                  {qrName.map((name) => {
                    return <option value={name}>{name}</option>;
                  })}
                  {/*<option value={partner.businessName}>{partner.businessName}</option>*/}
                </select>
              </div>

              <div>
                <button onClick={downloadUpi}>Download</button>
              </div>
            </div>
            <div className="add-display-name">
              <div className="input-div">
                <h6>Add Display Name</h6>
                <input
                  type="text"
                  placeholder="Apollo Pharmacy"
                  onChange={(e) => setNewQrName(e.target.value)}
                />
              </div>
              <div>
                <button onClick={addNewQrName}>Add</button>
              </div>
            </div>
            <div className="add-upi">
              <div className="input-div">
                <h6>Add UPI</h6>
                <input
                  type="text"
                  placeholder="eazr@okhdfc"
                  onChange={(e) => setUpi(e.target.value)}
                />
              </div>
              <div>
                <button onClick={addUpi}>Add UPI</button>
              </div>
            </div>
            <h6>Added UPI List</h6>
            <div className="display-upi">
              {profile
                ? profile.upi.map((upi, index) => {
                    return (
                      <AddUPI
                        key={index}
                        status={true}
                        upiId={upi.upi}
                        index={index}
                        deleteUpi={deleteUpi}
                      />
                    );
                  })
                : null}

              {/*   {partners.map((upi, index) => {
              if(upi.businessPartner==partner.businessPartner){
              return(  
                upi.upi.map((upiId)=>
                  <AddUPI
                    key={index}
                    status={true}
                    upiId={upiId.upi}
                    index={index}
                    deleteUpi={deleteUpi}
                  />
              ));
              }
              else{
                return null;
              }
              })}*/}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageQR;
