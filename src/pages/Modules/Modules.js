import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

import SingleModule from "./SingleModule";
import ModulesNav from "./ModulesNav";
import "./module.scss";
import ModuleBackBtn from "./ModuleBackBtn";
import axios from "axios";
import { ip } from '../../config/config';
import { useDispatch, useSelector } from "react-redux";
import { FetchModuleFailure, fetchModules, FetchModuleSuccess } from "../../store/partnerModules/actions/actions";

const Modules = () => {

  const { modules } = useSelector(state => state.partnerModules)
  const dispatch = useDispatch();
  const onChange = (moduleDbName, value) => {
    axios.post(`${ip}/admin/partnerModule/updatePartnerModule`, {
      id: modules._id,
      [moduleDbName]: JSON.stringify(value)

    }).then(res => {
      console.log(res)
      console.log(moduleDbName + "This is a test " + value)

      dispatch(FetchModuleSuccess(res.data))


    }).catch(err => {
      console.log(err)

      dispatch(FetchModuleFailure(err))

    })

  }


  return (
    <div className="page-content">
      <Container fluid>
        <ModuleBackBtn route="dashboard" />
        <ModulesNav />
        <h6>Enable / Disable Partner Module</h6>
        <div className="module-grid">
          <SingleModule changeToggle={onChange} status={modules.dashboard} moduleName="Dashboard" moduleDbName={"dashboard"} />
          <SingleModule changeToggle={onChange} status={modules.transactions} moduleName="Transactions" moduleDbName={"transactions"} />
          <SingleModule changeToggle={onChange} status={modules.settlements} moduleName="Settlements" moduleDbName={"settlements"} />
          <SingleModule changeToggle={onChange} status={modules.myProducts} moduleName="My Products" moduleDbName={"myProducts"} />
          <SingleModule changeToggle={onChange} status={modules.myOrders} moduleName="My Orders" moduleDbName={"myOrders"} />
          <SingleModule changeToggle={onChange} status={modules.reports} moduleName="Reports" moduleDbName={"reports"} />
          <SingleModule changeToggle={onChange} status={modules.manageQr} moduleName="Manage QR" moduleDbName={"manageQr"} />
          <SingleModule changeToggle={onChange} status={modules.settings} moduleName="Settings" moduleDbName={"settings"} />
          <SingleModule changeToggle={onChange} status={modules.help_support} moduleName="Help & Supports" moduleDbName={"help_support"} />
        </div>
      </Container>
    </div>
  );
};

export default Modules;
