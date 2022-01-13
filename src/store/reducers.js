import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication Module
import Account from "./auth/register/reducer";
import authReducer from "./auth/authReducer";
import Forget from "./auth/forgetpwd/reducer";
import partnersReducer from "./partners/partnerReducer";
import deliveryPartnerReducer from "./deliveryPartner/deliveryPartnerReducer";
import { OrderReducer } from "./orders/Reducer/reducer";
import { ProductReducer } from "./products/reducers/reducer";
import { SettlementReducer } from "./settlement/reducers/reducer";
import { BusinessPartnerReducer } from "./businessprofiles/reducer/reducer";
import { transactionReducer } from "./transactions/reducers/reducer";
import { partnerModuleReducer } from "./partnerModules/reducers/reducer";
import { UserReducer } from "../store/adminusers/reducer/reducer";
import { AdminProfileReducer } from "./adminprofile/reducer/reducer";
import {bankReducer} from "../store/partners/Bank/bankReducer"
import { TicketReducer } from "./supportTickets/reducers/reducer";
const rootReducer = combineReducers({
  //order
  orders: OrderReducer,

  //product
  products: ProductReducer,

  //Settlement
  settlement: SettlementReducer,

  // Support-Tickets
  tickets: TicketReducer,

  //Business Profiles
  businessPartner: BusinessPartnerReducer,

  //users
  Users: UserReducer,

  // AdminProfile
  AdminProfile: AdminProfileReducer,

  //Transaction
  transactions: transactionReducer,

  //Partner Modules
  partnerModules: partnerModuleReducer,

  // public
  Layout,

  //bank details
  bank: bankReducer,

  // Authentication
  Account,
  auth: authReducer,
  partners: partnersReducer,
  deliveryPartners: deliveryPartnerReducer,
  Forget,
});

export default rootReducer;
