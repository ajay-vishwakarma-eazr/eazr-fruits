import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./breadcrumb.scss";

const BreadCrumb = ({ route, sourcePage, currentPage }) => {
  return (
    <Breadcrumb>
      <Link to={`/${route}`}>
        <i class="mdi mdi-arrow-left-circle "></i>
      </Link>

      <BreadcrumbItem>
        <Link to={`/${route}`}>{sourcePage}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>{currentPage}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;
