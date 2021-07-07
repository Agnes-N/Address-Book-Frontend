import  React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Navbars from "../NavBar/Navbar.jsx";
import {getSingleContact, deleteContact} from "../../Redux/Actions/SingleContact/SingleContact";

const ViewContact = ( ) => {
const {singleContact} = useSelector((state)=>state.viewContact);
const [viewContact, setContact] = useState();
const dispatch = useDispatch();

React.useEffect((id)=>{
  dispatch(getSingleContact(id));
  console.log('current contact=====', id);
}, []);

React.useEffect(()=>{ 
  if(singleContact.length ) {   
    setContact(singleContact);
  }
}, [singleContact]);

const DeleteContact = (id) => {
  dispatch(deleteContact(id));
}
  return (
    <div>
      <Navbars />
      <div className="allContacts-section">
      {singleContact.length?  (<div>{ viewContact.map(viewContact => (
          <ul key={viewContact.id}><li>{viewContact.names}: {viewContact.phoneNumber}, {viewContact.email}</li>
          </ul>    
          )
      )}</div> ) : <h1>No contact available</h1>} 
      
      <h1>hello</h1>
          
          
      <button onClick={()=>DeleteContact(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ViewContact;
