import React, {useState} from "react";
import { render } from "react-dom";
import "./order_form.css";

const Order_form = ({ current_id,
    current_name,
    current_email,
    current_product,
    current_quantity,

    updateid,
    updatename,
    updateemail,
    updateproduct,
    updatequantity,
    addOrder}) =>
     {
   


   
  return (
    <div>
    <form className="container" onSubmit={addOrder}>
    <label for="fname">Unique ID</label>
          <input type="text" 
        value={current_id}
        placeholder="Unique Id"
		    onChange={updateid}
		   />
        <label for="fname">Customer Name</label>
           <input type="text" 
        value={current_name}
        placeholder="Customer Name"
		    onChange={updatename}
		   />
          
          <label for="fname">Customer Email</label>
           <input type="text" 
        value={current_email}
        placeholder="Customer Email"
		    onChange={updateemail}
		   />

      <label for="fname">Product Name</label>
      <select id="country" name="country"  onChange={updateproduct}>
      <option value={current_product}>{current_product}</option>
     <option value="Product 1">Product 1</option>
      <option value="Product 2">Product 2</option>
     <option value="Product 3">Product 3</option>
    </select>
           <label for="fname">Quantity</label>
          <input type="number" 
        value={current_quantity}
        placeholder="Quantity"
		    onChange={updatequantity}
		   />
           
		   <button type="submit">Submit</button>		
		</form>
    </div>
  );
        
};

export default Order_form;
