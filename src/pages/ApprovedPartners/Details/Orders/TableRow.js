import React, { useState } from "react";
import OrderModal from "./OrderModal/OrderModal";
import img from "../../../../assets/images/users/avatar-7.jpg";
import Details from './OrdersDetails';


const TableRow = ({
  orderNo,
  date,
  customerName,
  contact,
  amount,
  platform,
  ItemName,
  address,
  products,  
  
  
}) => {
  return (
    
    
    <tr>
      <td>#{orderNo}</td>
      <td>{date}</td>
      <td>{customerName}</td>
      <td>{contact}</td>
      <td>₹ {amount}</td>
      <td>{platform}</td>
      <td>
        {" "}
        <OrderModal
          img={img}
          name={customerName}
          contact={contact}
          orderNumber={orderNo}
          date={date}
          time="02:30 PM"
          transType="Phone"
          amt={amount}
          address={address}
          itemName={ItemName}
          itemQty="12"
          itemCost="300"
          additionalInfo="Lorem IpsumLoremIpsumLo remIpsu mLoremIp sumLoremIpsum "
          deliveryDate="10-02-2020"
          deliveryTime="01:20 PM"
          subTotal="900"
          deliveryFee="20"
          totalAmount="920"
          products={products}
        />
      </td>
      
    </tr>
    
  );
};

export default TableRow;
