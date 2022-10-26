import React, { useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { adminContext } from "../context/AdminContext";

const Search = ({ getItem }) => {
  const data = React.useContext(adminContext);
  const { searchItems } = data;

  const [value, setValue] = useState("");
  const handleReset = () => {
    setValue("");
    getItem();
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    searchItems(value);
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <form
      style={{
        // margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      className="d-flex input-group w-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MDBBtn type="submit" color="primary">
        Search
      </MDBBtn>
      <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
        Reset
      </MDBBtn>
    </form>
  );
};

export default Search;
