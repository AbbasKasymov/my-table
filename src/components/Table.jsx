import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { adminContext } from "../context/AdminContext";

const Table = ({ products }) => {
  const data = React.useContext(adminContext);
  const { deleteItem } = data;

  return (
    <MDBContainer>
      <div style={{ marginTop: "20px" }}>
        <h2 className="text-center">My Table</h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead className="table-success">
                <tr>
                  <th>Дата</th>
                  <th>Название</th>
                  <th>Количество</th>
                  <th>Расстояние </th>
                  <th></th>
                  <th></th>
                </tr>
              </MDBTableHead>

              {products.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No Data
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                products.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.distance}</td>
                      <td>
                        <MDBBtn
                          type="button"
                          onClick={() => deleteItem(item.id)}
                        >
                          Delete
                        </MDBBtn>
                      </td>
                      <td>
                        <MDBBtn>Edit</MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default Table;
