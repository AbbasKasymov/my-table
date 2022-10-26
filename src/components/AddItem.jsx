import React, { useState } from "react";
import styled from "styled-components";
import { adminContext } from "../context/AdminContext";

const AddItem = () => {
  const data = React.useContext(adminContext);
  const { addItem, getItem } = data;

  const [newItem, setNewItem] = useState({
    date: "",
    name: "",
    quantity: 0,
    distance: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newItem) {
      let value = newItem[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Fullfill all areas");
          return;
        }
      }
      getItem();
    }
    addItem(newItem);

    setNewItem({
      date: "",
      name: "",
      quantity: 0,
      distance: 0,
    });
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ margin: "40px 0 20px 0" }} className="text-center">
          Add Item
        </h2>
        <Forms onSubmit={(event) => handleSubmit(event)}>
          <Inputs
            onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
            value={newItem.date}
            type="date"
            placeholder="Date"
          />
          <Inputs
            type="text"
            placeholder="Name"
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            value={newItem.name}
          />
          <Inputs
            type="number"
            placeholder="Quantity"
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
            value={newItem.quantity}
          />
          <Inputs
            type="number"
            placeholder="Distance"
            onChange={(e) =>
              setNewItem({ ...newItem, distance: e.target.value })
            }
            value={newItem.distance}
          />

          <Buttons type="submit">Add item</Buttons>
        </Forms>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  background: transparent;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Forms = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
`;
const Inputs = styled.input`
  width: 47%;
  margin: 5px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: lightgray;
`;

const Buttons = styled.button`
  width: 100%;
  margin: 5px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  background: black;
  color: white;
`;

export default AddItem;
