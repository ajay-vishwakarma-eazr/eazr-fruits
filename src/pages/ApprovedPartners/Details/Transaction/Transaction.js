import React, { useDebugValue, useEffect, useState } from "react";
import { Table } from "reactstrap";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import "./table.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../../store/transactions/actions/action";

const Transaction = (props) => {
  // ((transaction.order_status.status).toLowerCase().includes(SelectOption.toLowerCase()))
  //transaction.businessPartner==partner.businessPartner?
  const { transactions } = useSelector((state) => state.transactions);
  const { partner } = useSelector((state) => state.businessPartner);
  const PassedText = props.text;
  const SelectOption = props.option;
  const AllTransactions = props.value;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    console.log(transactions);
  }, []);
  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns">
        <Table
          center
          // striped
          // bordered
          responsive
          className="transaction-table"
        >
          <TableHeading />
          {transactions
            .filter((transaction) => {
              if (PassedText !== "") {
                return (
                  Object.values(transaction)
                    .join(" ")
                    .toLowerCase()
                    .includes(PassedText.toLowerCase()) ||
                  transaction.business_partner.email
                    .toLowerCase()
                    .includes(PassedText.toLowerCase())
                );
              } else if (SelectOption != "All Transactions") {
                return transaction.order_status.status
                  .toLowerCase()
                  .includes(SelectOption.toLowerCase());
              } else {
                return transaction;
              }
            })
            .map((transaction) =>
              transaction.businessPartner == partner.businessPartner ? (
                <TableRow
                  paymentId={transaction.paymentId}
                  eazrpayOrderId="#1234"
                  orderId={transaction.orderId.substr(20)}
                  amount={transaction.amount}
                  email={transaction.business_partner.email}
                  contact={transaction.business_partner.phone}
                  createdAt={transaction.createdAt.substr(0, 10)}
                  status={transaction.order_status.status}
                />
              ) : null
            )}
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
