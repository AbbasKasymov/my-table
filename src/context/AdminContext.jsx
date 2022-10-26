import React, { useState } from "react";
import { useReducer } from "react";
import axios from "axios";

export const adminContext = React.createContext();
let url = "http://localhost:8000/products";

const initState = {
  products: [],
  itemsToEdit: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, products: action.payload };
    case "GET_ITEMS_TO_EDIT":
      return { ...state, itemsToEdit: action.payload };
    case "FILTERED_ITEMS":
      return { ...state, products: action.payload };
    case "SORTED_ITEMS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const AdminContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addItem = async (newItem) => {
    await axios.post(url, newItem).then(function (response) {
      console.log(response);
    });
  };

  const getItem = async () => {
    console.log(window.location);
    const response = await axios(`${url}${window.location.search}`);
    const action = {
      type: "GET_ITEMS",
      payload: response.data,
    };
    dispatch(action);
  };

  const searchItems = async (valueToSearch) => {
    const response = await axios.get(`${url}?q=${valueToSearch}`);
    const action = {
      type: "FILTERED_ITEMS",
      payload: response.data,
    };
    dispatch(action);
  };
  const sortItems = async (valueToSearch) => {
    const response = await axios.get(
      `${url}?_sort=${valueToSearch}&_order=asc`
    );
    const action = {
      type: "SORTED_ITEMS",
      payload: response.data,
    };
    dispatch(action);
  };

  const getItemsToEdit = async (id) => {
    const response = await axios(`${url}/${id}`);
    const action = {
      type: "GET_ITEMS_TO_EDIT",
      payload: response.data,
    };
    dispatch(action);
  };

  const saveEditedItem = async (editedItem) => {
    await axios.patch(`${url}/${editedItem.id}`, editedItem);
  };

  const deleteItem = async (id) => {
    await axios.delete(`${url}/${id}`);
    getItem();
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const items = state.products.slice(indexOfFirstItem, indexOfLastItem);

  const totalCount = state.products.length;

  const handlePagination = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <adminContext.Provider
      value={{
        addItem,
        getItem,
        getItemsToEdit,
        saveEditedItem,
        deleteItem,
        handlePagination,
        searchItems,
        sortItems,
        items,
        totalCount: totalCount,
        itemsPerPage: itemsPerPage,
        products: state.products,
        itemsToEdit: state.itemsToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContext;
