import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import PartnerDashboard from "../pages/Dashboard/PartnerDashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import DeliveryDashboard from "../pages/Dashboard/DeliveryDashboard";
import SupportDashboard from "../pages/Dashboard/SupportDashboard";
import Customer from "../pages/Customer/Customer";
import PartnerTypes from "../pages/PartnerType/partnerTypes/PartnerTypes";
import PartnerCategory from "../pages/PartnerCategory/PartnerCategory";
import Partner from "../pages/Partner/Partner";
// import User from "../pages/Admin/User/User";
import HelpAndSupport from "../pages/HelpAndSupport/HelpAndSupport";
import PartnerDetails from "../pages/Partner/PartnerDetails/PartnerDetails";
import PartnerType from "../pages/Dashboard/TypesCategoriesDashboard/index";
// import AllUsers from "../pages/Admin/User/User"
import Ticket from "../pages/Partner/Ticket";
import OnHoldDetails from "../pages/Partner/PartnerDetails/OnHold/OnHoldDetails";
import ApprovedPartners from "../pages/ApprovedPartners/ApprovedPartners";
import OrderDetails from "../pages/ApprovedPartners/Details/Orders/OrdersDetails";
import SettleDetails from "../pages/ApprovedPartners/Details/Settlements/SettleDetails";
import SettlementSettings from "../pages/ApprovedPartners/Details/Settlements/SettleSettings/Settings";
import Products from "../pages/ApprovedPartners/Details/Products/Products";
import Reports from "../pages/ApprovedPartners/Details/Reports/ReportDetails";
import ManageQR from "../pages/ApprovedPartners/Details/ManageQR/ManageQR";
import InnerSettlement from "../pages/ApprovedPartners/Details/Settlements/InnerSettlement/InnerSettlement";
import InnerProduct from "../pages/ApprovedPartners/Details/Products/InnerProduct/InnerProduct";
import EditProduct from "../pages/ApprovedPartners/Details/Products/EditProduct/EditProduct";
import AddProduct from "../pages/ApprovedPartners/Details/Products/AddProduct/AddProduct";

import Modules from "../pages/Modules/Modules";
import PartnerModule from "../pages/ApprovedPartners/Details/PartnerModule/PartnerModule";
import DeliveryModules from "../pages/Modules/DeliveryModules";
import UserModules from "../pages/Modules/UserModules";
import Profile from "../pages/ApprovedPartners/Details/Profile/Profile";
import CustomerDetails from "../pages/Customer/CustomerDetails/CustomerDetails";
import UserTransaction from "../pages/Customer/Transactions/Transaction";
import CustomerModules from "../pages/Customer/Modules/UserModules";
import CustomerOrders from "../pages/Customer/Orders/Orders";
import CustomerReports from "../pages/Customer/Reports/Reports";
import Delivery from "../pages/Delivery/Delivery";
import DeliveryOrders from "../pages/Delivery/Orders/Orders";
import DeliverySettlements from "../pages/Delivery/Settlements/Settlements";
import DeliveryPartnerModule from "../pages/Delivery/Modules/Modules";
import DeliveryReview from "../pages/Delivery/Review/Review";
import DeliveryProfile from "../pages/Delivery/Profile/Profile";

//Admin Module Routes
//import AdminUser from "../pages/Admin/User/User";
import Tickets from "../pages/HelpAndSupport/Tickets/Tickets";
import NewTickets from "../pages/HelpAndSupport/Tickets/NewTickets";
import OpenTickets from "../pages/HelpAndSupport/Tickets/OpenTickets";
import ClosedTickets from "../pages/HelpAndSupport/Tickets/ClosedTickets";

//Logs Components
import PartnersLog from "../pages/Logs/PartnersLog/PartnersLog";
import OnboardingLogs from "../pages/Logs/OnboardingLogs/OnboardingLogs";
import UsersLog from "../pages/Logs/UsersLog/UsersLog";
import DeliveryLogs from "../pages/Logs/DeliveryLogs/DeliveryLogs";
import SupportLogs from "../pages/Logs/SupportLogs/UsersLog";

import UserProfile from "../pages/Customer/CustomerDetails/UserProfile/UserProfile";
import CreditDetails from "../pages/Customer/CustomerDetails/CreditDetails/CreditDetails";
import CreditScoreDetails from "../pages/Customer/CustomerDetails/CreditDetails/CreditScoreDetails"
import PartnerAllTransactions from "../pages/Partner/AllApprovedPartners/ApprovedParterDetails/PartnerAllTarnsactions/PartnerAllTransactions";
// import PartnerInitiatedTransactions from "../pages/Partner/AllApprovedPartners/ApprovedParterDetails/PartnerAllTarnsactions/PartnerInitiatedTransactions";
import AllApprovedPartners from "../pages/Partner/AllApprovedPartners/AllApprovedPartners";
import PartnerSettlements from "../pages/Partner/AllApprovedPartners/ApprovedParterDetails/PartnerAllSettlements/PartnerSettlements";
import Transaction from "../pages/Customer/Transactions/Transaction";
import Comment from "../pages/HelpAndSupport/SupportComments/Comment";

const authProtectedRoutes = [
  { path: "/partner-dashboard", component: PartnerDashboard },
  { path: "/dashboard", component: AdminDashboard },
  { path: "/user-dashboard", component: UserDashboard },
  { path: "/partner-type", component: PartnerType },
  { path: "/delivery-dashboard", component: DeliveryDashboard },
  { path: "/support-dashboard", component: SupportDashboard },
  { path: "/auth-lock-screen", component: AuthLockScreen },
  { path: "/users", component: Customer },
  { path: "/partner-types", component: PartnerTypes },
  { path: "/partner-category", component: PartnerCategory },
  { path: "/user-profile/:id/:contact", component: UserProfile },
  { path: "/credit-details", component: CreditDetails },
  { path: "/credit-score/:id/:contact", component: CreditScoreDetails },
  { path: "/user/:id", component: Customer },
  { path: "/user-module", component: CustomerModules },
  { path: "/user-orders", component: CustomerOrders },
  { path: "/user-reports", component: CustomerReports },

  //Delivery Routes
  { path: "/delivery", component: Delivery },
  { path: "/delivery-orders", component: DeliveryOrders },
  { path: "/delivery-settlements", component: DeliverySettlements },
  { path: "/delivery-module", component: DeliveryPartnerModule },
  { path: "/delivery-review", component: DeliveryReview },
  { path: "/delivery-profile", component: DeliveryProfile },

  //Logs Route

  { path: "/logs", component: PartnersLog },
  { path: "/onboarding-partner-logs", component: OnboardingLogs },
  { path: "/users-log", component: UsersLog },
  { path: "/delivery-logs", component: DeliveryLogs },
  { path: "/support-logs", component: SupportLogs },

  //Partner Onboarding routes
  { path: "/partner-approval", component: Partner },
  { path: "/approved-partner", component: AllApprovedPartners },
  { path: "/partner-transactions/:id", component: PartnerAllTransactions },
  // { path: "/partner-initiated-transactions/:id", component: PartnerInitiatedTransactions },
  { path: "/partner-settlements/:id", component: PartnerSettlements },

  //Admin Module Routes
  { path: "/user-transactions/:id/:contact", component: Transaction },
  { path: "/help-and-support", component: HelpAndSupport },
  { path: "/partner-details/:id", component: PartnerDetails },
  { path: "/onhold-details/:serviceId", component: OnHoldDetails },
  { path: "/partners", component: ApprovedPartners },
  { path: "/orders", component: OrderDetails },
  { path: "/settlements", component: SettleDetails },
  { path: "/settlement-setting", component: SettlementSettings },
  { path: "/products", component: Products },
  { path: "/product/id", component: InnerProduct },
  { path: "/edit-product", component: EditProduct },
  { path: "/add-product", component: AddProduct },
  { path: "/reports", component: Reports },
  { path: "/manageQr", component: ManageQR },
  { path: "/settlement/id", component: InnerSettlement },
  { path: "/profile", component: Profile },
  { path: "/modules", component: Modules },
  { path: "/delivery-modules", component: DeliveryModules },
  { path: "/user-modules", component: UserModules },
  { path: "/partner-module", component: PartnerModule },

  //Support routes
  { path: "/support-tickets", component: Tickets },
  { path: "/support-comment/:id", component: Comment },
  { path: "/new-tickets", component: NewTickets },
  { path: "/open-tickets", component: OpenTickets },
  { path: "/closed-tickets", component: ClosedTickets },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  // { path: "PartnerDetails", component: PartnerDetails },
  // { path: "DeliveryDashboard", component: DeliveryDashboard },
  // { path: "/customer", component: Customer },
  // { path: "/SettlementSettings", component: SettlementSettings },
  { path: "/register", component: Register },
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/ticket/:serviceId", component: Ticket },
];

export { authProtectedRoutes, publicRoutes };
