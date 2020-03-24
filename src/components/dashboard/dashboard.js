import React, { Component} from "react";
import ReactDOM from "react-dom";
import orders from "../../orders";
import List_edit from "../list_edit";
import Order_form from "../order_form";
import "../order_form.css"

class Dashboard extends Component {
    state = {  orderBank:[] ,current_id:"",current_name:"",current_product:"",current_quantity:0,current_email:"",addor:0};

    getOrders = () => {
      orders().then(id => {
        this.setState({
          orderBank:id,
          isEdit:false
        });
      });
    };

    removeByAttr(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               arr.splice(i,1);
    
           }
        }
        return arr;
    }
   
    componentDidMount() {
      this.getOrders();
     
    }
 
    isdelete=(id)=> {
       
      console.log(id);
        const orderBank = this.state.orderBank;
     
        this.removeByAttr(orderBank, 'id', id);  
      
        this.setState({
          orderBank
        });
        
      };
      //new order added
      updateid=(newValue)=>{
         
          const current_id=this.state.current_id;
        this.setState({
          current_id:newValue.target.value
        })
        console.log(current_id);
      }
      updatename=(newValue)=>{

        const current_name=this.state.current_name;
        this.setState({
            
          current_name:newValue.target.value
        })
        console.log(current_name);
      };

   
      updateproduct=(newValue)=>{

        const current_product=this.state.current_product;
        this.setState({
          current_product:newValue.target.value
        })
        console.log(current_product);
      }
      updatequantity=(newValue)=>{

        if(newValue.target.value>0){ 
        const current_quantity=this.state.current_quantity;
        this.setState({
          current_quantity:newValue.target.value
        })
      
        console.log(current_quantity);
      }
      }
      updateemail=(newValue)=>{

        const current_email=this.state.current_email;
        this.setState({
          current_email:newValue.target.value
        })
        console.log(current_email);
      }
      //added order
      addOrder=(evt)=>{
        evt.preventDefault();
        if(this.state.current_quantity>0&&this.state.current_id.length>0&&
          this.state.current_name.length>0&&this.state.current_email.length>0
          &&this.state.current_product.length>0){ 
        const orderBank = this.state.orderBank;
        const current_id = this.state.current_id;
        const current_name = this.state.current_name;
        const current_email = this.state.current_email;
        const current_product = this.state.current_product;
        const current_quantity = this.state.current_quantity;
        orderBank.push({
            
             id : this.state.current_id,
             customer_name : this.state.current_name,
             customer_email : this.state.current_email,
             product : this.state.current_product,
             quantity : this.state.current_quantity,
             isEdit:false
        })
        console.log(current_quantity);
        console.log(current_name);
        console.log(current_email);
        console.log(current_product);
        console.log(current_id);
      
        this.setState({
          orderBank,
          current_email:'',
          current_id:'',
          current_product:'',
          current_quantity:0,
          current_name:'',
          addor:0
          
        })
      }
      else{
        alert("Quantity must be greater than 0 and all inputs are required1");
      }
      
      
      }
      //Editing
      indx(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               return i;
    
           }
        }
       // return arr;
    }



      Edit=(id)=> {
       
        console.log(id);
          const orderBank = this.state.orderBank;
       
          const k=this.indx(orderBank, 'id', id);  
        orderBank[k].isEdit=true;
          this.setState({
            orderBank,
            current_id:orderBank[k].id,
        current_name:orderBank[k].customer_name,
        current_email:orderBank[k].customer_email,
        current_product:orderBank[k].product,
        current_quantity:orderBank[k].quantity
          });

          
        };
        Editing=(evt)=>{
            evt.preventDefault();
            if(this.state.current_quantity>0&&this.state.current_id.length>0&&
              this.state.current_name.length>0&&this.state.current_email.length>0
              &&this.state.current_product.length>0){ 
            const orderBank = this.state.orderBank;
            const k=this.indx(orderBank, 'id', this.state.current_id);  
            this.state.orderBank[k].id = this.state.current_id;
            this.state.orderBank[k].customer_name = this.state.current_name;
            this.state.orderBank[k].customer_email = this.state.current_email;
            this.state.orderBank[k].product = this.state.current_product;
            this.state.orderBank[k].quantity = this.state.current_quantity;
            this.state.orderBank[k].isEdit=false;
      
            this.setState({
                orderBank,
                current_email:'',
                current_id:'',
                current_product:'',
                current_quantity:0,
                current_name:''
              
              });
          
          console.log(orderBank[k].customer_name)
            }
            else{
              alert("Quantity must be greater than 0 and all inputs are required2");
            }
          
          }
          add_or=()=>{
            this.setState({
              addor:1
            })
          }



  
  
    render() {

      return (
       <div>
      
    
       <button className="button" onClick={this.add_or}>add order</button>
         {this.state.addor==1 ? 
        <Order_form 
        
        current_id={this.state.current_id}
        current_name={this.state.current_name}
        current_email={this.state.current_email}
        current_product={this.state.current_product}
        current_quantity={this.state.current_quantity}
        updateid={this.updateid}
        updateemail={this.updateemail}
        updatename={this.updatename}
        updateproduct={this.updateproduct}
        updatequantity={this.updatequantity}

        
        addOrder={this.addOrder}
 
        />:null
         }
        
        <div><h1>Total list size is {this.state.orderBank.length}</h1>
        <h2>The new added order will be at bottom of page</h2>
        </div>
        
        
          {
            this.state.orderBank.map(
            
               
              ({ customer_email,id,customer_name,isdelete,isEdit,Edit,product,quantity}) => (
               
               <List_edit
                customer_email={customer_email}
                id= {id} 
                product={product}
                quantity={quantity}
                isEdit={isEdit}
                customer_name={customer_name}
                isdelete={this.isdelete}
                Edit={this.Edit}
                current_id={this.state.current_id}
        current_name={this.state.current_name}
        current_email={this.state.current_email}
        current_product={this.state.current_product}
        current_quantity={this.state.current_quantity}
        updateid={this.updateid}
        updateemail={this.updateemail}
        updatename={this.updatename}
        updateproduct={this.updateproduct}
        updatequantity={this.updatequantity}

        
        Editing={this.Editing}
             />
         
              )
          
          
          
            )
           
            }

         
        </div>
      );
     
    }
  }
export default Dashboard;
