import React, { useState, useEffect } from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { Table } from "reactstrap";
import "./orders.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../store/orders/actions/actions";
import { fetchPartners } from "../../../../store/businessprofiles/actions/actions";
import { useParams, withRouter } from "react-router-dom";
import Details from "./OrdersDetails";

const Orders = (props) => {
  const [date, setDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");
  const { orders } = useSelector((state) => state.orders);
  const { partner } = useSelector((state) => state.businessPartner);

  const PassedText = props.text;

  const SearchTextFunc = (e) => {
    setSearchText(e.target.value);
  };
  const product=orders.map((order)=>{
    if(order.businessPartner.businessPartner ==
    partner.businessPartner ){
      order.products.map((product)=>{
              return  product.name
      })
    }
  })
  let today = new Date();
  const [idSubstr, setIdSubStr] = useState([]);

 
  const SelectOption = props.option;
  const [OrderData, setOrderData] = useState([]);
  
  const dispatch = useDispatch();
  let ItemName;
  
  useEffect(() => {
    console.log(partner);
    dispatch(fetchOrders());
    // console.log((partner.businessPartner))
  }, []);
 
  const TestFunc = () => {};
  //order.businessPartner.businessPartner==partner.businessPartner
  //  ?
  let Newdate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [posts, setPosts] = useState([]);
  {
    /*useEffect(()=>{
  
     axios.get(`http://localhost:8080/api/orders`)
    .then(res=>{
        //console.log(res.data);
        //console.log(Newdate)
        setPosts(res.data)
        setIdSubStr(res.data.id)
    })
    .catch(err=>{
        console.log(err)
    })
})*/
  }
  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns">
        <Table
          center
          // striped
          // bordered
          responsive
          className="orders-table"
        >
          <TableHeading />

          {orders
            .filter((order) => {
              if (PassedText !== "") {
                return (
                  Object.values(order)
                    .join(" ")
                    .toLowerCase()
                    .includes(PassedText.toLowerCase()) ||
                  order.businessPartner.name
                    .toLowerCase()
                    .includes(PassedText.toLowerCase()) ||
                  order.businessPartner.mobile
                    .toLowerCase()
                    .includes(PassedText.toLowerCase()) ||
                  order.businessPartner.businessPartner
                    .substr(20)
                    .toLowerCase()
                    .includes(PassedText.toLowerCase())
                );
              } else if (SelectOption !== "All Orders") {
                return order.order_status.orderStatus
                  .toLowerCase()
                  .includes(SelectOption.toLowerCase());
              } else {
                return order;
              }
            })
            .map((order) =>
            
              order.businessPartner.businessPartner ==
              partner.businessPartner ?
            
              (
                <TableRow
                  orderNo={order.businessPartner.businessPartner.substr(20)}
                  date={order.createdAt.substr(0, 10)}
                  customerName={order.businessPartner.name}
                  contact={order.businessPartner.mobile}
                  amount={order.cost}
                  platform="Phone"
                  address={order.shipping.area}
               // products= {order.products}
             
                  ItemName= {product.name}
               //ItemName={}
                />
              ) : null
            )}
        </Table>
      </div>
    </div>
  );
};

export default withRouter(Orders);
