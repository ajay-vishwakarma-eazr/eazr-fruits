import React, { useState, useEffect } from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { Table } from "reactstrap";
import { fetchSettlements } from "../../../../store/settlement/actions/action";
import { useDispatch, useSelector } from "react-redux";
import "./table.scss";

const Settlements = (props) => {
  const PassedText = props.text;

  let today = new Date();
  const { settlements } = useSelector((state) => state.settlement);
  let Newdate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSettlements());
    console.log(partner);
  }, []);

  const { partner } = useSelector((state) => state.businessPartner);

  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns">
        <Table
          center
          // striped
          // bordered
          responsive
          className="settlement-table"
        >
          <TableHeading />

          {settlements
            .filter((settlement) => {
              if (PassedText !== "") {
                return Object.values(settlement)
                  .join(" ")
                  .toLowerCase()
                  .includes(PassedText.toLowerCase());
              } else {
                return settlement;
              }
            })
            .map((settlement) =>
              settlement.businessPartner == partner.businessPartner ? (
                <TableRow
                  setttlementId={settlement._id.substr(20)}
                  amount={settlement.amount}
                  fees="₹80"
                  tax="₹30"
                  createdAt={settlement.createdAt.substr(0, 10)}
                  status="Completed"
                />
              ) : null
            )}
        </Table>
      </div>
    </div>
  );
};

export default Settlements;
