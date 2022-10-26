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
        <Search getItem={getItem} products={products} />
        <Table products={products} />
        <MyPag />
        <Sort getItem={getItem} products={products} />
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

export default MainPage;
