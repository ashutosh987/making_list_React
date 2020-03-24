import React, {useState} from "react";
import { render } from "react-dom";
import "./order_form.css";


const List_edit = ({id,customer_email,customer_name,product,quantity,isdelete,isEdit,Edit,
    current_name,
    current_email,
    current_product,
    current_quantity,

    updateid,
    updatename,
    updateemail,
    updateproduct,
    updatequantity,
    Editing


}) => {
   


   
  return (
    
      <div >

     
     
      {isEdit ? <form onSubmit={Editing}>
		  
          <input type="text" 
            value={id} 
            
		   />

           <input type="text" 
		    value={current_name}
		    onChange={updatename}
		   />
        <input type="text" 
        value={current_email}
       
		    onChange={updateemail}
		   />
          
          <select id="country" name="country"  onChange={updateproduct}>
          <option value={current_product}>{current_product}</option>
      {current_product=="Product 1"? null:<option value="Product 1">Product 1</option>}
      {current_product=="Product 2"? null:<option value="Product 2">Product 2</option>}
      {current_product=="Product 3"? null:<option value="Product 3">Product 3</option>}
    </select>
       {/*     <input type="text" 
		    value={current_product}
		    onChange={updateproduct}
		   />
  */}
            <input type="number" 
		    value={current_quantity}
		    onChange={updatequantity}
		   />
           
		   <button type="submit">Submit</button>		
		</form>: 
    
    
    
    
    <div > 
      <div class="card">

<div class="container">
 

    <h2>Customer_name : {customer_name}</h2>
    <h2>customer_email : {customer_email}</h2>
    <h2>product : {product}</h2>
    <h2>quantity : {quantity}</h2>
    <button className="button"
          onClick={() => {
          
            isdelete(id);
          }}
        >
          Delete
        </button>
        <button className="buttoon"
          onClick={() => {
          
            Edit(id);
          }}
        >
          Edit
        </button>
        </div>
        </div>
        </div>}
      
       
        
    </div>
  );
        
};

export default List_edit;
