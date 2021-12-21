import React,{useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchAdminUsers } from "../../../store/adminusers/actions/actions";

const ShowTotalNumberOfUsers = () => {
  const dispatch=useDispatch();
 const { adminusers } = useSelector((state) => state.adminUsers);  
  useEffect(() => {
    dispatch(fetchAdminUsers());
 }, [])
 
  return (
    <>
    {adminusers?.length}
    </>
  );
};
export default ShowTotalNumberOfUsers;

