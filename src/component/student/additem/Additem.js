import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddStudent(props) {
  const onSave = e => {
    let itemcode = e.target[0].value;
    let itemname = e.target[1].value;
    let UOM = e.target[2].value;
    let currentquantity = e.target[3].value;
    let openingstock = e.target[4].value;
    let openingvalue = e.target[5].value;
    let data = {
      itemcode,
      itemname,
      UOM,
      currentquantity,
      openingstock,
      openingvalue 
    };
    addStudent(data);
  };

  const addStudent = data => {
    axios
      .post("http://localhost:3000/items", data)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(er => alert(er));
  };
  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSave(e);
        }}
      >
        <div className="form-group">
          <label>Item Id</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Item Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>UOM</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Current Quantity</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Opening Stock</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Opening Value</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddStudent);
