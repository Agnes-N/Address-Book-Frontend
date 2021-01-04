import  React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Row, Col } from "react-bootstrap";

import "./Home.scss"
import Navbars from "../NavBar/Navbar.jsx";
import {getContacts} from "../../Redux/Actions/Contact/ContactAction";

const Home = ( ) => {
const {allContacts} = useSelector((state)=>state.contact);
const [contacts, setContacts] = useState([]);
const dispatch = useDispatch();

React.useEffect(()=>{
  dispatch(getContacts());
}, []);

React.useEffect(()=>{
  
  if(allContacts.length ) {   
    setContacts(allContacts);
  }
}, [allContacts]);

const redirectToViewConatct = (id) => {
  console.log('current contact=====', id);
  window.location.replace(`/contacts/${id}`);
}
  return (
    <div>
      <Navbars />
      <Row>
        <Col />
        <Col>
        <div className="contacts">
          {allContacts.length?  (<div>{ contacts.map(contact => (
            <ul key={contact.id}><li ><a  onClick={()=>redirectToViewConatct(contact.id)} >{contact.names}: {contact.phoneNumber}</a></li>
            </ul>    
            )
          )}</div> ) : <h1>No contact available</h1>}
        </div>
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default Home;
