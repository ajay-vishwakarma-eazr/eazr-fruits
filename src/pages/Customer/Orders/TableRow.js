import React, { useState } from "react";
import OrderModal from "./OrderModal";
import img from "../../../assets/images/users/avatar-7.jpg";

const TableRow = ({
  orderNo,
  date,
  customerName,
  contact,
  amount,
  platform,
}) => {
  return (
    <tr>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{customerName}</td>
      <td>{contact}</td>
      <td>₹ {amount}</td>
      <td>{platform}</td>
      <td>
        {" "}
        <OrderModal
          img={img}
          name="Govind Sharma"
          contact="9867567656"
          orderNumber="65665"
          date="10-04-2021"
          time="02:30 PM"
          transType="Phone"
          amt="500"
          address="3rd Floor, We Work, JVLR, Powai, 400076"
          itemName="Crocin"
          itemQty="12"
          itemCost="300"
          additionalInfo="Lorem IpsumLoremIpsumLo remIpsu mLoremIp sumLoremIpsum "
          deliveryDate="10-02-2020"
          deliveryTime="01:20 PM"
          subTotal="900"
          deliveryFee="20"
          totalAmount="920"
        />
      </td>
    </tr>
  );
};

export default TableRow;
