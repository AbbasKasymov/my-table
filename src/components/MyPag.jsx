import React, { useContext } from "react";
import { adminContext } from "../context/AdminContext";
import { Pagination } from "@mui/material";

const MyPag = () => {
  const data = useContext(adminContext);
  const { totalCount, itemsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  return (
    <div className="my-pagination">
      <Pagination
        onChange={(_, page) => handlePagination(page)}
        count={totalPages}
        style={{ color: "red" }}
      />
    </div>
  );
};

export default MyPag;
