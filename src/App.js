import React, { useState,useEffect } from "react";
import Navbar2 from "./components/navbar/Navbar2";
import Home from "./pages/home/Home";
import CreateContact from "./pages/createContact/CreateContact";
import { db } from "./Database";
import User from "./pages/user/User";
import "./App.css"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const App = () => {
  // const [newName, setnewName] = useState("user");
  // const [newcontact, setnewcontact] = useState("0000000");
  // const [contacts, setContacts] = useState([]);
  // const contactsCollectionref = collection(db, "contacts");

  // const createC = async () => {
  //   await addDoc(contactsCollectionref, {
  //     name: newName,
  //     contacts: Number(newcontact),
  //   });
  // };

  // const updatecontact = async (id, contact) => {
  //   const contactdoc = doc(db, "contact", id);
  //   const newfields = { contact };
  //   await updateDoc(contactdoc, newfields);
  // };
  // const deleteContact = async (id) => {
  //   const userDoc = doc(db, "contact", id);
  //   await deleteDoc(userDoc);
  // };

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(contactsCollectionref, (snapshot) => {
  //     const updatedcontacts = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setContacts(updatedcontacts);
  //   });

  //   // Clean up the listener when the component unmounts
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const [login, setlogin] = useState(false);
  const [username, setusername] = useState("");
  const [pg, setpg] = useState(1);
  function MyComponent(option) {
    let componentToRender;
    // console.log(option)
    switch (option) {
      case 1:
        componentToRender = <Home  />;
        break;
      case 2:
        componentToRender = <CreateContact  setpg={setpg}/>;
        break;
      // case 4:
      //   componentToRender = <User username={username} />;
      //   break;
    }
    return componentToRender;
  }
  const myc = (
    <div className="App flex">
      <Navbar2 setpg={setpg} username={username} />
      {MyComponent(pg)}
      <footer>copyright@amansharma</footer>
    </div>
  );

  return <div>
    {myc}
    
  </div>;
};

export default App;
