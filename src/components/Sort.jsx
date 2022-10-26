/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { adminContext } from "../context/AdminContext";

const Sort = ({ getItem }) => {
  const data = React.useContext(adminContext);
  const { sortItems } = data;
  const sortOptions = ["name", "quantity", "distance", "date"];
  const [sortValue, setSortValue] = useState();
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    sortItems(value);
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <MDBRow>
      <MDBCol size="8">
        <select
          style={{ width: "200%", borderRadius: "4px", height: "35px" }}
          onChange={handleSort}
          value={sortValue}
        >
          <option value="">Please select area</option>
          {sortOptions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </MDBCol>
    </MDBRow>
  );
};

export default Sort;
