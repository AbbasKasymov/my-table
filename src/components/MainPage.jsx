import React, { useContext } from "react";
import { adminContext } from "../context/AdminContext";
import AddItem from "./AddItem";
import MyPag from "./MyPag";
import Search from "./Search";
import Table from "./Table";
import styled from "styled-components";
import Sort from "./Sort";

const MainPage = () => {
  const data = useContext(adminContext);
  const { getItem, items: products } = data;

  return (
    <React.Fragment>
      <Container>
        <AddItem />
        <Filter>
          <Search getItem={getItem} products={products} />
          <Sort getItem={getItem} products={products} />
        </Filter>
        <Table products={products} />
        <MyPag />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
const Filter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default MainPage;
