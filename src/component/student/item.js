import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  navbar,
  Navbar,
  Dropdown
} 
from './NavbarElements';



function Item() {
  const [studentState, setStudentState] = useState([]);

  useEffect(() => {
    let studentState = [
      { id: 1, itemcode: "8888", itemname: "Burger Pizza Veg", UOM: "Numbers", currentquantity: "-26", openingstock: "0", openingvalue: "0.00" },
      { id: 2, itemcode: "Item0001", itemname: "cold", UOM: "Bags", currentquantity: "-20", openingstock: "0", openingvalue: "0.00" },
      { id: 3, itemcode: "0010", itemname: "cold", UOM: "Cartons", currentquantity: "-5", openingstock: "0", openingvalue: "0.00" },
      { id: 4, itemcode: "Item01", itemname: "cold", UOM: "Bags", currentquantity: "-13", openingstock: "0", openingvalue: "0.00" },
      { id: 6, itemcode: "", itemname: "", UOM: "", currentquantity: "0", openingstock: "0", openingvalue: "0.00" },
    ];

    setStudentState(
      studentState.map(d => {
        return {
          select: false,
          id: d.id,
          itemcode: d.itemcode,
          itemname: d.itemname,
          UOM: d.UOM,
          currentquantity: d.currentquantity,
          openingstock: d.openingstock,
          openingvalue: d.openingvalue,

        };
      })
    );
  }, []);

  return (

    <div className="container">
   
  
      <Link to="/add">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
        >
          Add Item
        </button>
      </Link>
      <h1>Opening Stock
      </h1>
      <table className="table table-bordered">

        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">Item Id</th>
            <th scope="col">Item Name</th>
            <th scope="col">UOM</th>
            <th scope="col">Current Quantity</th>
            <th scope="col">Opening Stock</th>
            <th scope="col">Opening Value</th>
          </tr>
        </thead>
        <tbody>
          {studentState.map((d, i) => (
            <tr key={d.id}>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
              </th>
              <td>{d.itemcode}</td>
              <td>{d.itemname}</td>
              <td>{d.UOM}</td>
              <td>{d.currentquantity}</td>
              <td>{d.openingstock}</td>
              <td>{d.openingvalue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <center><button className="btn btn-primary btn-sm float-right my-3">Save</button></center>
      <br></br>

      <br></br>
      <br></br>
      <h1>Defined Opening Stock</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">Item Id</th>
            <th scope="col">Item Name</th>
            <th scope="col">UOM</th>
            <th scope="col">Current Quantity</th>
            <th scope="col">Opening Stock</th>
            <th scope="col">Opening Value</th>
          </tr>
        </thead>
        <tbody>
          {studentState.map((d, i) => (
            <tr key={d.id}>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
              </th>
              <td>{d.itemcode}</td>
              <td>{d.itemname}</td>
              <td>{d.UOM}</td>
              <td>{d.currentquantity}</td>
              <td>{d.openingstock}</td>
              <td>{d.openingvalue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
}

export default Item;
